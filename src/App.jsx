import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />

      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--glass-border)', color: '#666' }}>
        <p style={{ marginBottom: '0.5rem', fontSize: '1.2rem', color: '#fff' }}>Start Now. Stay Informed. Stay Safe.</p>
        <p>Truth starts with awareness.</p>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#888' }}>Team TruthGuardAI • Created by Sathya, Kamalesh, Dharani, Manikandan</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>© 2025 TruthGuardAI</p>
      </footer>
    </div>
  );
}

export default App;
