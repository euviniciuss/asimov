---
description: Folder structure for components, pages/screens and flows
alwaysApply: true
---

# Objective
Define frontend architecture under `src/presentation` with clear separation between global UI and page flows.

# Presentation Root
- All frontend rendering logic must live in `src/presentation`.
- Do not create or keep page/component UI structure outside `src/presentation`.

# Global UI Components
- Global reusable UI components must live in `src/presentation/components/ui/`.
- Use one folder per component in kebab-case.
- Each component folder must contain `index.tsx`, `styles.ts`, and `types.ts`.
- Every UI component must have tests covering its functionality (`*.test.tsx` in the same folder).
- Text rendering should be centralized in `src/presentation/components/ui/typography`.

# Flows (Page Modules)
- Flows are page modules under `src/presentation/flows/<scope>/<flow-name>/`.
- Each flow is flat and must expose an `index.tsx` as the main page structure.
- Flow names must be kebab-case when composed by multiple words.

# Scoped Flow Components
- Components used only by a flow must live inside that flow in `components/`.
- Scoped component folders must use kebab-case (example: `hero-section`).
- Each scoped component folder must contain `index.tsx`, `styles.ts`, and `types.ts`.
- Prefer composition-first component architecture when feature complexity grows (compound components and explicit composition over behavioral boolean flags).

# App Router Entry
- `src/app/page.tsx` should only compose and render a flow page, e.g.:
  - `import { LandingPage } from '@flows/public/landing'`
  - `export default function Landing() { return <LandingPage /> }`
