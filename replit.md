# Word Unscrambler

A fast, mobile-first React web app that finds all valid English words from scrambled letters, with definitions on demand.

## Stack

- **React 18** (via Vite)
- **Tailwind CSS v3** for styling
- **Inter** font from Google Fonts
- **Free Dictionary API** (`https://api.dictionaryapi.dev/api/v2/entries/en/{word}`) for definitions — no key required

## Project structure

```
/
├── public/          # Static assets (favicon.svg)
├── src/
│   ├── components/  # React UI components
│   ├── data/        # wordList.js — top ~5000 common English words
│   ├── hooks/       # useDebounce.js
│   ├── utils/       # unscramble.js — core word-finding logic
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css    # Tailwind directives + base styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Running locally / on Replit

```bash
npm install
npm run dev          # starts on port 5000
```

## Deployment (Vercel)

The project is structured as a standard Vite SPA. To deploy:

1. Push to a GitHub repo
2. Import into Vercel
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

No environment variables are required.

## Adding Google AdSense

Ad placement comments (`<!-- AD PLACEHOLDER: ... -->`) are included in:
- `src/App.jsx` — hero / above results
- `src/components/Results.jsx` — top and bottom of results
- `src/components/Footer.jsx` — above footer content

Replace those comments with `<ins class="adsbygoogle">` tags once your AdSense account is approved.

## Core logic

`src/utils/unscramble.js` uses character frequency maps (not brute-force permutations) for O(n) performance:
- Build a frequency map of the input letters
- For each dictionary word, check if all its letters are covered by the available frequency map
- Filter by length and sort (alphabetical / by length / by frequency)

## User preferences

- Dark mode always on (`bg-slate-900`)
- Primary: `#2563eb` (blue), Secondary: `#ef4444` (red)
- Mobile-first responsive design
