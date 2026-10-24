# SAALKOO STORE — Born for Greatness / Concept Preview

Next.js 15 concept catalog for the artist SAALKOO: 15 product concepts in 5 categories.
No prices, cart, checkout, payments or orders (preview only).

## Structure
- `app/page.tsx`   – the page (15 products, filters, music, story, FAQ)
- `app/layout.tsx` – metadata, SEO
- `app/style.css`  – styles
- `app/robots.ts`, `app/sitemap.ts`
- `scripts/check-preview.mjs` – smoke checks (`npm run test:preview`)

## Run
```bash
npm install
npm run test:preview
npm run build
npm run dev   # http://localhost:3000
```

## Deploy (Vercel)
Commit these files to the GitHub repo connected to Vercel (replace old files, delete the old `index.html`, root `page.tsx`/`layout.tsx` and the stray `.zip` files). Vercel detects Next.js automatically. Check the Preview deployment before promoting to production.

## Before launch
Confirm rights to the SAALKOO name, music and images; add privacy/legal notices before enabling any commerce.
