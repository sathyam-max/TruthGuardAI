import React from 'react';

const GlobeShield = () => {
    return (
        <div className="globe-container" style={{
            position: 'relative',
            width: '400px',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            perspective: '1000px'
        }}>
            {/* Globe */}
            <div className="globe" style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, #2a2a4a, #000)',
                boxShadow: '0 0 50px rgba(0, 243, 255, 0.2) inset, 0 0 20px rgba(0, 243, 255, 0.4)',
                position: 'absolute',
                overflow: 'hidden',
                animation: 'float 6s ease-in-out infinite'
            }}>
                {/* Grid lines to simulate globe */}
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '200%',
                    height: '100%',
                    background: `
            repeating-linear-gradient(0deg, transparent 0, transparent 48px, rgba(0, 243, 255, 0.1) 49px, rgba(0, 243, 255, 0.1) 50px),
            repeating-linear-gradient(90deg, transparent 0, transparent 48px, rgba(0, 243, 255, 0.1) 49px, rgba(0, 243, 255, 0.1) 50px)
          `,
                    animation: 'spin-globe 20s linear infinite'
                }}></div>
            </div>

            {/* Shield Overlay */}
            <div className="shield" style={{
                position: 'absolute',
                width: '340px',
                height: '380px',
                border: '2px solid rgba(188, 19, 254, 0.5)',
                borderRadius: '50% 50% 50% 50% / 15% 15% 85% 85%', // Shield shape approximation
                boxShadow: '0 0 20px rgba(188, 19, 254, 0.3), inset 0 0 20px rgba(188, 19, 254, 0.1)',
                zIndex: 10,
                animation: 'shield-pulse 4s ease-in-out infinite',
                backdropFilter: 'blur(2px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="var(--neon-purple)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                </svg>
            </div>
        </div>
    );
};

export default GlobeShield;
