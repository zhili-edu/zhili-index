# Apple-like Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rework the Zhili official website homepage into the approved Apple-like minimalist light theme with a clear 4 Solutions / 4 Products / 6 Cases structure.

**Architecture:** Keep the current Next.js App Router and CSS Modules architecture. First normalize the content model so the UI can render the required 4/4/6 business structure, then refactor `HomeSections.tsx` into explicit semantic section blocks, and finally rewrite the CSS Modules around shared global design tokens instead of ad-hoc colors and spacing.

**Tech Stack:** Next.js App Router, React, TypeScript, CSS Modules, global CSS variables, Vitest, Testing Library, Playwright.

---

## Source Documents

- Design specification: `docs/plans/2026-04-29-apple-like-redesign-design.md`
- Existing implementation plan/history: `docs/plans/2026-04-29-react-official-website-implementation.md`
- Current homepage component: `src/components/HomeSections.tsx`
- Current content model: `src/content/site.ts`

## Implementation Rules

- Use @superpowers/test-driven-development for every content or component behavior change: write/adjust the failing test first, verify red, implement, verify green.
- Use @superpowers/verification-before-completion before marking the redesign complete.
- Do not add Tailwind, animation libraries, CMS, API calls, or new runtime dependencies.
- Keep CSS Modules: update `*.module.css` files and `src/app/globals.css` only.
- Extend the design system first: all colors, spacing, radii, shadows, transitions, and width values must use global CSS variables in `src/app/globals.css`.
- Preserve the approved hero headline: `AI 驱动的计算机教育科技公司`.
- Match the design document exactly: `#FBFBFD` page background, white tactile cards, `#1D1D1F` primary text, `#86868B` secondary text, `#0066CC` accent, frosted borderless header, dark minimal footer, 4 solution cards, 4 product cards, 6 case cards.
- Keep static pages working. If content model shape changes, update route pages and tests in the same task that changes the model.
- Commit after each task when executing this plan.

---

### Task 1: Content Model 4/4/6 Structure

**Files:**
- Modify: `src/content/site.ts:11-134`
- Modify: `src/content/site.test.ts:3-81`
- Review/possibly modify: `src/app/solutions/page.tsx`
- Review/possibly modify: `src/app/products/page.tsx`
- Review/possibly modify: `src/app/cases/page.tsx`
- Test: `src/content/site.test.ts`
- Test: `src/app/static-pages.test.tsx`

**Step 1: Update the content tests first**

Modify `src/content/site.test.ts` so it expects exactly four solution pillars, four products, and six structured case objects:

```ts
import {
  about,
  cases,
  contactIntents,
  hero,
  navigation,
  partnerGroups,
  products,
  solutions,
} from "./site";

// Inside describe("site content", ...)
it("models the four approved solution pillars", () => {
  expect(solutions.map((solution) => solution.title)).toEqual([
    "K-12 信息学奥赛与人工智能教育",
    "职教 AIGC 实训平台",
    "新媒体运营",
    "教育综合体运营",
  ]);
  expect(solutions).toHaveLength(4);
  expect(solutions.every((solution) => solution.points.length >= 3)).toBe(true);
});

it("models four products and platforms", () => {
  expect(products.map((product) => product.title)).toEqual([
    "执理信息学奥赛学习平台",
    "职教 AIGC 实训平台",
    "研途有答案",
    "文旅智慧运营中台",
  ]);
  expect(products).toHaveLength(4);
});

it("models six key business cases with labels and outcomes", () => {
  expect(cases).toHaveLength(6);
  expect(cases[0]).toMatchObject({
    label: "职校",
    title: "天津滨海教育集团课程服务",
  });
  expect(cases.map((item) => item.label)).toEqual([
    "职校",
    "出版",
    "综合体",
    "区域平台",
    "新媒体",
    "文旅",
  ]);
  expect(cases.every((item) => item.outcome.length > 0)).toBe(true);
});
```

Remove the old assertion that expected six solution titles in `solutions`.

**Step 2: Run content test to verify it fails**

Run: `npm test -- src/content/site.test.ts`

Expected: FAIL because `solutions` still has six items and `cases` is still `string[]`.

**Step 3: Update `site.ts` types**

In `src/content/site.ts`, replace `HighlightCard` with explicit reusable card fields and add a structured case type:

```ts
export type HighlightCard = {
  title: string;
  description: string;
  points: string[];
  eyebrow?: string;
};

export type CaseStudy = {
  label: string;
  title: string;
  description: string;
  outcome: string;
};
```

Change `export const cases = [...]` to `export const cases: CaseStudy[] = [...]`.

**Step 4: Reduce `solutions` to the approved four directions**

Keep these four items in `solutions`:

