import type { InternalRoute } from "./content/site";

export type StaticRoute = {
  path: InternalRoute;
  title: string;
  description: string;
};

export const staticRoutes = [
  {
    path: "/",
    title: "执理教育｜青少年素质教育数字化区域服务商",
    description:
      "执理教育聚焦青少年科技教育、课后服务数字化和校外教育平台建设，提供平台建设、课程供给与运营服务。",
  },
  {
    path: "/solutions",
    title: "解决方案｜执理教育",
    description: "执理教育提供教育数字化、课后服务、青少年宫教务和 AIGC 教学平台等一体化解决方案。",
  },
  {
    path: "/cases",
    title: "案例成果｜执理教育",
    description: "执理教育以课程研发、场景运营、平台建设和系统监理等真实项目沉淀教育科技交付经验。",
  },
  {
    path: "/partners",
    title: "合作伙伴｜执理教育",
    description:
      "执理教育与教育集团、学校、文旅平台、算力企业、学术机构和出版生态协同建设教育科技能力。",
  },
  {
    path: "/about",
    title: "关于我们｜执理教育",
    description: "了解执理教育的愿景、组织能力，以及教育科技、消费科技和新媒体运营组成的复合生态。",
  },
] as const satisfies readonly StaticRoute[];
