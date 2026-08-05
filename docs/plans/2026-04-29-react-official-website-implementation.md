# React Official Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the first React + Next.js version of the Zhili official website from the approved architecture and content materials.

**Architecture:** Start from a clean Next.js App Router project because the repository has no existing Vue or React scaffold. Use structured TypeScript content data as the source for pages, isolate visual sections into reusable components, and verify core content/navigation behavior with automated tests before styling polish.

**Tech Stack:** Next.js App Router, React, TypeScript, CSS Modules/global CSS, Vitest, Testing Library, Playwright-ready structure.

---

## Source Documents

- Architecture baseline: `docs/plans/2026-04-28-new-official-website-architecture-design.md`
- Content baseline: `执理官网内容素材整理.md`

## Implementation Rules

- Do not revive Vue. This is a clean React + Next.js implementation.
- Use TDD for new behavior: write failing tests first, verify red, implement, verify green.
- Keep the first version static and content-driven.
- Avoid external APIs, CMS, auth, forms backend, or deployment-specific assumptions in the first pass.
- Visual direction: dark premium education-tech, blue/cyan accents, restrained motion, credible and atmospheric.

---

### Task 1: Initialize Next.js Project Baseline

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.mjs`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `src/test/setup.ts`
- Create: `vitest.config.ts`

**Step 1: Write the failing baseline render test**

Create `src/app/page.test.tsx` that expects the homepage to render the primary brand heading:

```tsx
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the official website brand position", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /AI 驱动的计算机教育科技公司/i,
      }),
    ).toBeInTheDocument();
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/app/page.test.tsx`

Expected: FAIL because dependencies/project files are not initialized yet.

**Step 3: Create minimal project scaffold**

Add package scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

**Step 4: Implement minimal page**

Create a minimal `src/app/page.tsx` returning the tested heading.

**Step 5: Run test to verify it passes**

Run: `npm test -- src/app/page.test.tsx`

Expected: PASS.

---

### Task 2: Create Structured Website Content Model

**Files:**
- Create: `src/content/site.ts`
- Create: `src/content/site.test.ts`

**Step 1: Write failing content tests**

Test that the content model exposes:

- 7 navigation items
- 4 solution pillars
- 4 products/platforms
- contact cooperation entries

**Step 2: Run test to verify it fails**

Run: `npm test -- src/content/site.test.ts`

Expected: FAIL because content module does not exist.

**Step 3: Implement minimal typed content data**

Use the source material to define:

- `navigation`
- `hero`
- `metrics`
- `solutions`
- `products`
- `cases`
- `partners`
- `about`
- `contactIntents`

**Step 4: Run test to verify it passes**

Run: `npm test -- src/content/site.test.ts`

Expected: PASS.

---

### Task 3: Implement App Shell and Homepage Sections

**Files:**
- Create: `src/components/AppShell.tsx`
- Create: `src/components/AppShell.module.css`
- Create: `src/components/HomeSections.tsx`
- Create: `src/components/HomeSections.module.css`
- Modify: `src/app/page.tsx`
- Test: `src/components/HomeSections.test.tsx`

**Step 1: Write failing section tests**

Verify that the homepage renders:

- navigation labels
- four solution names
- product names
- at least one partner name
- contact CTA

**Step 2: Run test to verify it fails**

Run: `npm test -- src/components/HomeSections.test.tsx`

Expected: FAIL because components do not exist.

**Step 3: Implement components using structured content**

Use semantic HTML sections and map over content arrays.

**Step 4: Run test to verify it passes**

Run: `npm test -- src/components/HomeSections.test.tsx`

Expected: PASS.

---

### Task 4: Add Static Core Pages

**Files:**
- Create: `src/app/solutions/page.tsx`
- Create: `src/app/products/page.tsx`
- Create: `src/app/cases/page.tsx`
- Create: `src/app/partners/page.tsx`
- Create: `src/app/about/page.tsx`
- Create: `src/app/contact/page.tsx`
- Create: `src/app/static-pages.test.tsx`

**Step 1: Write failing route content tests**

Import each page component and assert its primary heading appears.

**Step 2: Run test to verify it fails**

Run: `npm test -- src/app/static-pages.test.tsx`

Expected: FAIL because route files do not exist.

**Step 3: Implement minimal static pages**

Each page should reuse content from `src/content/site.ts` and provide one focused page-level narrative.

**Step 4: Run test to verify it passes**

Run: `npm test -- src/app/static-pages.test.tsx`

Expected: PASS.

---

### Task 5: Apply Premium Education-Tech Visual System

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/AppShell.module.css`
- Modify: `src/components/HomeSections.module.css`

**Step 1: Verify content tests are green before visual work**

Run: `npm test`

Expected: PASS.

**Step 2: Add global design tokens**

Define CSS variables for background, text, cyan/blue accent, panels, border, glow, radius, and spacing.

**Step 3: Add layout and atmospheric styling**

Implement dark background, gradient mesh, card system, strong typography, and responsive layout.

**Step 4: Run tests again**

Run: `npm test`

Expected: PASS.

---

### Task 6: Verification

**Files:**
- No new files expected unless fixing discovered issues.

**Step 1: Run tests**

Run: `npm test`

Expected: PASS.

**Step 2: Run typecheck**

Run: `npm run typecheck`

Expected: PASS.

**Step 3: Run lint**

Run: `npm run lint`

Expected: PASS or document if Next.js lint command requires framework adjustment.

**Step 4: Run build**

Run: `npm run build`

Expected: PASS.

**Step 5: Inspect git status**

Run: `GIT_MASTER=1 git status --short`

Expected: only intended project/document files changed.