```ts
export const solutions: HighlightCard[] = [
  {
    title: "K-12 信息学奥赛与人工智能教育",
    description:
      "面向中小学生提供讲、学、练、考、赛一体化的信息学奥赛与人工智能课程解决方案。",
    points: ["C++ / CSP-J / GESP 课程体系", "信息学奥赛阶梯式培养", "课后服务与社团课程"],
  },
  {
    title: "职教 AIGC 实训平台",
    description:
      "面向职业院校专业建设和产教融合需求，提供 AIGC 实训平台、课程资源、师资培训和教学治理工具。",
    points: ["AI 视觉与创意生产", "作业评价与查重", "模型库 / 案例库 / 课程包"],
  },
  {
    title: "新媒体运营",
    description:
      "面向教育项目、区域活动和品牌传播，提供内容策划、新媒体运营、私域增长与用户触达能力。",
    points: ["内容策划", "新媒体矩阵运营", "私域流量增长"],
  },
  {
    title: "教育综合体运营",
    description:
      "为教育集团、青少年宫和校外教育平台提供一站式综合体运营解决方案，涵盖课程组织、教务管理与数字化服务。",
    points: ["综合体规划", "课程供应链", "运营管理系统"],
  },
];
```

Do not delete regional education or文旅 concepts entirely; keep them represented in `products`, `cases`, `partnerGroups`, and `about.businessUnits`.

**Step 5: Convert `cases` to six structured cases**

Use these exact six objects so cards can render tag/title/description/outcome separately:

```ts
export const cases: CaseStudy[] = [
  {
    label: "职校",
    title: "天津滨海教育集团课程服务",
    description:
      "持续服务天津滨海教育集团及多所学校，覆盖信息学奥赛、人工智能课程、师资培训和课后服务。",
    outcome: "10+ 合作学校 / 教育场景",
  },
  {
    label: "出版",
    title: "信息学奥赛教材出版",
    description:
      "参与研发的信息学奥赛系列教材由清华大学出版社出版，并沉淀赛事赛题、平台与技术运维经验。",
    outcome: "教材 + 赛题 + 平台能力沉淀",
  },
  {
    label: "综合体",
    title: "校外教育综合体运营",
    description:
      "围绕青少年宫、教育集团与校外教育场景，交付课程组织、统一报名和数据回流能力。",
    outcome: "课程供应链与教务流程打通",
  },
  {
    label: "区域平台",
    title: "区域智慧教育与研学平台",
    description:
      "建设区域智慧教育平台与智慧研学平台，支持课程发布、活动报名、订单管理和运营看板。",
    outcome: "教、学、管、评、测数据闭环",
  },
  {
    label: "新媒体",
    title: "教育项目运营增长",
    description:
      "为新媒体运营项目提供内容策划、矩阵账号运营、私域增长和品牌传播服务。",
    outcome: "品牌触达与持续获客能力",
  },
  {
    label: "文旅",
    title: "码头文旅数字化运营",
    description:
      "文旅数字化重点落在码头、景区和研学基地等真实场景，沉淀票务、实名核销与渠道分销能力。",
    outcome: "交易、通行、渠道、决策一体化",
  },
];
```

**Step 6: Update static route pages if TypeScript errors reveal string assumptions**

Inspect current route page usage of `cases`. If `src/app/cases/page.tsx` maps `cases` as strings, update it to render `item.title`, `item.description`, and `item.outcome` while preserving the text `/文旅数字化重点落在码头/` required by `src/app/static-pages.test.tsx`.

**Step 7: Run focused tests**

Run: `npm test -- src/content/site.test.ts src/app/static-pages.test.tsx`

Expected: PASS.

**Step 8: Run typecheck for changed model consumers**

Run: `npm run typecheck`

Expected: PASS.

**Step 9: Commit**

```bash
git add src/content/site.ts src/content/site.test.ts src/app/cases/page.tsx src/app/static-pages.test.tsx
git commit -m "refactor: align homepage content with 4-4-6 structure"
```

---

### Task 2: Global CSS Design Tokens

**Files:**
- Modify: `src/app/globals.css:1-24`
- Test: no direct unit test; verify through full render tests and build in later tasks

**Step 1: Run baseline tests before visual-system changes**

Run: `npm test -- src/app/page.test.tsx src/components/HomeSections.test.tsx`

Expected: PASS.

**Step 2: Replace root color declarations with Apple-like tokens**

Update `src/app/globals.css` so `:root` defines the shared system used by all CSS Modules:

