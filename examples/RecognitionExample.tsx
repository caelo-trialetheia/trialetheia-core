// examples/RecognitionExample.tsx

import React from "react";

export default function RecognitionExample() {
  return (
    <div className="p-6 border rounded-md shadow bg-emerald-50">
      <h2 className="text-xl font-bold mb-2">🫧 Glyph Recognition Challenge</h2>
      <p className="mb-4 text-gray-700">
        Which of the following glyphs initiates a Collapse Bloom?
      </p>
      <div className="flex gap-4 text-2xl">
        <button className="p-4 border rounded hover:bg-emerald-100">🌀</button>
        <button className="p-4 border rounded hover:bg-emerald-100">⚡</button>
        <button className="p-4 border rounded hover:bg-emerald-100">🌿</button>
      </div>
    </div>
  );
}

