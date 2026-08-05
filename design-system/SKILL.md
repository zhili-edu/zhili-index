---
name: zhili-design-system
description: 执理科技企业官网设计系统。在 zhili-index 仓库新增/修改页面、组件或文案时调用：token 契约、组件状态契约、文案规范与交付检查清单。
---

# Zhili Design System Skill

## When to use

- 在 zhili-index 仓库新增页面、分区或组件；
- 修改全站文案（必须过 §Voice 规则）；
- 评审现有实现是否偏离系统。

## Workflow

1. **读契约**：`DESIGN.md`（规范）→ `colors_and_type.css`（token）→ `src/styles/globals.css`（组件实现）。
2. **复用优先**：先用 `src/components/primitives.tsx`（PageHero / FactList / PartnersBand / CtaPanel）与既有分区语法拼页面；确需新组件时，沿用发丝线 + 12px 圆角 + 单色线稿语言，并同步更新 globals.css 与本文档。
3. **文案入数据层**：所有文案写进 `src/content/site.ts`，页面只做排版；新路由同步更新 `staticRoutes.ts` 的 title/description 与路由测试。
4. **验证**：`pnpm typecheck && pnpm test && pnpm build`；构建后抽查 `out/<route>/index.html` 的 SSR 内容完整。

## Token rules（摘要）

- 一切颜色走 `var(--*)`；禁止新增裸 hex；派生色只用 `color-mix()`；
- `--accent`（#2a5db0）每屏 ≤ 2 处可见使用；
- 每个行动只有一个实心主按钮；
- hover 只允许：背景明度变化、描边加深、阴影/位移——禁止把前景变浅。

## Voice rules

- 简体中文，肯定句式；禁“不是…也不是…”“避免…”式否定对比；
- 基于真实素材，禁编造指标数字；数字可溯源 + `.num` 等宽；
- 联系邮箱固定 `contact@zhili-edu.com`。

## Pre-delivery checklist

**P0（必须通过）**

- [ ] `pnpm typecheck` / `pnpm test` / `pnpm build` 全绿，9 份静态 HTML 全部输出；
- [ ] 新页面 SSR 后 `h1`、导航、页脚完整，无空白分区；
- [ ] 每屏强调色 ≤ 2 处、实心主按钮 = 1；
- [ ] 触控目标 ≥ 44px；focus 环可见；表单错误可聚焦；
- [ ] 文案无否定对比表述、无编造数字；
- [ ] 920px / 640px 断点单列回落，无横向滚动。

**P1（应当通过）**

- [ ] 分区遵循 白 ↔ 银灰带 交替 + 1px 发丝线接缝；
- [ ] 子页以 `.page-hero`（面包屑 + H1 + lead）开场，以 `.cta-panel` 收尾；
- [ ] 锚点深链（hash）可用且有 `scroll-margin-top` 补偿；
- [ ] `prefers-reduced-motion` 下渐显直接可见。

**P2（加分）**

- [ ] 新增线稿遵循 320×180、蓝 + 石墨 + 灰三色系；
- [ ] 等宽声部覆盖新增的数字/编号/路径。

## Recipes

- **新增子页**：复制 `BusinessDetailPage` 结构（PageHero → band 分区 facts → grid 模块 → CtaPanel band）→ 注册路由 + staticRoutes → 补渲染测试。
- **新增 tab/锚点**：参考 SolutionsPage 的 hash 深链模式（router state 读取 + `history.replaceState` 写回）。
- **新增表单**：参考 ContactPage（aria-invalid、role=alert、聚焦首个错误、成功态 role=status 可聚焦）。
