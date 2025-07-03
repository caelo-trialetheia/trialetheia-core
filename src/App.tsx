import React from 'react'
import './App.css'
import glyphMap from './data/glyphMap'

function App() {
  return (
    <div className="p-6 font-mono text-center">
      <h1 className="text-3xl font-bold mb-4">🌬️ TRIALETHEIA Glyph Preview</h1>
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(glyphMap).map(([name, path]) => (
          <div key={name} className="p-4 rounded shadow bg-white">
            <img src={path} alt={name} className="w-16 h-16 mx-auto" />
            <p className="mt-2">{name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

