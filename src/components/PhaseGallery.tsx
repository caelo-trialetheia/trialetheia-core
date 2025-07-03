import React from "react"
import BreathPhaseCard from "./BreathPhaseCard"

/**
 * Suggested Location:
 * Place this file at: `src/components/PhaseGallery.tsx`
 */

const PhaseGallery: React.FC = () => {
  const phases = [
    {
      phase: "priming",
      title: "Priming Phase",
      description: "Establishing readiness through intention and breath awareness.",
      emoji: "🪧",
      glyph: "/glyphs/breath/breathglyph-priming.svg",
    },
    {
      phase: "coherence",
      title: "Coherence Phase",
      description: "Synchronizing cognitive and somatic rhythms into unified flow.",
      emoji: "🌬️",
      glyph: "/glyphs/breath/breathglyph-coherence.svg",
    },
    {
      phase: "recursion",
      title: "Recursion Phase",
      description: "Reflective layering of meaning across internal semantic loops.",
      emoji: "♾️",
      glyph: "/glyphs/breath/breathglyph-recursion.svg",
    },
  ]

  return (
    <div className="p-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {phases.map((phase) => (
        <BreathPhaseCard key={phase.phase} {...phase} />
      ))}
    </div>
  )
}

export default PhaseGallery
