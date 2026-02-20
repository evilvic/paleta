# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Paleta is an educational web app that teaches kids programming through visual art. Users write simple drawing commands in a code editor (Playground) that render shapes on an HTML canvas, then save and share their creations in a gallery.

## Architecture

Monorepo with two independent apps:

- **`client/`** — React 19 SPA (Vite + Bun). JavaScript, no TypeScript.
- **`server/`** — Express 4.21 + MongoDB REST API (Mongoose 8). Session-based auth via Passport 0.7.

## Development Commands

### Client (Vite, port 3000)
```bash
cd client && bun run dev
```

### Server (with nodemon + debug logging)
```bash
cd server && bun run dev
```

### Install dependencies
```bash
cd client && bun install
cd server && bun install
```

## Environment Variables

**`server/.env`**: `PORT`, `ENV`, `FRONTENDPOINT`, `SECRET`, `DB`, `CLOUDINARY_NAME`, `CLOUDINARY_KEY`, `CLOUDINARY_SECRET`

**`client/.env`**: `VITE_SERVER_ENDPOINT`

## Key Files

| File | Purpose |
|---|---|
| `client/src/Context.jsx` | Global state (React Context). Functional component with hooks. Auth state, gallery data, form handlers, all API dispatch lives here. |
| `client/src/Router.jsx` | All client routes (React Router v7, `<Routes>` + `<Route element>`). |
| `client/src/pages/Playground.jsx` | Core feature: canvas drawing editor with 50 code input fields and command parser (`draw()` function). Functional component with `useRef` for canvas. |
| `client/src/services/{auth,project,comment}.js` | Axios service layer — all API calls. Uses `withCredentials: true` for session cookies. Env vars via `import.meta.env.VITE_SERVER_ENDPOINT`. |
| `client/src/style/components.js` | All styled-components (18 components). |
| `client/src/style/index.js` | Global styles, color palette, font imports. |
| `client/vite.config.js` | Vite configuration with React plugin. |
| `server/app.js` | Express setup: CORS, session, passport, route mounting. Uses `express.json()` (no body-parser). |
| `server/bin/www` | Server entry point. |
| `server/models/{User,Project,Comment}.js` | Mongoose schemas. |
| `server/routes/{auth,project,comment}.js` | REST endpoints. |

## API Routes

- `POST /auth/signup`, `POST /auth/login`, `GET /auth/logout`, `GET /auth/user`
- `GET /projects/`, `POST /projects/new`, `GET /projects/:id`, `DELETE /projects/:id`
- `GET /comments/`, `POST /comments/new`

## Architectural Notes

- **State management**: Single `MyProvider` functional component in `Context.jsx` wraps the entire app. All components consume via `useContext(MyContext)`.
- **Project model quirk**: The `Project` schema stores canvas code as 50 individual string fields (`input0` through `input49`) rather than an array.
- **Playground commands**: The `draw()` function in `Playground.jsx` parses commands like `circle`, `square`, `move`, `color`, `text`, `background`, `arc`, `ellipse`, `rectangle`.
- **Styling**: Styled-components 6 with a custom color palette (purples, pinks, oranges). Fonts: Baloo, Comfortaa, Fredoka One, PT Mono.
- **All functional components**: Every component uses hooks (useState, useEffect, useContext, useRef, useNavigate).
- **Cloudinary and Nodemailer**: Configured in `server/config/` but not actively used in routes.
