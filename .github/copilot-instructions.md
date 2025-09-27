## Quick repo snapshot

- Framework: Next.js (app router). Project uses the `app/` folder with route folders (e.g. `app/dashboard`, `app/projects`) and per-route `page.tsx` / `loading.tsx` conventions.
- Styling: Tailwind CSS + `postcss` (see `tailwind.config.ts` and `postcss.config.mjs`).
- UI: Radix primitives wrapped in `components/ui/*`, shared components in `components/`.
- Language & theming: `contexts/language-context.tsx`, `components/theme-provider.tsx`, and `next-themes` are used for client-side theme & locale toggles.

## Why this structure (big picture)

- The code follows Next's App Router: server-first route components live in `app/`. Use `loading.tsx` in route folders to provide Suspense/loading UI.
- Reusable UI building blocks live in `components/ui/` (Radix + Tailwind wrappers). Higher-level domain components live in `components/` (e.g. `projects-showcase.tsx`, `expertise-section.tsx`).
- Global providers are wired in `app/layout.tsx` and `components/theme-provider.tsx` — prefer editing those for cross-cutting behavior (themes, analytics, language context).

## Important files & where to look first

- `package.json` — scripts: `dev` (next dev), `build` (next build), `start`, `lint`.
- `next.config.mjs` — images are configured with `images.unoptimized = true`; TypeScript and ESLint errors are ignored during builds (see `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds`).
- `app/layout.tsx`, `app/page.tsx` — app-level composition and entry points.
- `components/ui/` — primitives and patterns for buttons, inputs, dialogs. When adding UI, prefer using or extending these primitives to keep consistency.
- `contexts/language-context.tsx` and `components/language-selector.tsx` — locale switching pattern.
- `components/theme-provider.tsx` and `components/theme-toggle.tsx` — theme wiring and usage examples.

## Developer workflows & commands

- Local dev (preferred if you see `pnpm-lock.yaml`):

  ```powershell
  pnpm install; pnpm dev
  ```

  If you use npm: `npm install` then `npm run dev`.

- Build for production (CI):

  ```powershell
  pnpm build
  pnpm start
  ```

- Linting: `npm run lint` (runs `next lint`). Note: `next.config.mjs` currently sets `eslint.ignoreDuringBuilds = true`, so CI should explicitly run the lint script if you want lint failures to fail the build.

## Project-specific conventions & gotchas

- Filenames use kebab-case (example: `components/animated-service-graphics.tsx`) for React components — keep import paths exact (case-sensitive on CI). Do not assume PascalCase filenames.
- App Router behavior: route folders should export `page.tsx`. Use `loading.tsx` to show route-level loading states (multiple routes already include `loading.tsx`).
- Client vs Server components: the app router defaults to server components. If a component uses hooks (`useState`, `useEffect`, `useToast`, etc.) add a top-line directive: `"use client"` and keep those components minimal and colocated where appropriate.
- Image handling: `images.unoptimized = true` in `next.config.mjs` — images use `public/` assets frequently. Do not rely on Next's remote image optimization unless you change config.
- Build tolerates TypeScript/ESLint errors: `next.config.mjs` sets `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` to true. This makes `next build` permissive; prefer running `pnpm lint` and `tsc --noEmit` locally/CI when correctness is required.

## Integration points & major dependencies

- UI primitives: `@radix-ui/*` — wrappers are in `components/ui`.
- Styling: `tailwindcss`, `postcss`, and `tailwindcss-animate`.
- State/validation/form: `react-hook-form`, `@hookform/resolvers`, `zod`.
- Charts/visuals: `recharts`, `framer-motion`, `embla-carousel-react`.
- The project includes `@vercel/analytics` — analytics are likely initialized in `app/layout.tsx` or `components/*`.

## Examples the agent can safely perform

- Add a new route: create `app/<route>/page.tsx` (+ optional `loading.tsx`) and export a React component. Use server components by default; add `"use client"` only if needed.
- Add a small UI primitive: extend `components/ui/button.tsx` or create a sibling in `components/ui/` following the Tailwind/CVA pattern (project includes `class-variance-authority`).
- Update theme behavior: change `components/theme-provider.tsx` and confirm `app/layout.tsx` composes it.

## When to ask for human review

- Structural changes to `app/layout.tsx`, `next.config.mjs`, or global providers that affect SSR/analytics or image config.
- Adding new top-level dependencies (edit `package.json`) — request confirmation about the package manager (pnpm vs npm) and CI implications.

If anything in this summary is unexpected, tell me which area to expand (examples, file pointers, or more command variants) and I will iterate.
