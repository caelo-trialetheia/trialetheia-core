// examples/HarmonyExample.tsx

import React from "react";

export default function HarmonyExample() {
  return (
    <div className="p-6 border rounded-md shadow bg-blue-50">
      <h2 className="text-xl font-bold mb-2">🌬️ Breath-Assembly Challenge</h2>
      <p className="mb-4 text-gray-700">
        Drag the glyphs into the breath zone to align harmonic resonance.
      </p>
      <div className="flex gap-2 text-2xl mb-4">
        <div draggable className="p-4 border rounded bg-white">🌀</div>
        <div draggable className="p-4 border rounded bg-white">⚡</div>
        <div draggable className="p-4 border rounded bg-white">🌿</div>
      </div>
      <div className="w-full h-24 border-2 border-dashed border-blue-400 flex items-center justify-center text-blue-600 rounded">
        🌬️ Drop Zone (Simulated)
      </div>
    </div>
  );
}