```css
:root {
  --color-bg: #fbfbfd;
  --color-surface: #ffffff;
  --color-surface-soft: #f5f5f7;
  --color-skeleton: #f0f0f2;
  --color-text: #1d1d1f;
  --color-text-muted: #86868b;
  --color-accent: #0066cc;
  --color-accent-hover: #0057b8;
  --color-footer: #1d1d1f;
  --color-footer-alt: #102033;
  --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.02);
  --shadow-card-hover: 0 20px 40px rgba(0, 0, 0, 0.06);
  --shadow-panel: 0 32px 80px rgba(0, 0, 0, 0.08);
  --radius-sm: 24px;
  --radius-md: 32px;
  --radius-lg: 40px;
  --radius-pill: 999px;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-section: clamp(7.5rem, 12vw, 10rem);
  --container: 1180px;
  --transition: 220ms ease;
  color: var(--color-text);
  background: var(--color-bg);
}
```

**Step 3: Normalize base elements**

Still in `src/app/globals.css`, keep `box-sizing` and `scroll-behavior`, then update body and anchors:

```css
body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-rendering: geometricPrecision;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}
```

Use the font stack from the design document even though it includes Inter.

**Step 4: Run smoke tests**

Run: `npm test -- src/app/page.test.tsx`

Expected: PASS.

**Step 5: Commit**

```bash
git add src/app/globals.css
git commit -m "style: add apple-like global design tokens"
```

---

### Task 3: AppShell Frosted Header and Minimal Footer

**Files:**
- Modify: `src/components/AppShell.tsx:7-29`
- Modify: `src/components/AppShell.module.css:1-115`
- Test: `src/components/HomeSections.test.tsx`
- Test: `tests/e2e/navigation.spec.ts` in final verification

**Step 1: Add shell behavior assertions**

In `src/components/HomeSections.test.tsx`, add assertions to the existing test that the shell still exposes the logo, navigation, and contact link:

```tsx
expect(screen.getByLabelText("执理教育科技首页")).toHaveAttribute("href", "/");
expect(screen.getByRole("navigation", { name: "官网导航" })).toBeInTheDocument();
expect(screen.getByRole("link", { name: "联系我们" })).toHaveAttribute("href", "/contact");
```

**Step 2: Run test to verify baseline**

Run: `npm test -- src/components/HomeSections.test.tsx`

Expected: PASS before shell refactor. If it fails, fix the test query only if it does not match current accessible markup.

**Step 3: Add a header CTA in `AppShell.tsx`**

Keep the logo on the left and nav in the center. Add a right-side CTA after `</nav>`:

```tsx
<Link className={styles.navCta} href="/contact">
  联系合作
</Link>
```

Do not remove existing navigation items.

**Step 4: Rewrite `.shell` and background CSS**

In `src/components/AppShell.module.css`, replace the current blue/cyan gradient grid treatment with a quiet light canvas:

```css
.shell {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 78% 10%, rgba(0, 102, 204, 0.08), transparent 24rem),
    linear-gradient(180deg, var(--color-bg) 0%, #ffffff 46%, var(--color-bg) 100%);
}

.shell::before,
.shell::after {
  display: none;
}
```

**Step 5: Rewrite `.nav` as borderless frosted glass**

Use a full-width sticky glass bar with inner max-width via the existing `.nav` element:

```css
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--space-6);
  width: min(var(--container), calc(100% - var(--space-6)));
  margin: 0 auto;
  padding: var(--space-4) 0;
  background: rgba(251, 251, 253, 0.72);
  backdrop-filter: blur(20px);
}
```

No borders on the header.

**Step 6: Rewrite brand, nav links, and CTA states**

Use `var(--color-text)`, `var(--color-text-muted)`, and `var(--color-accent)` only. Make `.mark` a restrained monochrome/blue pill, center `.links`, and make `.navCta` a compact blue pill.

**Step 7: Rewrite footer**

Make `.footer` a full-width dark band by using width `100%`, dark background, and an inner readable layout. If no extra footer columns are added in markup, at minimum style the existing footer paragraph as premium minimal typography:

```css
.footer {
  margin-top: var(--space-section);
  padding: var(--space-7) max(var(--space-5), calc((100vw - var(--container)) / 2));
  color: rgba(255, 255, 255, 0.72);
  background: var(--color-footer);
}
```

**Step 8: Add responsive shell behavior**

At `max-width: 820px`, stack brand/nav/CTA cleanly, hide no required links, and keep tap targets at least 44px tall.

**Step 9: Run focused test**

Run: `npm test -- src/components/HomeSections.test.tsx`

Expected: PASS.

**Step 10: Commit**

```bash
git add src/components/AppShell.tsx src/components/AppShell.module.css src/components/HomeSections.test.tsx
git commit -m "style: redesign app shell with frosted navigation"
```

---

### Task 4: Hero Section Component Structure and CSS

