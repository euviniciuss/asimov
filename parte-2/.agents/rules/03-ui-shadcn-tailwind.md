---
description: UI with shadcn/ui + Tailwind
alwaysApply: true
---

# Objective
Unify UI using shadcn/ui and Tailwind utilities.

# Rules
- Base components (Button, Card, Input, etc.) **must** come from `src/presentation/components/ui`.
- Use `Typography` from `src/presentation/components/ui/typography` for text variants instead of repeating heading/paragraph utility combinations.
- Do not reinvent base components; **extend** via wrappers or slots when needed.
- Tailwind classes prioritize utilities; extract repeated patterns to `styles.ts` when there is semantic meaning.
- Avoid global CSS; if necessary, in `src/styles/globals.css`.
- Prefer React composition patterns for complex UI APIs (compound components, children composition) instead of boolean-prop proliferation.

# Accessibility
- Use accessible shadcn components (based on Radix).
- Ensure labels/aria/role as necessary.

# Theming
- Use Tailwind tokens; theme variations with CSS variables (standard shadcn setup).
