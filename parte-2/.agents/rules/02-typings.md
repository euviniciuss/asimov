---
description: Typing Declarations
alwaysApply: true
---

# Pattern
- **Components and Pages:** `types.ts` file in the same directory as the component/page.
- **Models/DTOs/Globals:** `[name].types.ts` in camelCase according to the context.
- Prefer `interface` for component props contracts.
- Interface names must use `I` prefix (example: `ICardProps`, `IHeroSectionProps`).
- Type aliases must use `T` prefix (example: `TButtonVariant`, `TApiStatus`).
- Never declare interfaces inside `.tsx` files; keep contracts in `types.ts`.

## Examples (components and pages)
flow/login/components/SpecificComponent1/
index.tsx
styles.ts
types.ts

flow/login/
index.tsx
layout.tsx
styles.ts
types.ts

## Model
src/domain/model/
health.types.ts
userRoles.types.ts

- For contexts with variations: use subfolders.

src/domain/model/booking-flow/
health.types.ts
exam.types.ts

## DTO
- Prefix with method/endpoint.

infrastrucure/hooks/product/dtos/
getProductList.types.ts

## Routes
- `src/lib/routes/types.ts` concentrates route typings.
- Define typed helpers for paths (see paths.ts).