**Files:**
- Modify: `src/components/HomeSections.tsx:33-81`
- Modify: `src/components/HomeSections.module.css:1-257`
- Modify: `src/components/HomeSections.test.tsx:6-30`
- Test: `src/components/HomeSections.test.tsx`

**Step 1: Add hero structure assertions**

In `src/components/HomeSections.test.tsx`, add assertions for the required hero CTAs and system visual labels:

```tsx
expect(screen.getByRole("link", { name: "了解解决方案" })).toHaveAttribute("href", "/solutions");
expect(screen.getByRole("link", { name: "查看案例成果" })).toHaveAttribute("href", "/cases");
expect(screen.getByText("Digital Capabilities")).toBeInTheDocument();
expect(screen.getByText("Physical Implementation")).toBeInTheDocument();
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/components/HomeSections.test.tsx`

Expected: FAIL because the current hero system visual does not render `Digital Capabilities` or `Physical Implementation`.

**Step 3: Refactor hero JSX only**

In `src/components/HomeSections.tsx`, replace the current `<aside className={styles.heroSystem}>...</aside>` contents with a minimalist architectural diagram:

```tsx
<aside className={styles.heroSystem} aria-labelledby="hero-system-title">
  <div className={styles.systemHalo} aria-hidden="true" />
  <div className={styles.systemTopline}>
    <span>Zhili AI Stack</span>
    <strong>Online</strong>
  </div>
  <h2 id="hero-system-title">AI 教育能力系统</h2>
  <p>平台 × 内容 × 运营</p>
  <div className={styles.architectureMap}>
    <div>
      <span>Digital Capabilities</span>
      <strong>课程研发 / AIGC / 数据平台</strong>
    </div>
    <i aria-hidden="true" />
    <div>
      <span>Physical Implementation</span>
      <strong>学校 / 职校 / 文旅场景</strong>
    </div>
  </div>
  <div className={styles.systemFooter}>
    <span>K-12</span>
    <span>Vocational</span>
    <span>Culture Travel</span>
  </div>
</aside>
```

Remove `systemGrid`, `signalPanel`, and `signalBars` markup from the hero.

**Step 4: Rewrite hero CSS around the light design system**

In `src/components/HomeSections.module.css`, update hero-related classes:

- `.hero`: `width: min(var(--container), calc(100% - var(--space-6)))`, `padding: clamp(6rem, 10vw, 9rem) 0 var(--space-section)`, two columns, generous gap.
- `.eyebrow`: no hard border; pill background `var(--color-surface-soft)`, text `var(--color-text-muted)`, smaller letter spacing.
- `.title`: color `var(--color-text)`, `font-size: clamp(3.8rem, 8vw, 7rem)`, `font-weight: 800`, `letter-spacing: -0.055em`.
- Remove `.title::after` entirely; the Apple-like design should rely on whitespace, not a gradient underline.
- `.subtitle`: color `var(--color-text-muted)`, constrained width, line-height 1.7.
- `.primary`: solid `var(--color-accent)` button, no gradient.
- `.secondary`: transparent/soft ghost button using `var(--color-surface-soft)` and `var(--color-accent)`.
- `.heroSystem`: white/glass card, radius `var(--radius-lg)`, soft mesh background, no hard border.
- Add `.systemHalo`, `.architectureMap`, and `.architectureMap i` styles.

**Step 5: Delete obsolete hero CSS**

Remove rules for `.systemGrid`, `.signalPanel`, `.signalBars`, and `.signalBars i` because the markup no longer uses them.

**Step 6: Run focused test**

Run: `npm test -- src/components/HomeSections.test.tsx`

Expected: PASS.

**Step 7: Run typecheck**

Run: `npm run typecheck`

Expected: PASS.

**Step 8: Commit**

```bash
git add src/components/HomeSections.tsx src/components/HomeSections.module.css src/components/HomeSections.test.tsx
git commit -m "style: rebuild hero as apple-like split section"
```

---

### Task 5: Metrics and Shared Section Primitives

**Files:**
- Modify: `src/components/HomeSections.tsx:83-96`
- Modify: `src/components/HomeSections.module.css`
- Test: `src/components/HomeSections.test.tsx`

**Step 1: Add metrics test coverage**

In `src/components/HomeSections.test.tsx`, assert that the metrics band still renders representative values:

```tsx
expect(screen.getByText("2021")).toBeInTheDocument();
expect(screen.getByText("7 项")).toBeInTheDocument();
```

**Step 2: Run focused test**

Run: `npm test -- src/components/HomeSections.test.tsx`

Expected: PASS before visual-only changes.

**Step 3: Update metrics JSX for accessible list semantics**

