import type { InternalRoute } from "./content/site";

export type StaticRoute = {
  path: InternalRoute;
  title: string;
  description: string;
};

/**
 * 静态导出路由表：scripts/emit-static-routes.mjs 依据此表
 * 在 out/ 下生成每个路由的完整 HTML（含独立 title / description）。
 * title 与 description 与定稿静态站逐页一致。
 */
export const staticRoutes = [
  {
    path: "/",
    title: "执理科技 · 以科技连接教育、消费与城市运营场景",
    description:
      "执理科技：融合教育数字化、AI 技术服务、消费场景运营与平台化产品建设的综合型科技运营企业，服务政府、学校、企业与城市消费场景。",
  },
  {
    path: "/about",
    title: "关于我们 · 执理科技",
    description:
      "执理科技成立于 2021 年，从信息学奥赛教育出发，延展到 AIGC 教育、区域教育数字化、文旅票务与民生平台监理，提供研发、内容、运营、交付一体化服务。",
  },
  {
    path: "/business",
    title: "业务领域 · 执理科技",
    description:
      "教育科技、消费科技与运营服务三类业务共享同一套平台研发、AI 应用与运营交付能力，分别落在教育、消费与城市运营场景。",
  },
  {
    path: "/education-tech",
    title: "教育科技 · 执理科技",
    description:
      "面向学校与区域教育主管部门的 AI 教育建设：课程体系、教师成长、课后服务、AIGC 应用与数据评价，沉淀为可交付的教育数字化能力。",
  },
  {
    path: "/consumer-tech",
    title: "消费科技 · 执理科技",
    description:
      "面向消费与文旅场景的数字化：票务触点、会员系统、营销工具与供应链技术平台，连接触达、购买、核销、会员、复购到数据复盘的连续链路。",
  },
  {
    path: "/operations-service",
    title: "运营服务 · 执理科技",
    description:
      "平台建成后的持续经营能力：文旅运营、活动赛事、城市消费项目与内容渠道运营，连接平台、内容、渠道、活动与项目管理。",
  },
  {
    path: "/solutions",
    title: "解决方案 · 执理科技",
    description:
      "面向政府园区、学校教育、消费文旅与企业平台的解决方案：诊断现状、设计建设内容、约定交付与运营方式的统一逻辑。",
  },
  {
    path: "/cases",
    title: "案例成果 · 执理科技",
    description:
      "执理科技真实项目案例：滨海游船码头票务系统、滨海新区校外教育平台、阳光采购与乐易来技术监理、小蛙鲸 AIGC 教学平台、知理信息学教学平台。",
  },
  {
    path: "/contact",
    title: "联系我们 · 执理科技",
    description: "联系执理科技：留下你的项目需求，我们从方案、研发到运营交付共同推进。邮箱 contact@zhili-edu.com。",
  },
] as const satisfies readonly StaticRoute[];
