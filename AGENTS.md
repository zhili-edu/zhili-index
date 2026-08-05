# PROJECT KNOWLEDGE BASE

**Updated:** 2026-08-05（React 重构 9 页官网定稿后）

## OVERVIEW

执理科技企业官网：Vite + React + TypeScript + TanStack Router，构建时 SSR 输出 9 份完整静态 HTML 到 `out/`。文案集中在 `src/content/site.ts`（真实素材、肯定句式），视觉契约在 `design-system/`（DESIGN.md + colors_and_type.css + brand.json + SKILL.md），应用样式在 `src/styles/globals.css`。

## STRUCTURE

```text
zhili-index/
├── design-system/                 # 设计系统包（规范/token/品牌档案/技能）
├── src/content/site.ts            # 全站文案数据层（导航、案例、解决方案、联系）
├── src/staticRoutes.ts            # 9 条静态导出路由 + 每页 title/description
├── src/router.tsx                 # TanStack Router 路由树（根组件 = AppShell）
├── src/main.tsx                   # 浏览器入口（hydrate / render）
├── src/entry-static.tsx           # 静态渲染入口
├── src/styles/globals.css         # 全站样式（设计系统应用版）
├── src/components/                # AppShell / primitives / caseArt / SiteLink
├── src/pages/                     # Home / About / Business / 三个业务详情 /
│                                  # Solutions / Cases / Contact
├── scripts/emit-static-routes.mjs # 构建后输出 out/<route>/index.html
├── public/logo-mark.svg           # 主标（导航/页脚）
├── public/favicon.svg             # 站点图标
└── tests/e2e/                     # Playwright 导航检查
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| 文案/案例/导航 | `src/content/site.ts` | 多数内容修改的第一站；禁编造数字 |
| 页面组合 | `src/pages/` | 用 primitives 拼分区，遵循分区语法 |
| 导航/页脚/交互 | `src/components/AppShell.tsx` | 下拉、移动抽屉、渐显、hash 滚动、title 同步 |
| 视觉契约 | `design-system/DESIGN.md` | token 角色、组件状态契约、文案规范 |
| 样式实现 | `src/styles/globals.css` | 全部组件样式；token 与 colors_and_type.css 对齐 |
| 静态导出 | `src/staticRoutes.ts`, `scripts/emit-static-routes.mjs` | 新路由必须同步此处 + 路由测试 |
| 测试 | `src/**/*.test.{ts,tsx}`, `tests/e2e/` | Vitest 内容/渲染；Playwright 导航 |
| 素材 | `执理官网内容素材整理.md`, `1.pdf`, 根目录图片 | 证据/输入，规范化后进入 site.ts |

## CONVENTIONS

- 使用 `pnpm`；脚本见 `package.json`。
- 内容修改走 `src/content/site.ts` 的类型化数据，页面不散落硬编码文案。
- 新增路由需同步：`router.tsx` + `staticRoutes.ts` + 渲染测试。
- 颜色一律 `var(--*)`；强调色 #2a5db0 每屏 ≤2 处；文案肯定句式。
- `out/`、`.next/` 是生成物，勿手改。

## COMMANDS

```bash
pnpm dev          # 本地开发（127.0.0.1:3000）
pnpm build        # vite build + 输出 9 份静态 HTML
pnpm typecheck
pnpm test         # Vitest（注意勿在 NODE_ENV=production 下跑）
pnpm test:e2e     # Playwright
pnpm lint
pnpm oss          # 部署：sync ./out → oss://zhili-index
```
