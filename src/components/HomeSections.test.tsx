import { screen, within } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { renderRoute } from "../test/renderRoute";

const homeSectionsCss = readFileSync("src/components/HomeSections.module.css", "utf8");

describe("HomeSections", () => {
  it("renders official navigation and homepage content from the content model", async () => {
    await renderRoute("/");

    expect(screen.getByLabelText("北京执理教育科技有限公司首页")).toHaveAttribute("href", "/");
    expect(screen.getByText("北京执理教育科技有限公司")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "官网导航" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "联系我们" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "产品与平台" })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "解决方案" })).toHaveAttribute("href", "/solutions");
    expect(screen.getByText("教育数字化解决方案")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "了解解决方案" })).toHaveAttribute(
      "href",
      "/solutions",
    );
    expect(screen.getByRole("link", { name: "查看案例成果" })).toHaveAttribute("href", "/cases");
    expect(screen.queryByRole("heading", { name: "平台 + 课程 + 运营" })).not.toBeInTheDocument();
    expect(screen.queryByText("校内外协同服务体系")).not.toBeInTheDocument();
    expect(screen.queryByText("Digital Platform")).not.toBeInTheDocument();
    expect(screen.queryByText("Program Operations")).not.toBeInTheDocument();
    expect(screen.queryByText("Zhili AI Stack")).not.toBeInTheDocument();
    expect(screen.getByText("2021")).toBeInTheDocument();
    expect(screen.getByText("7 项")).toBeInTheDocument();
    expect(screen.queryByText(/更加规范、高效、开放的青少年教育服务生态/)).not.toBeInTheDocument();
    const solutionsSection = screen.getByRole("region", { name: "四大解决方案" });
    expect(solutionsSection).toBeInTheDocument();
    expect(within(solutionsSection).getByText(/围绕滨海新区校外教育平台建设/).className).toContain(
      "featuredSolutionDescription",
    );
    expect(within(solutionsSection).getAllByRole("article")).toHaveLength(4);
    expect(within(solutionsSection).getByText("滨海新区校外教育平台")).toBeInTheDocument();
    expect(screen.getAllByText("课后服务数字化平台").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("青少年宫教务平台")).toBeInTheDocument();
    expect(screen.getByText("AIGC 教育教学平台")).toBeInTheDocument();
    expect(within(solutionsSection).getByText(/文旅研学平台研途有答案/)).toBeInTheDocument();
    expect(within(solutionsSection).getByText("研途有答案")).toBeInTheDocument();
    expect(within(solutionsSection).getByText("收缴费")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "青少年素质教育数字化区域服务商" }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("region", { name: "产品与平台" })).not.toBeInTheDocument();
    expect(screen.queryByText("课后服务教育平台")).not.toBeInTheDocument();
    expect(screen.queryByText("双业务多租户监管平台")).not.toBeInTheDocument();
    expect(screen.queryByText("文旅票务中台")).not.toBeInTheDocument();
    const casesSection = screen.getByRole("region", { name: "案例成果" });
    expect(within(casesSection).getAllByRole("article")).toHaveLength(7);
    expect(within(casesSection).getByText("信息学奥赛教材出版")).toBeInTheDocument();
    expect(within(casesSection).getByText("区本课程研发建设")).toBeInTheDocument();
    expect(within(casesSection).getByText(/联合泰达一中建设校本课程/)).toBeInTheDocument();
    expect(within(casesSection).getByText("教育培训机构运营")).toBeInTheDocument();
    expect(within(casesSection).getByText(/生态城社工部/)).toBeInTheDocument();
    expect(within(casesSection).getByText(/博雅社区促进服务中心/)).toBeInTheDocument();
    expect(within(casesSection).getByText(/三个社区闲置场地/)).toBeInTheDocument();
    expect(within(casesSection).getByText("文旅票务与渠道整合")).toBeInTheDocument();
    expect(within(casesSection).getByText("民生平台监理项目")).toBeInTheDocument();
    expect(within(casesSection).getByText("小城建 AIGC 平台")).toBeInTheDocument();
    expect(within(casesSection).getByText("全球出海合伙人首笔海外订单")).toBeInTheDocument();
    expect(within(casesSection).getByText(/印尼教育部 kording 采购资源/)).toBeInTheDocument();
    expect(within(casesSection).getAllByRole("img")).toHaveLength(7);
    expect(within(casesSection).getByRole("img", { name: /文旅票务与渠道整合/ })).toHaveAttribute(
      "src",
      expect.stringContaining("case-tourism-ticketing.png"),
    );
    expect(within(casesSection).queryByText("区域智慧教育平台建设")).not.toBeInTheDocument();
    expect(within(casesSection).queryByText("区域智慧教育与研学平台")).not.toBeInTheDocument();

    const partnersSection = screen.getByRole("region", { name: "合作伙伴" });
    const homepagePartners = within(partnersSection).getAllByText(/天津/);
    expect(homepagePartners[0]).toHaveTextContent("天津市天河计算机技术有限公司");
    expect(homepagePartners[1]).toHaveTextContent("天津滨海文化旅游发展有限公司");
    expect(
      within(partnersSection).queryByText("天津市滨海新区滨旅游船码头发展有限公司"),
    ).not.toBeInTheDocument();
    expect(within(partnersSection).getByText("天津滨海教育发展集团有限公司")).toBeInTheDocument();
    expect(within(partnersSection).getByText("天津滨海民生发展有限公司")).toBeInTheDocument();
    expect(screen.queryByText("课后服务教育平台")).not.toBeInTheDocument();
    expect(screen.queryByRole("region", { name: "技术能力" })).not.toBeInTheDocument();
    expect(screen.queryByText("系统建设能力")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "关于执理" })).toBeInTheDocument();
    expect(screen.getByText(/执理教育聚焦青少年科技教育/)).toBeInTheDocument();
    expect(screen.getByText(/教育 \+ 科技/)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "让业务结构更清晰让项目落地更高效" }),
    ).toBeInTheDocument();
    expect(screen.getByText("让业务结构更清晰")).toBeInTheDocument();
    expect(screen.getByText("让项目落地更高效")).toBeInTheDocument();
    expect(
      screen.getAllByRole("link").every((link) => link.getAttribute("href") !== "/contact"),
    ).toBe(true);
    expect(
      screen.getAllByRole("link").every((link) => link.getAttribute("href") !== "/products"),
    ).toBe(true);
  });

  it("keeps homepage case images inside fixed-ratio thumbnail frames", async () => {
    await renderRoute("/");

    const casesSection = screen.getByRole("region", { name: "案例成果" });
    expect(casesSection.querySelectorAll('[class*="_caseMedia"]')).toHaveLength(7);
    expect(homeSectionsCss).toMatch(/\.caseMedia\s*{[\s\S]*?aspect-ratio:\s*16\s*\/\s*10;/);
    expect(homeSectionsCss).toMatch(/\.caseImage\s*{[\s\S]*?height:\s*100%;/);
  });
});