In `HomeSections.tsx`, change the metrics wrapper to a list:

```tsx
<ul className={styles.metrics} aria-label="执理能力指标">
  {metrics.map((metric) => (
    <li className={styles.metric} key={metric.label}>
      <strong>{metric.value}</strong>
      <span>{metric.label}</span>
    </li>
  ))}
</ul>
```

**Step 4: Update shared section CSS**

Update these CSS primitives in `HomeSections.module.css`:

- `.section`: use `width: min(var(--container), calc(100% - var(--space-6)))`, `padding: var(--space-section) 0 0`.
- `.sectionHeader`: use a vertical centered layout for major sections unless a later task overrides it.
- `.sectionHeader h2`: `color: var(--color-text)`, `font-weight: 800`, negative letter spacing, max width.
- `.sectionHeader p`: `color: var(--color-text-muted)`, max width, line-height 1.7.
- `.metrics`: reset list styles, `grid-template-columns: repeat(6, minmax(0, 1fr))`, soft white surface.
- `.metric`: flat white/soft surface, `border-radius: var(--radius-sm)`, minimal or no hover motion.

**Step 5: Run focused test**

Run: `npm test -- src/components/HomeSections.test.tsx`

Expected: PASS.

**Step 6: Commit**

```bash
git add src/components/HomeSections.tsx src/components/HomeSections.module.css src/components/HomeSections.test.tsx
git commit -m "style: refine metrics and section primitives"
```

---

### Task 6: Solutions Bento Grid

**Files:**
- Modify: `src/components/HomeSections.tsx:15-31,98-104`
- Modify: `src/components/HomeSections.module.css`
- Modify: `src/components/HomeSections.test.tsx`
- Test: `src/components/HomeSections.test.tsx`

**Step 1: Add solution count and tags test**

In `src/components/HomeSections.test.tsx`, add scoped assertions for the solutions section:

```tsx
const solutionsSection = screen.getByRole("region", { name: "四大解决方案" });
expect(solutionsSection).toBeInTheDocument();
expect(within(solutionsSection).getAllByRole("article")).toHaveLength(4);
expect(within(solutionsSection).getByText("C++ / CSP-J / GESP 课程体系")).toBeInTheDocument();
```

Add `within` to the Testing Library import:

```ts
import { render, screen, within } from "@testing-library/react";
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/components/HomeSections.test.tsx`

Expected: FAIL until the section has `role="region"`/accessible name and `solutions` has exactly four items from Task 1.

**Step 3: Replace generic `CardList` with `SolutionsBento`**

In `HomeSections.tsx`, remove or stop using `CardList` for solutions. Add a local component:

```tsx
function SolutionsBento() {
  return (
    <div className={styles.solutionsBento}>
      {solutions.map((item, index) => (
        <article className={styles.solutionCard} key={item.title}>
          <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <ul className={styles.tagList}>
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
```

**Step 4: Update the solutions section wrapper**

Change the section opening tag to provide a region name:

```tsx
<section className={styles.section} aria-labelledby="solutions-title" role="region">
```

Render `<SolutionsBento />` instead of `<CardList items={solutions} />`.

**Step 5: Add bento CSS**

In `HomeSections.module.css`, add:

- `.solutionsBento`: 4-card bento grid with asymmetric spans on desktop.
- `.solutionCard`: white cards, no borders, `border-radius: var(--radius-md)`, `box-shadow: var(--shadow-card)`, large padding, tags pinned near bottom with flex/grid layout.
- `.solutionCard:hover`: `transform: translateY(-2px)`, `box-shadow: var(--shadow-card-hover)`.
- `.solutionCard:nth-child(1)`: span two columns or rows for bento hierarchy.
- `.cardNumber`: muted mono-like small label using `var(--color-text-muted)`.
- `.tagList`: list-style none, pill tags with `var(--color-surface-soft)`.

**Step 6: Remove solution usage of old `.grid`/`.card` if no longer needed**

Do not delete `.grid`/`.card` yet if products or cases still use them. Only stop the solutions section from relying on them.

**Step 7: Run focused test**

Run: `npm test -- src/components/HomeSections.test.tsx`

Expected: PASS.

**Step 8: Commit**

```bash
git add src/components/HomeSections.tsx src/components/HomeSections.module.css src/components/HomeSections.test.tsx
git commit -m "style: add apple-like solutions bento grid"
```

---

### Task 7: Products 2x2 Platform Cards

**Files:**
- Modify: `src/components/HomeSections.tsx:106-112`
- Modify: `src/components/HomeSections.module.css`
- Modify: `src/components/HomeSections.test.tsx`
- Test: `src/components/HomeSections.test.tsx`

**Step 1: Add products structure test**

