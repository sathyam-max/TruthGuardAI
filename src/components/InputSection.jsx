import React, { useState } from 'react';
import ResultCard from './ResultCard';

const InputSection = () => {
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleAnalyze = async () => {
        console.log("Analyze button clicked"); // Debug log

        if (!inputText.trim()) {
            alert("Please enter some text to analyze.");
            return;
        }

        setLoading(true);
        setResult(null);
        console.log("Sending request to backend..."); // Debug log

        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: inputText }),
            });

            console.log("Response received:", response.status); // Debug log

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();
            console.log("Data received:", data); // Debug log

            if (data.result) {
                setResult(data.result);
            }
        } catch (error) {
            console.error("Error during analysis:", error);
            alert(`Analysis failed: ${error.message}. \n\nMake sure the backend server is running on port 5000.`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="analyze-section" style={{ width: '100%', maxWidth: '800px', margin: '2rem auto' }}>
            <div style={{
                background: 'var(--glass-bg)',
                padding: '2rem',
                borderRadius: '20px',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 0 30px rgba(0,0,0,0.5)'
            }}>
                <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Paste news, forwarded message, or headline here..."
                    style={{
                        width: '100%',
                        height: '150px',
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid var(--neon-blue)',
                        borderRadius: '10px',
                        color: '#fff',
                        padding: '1rem',
                        fontSize: '1.1rem',
                        fontFamily: 'inherit',
                        resize: 'vertical',
                        outline: 'none',
                        marginBottom: '1.5rem'
                    }}
                />

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button
                        onClick={handleAnalyze}
                        disabled={loading}
                        style={{
                            background: loading ? '#555' : 'linear-gradient(90deg, var(--neon-blue), var(--neon-purple))',
                            border: 'none',
                            padding: '1rem 3rem',
                            borderRadius: '30px',
                            color: '#fff',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            boxShadow: loading ? 'none' : '0 0 20px rgba(188, 19, 254, 0.5)',
                            transition: 'transform 0.2s',
                            opacity: loading ? 0.7 : 1
                        }}
                        onMouseEnter={(e) => !loading && (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => !loading && (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        {loading ? 'Analyzing...' : 'Analyze Truth'}
                    </button>
                </div>
            </div>

            <ResultCard result={result} />
        </div>
    );
};

export default InputSection;
