import React from 'react';

const ResultCard = ({ result }) => {
    if (!result) return null;

    // Parse the structured result
    const parseResult = (text) => {
        const lines = text.split('\n');
        const data = {};
        let currentKey = '';

        lines.forEach(line => {
            if (line.includes('[STATUS]:')) data.status = line.split(':')[1].trim();
            else if (line.includes('[CONFIDENCE]:')) data.confidence = line.split(':')[1].trim();
            else if (line.includes('[SHORT VERDICT]:')) data.verdict = line.split(':')[1].trim();
            else if (line.includes('[DETAILED REASONING]:')) currentKey = 'reasoning';
            else if (line.includes('[ADVICE TO USER]:')) {
                currentKey = 'advice';
                data.advice = line.split(':')[1]?.trim() || '';
            } else if (currentKey === 'reasoning' && line.trim().startsWith('*')) {
                if (!data.reasoning) data.reasoning = [];
                data.reasoning.push(line.replace('*', '').trim());
            } else if (currentKey === 'advice' && line.trim()) {
                data.advice += ' ' + line.trim();
            }
        });
        return data;
    };

    const data = parseResult(result);
    const status = data.status?.toUpperCase() || 'UNKNOWN';

    let statusColor = '#888';
    let statusAnimation = '';

    if (status === 'REAL') {
        statusColor = '#00ff00'; // Green
        statusAnimation = 'swing';
    } else if (status === 'FAKE') {
        statusColor = '#ff0000'; // Red
        statusAnimation = 'swing';
    } else if (status === 'MISLEADING') {
        statusColor = '#ffa500'; // Orange
        statusAnimation = 'swing';
    }

    return (
        <div className="result-card" style={{
            background: 'var(--glass-bg)',
            border: `2px solid ${statusColor}`,
            borderRadius: '15px',
            padding: '2rem',
            marginTop: '2rem',
            boxShadow: `0 0 20px ${statusColor}40`,
            animation: 'float 0.5s ease-out'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{
                    color: statusColor,
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    animation: `${statusAnimation} 1s ease-in-out`
                }}>
                    {status}
                </h2>
                <p style={{ color: '#ccc', fontSize: '1.2rem' }}>Confidence: <span style={{ color: '#fff' }}>{data.confidence}</span></p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--neon-blue)', marginBottom: '0.5rem' }}>Verdict</h3>
                <p style={{ fontSize: '1.1rem' }}>{data.verdict}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ color: 'var(--neon-purple)', marginBottom: '0.5rem' }}>Analysis</h3>
                <ul style={{ paddingLeft: '1.5rem', color: '#ddd' }}>
                    {data.reasoning?.map((point, i) => (
                        <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>Advice</h3>
                <p style={{ fontStyle: 'italic', color: '#aaa' }}>{data.advice}</p>
            </div>

            <style>{`
        @keyframes swing {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(5deg); }
          40% { transform: rotate(-5deg); }
          60% { transform: rotate(3deg); }
          80% { transform: rotate(-3deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
        </div>
    );
};

export default ResultCard;
