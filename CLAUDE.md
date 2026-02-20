# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Paleta is an educational web app that teaches kids programming through visual art. Users write simple drawing commands in a code editor (Playground) that render shapes on an HTML canvas, then save and share their creations in a gallery.

## Architecture

Fullstack app powered by **Convex** (backend-as-a-service with real-time reactive queries):

- **`client/`** — React 19 SPA (Vite + Bun). JavaScript, no TypeScript.
- **`client/convex/`** — Convex backend: schema, auth, queries, and mutations.
- Auth via `@convex-dev/auth` with email+password (Password provider).

## Development Commands

### Start Convex backend (watches for changes)
```bash
cd client && npx convex dev
```

### Start Vite frontend (port 3000)
```bash
cd client && bun run dev
```

### Install dependencies
```bash
cd client && bun install
```

### First-time setup
```bash
cd client && npx convex dev --once --configure=new
npx @convex-dev/auth  # generates AUTH_SECRET env var
```

## Environment Variables

**`client/.env`**: `VITE_CONVEX_URL` — set automatically by `npx convex dev`

**Convex dashboard env vars** (set via `npx convex env set`): `AUTH_SECRET`

## Key Files

| File | Purpose |
|---|---|
| `client/convex/schema.js` | Database schema: users (with auth fields + username/bio/photoUrl), projects (title, authorId, photoUrl, inputs[50]), comments (content, authorId, projectId). |
| `client/convex/auth.js` | Convex Auth config with Password provider. Exports `auth`, `signIn`, `signOut`, `store`, `isAuthenticated`. |
| `client/convex/http.js` | HTTP router for auth endpoints. |
| `client/convex/users.js` | `currentUser` query, `updateProfile` mutation. |
| `client/convex/projects.js` | `list` query (all + author populated), `getOne` query, `create` mutation, `remove` mutation (cascades to comments). |
| `client/convex/comments.js` | `list` query (all + author + project populated), `create` mutation. |
| `client/src/index.jsx` | App entry: `ConvexAuthProvider` > `BrowserRouter` > `MyProvider` > `Router`. |
| `client/src/Context.jsx` | Global state (React Context). Uses `useQuery` for reactive gallery/comments/user, `useMutation` for writes, `useAuthActions` for signIn/signOut. |
| `client/src/Router.jsx` | All client routes (React Router v7, `<Routes>` + `<Route element>`). |
| `client/src/pages/Playground.jsx` | Core feature: canvas drawing editor with 50 code input fields and command parser (`draw()` function). Saves inputs as array. |
| `client/src/style/components.js` | All styled-components (18 components). |
| `client/src/style/index.js` | Global styles, color palette, font imports. |
| `client/vite.config.js` | Vite configuration with React plugin. |

## Convex Functions (API)

### Queries (reactive, real-time)
- `api.users.currentUser` — authenticated user document
- `api.projects.list` — all projects with populated author, desc by date
- `api.projects.getOne({ id })` — single project with author
- `api.comments.list` — all comments with author and project

### Mutations
- `api.users.updateProfile({ username?, bio?, photoUrl? })`
- `api.projects.create({ title, photoUrl, inputs[] })`
- `api.projects.remove({ id })` — deletes project + its comments
- `api.comments.create({ content, projectId })`

### Auth (via @convex-dev/auth)
- `signIn('password', { email, password, flow: 'signUp' })`
- `signIn('password', { email, password, flow: 'signIn' })`
- `signOut()`

## Architectural Notes

- **State management**: Single `MyProvider` functional component in `Context.jsx` wraps the entire app. All components consume via `useContext(MyContext)`.
- **Reactive queries**: Gallery and comments update in real-time via Convex subscriptions (`useQuery`). No manual refresh needed.
- **Project inputs**: Stored as `string[50]` array (not 50 individual fields).
- **Playground commands**: The `draw()` function in `Playground.jsx` parses commands like `circle`, `square`, `move`, `color`, `text`, `background`, `arc`, `ellipse`, `rectangle`.
- **Styling**: Styled-components 6 with a custom color palette (purples, pinks, oranges). Fonts: Baloo, Comfortaa, Fredoka One, PT Mono.
- **All functional components**: Every component uses hooks (useState, useEffect, useContext, useRef, useNavigate).
- **Login uses email**: Auth is email+password based (not username-based).
