import React from 'react';
import Typewriter from './Typewriter';
import GlobeShield from './GlobeShield';
import InputSection from './InputSection';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '40px',
            paddingBottom: '40px'
        }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #0a0a12 100%)',
                zIndex: -1
            }}></div>

            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

                {/* Text Content */}
                <div style={{ flex: '1', minWidth: '300px', paddingRight: '2rem', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.2' }}>
                        Welcome to <br />
                        <span className="gradient-text">TruthGuardAI.</span>
                    </h1>

                    <div style={{ fontSize: '1.5rem', marginBottom: '2rem', height: '3rem' }}>
                        <Typewriter />
                    </div>

                    <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '2rem', maxWidth: '600px' }}>
                        Verify the truth behind headlines, articles, forwarded messages, and online content in seconds.
                        Just paste, upload, or speak — and our AI will analyze credibility.
                    </p>

                    {/* Action Buttons (Visual only for now, can be linked to InputSection focus) */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                        <button className="cta-btn" onClick={() => document.getElementById('analyze-section').scrollIntoView({ behavior: 'smooth' })} style={{
                            background: 'linear-gradient(90deg, var(--neon-blue), var(--neon-purple))',
                            border: 'none',
                            padding: '1rem 2rem',
                            borderRadius: '30px',
                            color: '#fff',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: '0 0 15px rgba(0, 243, 255, 0.4)',
                            transition: 'transform 0.2s'
                        }}>
                            Check News
                        </button>
                    </div>
                </div>

                {/* Visual Content */}
                <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
                    <GlobeShield />
                </div>

            </div>

            {/* Input Section */}
            <InputSection />

        </section>
    );
};

export default Hero;