In `src/components/HomeSections.test.tsx`, add:

```tsx
const productsSection = screen.getByRole("region", { name: "产品与平台" });
expect(within(productsSection).getAllByRole("article")).toHaveLength(4);
expect(within(productsSection).getByText("Online Judge")).toBeInTheDocument();
expect(within(productsSection).getByText("文旅智慧运营中台")).toBeInTheDocument();
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/components/HomeSections.test.tsx`

Expected: FAIL until the products section has `role="region"` and renders the new structure.

**Step 3: Add `ProductsGrid` component**

In `HomeSections.tsx`, add:

```tsx
function ProductsGrid() {
  return (
    <div className={styles.productsGrid}>
      {products.map((item) => (
        <article className={styles.productCard} key={item.title}>
          <div className={styles.productCopy}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul className={styles.tagList}>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className={styles.productMockup} aria-hidden="true">
            <span />
            <strong>{item.title.slice(0, 2)}</strong>
            <i />
            <i />
          </div>
        </article>
      ))}
    </div>
  );
}
```

**Step 4: Update products section wrapper and render**

Add `role="region"` to the products section and render `<ProductsGrid />` instead of `<CardList items={products} />`.

**Step 5: Add product CSS**

In `HomeSections.module.css`, add:

- `.productsGrid`: `grid-template-columns: repeat(2, minmax(0, 1fr))`.
- `.productCard`: internal two-column split, white card, no border, radius `var(--radius-md)`, overflow hidden, soft shadow.
- `.productCopy`: vertical layout with tags at bottom.
- `.productMockup`: light `var(--color-skeleton)` mock UI panel floating over a soft blue-tinted background using `rgba(0, 102, 204, 0.06)`.
- Use pseudo-elements or child spans/i for fake screenshot bars/cards; keep them `aria-hidden`.

**Step 6: Run focused test**

Run: `npm test -- src/components/HomeSections.test.tsx`

Expected: PASS.

**Step 7: Run typecheck**

Run: `npm run typecheck`

Expected: PASS.

**Step 8: Commit**

```bash
git add src/components/HomeSections.tsx src/components/HomeSections.module.css src/components/HomeSections.test.tsx
git commit -m "style: add product platform cards"
```

---

### Task 8: Cases 3x2 Grid and Partners Logo Wall

**Files:**
- Modify: `src/components/HomeSections.tsx:114-140`
- Modify: `src/components/HomeSections.module.css`
- Modify: `src/components/HomeSections.test.tsx`
- Test: `src/components/HomeSections.test.tsx`
- Test: `src/app/static-pages.test.tsx`

**Step 1: Add cases and partners structure tests**

In `src/components/HomeSections.test.tsx`, add:

```tsx
const casesSection = screen.getByRole("region", { name: "案例成果" });
expect(within(casesSection).getAllByRole("article")).toHaveLength(6);
expect(within(casesSection).getByText("职校")).toBeInTheDocument();
expect(within(casesSection).getByText("码头文旅数字化运营")).toBeInTheDocument();

const partnersSection = screen.getByRole("region", { name: "合作伙伴" });
expect(within(partnersSection).getByText("天津市滨海新区泰达第一中学")).toBeInTheDocument();
expect(within(partnersSection).getByText("天津大学教育学院")).toBeInTheDocument();
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/components/HomeSections.test.tsx`

Expected: FAIL until cases render structured titles/labels and the sections have accessible region names.

**Step 3: Update cases section JSX**

Change cases section to:

```tsx
<section className={styles.section} aria-labelledby="cases-title" role="region">
  <div className={styles.sectionHeader}>...</div>
  <div className={styles.casesGrid}>
    {cases.map((item) => (
      <article className={styles.caseCard} key={item.title}>
        <div className={styles.caseImage} aria-hidden="true" />
        <span className={styles.caseLabel}>{item.label}</span>
        <div className={styles.caseCopy}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <strong>{item.outcome}</strong>
        </div>
      </article>
    ))}
  </div>
</section>
```

**Step 4: Update partners section wrapper**

Add `role="region"` to the partners section. Keep the existing partner text list from `partnerGroups.flatMap(...).slice(0, 12)` unless the design requires more names later.

**Step 5: Add cases CSS**

In `HomeSections.module.css`, add:

- `.casesGrid`: `grid-template-columns: repeat(3, minmax(0, 1fr))`.
- `.caseCard`: position relative, white, no border, radius `var(--radius-md)`, overflow hidden, shadow.
- `.caseImage`: top image placeholder/skeleton using `var(--color-skeleton)`, soft gradient, fixed min-height.
- `.caseLabel`: pill overlapping lower image corner, background `var(--color-surface)`, text `var(--color-accent)`.
- `.caseCopy`: padding.
- `.caseCopy strong`: outcome line with primary text.

