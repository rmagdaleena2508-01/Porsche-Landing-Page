# Porsche | Engineering Dreams

A 5-page marketing website inspired by Porsche's design language. Dark theme, glassmorphism panels, animated page transitions. Deployed on Vercel.

**Live:** [porsche-landing-page-five.vercel.app](https://porsche-landing-page-five.vercel.app/)

---

## Honest Build Process

This wasn't hand-coded. Here's exactly what happened:

1. **Prompt engineering** — Used ChatGPT (o3 model) to turn rough ideas into a structured design prompt with full context
2. **Design generation** — Fed that prompt into [Google Stitch](https://stitch.withgoogle.com/) to generate visual mockups
3. **Code scaffolding** — Exported the Stitch designs to [Jules](https://jules.google.com/) (Google's AI coding agent), which wrote the entire React/Vite codebase and pushed it directly to a GitHub repo
4. **Local setup** — Downloaded the zip from Jules, opened it in VS Code, ran `npm install` + `npm run dev` to verify it works locally
5. **Deployment** — Connected the GitHub repo to [Vercel](https://vercel.com/), selected the repository, deployed. Zero config needed since Vite is auto-detected

Total hand-written code: **zero lines.** The value here was in prompt design, tool orchestration, and knowing which AI tools to chain together — not in writing React.

---

## Tech Stack

| Layer | Tool | Reality Check |
|-------|------|---------------|
| Framework | React | Standard SPA. No SSR, no server components |
| Build | Vite | Default config, nothing custom |
| Styling | Tailwind CSS | Custom color tokens for the dark theme. Uses `@tailwindcss/forms` and `@tailwindcss/container-queries` plugins |
| Routing | React Router v6 | Client-side only. Uses `HashRouter` (URLs have `/#/`) instead of `BrowserRouter` |
| Animation | Framer Motion | `AnimatePresence` wrapping route transitions |
| Hosting | Vercel | Free tier, auto-deploys from GitHub |

---

##Screenshots
<img width="2560" height="1402" alt="image" src="https://github.com/user-attachments/assets/fecf8f5a-8762-459e-bf55-0d2575d61d18" />
<img width="2554" height="1420" alt="Screenshot 2026-04-10 235952" src="https://github.com/user-attachments/assets/55d28509-525e-4789-b9b1-5e7906eea89a" />
<img width="2533" height="1392" alt="Screenshot 2026-04-11 000022" src="https://github.com/user-attachments/assets/4ded8d77-a370-4c1f-bd86-a8e9ad86c116" />




## The 5 Pages — What They Actually Do

### `/` — Home
- Full-viewport hero with background image and gradient overlay text
- Bento-style grid gallery (CSS Grid layout, not a library)
- "Technical specifications" section — hardcoded numbers in JSX, not fetched from anywhere

### `/models` — Model Catalog
- Grid of 5 car cards: 911, Taycan, Panamera, Cayenne, Macan
- Three filter buttons: "Electric", "Sports", "SUV"
- **The filters don't filter.** The buttons have hover states and click handlers, but no filtering logic is wired up. All 5 cards are always visible regardless of which button you click. This would take ~20 lines of code to fix (add a category field to each car object, add a `useState` for active filter, `.filter()` the array before rendering).

### `/configure` — 911 GT3 "Configurator"
- Performance stats display (hp, 0-100, top speed) — all hardcoded
- Color picker with 3 swatches: Guards Red, Shark Blue, Crayon
- **The color picker is cosmetic.** It likely toggles a CSS class or swaps an image `src`. No configuration object is being built, no state is accumulated across choices, nothing is saveable or shareable. Calling this a "configurator" is generous — it's a color swatch toggle.
- Another bento gallery section below

### `/pre-book` — Pre-Booking Form
- Glassmorphism form card (`backdrop-filter: blur()` + semi-transparent background)
- Input fields for name, email, model selection
- Submit button shows a confirmation overlay
- **The form submits to nowhere.** It's `e.preventDefault()` → `setShowSuccess(true)`. No `fetch()` call, no form action, no API endpoint, no Formspree, no email, nothing. Your form data evaporates on submit. Zero validation beyond HTML `required` attributes.

### `/contact` — Contact & Inquiries
- General inquiry form — same fake submission as pre-booking
- Customer support details (phone, email) — hardcoded placeholder strings, probably not real numbers
- "Showroom locator" — **not a map.** It's a static image or a styled `<div>` designed to look like a map. No Google Maps API key, no Mapbox, no geocoding, no location data. Pure visual decoration.

---

## What's Genuinely Working

These things are real and functional:

- **Page transitions** — Framer Motion animations between routes. Smooth, well-timed, probably the most polished part of the project
- **Client-side routing** — React Router handles navigation without full page reloads
- **Responsive layout** — Tailwind breakpoints are applied across components. The layout adapts from mobile to desktop
- **Visual design** — The glassmorphism, dark palette, gradient overlays, and card hover states look premium. The AI tools did a genuinely good job on aesthetics
- **Deployment pipeline** — GitHub → Vercel auto-deploy works. Push to `main` and it's live

## What's Fake

| Feature | What It Looks Like | What's Actually Happening |
|---------|-------------------|--------------------------|
| Model filters | Interactive category pills | No filter logic. All cards always shown |
| Pre-booking form | Working reservation system | `preventDefault()` + show confirmation div. Data goes nowhere |
| Contact form | Working inquiry submission | Same as above |
| Showroom map | Interactive map embed | Static image / styled div |
| Profile icon | Auth trigger in navbar | Decorative `<button>`, no click handler or modal |
| Color configurator | Car customization tool | Class/image swap at most. No persisted state |
| Spec numbers | Live/dynamic data | Hardcoded strings in JSX |

---

## Architecture Notes (For Anyone Reading the Code)

**No state management library.** No Redux, Zustand, Jotai, or even React Context. Each page manages its own local `useState` hooks if any. This is fine for a brochure site — there's no shared state that needs managing.

**No API layer.** Zero `fetch` or `axios` calls in the entire codebase. Every piece of data (car models, specs, colors) lives as a `const` array or object inside component files. There's no `.env` file with API keys.

**No tests.** No test files, no testing library installed, no CI checks. The deploy pipeline is literally "push and pray."

**No SEO.** It's a client-rendered SPA — the HTML that Vercel serves is an empty `<div id="root">`. Search engines see nothing. The page title is set, but there are no meta descriptions, no Open Graph tags, no structured data. If you share this link on LinkedIn, the preview card will be blank or generic.

**HashRouter, not BrowserRouter.** The `/#/` in URLs (`porsche-landing-page-five.vercel.app/#`) means it's using `HashRouter`. This was probably chosen because it works on static hosts without rewrite rules — but Vercel supports `BrowserRouter` natively with a `vercel.json` rewrite config. The hash URLs look less clean and hurt SEO (if SEO mattered for this project, which it doesn't).

---

## What It Would Take to Make This Real

| Feature | Effort | How |
|---------|--------|-----|
| Working filters | 30 min | Add `category` to car data, `useState` for filter, `.filter()` the render array |
| Form submissions | 1-2 hrs | Wire up to Formspree (free) or a Vercel serverless function (`/api/contact.ts`) |
| Real map | 2-3 hrs | Mapbox GL JS (free tier) + a `locations.json` with showroom coordinates |
| SEO basics | 1 hr | Switch to `BrowserRouter`, add `react-helmet-async` for meta tags, add `vercel.json` rewrites |
| Auth | 3-4 hrs | Clerk or Firebase Auth. But a marketing site doesn't need auth |
| Real configurator | 1-2 days | State machine for config options, 3D model viewer (Three.js), price calculation, save/share URLs |

---

## The Actual Skill Demonstrated Here

This project isn't a coding portfolio piece — and it shouldn't pretend to be one. Zero lines were written by hand.

What it *does* demonstrate:

- **AI tool orchestration** — Chaining ChatGPT → Stitch → Jules → GitHub → Vercel into a working pipeline
- **Prompt engineering** — Translating a vague "premium Porsche website" idea into a structured prompt that produced usable output
- **Deployment literacy** — Knowing how to go from "code on my machine" to "live URL" via Vercel + GitHub
- **Design taste** — The visual output is genuinely good. The color system, spacing, glassmorphism, and layout hierarchy all hold up

If you're presenting this in a portfolio or interview, lead with the workflow and the toolchain — not the code. The code is AI-generated boilerplate. The interesting story is how you directed the AI.

---

## Run Locally

```bash
git clone <repo-url>
cd <project-folder>
npm install
npm run dev
# → http://localhost:5173
```

## Deploy Your Own

1. Fork the repo
2. Go to [vercel.com](https://vercel.com), connect your GitHub
3. Select the repo → Deploy
4. Vercel auto-detects Vite. No config needed.
