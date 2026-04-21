---
alwaysApply: true
---
# Objective
Maintain code consistency, security, and scalability.

# Guidelines
- Use TypeScript in `strict` mode.
- Do not use `any` without justification. Prefer explicit types.
- Respect ESLint/Prettier/EditorConfig/Biome. Fix lints before committing. Run a pre-commit script to validate and fix these errors.
- Always write components as functions (React FC) with typed props.
- Absolute imports via tsconfig paths when it makes sense.

# Examples

## Typing and `any`
❌ **Bad:**
```typescript
function processData(data: any) {
  return data.name;
}
```

✅ **Good:**
```typescript
interface UserData {
  id: string;
  name: string;
}

function processData(data: UserData): string {
  return data.name;
}
```

## React Components
❌ **Bad:**
```tsx
const MyComponent = (props) => {
  return <div>{props.title}</div>;
}
```

✅ **Good:**
```tsx
interface MyComponentProps {
  title: string;
  description?: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};
```

## Imports
❌ **Bad:**
```typescript
import { Button } from '../../../components/ui/button';
import { useAuth } from '../../hooks/useAuth';
```

✅ **Good:**
```typescript
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
```
