# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## Architecture

This is a **React 19 + Vite** single-page application for "Festival Tres Picos", a short film festival. It uses React Router DOM for client-side routing, Bootstrap 5 + React Bootstrap for UI, and SASS for styles.

### Routing (`src/router/AppRouter.jsx`)
Six routes: `/`, `/sobre-el-festival`, `/espacios-de-muestra`, `/selecciones`, `/invitados`, `/inscripciones`. Unmatched routes redirect to `/`. The router also renders global persistent components: `ButtonTop` (back-to-top) and `ButtonInscripcion` (hidden on the `/inscripciones` route).

### Pages (`src/pages/`)
Each page folder contains a main component and a `components/` subfolder for page-specific sub-components. All pages share the same layout pattern: `<Header />` at the top, `<Activity />` + `<Footer />` at the bottom.

### Data Layer (`src/resources/`)
All content is static data defined as exported JS objects/arrays — no API calls. Key files:
- `header.js` — nav links (source of truth; `card.js` and others import from it)
- `invitados.js`, `inscripciones.js`, `selecciones.js`, `espacios.js`, `sobreFestival.js`, `activity.js`, `bannerHome.js`

To add or edit content (people, events, navigation items), edit the relevant file in `src/resources/`.

### Styles (`src/styles/`)
SASS with a single entry point `style.scss`. Variables and the `breakPoint` mixin live in `_variables.scss`. Per-page styles are in `styles/pages/` and imported directly from their component files (not from `style.scss`). Color palette uses three scales: `$primary_color` (blue), `$secondary_color` (purple), `$tertiary_color` (cyan).

### Shared Components (`src/components/`)
- `Header` — navbar driven by `HeaderJson` in `resources/header.js`; supports external URLs (opens in new tab) and internal routes
- `Activity` / `EmblaStart` — Embla Carousel for activity/schedule content
- `Card` — home page summary cards driven by `CardJSON` (which references `HeaderJson` and `SeleccionesJSON`)
- `modal/Modal.jsx` — React Bootstrap modal that renders a PDF fanzine in an `<iframe>`
- `ContentPerfil` — profile card used for invitados/jurado sections
- `LiquidChrome` — WebGL background effect (OGL library), currently commented out

### Static Assets (`public/assets/`)
Images, documents (e.g., `Fanzine.pdf`), and SVGs are served from `public/assets/`. Image paths in resource files use the relative `./assets/img/...` convention.

### Navigation Helper
`src/helpers/pages.js` exports `scrollToElement(id)` — scrolls to an element by ID while accounting for the fixed header height.
