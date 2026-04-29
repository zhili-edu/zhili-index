import { describe, expect, it } from "vitest";

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

describe("site content", () => {
  it("defines the seven official website navigation items", () => {
    expect(navigation).toEqual([
      { label: "首页", href: "/" },
      { label: "解决方案", href: "/solutions" },
      { label: "产品与平台", href: "/products" },
      { label: "案例成果", href: "/cases" },
      { label: "合作伙伴", href: "/partners" },
      { label: "关于我们", href: "/about" },
      { label: "联系我们", href: "/contact" },
    ]);
  });

  it("keeps the approved hero positioning", () => {
    expect(hero.title).toBe("AI 驱动的计算机教育科技公司");
    expect(hero.subtitle).toContain("K-12");
    expect(hero.actions).toHaveLength(3);
  });

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

  it("offers cooperation-specific contact intents", () => {
    expect(contactIntents).toContain("学校课程合作");
    expect(contactIntents).toContain("职教 AIGC 平台试点");
    expect(contactIntents).toContain("投资与产业合作");
  });

  it("models the business ecosystem around education and technology", () => {
    expect(about.ecosystemDescription).toContain("教育 + 科技");
    expect(about.businessUnits.map((unit) => unit.name)).toEqual([
      "执理教育科技",
      "计算蔚蓝少儿编程",
      "执理消费科技",
      "琢磨运营",
    ]);
    expect(about.businessUnits[3]?.description).toContain("新媒体运营");
  });

  it("groups official partner names for clearer display", () => {
    expect(partnerGroups.map((group) => group.title)).toEqual([
      "教育集团与学校",
      "高校、科研与出版",
      "文旅与区域平台",
      "产业与供应链伙伴",
    ]);
    expect(partnerGroups.flatMap((group) => group.partners)).toContain("天津市滨海新区泰达第一中学");
    expect(partnerGroups.flatMap((group) => group.partners)).toContain(
      "天津城市建设管理职业技术学院",
    );
  });
});
