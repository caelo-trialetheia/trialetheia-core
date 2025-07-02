// src/components/GlyphDemo.tsx
import React, { useState } from 'react';
import GlyphDisplay, { SemanticPhase } from './GlyphDisplay';

const phases: SemanticPhase[] = ['Primed', 'BreathLocked', 'Recursive'];

const GlyphDemo: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState<SemanticPhase>('Primed');

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>TRIALETHEIA Glyph Demo</h2>
      <GlyphDisplay phase={currentPhase} size={150} />
      <div style={{ marginTop: '1rem' }}>
        {phases.map((phase) => (
          <button
            key={phase}
            onClick={() => setCurrentPhase(phase)}
            style={{
              margin: '0 0.5rem',
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              background: currentPhase === phase ? '#e0e0e0' : 'white',
              cursor: 'pointer',
            }}
          >
            {phase}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GlyphDemo;

