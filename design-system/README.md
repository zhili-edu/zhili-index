# Zhili Design System — 执理科技企业官网设计系统包

## Product Overview

**Zhili Design System** 是执理科技（Zhili Technology）企业官网的设计系统，提取自定稿的 9 页官网交付物（React + Vite 实现，`src/`），并沿用 Open Design 设计系统包的标准结构（参考 Zomio 设计系统包：`DESIGN.md` + `colors_and_type.css` + `brand.json` + `SKILL.md`）。

执理科技是一家综合型科技运营企业（教育数字化、AI 技术服务、消费场景运营、平台化产品建设）。系统只服务一个目标：**克制、高级、可信任的企业级表达**。

系统定义：

- **单一亮色主题**：白底 + 银灰分区带（`--slate-band`）交替，石墨深蓝 CTA 面板收尾；
- **单一强调色**：科技蓝 `#2a5db0`，每屏至多出现两处（眉标 + 主 CTA，或焦点环）；
- **发丝线体系**：`1px` 边框代替阴影做结构分隔，阴影仅在 hover 抬升时以极低透明度出现；
- **CJK 无衬线 + 等宽数据声部**：标题/正文用系统黑体栈，眉标、面包屑、数字用等宽字体；
- **咨询公司式信息结构**：eyebrow → 标题 → 导语 → 事实清单（dl）→ 卡片网格 → 深色 CTA。

## Package contents

```
design-system/
├── README.md               — 本文件：包概览与复用流程
├── DESIGN.md               — 完整系统规范（9 节，唯一事实来源）
├── SKILL.md                — 可调用的 agent skill：工作流、检查清单
├── brand.json              — 机器可读品牌档案（token 角色、voice、motion、反模式）
└── colors_and_type.css     — 可直接粘贴的 token + 基础排版原语
```

应用侧实现（本仓库）：

```
src/styles/globals.css      — colors_and_type.css 的完整应用版（含全部组件样式）
src/content/site.ts         — 全站文案数据层（真实素材，肯定句式）
src/components/             — AppShell / primitives / caseArt / SiteLink
src/pages/                  — 9 个路由页面
scripts/emit-static-routes.mjs — 构建时输出 9 份完整静态 HTML
```

## Reuse workflow

1. **Adopt**：把 `colors_and_type.css` 的 `:root` 块原样粘进新产物的第一个 `<style>`，全部取值走 `var(--*)`；
2. **Build**：按 `DESIGN.md` §5–§6 的布局签名与组件契约搭页面；新增页面遵循 eyebrow + 标题 + 导语的分区模式；
3. **Voice**：文案一律肯定句式、基于真实素材，禁止编造指标数字（见 DESIGN.md §8）；
4. **Verify**：交付前过一遍 `SKILL.md` 的检查清单（强调色预算、对比度、触控目标、无否定表述）。

## Hard rules（摘要）

- 强调色 `--accent` 每屏至多 2 处可见使用；
- 每个行动只有一个主按钮（实心蓝），其余入口为次级/幽灵/文字链；
- 禁止渐变洗底、紫蓝光效、3D 吉祥物、emoji 图标；
- 深色面板只用石墨 `--ink`，hover 用同系明度变化，禁止更换前景色导致对比下降；
- 触控目标 ≥ 44px；焦点环 `--focus-ring` 双环可见；
- 联系邮箱固定 `contact@zhili-edu.com`。
