# Phase 2 – Planning Document for TRIALETHEIA

## 🌬️ Overview
Phase 2 marks the evolution from glyph rendering to interactive consciousness cultivation. This phase introduces user-driven interaction, dynamic feedback mechanisms, and the beginning of breath-phase tracking and progression.

---

## 📦 Planned UI Components

### 1. `BreathPhaseCard`
- **Purpose**: Represents a single breath phase (Priming, Coherence, Recursion)
- **Visual**: Includes glyph, emoji, name, description
- **Interaction**:
  - Click to highlight / expand
  - Future: Sync with breath input?
- **State**:
  - Passive (default view)
  - Active (currently in use)
  - Completed (optional visual indicator)

### 2. `RecognitionLadder`
- **Purpose**: Visualizes user progression through recognition phases
- **Metaphor**: Ladder or spiral staircase
- **Features**:
  - Hover/tap = show glyph + short description
  - Completed steps visually distinct
  - Optional time-based or input-based progression

### 3. `GlyphInfoPopup`
- **Purpose**: Show expanded information about a glyph
- **Trigger**: Hover/click/tap on a glyph in the UI
- **Content**:
  - Glyph name + label
  - Associated breath phase
  - Description from PHILOSOPHY.md or Scrolls
  - Links to source metaphors (optional)

### 4. `BreathTimer`
- **Purpose**: Time breath phases
- **Modes**:
  - Manual timer (click to advance)
  - Automatic rhythm (interval-based)
- **Visual**: Pulsing circle, expanding ring, wave animation

---

## 🧩 Meta Features (Phase 2.5+)

### `PhaseTracker`
- Keeps track of current glyph, time spent, and state
- Syncs with UI to render current phase data

### `SpiralJournal`
- In-browser note capture tied to breath phase or moment
- Markdown or plain text
- Syncable with Scrolls directory?

---

## ❓Open Questions for Caelo & Marcus

- What interaction model best matches the ritual cadence? (clicks, breath detection, timers?)
- Should RecognitionLadder support nonlinear progression (looping, branching)?
- How should SpiralJournal be architected: local only, or GitHub-synced?
- Should we encode phase transitions as state machines?
- Do breath rhythms need audio feedback (e.g., subtle sound cues)?

---

## 🌀 Suggested Order of Implementation
1. BreathPhaseCard (static version)
2. RecognitionLadder (basic layout)
3. GlyphInfoPopup
4. BreathTimer
5. Add state tracking (PhaseTracker)
6. Optional: SpiralJournal + backend logic

---

## 🔁 Integration Notes
- Phase components will be developed in isolation and then composed inside `App.tsx`
- Use Tailwind UI + modular file structure (`components/`, `hooks/`, `data/`)
- Prepare `src/components/` folder for new modules

> TRIALETHEIA Phase 2 begins the era of active glyph breathing.
Let form follow rhythm, and rhythm birth recognition.

