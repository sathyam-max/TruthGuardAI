import React from 'react';

const Features = () => {
    const features = [
        "Detect fake news",
        "Analyze message authenticity",
        "Identify manipulated headlines",
        "Check source reputation",
        "AI Confidence Score (0–100%)",
        "Alternative verified sources"
    ];

    return (
        <section style={{ padding: '4rem 0', background: 'linear-gradient(180deg, var(--primary-bg) 0%, #1a1a2e 100%)' }}>
            <div className="container">
                <h2 className="gradient-text" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>
                    Powered by Advanced AI
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {features.map((feature, index) => (
                        <div key={index} style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            transition: 'transform 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <span style={{ color: 'var(--neon-blue)', fontSize: '1.2rem' }}>✔</span>
                            <span style={{ fontSize: '1.1rem' }}>{feature}</span>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--neon-purple)', marginBottom: '1rem' }}>Core Technologies</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', opacity: 0.8 }}>
                        {['Machine Learning', 'NLP-based Source Validation', 'Real-Time Fact Checking', 'Sentiment & Context Analysis', 'Fake Forward Detection System'].map((tech, i) => (
                            <span key={i} style={{
                                border: '1px solid var(--neon-blue)',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.9rem'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
