# Zhili Design System

执理科技企业官网设计系统 · 唯一事实来源。Token 契约见 `colors_and_type.css`，机器可读档案见 `brand.json`。

## 0. Product & Source Context

- **产品**：执理科技（Zhili Technology）官网，9 个路由：首页 / 关于我们 / 业务领域 / 教育科技 / 消费科技 / 运营服务 / 解决方案 / 案例成果 / 联系我们。
- **受众**：政府与园区、学校与教育主管部门、消费与文旅项目方、企业平台客户。
- **证据来源**：定稿静态站 9 页（后重构为 `src/` React 实现）；公司真实素材（成立于 2021 年、信息学奥赛根基、7 项软著、5 个真实项目、6 家合作机构）。
- **技术载体**：Vite + React + TanStack Router，构建时 SSR 输出每路由一份完整 HTML。

## 1. Visual Theme & Atmosphere

咨询公司质感的企业级表达：白底为主、银灰分区带制造节奏，发丝线（1px 边框）承担全部分隔职责，阴影退到几乎不可见。唯一的彩色是科技蓝，它只出现在需要行动或定位的地方；石墨深蓝以 CTA 面板形式在每页收尾，压住整页重心。

信息结构高于装饰：eyebrow（等宽小字）→ 大标题 → 导语 → 事实清单 → 卡片网格 → 深色 CTA。所有页面共用这一套分区语法，首页只做概览，详情全部下沉子页。

**关键特征**

- 白底 `--bg` + 银灰带 `--slate-band` 交替分区，相邻分区以 1px 发丝线相接；
- 科技蓝 `#2a5db0` 是唯一强调色，每屏 ≤ 2 处；
- 石墨 `--ink: #15233b` 用于 CTA 面板与首页 Hero 的“技术底座”块；
- 等宽字体承担眉标、面包屑、事实清单的 dt、年份与一切数字；
- 案例卡以抽象线稿（单色 SVG，蓝 + 石墨 + 灰）代替照片；
- 圆角克制：控件 6–8px，卡片 12px，标签全圆。

## 2. Color

| Token | 值 | 角色 |
|---|---|---|
| `--bg` / `--surface` | `#ffffff` | 页面底 / 卡片面 |
| `--slate-band` | `#f6f8fb` | 银灰分区带 |
| `--blue-soft` | `#eef4ff` | 选中/悬停的极浅蓝洗色 |
| `--fg` / `--ink` | `#15233b` | 石墨深蓝：正文与标题墨色、深色面板底 |
| `--muted` | `#64748b` | 次级文字（导语、卡片描述、页脚） |
| `--border` | `#e5e7eb` | 发丝线：卡片、分区、表格行 |
| `--accent` | `#2a5db0` | 科技蓝：唯一强调色 |
| `--accent-on` | `#ffffff` | 强调色上的前景 |
| `--accent-hover` / `--accent-active` | accent + 10% / 18% 白 | 主按钮 hover / active |
| `--success` / `--warn` / `--danger` | `#16a34a` / `#d97706` / `#dc2626` | 仅表单与状态语义 |

### Token roles — use / never use

- `--accent`：主 CTA、眉标、link-arrow、focus 环、事实清单 dt。**禁止**用于大面积填充、第二强调、hover 前景。
- `--muted`：次级文字。**禁止**作为任何 hover 后的前景（hover 必须加深，禁止淡化）。
- `--ink`：标题墨色与深色面板底。**禁止**用作正文背景渐变。
- `--slate-band`：偶数分区底。**禁止**用于卡片内容背景。
- 深色面板内的次级按钮：透明底 + 30% 白描边，hover 提亮描边与 10% 白洗底，前景恒为白。

## 3. Typography

| 角色 | 规格 |
|---|---|
| H1 | `clamp(44px, 5vw, 68px)` / 1.04 / `-0.02em` |
| H2 | `clamp(30px, 3.4vw, 48px)` / 1.1 / `-0.02em` |
| H3 | `24px` / 1.25 / `-0.01em` |
| lead | `20px` / 1.65 / `--muted`，行宽 ≤ 58ch |
| 正文 | `16px` / 1.5 |
| 卡片描述 | `14px` / `--muted` |
| 眉标 eyebrow | 等宽 `12px` / `0.1em` / 全大写 / `--accent` |
| meta / 面包屑 / dt | 等宽 `12px` / `0.04em` |

- 字体栈：`--font-display` 与 `--font-body` 同为 CJK 系统无衬线（Geist → PingFang SC → Hiragino Sans GB → Microsoft YaHei）；层级完全由字号、字重、颜色承担；
- 等宽 `--font-mono` 是第二声部：数据、编号、路径、日期；
- 数字一律 `.num`（tabular-nums）。

