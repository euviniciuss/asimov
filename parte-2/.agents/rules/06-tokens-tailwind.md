---
description: Mandatory use of Tailwind color and size tokens
alwaysApply: true
globs:
  - "src/presentation/**"
  - "src/app/**"
---

# Objective
Prohibit the use of hardcoded values for colors and sizes, ensuring visual consistency and easy maintenance through tokens defined in Tailwind.

# Guidelines
- **Never** use literal values (e.g., `#fff`, `#000`, `#1a1a1a`, `16px`, `24px`) directly in code or custom classes.
- Use **Tailwind tokens** defined in `tailwind.config.ts` or global CSS variables.
- All spacing, font sizes, widths, and heights must come from Tailwind utilities (`px-4`, `text-lg`, `w-6`, etc.).
- All colors must come from tokens configured in Tailwind (`bg-green`, `text-dark`, `border-dark/20`, etc.).
- If you need a new color/size that doesn't exist, **add it to the theme** (`tailwind.config.ts`) instead of writing it hardcoded.
- Foundation color tokens are based on Figma names and must be preferred:
  - `green: #B9FF66`
  - `dark: #191A23`
  - `gray: #F3F3F3`
- Use the global container standard (`.app-container`) for page horizontal layout:
  - `max-width: 1440px`
  - horizontal center
  - side padding `20px` on mobile and `100px` on desktop.

# Best Practices
- Prefer Tailwind utility classes (`text-sm`, `h-10`, `bg-green`) over inline styles.
- Use `styles.ts` only for complex rules that cannot be represented as Tailwind classes.
- If using CSS variables for themes, define them in `:root` and reference them via Tailwind (`var(--primary)`, etc.).

# Review
Before completing the PR:
- Check if there are no hexadecimal colors, CSS color names (`red`, `blue`, etc.) or fixed sizes (`px`, `em`, `rem`) written manually.
- Ensure that all new colors/sizes have been added to the design system in `tailwind.config.ts` or global theme.
