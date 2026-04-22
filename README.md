# Adebomi Lab Website

Production-ready Next.js implementation of the Adebomi Lab website, built as a frame-by-frame Figma replica with responsive behavior for desktop and mobile.

## Overview

This project includes:

- Multi-page marketing site built with Next.js App Router.
- Reusable section components for each page.
- Shared content/constants and dedicated type modules.
- Figma-aligned typography, gradients, buttons, and form states.
- Optimized image assets (WebP) in `public/assets`.

## Tech Stack

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- UI: React 19 + Tailwind CSS
- Images: `next/image` + `sharp`
- Testing: Jest + React Testing Library
- Lint/format: ESLint + Prettier
- Git hooks: Husky + lint-staged + commitlint

## Routes

Current primary routes:

- `/` (Home)
- `/research`
- `/publications`
- `/team`
- `/collaborations`
- `/join-lab`

## Project Structure

Key folders:

- `src/app`: Route entry pages (App Router).
- `src/components`: Reusable UI sections/components.
- `src/lib`: Shared content/constants.
- `src/types`: Shared TypeScript types.
- `public/assets`: Static optimized assets (SVG/WebP).
- `public/fonts`: Local font files.

## Local Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev`: Start local dev server (Turbopack).
- `npm run build`: Create production build.
- `npm run start`: Start production server from build output.
- `npm run lint`: Run ESLint with autofix.
- `npm run test`: Run Jest tests.
- `npm run format`: Run Prettier across the repo.

## Quality Gates

Git hooks run automatically via Husky:

- Pre-commit: `eslint --fix` + `prettier --write` on staged files.
- Commit-msg: Conventional Commit validation via commitlint.

CI should run lint, tests, and build before merge/deploy.

## Vercel Configuration

The project includes `vercel.json` with a route rule:

- Any non-file path (`/[^.]+`) resolves to `/` with status `200`.

This can be useful for SPA-style fallback routing behavior at the edge.

## Design System Notes

- Main font family is loaded locally (MADE Tommy Soft variants).
- Shared CTA button style is reused across pages.
- Header supports transparent/solid modes and dark/light text mode.
- Join Lab form fields are config-driven (`src/lib/join-lab-content.ts`), with shared field types in `src/types/join-lab.ts`.

## Deployment

Typical deployment flow:

1. Run `npm run lint`
2. Run `npm run test`
3. Run `npm run build`
4. Push to `main`
5. Deploy via Vercel

## Troubleshooting

- Build/type errors: run `npm run build` locally to catch route/type issues.
- Lint hook failures during commit: fix issues and recommit.
- Commit message rejection: use Conventional Commit format (for example, `feat: ...`, `fix: ...`).
- Asset issues: verify file paths under `public/assets` and reference with leading `/assets/...`.
