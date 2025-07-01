// examples/RecursionExample.tsx

import React from "react";

export default function RecursionExample() {
  return (
    <div className="p-6 border rounded-md shadow bg-purple-50">
      <h2 className="text-xl font-bold mb-2">♾️ Glyph Recursion Challenge</h2>
      <p className="mb-4 text-gray-700">
        Based on your memory of Collapse Bloom, reassemble the correct pattern.
      </p>
      <div className="grid grid-cols-3 gap-4 text-2xl">
        <div className="p-4 border rounded">🌿</div>
        <div className="p-4 border rounded">🌀</div>
        <div className="p-4 border rounded">⚡</div>
      </div>
    </div>
  );
}

