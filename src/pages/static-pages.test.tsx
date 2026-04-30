import { screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { renderRoute } from "../test/renderRoute";

const staticPageCss = readFileSync("src/components/StaticPage.module.css", "utf8");

describe("static official website pages", () => {
  it("renders the solutions page", async () => {
    await renderRoute("/solutions");
    expect(screen.getByRole("heading", { name: "解决方案" })).toBeInTheDocument();
    expect(screen.getByText("课后服务数字化平台")).toBeInTheDocument();
    expect(screen.getByText("青少年宫教务平台")).toBeInTheDocument();
    expect(screen.getByText("AIGC 教育教学平台")).toBeInTheDocument();
    expect(screen.getByText(/文旅研学平台研途有答案/)).toBeInTheDocument();
    expect(screen.getByText("研途有答案")).toBeInTheDocument();
    expect(screen.getByText("收缴费")).toBeInTheDocument();
  });

  it("renders the cases page", async () => {
    await renderRoute("/cases");
    expect(screen.getByRole("heading", { name: "案例成果" })).toBeInTheDocument();
    expect(
      screen.getByText("以真实项目沉淀教育科技与消费科技的交付经验，呈现课程研发、场景运营、平台建设和系统监理等代表性成果。"),
    ).toBeInTheDocument();
    expect(screen.queryByText(/第一行呈现教育科技/)).not.toBeInTheDocument();
    expect(screen.getByText("区本课程研发建设")).toBeInTheDocument();
    expect(screen.getByText(/推动信息学奥赛编程教育进学校/)).toBeInTheDocument();
    expect(screen.getByText("教育培训机构运营")).toBeInTheDocument();
    expect(screen.getByText(/生态城社工部/)).toBeInTheDocument();
    expect(screen.getByText(/三个社区闲置场地/)).toBeInTheDocument();
    expect(screen.getByText("文旅票务与渠道整合")).toBeInTheDocument();
    expect(screen.getByText(/微信小程序、抖音、美团、携程、旅惠卡和线下窗口/)).toBeInTheDocument();
    expect(screen.getByText("民生平台监理项目")).toBeInTheDocument();
    expect(screen.getByText("小城建 AIGC 平台")).toBeInTheDocument();
    expect(screen.getByText(/技术验收、问题跟踪/)).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(6);
    expect(screen.getByRole("img", { name: /信息学奥赛教材出版/ })).toHaveAttribute(
      "src",
      expect.stringContaining("case-informatics-textbook.png"),
    );
    expect(document.querySelectorAll('[class*="_caseBody"]')).toHaveLength(6);
  });

  it("keeps case images inside fixed-ratio thumbnail frames", () => {
    expect(staticPageCss).toMatch(/\.caseMedia\s*{[\s\S]*?aspect-ratio:\s*16\s*\/\s*9;/);
    expect(staticPageCss).toMatch(/\.caseVisual\s*{[\s\S]*?height:\s*100%;/);
  });

  it("renders the partners page", async () => {
    await renderRoute("/partners");
    expect(screen.getByRole("heading", { name: "合作伙伴" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "教育集团与学校" })).toBeInTheDocument();
    expect(screen.getByText("天津经济技术开发区第一中学")).toBeInTheDocument();
    expect(screen.getByText("天津市教育科学研究院附属滨海泰达中学")).toBeInTheDocument();
    expect(screen.queryByText("天津市滨海新区滨旅游船码头发展有限公司")).not.toBeInTheDocument();
    expect(screen.getByText("天津城市建设管理职业技术学院")).toBeInTheDocument();
    const supplyChainSection = screen.getByRole("heading", {
      name: "产业与供应链伙伴",
    }).closest("section");
    expect(supplyChainSection?.className).toContain("partnerGroupCompact");
    expect(supplyChainSection?.querySelectorAll("li")).toHaveLength(3);
  });

  it("renders the about page", async () => {
    await renderRoute("/about");
    expect(screen.getByRole("heading", { name: "关于我们" })).toBeInTheDocument();
    expect(screen.getAllByText(/执着理想/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole("heading", { name: "业务主体与生态" })).toBeInTheDocument();
    expect(screen.getByText("计算蔚蓝少儿编程")).toBeInTheDocument();
    expect(screen.getByText("执理消费科技")).toBeInTheDocument();
    expect(screen.queryByText("Consumer-Tech Proof")).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "消费科技与系统底座" })).not.toBeInTheDocument();
    expect(screen.getAllByText(/新媒体运营/).length).toBeGreaterThanOrEqual(1);
  });
});
