# Soma Sekhar Marella — Personal Portfolio

A modern, minimal, light-themed personal portfolio website built with **React** and **Vite**. It is designed to be fast, responsive, recruiter-friendly, and easy to deploy on platforms like **Vercel** or **Netlify**.

---

## Table of contents

1. [What this project is](#what-this-project-is)
2. [Tech stack](#tech-stack)
3. [Features implemented](#features-implemented)
4. [Design decisions](#design-decisions)
5. [Project structure](#project-structure)
6. [Getting started](#getting-started)
7. [Build and preview](#build-and-preview)
8. [Deployment](#deployment)
9. [Customization guide](#customization-guide)
10. [Content overview](#content-overview)

---

## What this project is

This repository contains a **single-page application (SPA)** portfolio that presents:

- A professional introduction (hero with animated role text)
- About, skills, projects, experience, certifications, resume download, and contact sections
- Smooth scrolling navigation, scroll-triggered animations, and a scroll-to-top control
- A clean footer with social links

The codebase is split into **reusable React components**, global styles using **CSS custom properties** (design tokens), and a small **custom hook** for the hero typing effect. No heavy UI framework (Material, Chakra, etc.) was used on purpose—to keep the bundle lean and the design fully controlled.

---

## Tech stack

| Layer | Choice | Why |
|--------|--------|-----|
| **Framework** | React 19 | Component model, ecosystem, hiring familiarity |
| **Build tool** | Vite 8 | Fast dev server, optimized production builds |
| **Language** | TypeScript | Type safety and maintainability |
| **Styling** | Plain CSS (`src/index.css`) | No CSS-in-JS runtime; predictable performance |
| **Animation** | Framer Motion | Declarative scroll/viewport animations and micro-interactions |
| **Icons** | react-icons | Consistent SVG icons (GitHub, LinkedIn, skill brands, etc.) |

**Dev dependencies:** `@vitejs/plugin-react`, TypeScript, React type definitions.

---

## Features implemented

### Navigation

- **Sticky header** that stays at the top while scrolling.
- **Backdrop blur** and a slightly stronger background when the user scrolls (visual separation from content).
- **Smooth scrolling** to section anchors (`#home`, `#about`, `#skills`, etc.) via `scrollIntoView({ behavior: 'smooth' })` and `html { scroll-behavior: smooth; }`.
- On **narrow viewports**, nav links use **horizontal scroll** so every link remains reachable without a complex hamburger implementation.

### Hero

- **Gradient background** (soft blue/lavender radial layers) for depth without clutter.
- **Animated typing effect** that cycles through: *Blockchain Developer* → *Web3 Enthusiast* → *Full Stack Developer* (implemented in `useTypingRoles`).
- **Blinking cursor** next to the typed text.
- Primary and secondary actions (e.g. scroll to About, link to Contact).
- **Social icon links** (GitHub, LinkedIn) with hover states.
- **Scroll-down control** with a subtle vertical float animation.

### Sections (Framer Motion)

- A shared **`Section`** wrapper animates each block **once** when it enters the viewport (`whileInView`), with a slight upward motion and fade-in.

### Cards and interactions

- **Card-based layout** for About, Skills, Projects, Experience, Certifications, Resume, and Contact.
- **Hover feedback**: cards lift slightly and gain a softer shadow; buttons and icon links have transitions.

### Projects

- Each project shows **title**, **description**, **tech stack tags**, and a **GitHub-style** control with GitHub + external-link iconography.
- Project repository URLs are centralized as a **placeholder** constant (profile link) so you can swap in real repo URLs later.

### Resume

- **“Download Resume”** points to **`/resume.pdf`** in the `public` folder so the path works the same in dev and production.
- A **valid placeholder PDF** was added so the download works out of the box; replace it with your real resume file.

### Footer

- Copyright line and **GitHub / LinkedIn** links.

### Scroll to top

- A **floating circular button** appears after the user scrolls down (~420px), with Framer Motion **enter/exit** animation.

---

## Design decisions

- **Light theme** with a **soft blue** primary accent (`#3b82f6` and related tokens in `:root`).
- **Inter** font loaded from Google Fonts for a modern, readable UI.
- **Whitespace and typography**: section headings, subtitles, and max-width containers to keep line length comfortable.
- **Minimal clutter**: no noisy patterns; gradients are used sparingly (mainly hero and footer).
- **Performance**: no extra CSS framework; tree-shakeable libraries (Framer Motion, react-icons) only where needed.

---

## Project structure

```
portfolio/
├── index.html              # Root HTML, font preconnect, app mount (#root)
├── vite.config.ts          # Vite + @vitejs/plugin-react
├── tsconfig.json           # TypeScript + JSX for React
├── package.json
├── public/
│   ├── favicon.svg
│   ├── icons.svg           # (from template, if present)
│   └── resume.pdf          # Placeholder PDF — replace with your resume
└── src/
    ├── main.tsx            # React root render (StrictMode)
    ├── App.tsx             # Composes layout: Navbar, sections, Footer, ScrollToTop
    ├── index.css           # Global styles, design tokens, component classes
    ├── vite-env.d.ts       # Vite client types
    ├── hooks/
    │   └── useTypingRoles.ts   # Hero typewriter-style cycling text
    └── components/
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── About.tsx
        ├── Skills.tsx
        ├── Projects.tsx
        ├── Experience.tsx
        ├── Certifications.tsx
        ├── ResumeSection.tsx
        ├── Contact.tsx
        ├── Footer.tsx
        ├── ScrollToTop.tsx
        └── Section.tsx     # Reusable motion.section for scroll animations
```

Comments are used in key places (e.g. `App.tsx`, `vite.config.ts`, hooks) to explain intent without over-documenting obvious code.

---

## Getting started

### Prerequisites

- **Node.js** (LTS recommended)
- **npm** (comes with Node)

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm run dev
```

Vite prints a local URL (typically `http://localhost:5173`). Edit files under `src/`; changes hot-reload.

---

## Build and preview

### Production build

```bash
npm run build
```

This runs **`tsc`** (TypeScript check) then **`vite build`**. Output is written to **`dist/`**.

### Preview the production build locally

```bash
npm run preview
```

Use this to verify assets, routes, and performance before deploying.

---

## Deployment

The output is a **static site** (`dist/`). Suitable hosts include:

- **Vercel** — connect the repo; set build command `npm run build` and output directory `dist`.
- **Netlify** — same idea; publish directory `dist`.

No server-side runtime is required. Ensure **`public/resume.pdf`** is replaced if you want the live site to serve your real resume.

---

## Customization guide

| Goal | Where to change |
|------|------------------|
| **Colors / spacing** | `src/index.css` — `:root` variables (`--accent`, `--bg`, etc.) |
| **Meta title & description** | `index.html` |
| **Hero name / roles** | `src/components/Hero.tsx`, `src/hooks/useTypingRoles.ts` |
| **About text** | `src/components/About.tsx` |
| **Skills** | `src/components/Skills.tsx` |
| **Projects & GitHub URLs** | `src/components/Projects.tsx` (`PLACEHOLDER_REPO` and project arrays) |
| **Experience / certifications** | `src/components/Experience.tsx`, `Certifications.tsx` |
| **Contact & social URLs** | `src/components/Contact.tsx`, `Footer.tsx`, `Hero.tsx` |
| **Resume file** | Replace `public/resume.pdf` |
| **Navigation labels / order** | `src/components/Navbar.tsx` (`navLinks`) |

---

## Content overview

The site includes the following **content blocks** (as specified for the portfolio):

- **Identity:** Soma Sekhar Marella — Blockchain Developer | Web3 Enthusiast | Full Stack Developer  
- **About:** B.Tech + Blockchain Engineering, Web3/full-stack experience, The Blockchain Hub leadership  
- **Skills:** Languages, frameworks & tools, platforms, and “other” categories with icons  
- **Projects:** AgriTrace; Simera (Proof-of-Work Crowdfunding)  
- **Experience:** President — The Blockchain Hub; Blockchain Developer  
- **Certifications:** AWS, Oracle Java, GitHub Foundations, MongoDB Associate, etc.  
- **Contact:** Email, LinkedIn, GitHub  

---

## Scripts summary

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Typecheck + production build to `dist/` |
| `npm run preview` | Serve `dist/` locally |

---

## License

This project is a personal portfolio. Adjust licensing as you prefer for your own deployment.

---

*Generated as documentation for the portfolio implementation. Update this README whenever you add features, change hosting, or replace placeholder links and assets.*
