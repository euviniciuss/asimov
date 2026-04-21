---
description: Accessibility best practices for component development
alwaysApply: true
globs:
  - 'src/components/**'
  - 'src/app/**'
---

# Objective

Ensure that all developed components consider accessibility criteria from conception, following **WCAG 2.0** guidelines.
Follow the wcag rules (https://www.w3.org/WAI/standards-guidelines/wcag/)

# General Guidelines

- **Semantics**: use appropriate HTML elements for the context (e.g., `<button>` for actions, `<nav>` for navigation).
- **Keyboard**: all interactive elements must be keyboard accessible (`Tab`, `Enter`, `Space`) and maintain visible focus.
- **ARIA**: use `aria-*` attributes only when necessary, avoiding redundancy with native semantics.
- **Contrast**: follow minimum WCAG 2.0 ratios (AA level: 4.5:1 for normal text, 3:1 for large text).
- **Screen readers**: ensure important content is read correctly (use of `aria-label`, `alt` on images, and well-structured headings `<h1>`...`<h6>`).
- **Feedback**: visible and perceptible state changes for all users (e.g., error messages should be readable by screen readers and visually highlighted).

# Specific guidelines for UI with Tailwind + shadcn/ui

- Use shadcn components based on Radix whenever possible, as they already have built-in accessibility.
- When extending components, preserve already present accessibility attributes.
- Ensure visible focus and active state using Tailwind classes (`focus-visible:outline`, `ring`, etc.).
- Validate contrast using verification tools during development.

# Review

- Before completing a PR, check:
  - Full keyboard navigation.
  - Alternative texts for images and icons.
  - Coherent semantic structure.
  - Contrast according to WCAG 2.0 AA.
