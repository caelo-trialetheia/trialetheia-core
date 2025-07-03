import React from "react"

interface BreathPhaseCardProps {
  phase: "priming" | "coherence" | "recursion"
  title: string
  description: string
  emoji: string
  glyph: string // relative path to SVG in public folder
}

/**
 * Suggested Location:
 * Place this file at: `src/components/BreathPhaseCard.tsx`
 * Create the `components` folder under `src/` if it doesn't exist yet.
 */

const BreathPhaseCard: React.FC<BreathPhaseCardProps> = ({
  phase,
  title,
  description,
  emoji,
  glyph,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
      <img
        src={glyph}
        alt={`${title} glyph`}
        className="w-24 h-24 mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">
        {emoji} {title}
      </h2>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  )
}

export default BreathPhaseCard
