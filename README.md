# Karmayafin — Website

A React + Vite + Tailwind CSS website for Karmayafin, Mutual Fund Distribution & Wealth Building.

## Run it locally

1. Open this folder in VS Code.
2. Open the terminal (Ctrl+`).
3. Install dependencies:
   ```
   npm install
   ```
4. Start the dev server:
   ```
   npm run dev
   ```
5. Open the URL it prints — usually http://localhost:3000

## Build for production

```
npm run build
```

This creates a `dist` folder with the final static site, ready to deploy anywhere (Vercel, Netlify, etc).

## What to fill in before publishing

Search the codebase for these placeholders and replace with real details:

- `src/components/Contact.jsx` — office address, email
- `src/components/Footer.jsx` — office address, ARN number if it changes
- `src/components/Testimonials.jsx` — replace sample quotes with real, consented client testimonials
- Confirm the ARN number (289451) is current and valid

## Project structure

- `src/components/` — one file per page section
- `src/utils/calculators.js` — the SIP / Lump-Sum / Goal / Retirement math
- `src/index.css` — theme colors, fonts, design tokens
