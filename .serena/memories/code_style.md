# ELITE Site Code Style & Conventions

## File Naming
- **Components:** PascalCase (e.g., `HeroSection.tsx`, `Navbar.tsx`)
- **Utilities:** camelCase (e.g., `useReducedMotion.ts`)
- **Directories:** kebab-case for folders, PascalCase for component dirs

## Component Structure
```tsx
"use client";

import { ExternalDep } from "external-lib";
import { LocalComponent } from "@/components/path";

export function ComponentName() {
  return (
    <section className="...">
      {/* Component content */}
    </section>
  );
}
```

## TypeScript Rules
- Use `export function` for components (not `const Component = () =>`)
- Import order: external deps → internal deps → types
- Use `@/` alias for project root imports

## Styling Conventions
- **Spacing:** Use Tailwind's spacing scale (4, 8, 12, 16, etc.)
- **Responsive:** Mobile-first (base → md → lg → xl)
- **Colors:** Semantic names (primary, muted, border, card)
- **Animations:** Use animation components with delay props for staggering

## Animation Patterns
```tsx
<FadeIn delay={0} direction="up">Content</FadeIn>
<FadeIn delay={0.1} direction="up">Delayed content</FadeIn>
```

## Section Structure
- Each section in its own file
- Use semantic HTML (`section`, `article`, etc.)
- Include proper spacing with `py-*` or `pb-*` classes
- Center content with `container` and `mx-auto`
