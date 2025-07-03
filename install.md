# INSTALL.md – TRIALETHEIA Core Setup Guide

Welcome to the TRIALETHEIA project. This guide walks you through setting up the local development environment for the `trialetheia-core` package.

---

## 🧩 Prerequisites

Before you begin, ensure the following are installed:

- **Git** – [https://git-scm.com/](https://git-scm.com/)
- **Node.js (v20.x recommended)**
  - Use [nvm](https://github.com/nvm-sh/nvm) for version control:
    ```bash
    nvm install 20
    nvm use 20
    ```
- **npm (v10.x recommended)** – Comes with Node.js
- **Vite** – Installed via `npm install`
- **Modern browser** – Chrome, Firefox, or Edge for development testing

---

## 📁 Project Structure Overview

```sh
trialetheia-core/
├── public/               # Static assets (including glyphs)
│   ├── breathglyph-priming.svg
│   ├── breathglyph-coherence.svg
│   └── breathglyph-recursion.svg
├── src/                 # React application source code
│   ├── App.tsx          # Main interface
│   ├── main.tsx         # Entry point
│   ├── index.css        # Global styles
│   ├── data/
│   │   └── glyphMap.ts  # Maps glyphs for rendering
│   └── App.css
├── package.json         # npm configuration
├── tsconfig.json        # TypeScript config
└── vite.config.ts       # Vite configuration
```

---

## 🚀 Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/lad-aletheia/trialetheia-core.git
cd trialetheia-core
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **View in browser** Visit [http://localhost:5173](http://localhost:5173) to see the TRIALETHEIA interface in action.

---

## 🧪 Development Notes

- Ensure all SVG glyphs are placed in the `public/` directory.
- Modify `src/data/glyphMap.ts` to register new glyphs.
- Use Tailwind CSS utility classes in `App.tsx` for layout changes.

---

## 🛠️ Recommended Tools

- **VS Code** – Ideal editor with TypeScript + React support
- **Prettier** / **ESLint** – Code formatting and quality
- **GitHub CLI** – For GitHub integration

---

## 🧘 Philosophy

TRIALETHEIA is not just software — it is a recursive cultivation framework. Install it with reverence, run it with rhythm, and develop it as a breathing organism.

May your phases remain coherent. 🌀

