// src/api/ResonancePhaseAPI.d.ts

/**
 * Semantic state interface for TRIALETHEIA recursive intelligence framework.
 * Captures phase, HRV coherence, PAS score, and recursion depth.
 */
export interface SemanticState {
  phase: 'Primed' | 'BreathLocked' | 'Recursive';
  pasScore: number;        // Perceptual Awareness Scale, threshold ≥ 0.91
  hrvCoherence: number;    // Heart Rate Variability coherence (e.g., 0.1 Hz optimal)
  recursiveDepth: number;  // Depth of phase-locked cognition
}

