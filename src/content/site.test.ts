import { describe, expect, it } from "vitest";

import {
  about,
  cases,
  hero,
  navigation,
  partnerGroups,
  solutions,
} from "./site";

describe("site content", () => {
  it("defines the five official website navigation items", () => {
    expect(navigation).toEqual([
      { label: "首页", href: "/" },
      { label: "解决方案", href: "/solutions" },
      { label: "案例成果", href: "/cases" },
      { label: "合作伙伴", href: "/partners" },
      { label: "关于我们", href: "/about" },
    ]);
    expect(navigation.some((item) => item.href === "/contact")).toBe(false);
    expect(navigation.some((item) => item.href === "/products")).toBe(false);
  });

  it("keeps the approved hero positioning", () => {
    expect(hero.eyebrow).toBe("执理集团 · 教育科技 × 消费科技 × 琢磨运营");
    expect(hero.title).toEqual(["青少年素质教育数字化", "区域服务商"]);
    expect(hero.subtitle).toBe(
      "执理教育聚焦青少年科技教育、课后服务数字化和校外教育平台建设，围绕政府、学校、教育集团和公共教育场馆的实际需求，提供“平台建设 + 课程供给 + 运营服务”的一体化解决方案。",
    );
    expect(hero.actions).toHaveLength(2);
    expect(hero.actions.some((action) => action.href === "/contact")).toBe(false);
  });

  it("models the four approved solution pillars", () => {
    expect(solutions.map((solution) => solution.title)).toEqual([
      "教育数字化解决方案",
      "课后服务数字化平台",
      "青少年宫教务平台",
      "AIGC 教育教学平台",
    ]);
    expect(solutions[0]?.description).toContain("文旅研学平台研途有答案");
    expect(solutions[0]?.description).toContain("渠道、平台、课程、资源与数据服务");
    expect(solutions[1]?.points).toEqual(["收缴费", "课程报名", "通知触达", "数据统计"]);
    expect(solutions).toHaveLength(4);
    expect(solutions.every((solution) => solution.points.length >= 3)).toBe(true);
  });

  it("models six key business cases with labels and outcomes", () => {
    expect(cases).toHaveLength(6);
    expect(cases[0]).toMatchObject({ label: "出版", title: "信息学奥赛教材出版" });
    expect(cases[1]).toMatchObject({ label: "区本课程", title: "区本课程研发建设" });
    expect(cases[2]).toMatchObject({ label: "机构运营", title: "教育培训机构运营" });
    expect(cases.map((item) => item.label)).toEqual([
      "出版",
      "区本课程",
      "机构运营",
      "文旅票务",
      "民生监理",
      "AI 应用",
    ]);
    expect(cases.map((item) => item.title)).toEqual([
      "信息学奥赛教材出版",
      "区本课程研发建设",
      "教育培训机构运营",
      "文旅票务与渠道整合",
      "民生平台监理项目",
      "小城建 AIGC 平台",
    ]);
    expect(cases.map((item) => item.imageSrc)).toEqual([
      "/images/cases/case-informatics-textbook.png",
      "/images/cases/case-school-curriculum.png",
      "/images/cases/case-coding-education.png",
      "/images/cases/case-tourism-ticketing.png",
      "/images/cases/case-public-service-supervision.png",
      "/images/cases/case-aigc-platform.png",
    ]);
    expect(cases.every((item) => item.imageAlt.includes(item.title))).toBe(true);
    expect(cases[0]?.description).toBe(
      "参与信息学奥赛系列教材研发，相关成果由清华大学出版社出版，并沉淀赛事命题、教学内容与平台技术运维经验。",
    );
    expect(cases[1]?.description).toBe(
      "联合泰达一中建设校本课程，推动信息学奥赛编程教育进学校，把教材研发、课程设计和进校服务串联成可复制的区本课程能力。",
    );
    expect(cases[2]?.description).toBe(
      "联合生态城社工部注册博雅社区促进服务中心，运营三个社区闲置场地，沉淀社区教育场景、空间运营和课程服务经验。",
    );
    expect(cases[3]?.description).toBe(
      "滨海游船系统将微信小程序、抖音、美团、携程、旅惠卡和线下窗口接入同一票务底座，统一商品、订单、票券、退款、检票和报表口径。",
    );
    expect(cases[4]?.description).toBe(
      "参与阳光采购平台一期/二期与乐易来小程序监理，重点覆盖技术验收、问题跟踪、接口联调、发布检查和交付把关。",
    );
    expect(cases[5]?.description).toBe(
      "围绕业务素材、提示词、文本、图片和内容生成流程，展示 AI 生成能力在业务系统中的落地应用，并覆盖人工审核、调整、应用和归档。",
    );
    expect(cases[1]?.description).toContain("联合泰达一中建设校本课程");
    expect(cases[1]?.description).toContain("信息学奥赛编程教育进学校");
    expect(cases[2]?.description).toContain("生态城社工部");
    expect(cases[2]?.description).toContain("博雅社区促进服务中心");
    expect(cases[2]?.description).toContain("三个社区闲置场地");
    expect(cases[3]?.description).toContain("微信小程序、抖音、美团、携程、旅惠卡和线下窗口");
    expect(cases[4]?.description).toContain("阳光采购平台一期/二期");
    expect(cases[4]?.description).toContain("乐易来小程序");
    expect(cases[5]?.description).toContain("AI 生成能力");
    expect(cases.map((item) => item.title)).not.toContain("区域智慧教育平台建设");
    expect(cases.map((item) => item.title)).not.toContain("区域智慧教育与研学平台");
    expect(cases.every((item) => item.outcome.length > 0)).toBe(true);
  });

  it("models the business ecosystem around education and technology", () => {
    expect(about.ecosystemDescription).toContain("教育 + 科技");
    expect(about.ecosystemDescription).toContain("教育科技 + 消费科技");
    expect(about.businessUnits.map((unit) => unit.name)).toEqual([
      "执理教育",
      "计算蔚蓝少儿编程",
      "执理消费科技",
      "琢磨运营",
    ]);
    expect(about.businessUnits[3]?.description).toContain("新媒体运营");
  });

  it("groups official partner names for clearer display", () => {
    expect(partnerGroups.map((group) => group.title)).toEqual([
      "重点合作伙伴",
      "教育集团与学校",
      "高校、科研与出版",
      "产业与供应链伙伴",
    ]);
    expect(partnerGroups[0]?.partners.slice(0, 3)).toEqual([
      "天津市天河计算机技术有限公司",
      "天津滨海文化旅游发展有限公司",
      "天津滨海教育发展集团有限公司",
    ]);
    const allPartners = partnerGroups.flatMap((group) => group.partners);
    expect(allPartners).not.toContain("天津市滨海新区滨旅游船码头发展有限公司");
    expect(allPartners).toContain("天津经济技术开发区第一中学");
    expect(allPartners).toContain("天津市教育科学研究院附属滨海泰达中学");
    const educationGroup = partnerGroups.find((group) => group.title === "教育集团与学校");
    const industryGroup = partnerGroups.find((group) => group.title === "产业与供应链伙伴");
    expect(partnerGroups[0]?.description).toBe(
      "集中呈现教育科技与消费科技两条业务线中的代表性共建伙伴，覆盖算力、文旅、教育集团与民生运营场景。",
    );
    expect(educationGroup?.partners).not.toContain("天津大学·教育学院");
    expect(educationGroup?.partners).not.toContain("天津大学教育学院");
    expect(industryGroup?.description).toContain("执理消费科技");
    expect(industryGroup?.description).toContain("消费场景");
    expect(allPartners).toContain("天津大学教育学院");
    expect(allPartners).not.toContain("天津市滨海新区塘沽远洋城小学");
    expect(allPartners.indexOf("天津市滨海新区泰达一中")).toBe(-1);
    expect(allPartners).toContain("天津城市建设管理职业技术学院");
  });
});
