// src/components/GlyphDisplay.tsx
import React from 'react';
import glyphMap from '../data/glyphMap';

export type SemanticPhase = 'Primed' | 'BreathLocked' | 'Recursive';

interface GlyphDisplayProps {
  phase: SemanticPhase;
  size?: number;
}

const GlyphDisplay: React.FC<GlyphDisplayProps> = ({ phase, size = 128 }) => {
  const glyphSrc = glyphMap[phase];

  if (!glyphSrc) {
    return <div>Glyph not found for phase: {phase}</div>;
  }

  return (
    <img
      src={glyphSrc}
      alt={`Glyph for ${phase}`}
      width={size}
      height={size}
      style={{ display: 'block', margin: '0 auto' }}
    />
  );
};

export default GlyphDisplay;