**Step 6: Add partners CSS**

Update `.partnerGrid` and `.partner`:

- `.partnerGrid`: four-column text/logo wall.
- `.partner`: no border, no heavy shadow, text color `var(--color-text)`, opacity `0.4`, grayscale-like minimal state.
- `.partner:hover`: opacity `1`, no aggressive movement.

**Step 7: Remove remaining old `.grid`/`.card` homepage dependencies**

After solutions, products, and cases use dedicated classes, delete old `.grid` and `.card` rules from `HomeSections.module.css` unless another homepage block still uses them.

**Step 8: Run focused tests**

Run: `npm test -- src/components/HomeSections.test.tsx src/app/static-pages.test.tsx`

Expected: PASS.

**Step 9: Commit**

```bash
git add src/components/HomeSections.tsx src/components/HomeSections.module.css src/components/HomeSections.test.tsx
git commit -m "style: add case cards and partner logo wall"
```

---

### Task 9: About Panel and Bottom CTA Band

**Files:**
- Modify: `src/components/HomeSections.tsx:142-160`
- Modify: `src/components/HomeSections.module.css`
- Modify: `src/components/HomeSections.test.tsx`
- Test: `src/components/HomeSections.test.tsx`

**Step 1: Add bottom CTA copy test**

In `src/components/HomeSections.test.tsx`, assert the approved CTA band text:

```tsx
expect(
  screen.getByRole("heading", { name: "让业务结构更清晰，让项目落地更高效" }),
).toBeInTheDocument();
```

**Step 2: Run test to verify it fails**

Run: `npm test -- src/components/HomeSections.test.tsx`

Expected: FAIL because the current CTA heading is `共同探索 AI 时代的计算机教育与场景数字化解决方案`.

**Step 3: Update CTA JSX copy and actions**

Replace the bottom CTA section with:

```tsx
<section className={styles.cta} aria-labelledby="final-cta-title">
  <p className={styles.ctaEyebrow}>Ready for implementation</p>
  <h2 id="final-cta-title">让业务结构更清晰，让项目落地更高效</h2>
  <p>欢迎学校、职业院校、教育集团、文旅机构、产业方与投资机构联系我们。</p>
  <div className={styles.actions}>
    <Link className={styles.primary} href="/contact">
      联系合作
    </Link>
    <Link className={styles.secondaryOnDark} href="/cases">
      查看案例
    </Link>
  </div>
</section>
```

**Step 4: Refine about panel CSS**

Update `.aboutPanel` to remain a quiet white editorial card with `var(--radius-md)`, `var(--shadow-card)`, and no blue/green gradient.

**Step 5: Rewrite CTA CSS as a solid premium band**

In `HomeSections.module.css`:

- `.cta`: full or container-width band using `background: var(--color-accent)` or a very soft blue gradient, large radius `var(--radius-lg)`, white text, generous padding.
- `.cta h2`: crisp white, very large, negative letter spacing.
- `.cta p`: white with opacity.
- `.ctaEyebrow`: uppercase/small label with white opacity.
- `.secondaryOnDark`: white/transparent pill for the secondary CTA.
- Avoid borders unless using subtle `rgba(255,255,255,0.22)`.

**Step 6: Run focused test**

Run: `npm test -- src/components/HomeSections.test.tsx`

Expected: PASS.

**Step 7: Commit**

```bash
git add src/components/HomeSections.tsx src/components/HomeSections.module.css src/components/HomeSections.test.tsx
git commit -m "style: add focused bottom cta band"
```

---

### Task 10: Static Page CSS Alignment

**Files:**
- Modify: `src/components/StaticPage.module.css:1-223`
- Test: `src/app/static-pages.test.tsx`

**Step 1: Run static page baseline tests**

Run: `npm test -- src/app/static-pages.test.tsx`

Expected: PASS before visual-only changes.

**Step 2: Replace hardcoded colors and radii with global tokens**

In `src/components/StaticPage.module.css`, update all visual constants to use tokens from `src/app/globals.css`:

- `#102033` -> `var(--color-text)`
- `#52677f`, `#64748b`, similar muted blues -> `var(--color-text-muted)`
- `#1d4ed8` -> `var(--color-accent)`
- `#ffffff` -> `var(--color-surface)`
- `#f5f8fc` or `rgba(... light panels ...)` -> `var(--color-surface-soft)`
- `1.25rem`, `1.5rem`, `2rem` radii -> `var(--radius-sm)` or `var(--radius-md)`
- card shadows -> `var(--shadow-card)` and `var(--shadow-card-hover)`