## 4. Spacing

8px 基准：`--space-1…12` = 4/8/12/16/20/24/32/48px。分区节奏：桌面 `96px`、平板 `64px`、手机 `48px`。容器 `1280px`，gutter 桌面 24px / 移动 16px。锚点目标 `scroll-margin-top: 92px`（粘性导航高度补偿）。

## 5. Layout & Composition

- **分区语法**：`section.section`（白）与 `section.section.band`（银灰）交替；相邻分区顶边 1px 发丝线；
- **页首**：子页一律 `.page-hero` = 面包屑 + H1 + lead；首页为 `.hero` = 左文案 + 右“中台架构”抽象卡；
- **事实清单**：`dl.fact-list`，dt 96px 等宽蓝 + dd 14px，行间发丝线——全站信息密度最高的组件；
- **网格**：`grid-3`（业务卡）/ `grid-4`(模块与 teaser) / `grid-2`（案例大卡、about-grid 右栏）；1080px 降 2 列，920px 降 1 列；
- **CTA 收尾**：每页最后一个分区是石墨 `.cta-panel`（居中标题 + lead + 双按钮），全站统一文案结构。

## 6. Components

| 组件 | 契约 |
|---|---|
| `.btn-primary` | 蓝底白字，44px 高，hover 提亮 10%，active 下沉 1px |
| `.btn-secondary` | 白底描边，hover 描边加深至墨色；深色面板内为透明白描边变体 |
| `.nav-trigger` + `.nav-menu` | 业务下拉：悬停 + 点击均可展开，菜单顶部 10px 隐形悬停桥，Escape/点击外部关闭，aria-expanded 与视觉同步 |
| `.menu-toggle` | 44×44，开关切换汉堡/叉图标，aria-label 同步 |
| `.card` | 白底、发丝线、12px 圆角；仅可点击卡（`a.link-card` / `.feature` / `.case-card`）有 hover 抬升（描边偏蓝 + 微阴影 + translateY(-2px)） |
| `.solution-tab` | 左列纵排 tab，选中 = 墨描边 + 浅蓝洗底，aria-selected，方向键漫游，hash 深链（#gov/#school/#consume/#enterprise） |
| `.fact` | dt/dd 两列；移动端降单列 |
| `.tag` | 全圆描边小标签，灰字白底 |
| `.form-card` | 内联校验：aria-invalid 红描边、错误文案 role=alert、聚焦首个错误项、成功态 role=status 可聚焦 |
| `.skip-link` | 焦点时从顶部滑出 |

### Component state contract

任何状态变化必须成对定义前景 + 背景；hover 后的文字对比度 ≥ 默认态；正文 ≥ 4.5:1、大字与图标 ≥ 3:1。唯一允许降低对比的状态是 disabled（本站未使用）。所有可聚焦元素有 `--focus-ring`（2px 底环 + 4px 蓝环）。

## 7. Motion & Interaction

- 全局预算：150–200ms，`cubic-bezier(0.2, 0, 0, 1)`；
- 滚动渐显 `.reveal`：opacity + translateY(12px)，520ms，IntersectionObserver（threshold 0.16），**1.5s 强制显示兜底**，`prefers-reduced-motion` 下直接可见；
- 卡片 hover 抬升 2px、按钮 active 下沉 1px、箭头 `→` 位移 2–3px；
- 禁止视差、禁止入场编排超过“渐显”一档。

## 8. Voice & Brand

- 语言：简体中文，肯定句式陈述能力与交付（禁“不是…也不是…”“避免…”式否定对比）；
- 一切文案基于真实素材：真实项目名、真实合作机构、真实能力范围；**禁止编造指标数字**；
- 数字出现时必须可溯源（成立年份、软著数量等）并用等宽字体；
- 联系邮箱固定 `contact@zhili-edu.com`。

### Copy do / don't

- ✅ “执理科技是一支把平台、内容、运营与交付连接在一起的产业服务团队”
- ✅ “以项目类型、服务内容与交付成果说明企业能力边界”
- ❌ “我们不只是技术公司”（否定对比）
- ❌ “效率提升 300%”（编造指标）

## 9. Anti-patterns

1. 紫/蓝渐变洗底、霓虹光效、玻璃拟态堆叠；
2. emoji 或手绘小人当功能图标（本站用 1.6px 单色线稿 SVG）；
3. 同一视口出现两个实心主按钮；
4. 彩色左边条 + 圆角卡的“AI 仪表板”造型；
5. hover 把文字变灰/变浅；
6. 无数据支撑的指标、口号堆叠；
7. 引入第二种强调色；
8. 超过 12px 的卡片圆角（仅标签与 CTA 用全圆）。
