import { describe, expect, it } from "vitest";

import {
  businessDetailPages,
  businessMenu,
  businessPage,
  caseStudies,
  navLinks,
  siteMeta,
} from "./site";
import { staticRoutes } from "../staticRoutes";

const routePaths = new Set(staticRoutes.map((route) => route.path));

describe("站点内容与路由一致性", () => {
  it("联系邮箱为唯一的 contact@zhili-edu.com", () => {
    expect(siteMeta.email).toBe("contact@zhili-edu.com");
  });

  it("主导航与业务下拉都落在已注册的静态路由上", () => {
    for (const link of navLinks) {
      expect(routePaths.has(link.href)).toBe(true);
    }
    for (const item of businessMenu) {
      expect(routePaths.has(item.href)).toBe(true);
    }
  });

  it("案例数据为 5 个真实项目，且每卡含服务内容与交付成果", () => {
    expect(caseStudies).toHaveLength(5);
    for (const caseStudy of caseStudies) {
      expect(caseStudy.service.trim().length).toBeGreaterThan(0);
      expect(caseStudy.deliver.trim().length).toBeGreaterThan(0);
      expect(caseStudy.id.startsWith("case-")).toBe(true);
    }
  });

  it("业务总览与三个详情页结构完整", () => {
    expect(businessPage.blocks).toHaveLength(3);
    expect(Object.keys(businessDetailPages)).toEqual(["education", "consumer", "operations"]);
    for (const page of Object.values(businessDetailPages)) {
      expect(page.modules).toHaveLength(4);
      expect(page.scope.facts).toHaveLength(4);
    }
  });

  it("文案不含否定对比表述", () => {
    const banned = ["不是", "并非", "避免", "不等于", "不堆砌", "不停留"];
    const corpus = JSON.stringify({ siteMeta, navLinks, businessMenu, businessPage, businessDetailPages, caseStudies });
    for (const phrase of banned) {
      expect(corpus).not.toContain(phrase);
    }
  });
});