**Step 3: Remove old gradient underline treatment**

Delete `.hero::after` or change it to a subtle neutral separator only if needed. The design spec forbids hard decorative separation; prefer whitespace.

**Step 4: Keep layout behavior unchanged**

Do not restructure static pages in this task. Only align their CSS so navigating away from the redesigned homepage still feels part of the same system.

**Step 5: Run static tests**

Run: `npm test -- src/app/static-pages.test.tsx`

Expected: PASS.

**Step 6: Commit**

```bash
git add src/components/StaticPage.module.css
git commit -m "style: align static pages with apple-like tokens"
```

---

### Task 11: Responsive Pass and CSS Cleanup

**Files:**
- Modify: `src/components/HomeSections.module.css`
- Modify: `src/components/AppShell.module.css`
- Modify: `src/components/StaticPage.module.css` if responsive issues remain
- Test: `src/components/HomeSections.test.tsx`
- Test: `src/app/static-pages.test.tsx`

**Step 1: Audit for hardcoded visual values**

Search CSS files manually or with ripgrep:

```bash
rg "#[0-9a-fA-F]{3,8}|rgba\(|rgb\(" src/app/globals.css src/components/*.module.css
```

Expected: `globals.css` contains the palette definitions. CSS Modules should only contain `rgba()` when it is intentionally alpha-compositing token-adjacent values such as white glass or shadow definitions that cannot use hex tokens directly. Replace avoidable hardcoded colors with variables.

**Step 2: Audit obsolete class references**

Search for old classes removed from JSX:

```bash
rg "systemGrid|signalPanel|signalBars|CardList|className=\{styles\.grid\}|className=\{styles\.card\}" src/components/HomeSections.tsx src/components/HomeSections.module.css
```

Expected: no obsolete references unless intentionally retained.

**Step 3: Add/adjust desktop responsive CSS**

Ensure these desktop layouts match the design:

- Hero: two columns.
- Solutions: bento grid.
- Products: 2x2 wide cards.
- Cases: 3x2 grid.
- Partners: four-column logo wall.
- CTA: strong full-width/container band.

**Step 4: Add/adjust tablet CSS**

At `max-width: 960px`:

- Hero becomes one column.
- Metrics become three or two columns.
- Solutions/products/cases become two columns where readable.
- Product cards can stack internally if narrow.

**Step 5: Add/adjust mobile CSS**

At `max-width: 620px`:

- All major grids become one column.
- Section padding remains generous but not wasteful.
- Header links wrap without horizontal scrolling.
- CTA buttons stack or wrap.

**Step 6: Run focused tests**

Run: `npm test -- src/components/HomeSections.test.tsx src/app/static-pages.test.tsx`

Expected: PASS.

**Step 7: Run typecheck**

Run: `npm run typecheck`

Expected: PASS.

**Step 8: Commit**

```bash
git add src/components/HomeSections.module.css src/components/AppShell.module.css src/components/StaticPage.module.css
git commit -m "style: polish responsive apple-like layout"
```

---

### Task 12: Final Verification

**Files:**
- No planned source changes. Modify only if verification exposes a concrete issue.

**Step 1: Run unit and component tests**

Run: `npm test`

Expected: PASS for all Vitest suites:

- `src/content/site.test.ts`
- `src/components/HomeSections.test.tsx`
- `src/app/page.test.tsx`
- `src/app/static-pages.test.tsx`

**Step 2: Run TypeScript check**

Run: `npm run typecheck`

Expected: PASS.

**Step 3: Run lint**

Run: `npm run lint`

Expected: PASS.

**Step 4: Run production build**

Run: `npm run build`

Expected: PASS.

**Step 5: Run Playwright navigation test**

Run: `npm run test:e2e`

Expected: PASS. If Playwright reports missing browser binaries, run the install command it prints, then rerun `npm run test:e2e`.

**Step 6: Optional visual sanity check in browser**

Run: `npm run dev`, open the homepage, and check:

- Frosted header is borderless and readable.
- Hero is a two-column split on desktop.
- Solutions show four bento cards.
- Products show four split platform cards.
- Cases show six cards with image placeholders and overlapping labels.
- Partner names are subdued until hover.
- Bottom CTA reads `让业务结构更清晰，让项目落地更高效`.
- No horizontal scroll at mobile widths.

**Step 7: Inspect git status**

Run: `git status --short`

Expected: only intended files changed.

**Step 8: Final commit if any verification fixes were made**

```bash
git add src/content/site.ts src/content/site.test.ts src/app src/components tests/e2e/navigation.spec.ts
git commit -m "fix: resolve apple-like redesign verification issues"
```

Only run this commit if Task 12 required additional fixes. Do not create an empty commit.
