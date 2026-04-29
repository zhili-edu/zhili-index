import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomeSections from "./HomeSections";

describe("HomeSections", () => {
  it("renders official navigation and homepage content from the content model", () => {
    render(<HomeSections />);

    expect(screen.getByLabelText("执理教育科技首页")).toHaveAttribute("href", "/");
    expect(screen.getByRole("navigation", { name: "官网导航" })).toBeInTheDocument();
    expect(
      screen
        .getAllByRole("link", { name: "联系合作" })
        .some((link) => link.getAttribute("href") === "/contact"),
    ).toBe(true);
    expect(screen.getByRole("link", { name: "解决方案" })).toHaveAttribute(
      "href",
      "/solutions",
    );
    expect(screen.getByText("K-12 信息学奥赛与人工智能教育")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "了解解决方案" })).toHaveAttribute(
      "href",
      "/solutions",
    );
    expect(screen.getByRole("link", { name: "查看案例成果" })).toHaveAttribute(
      "href",
      "/cases",
    );
    expect(screen.getByRole("heading", { name: "AI 教育能力系统" })).toBeInTheDocument();
    expect(screen.getByText("平台 × 内容 × 运营")).toBeInTheDocument();
    expect(screen.getByText("Digital Capabilities")).toBeInTheDocument();
    expect(screen.getByText("Physical Implementation")).toBeInTheDocument();
    expect(screen.getByText("2021")).toBeInTheDocument();
    expect(screen.getByText("7 项")).toBeInTheDocument();
    const solutionsSection = screen.getByRole("region", { name: "四大解决方案" });
    expect(solutionsSection).toBeInTheDocument();
    expect(within(solutionsSection).getAllByRole("article")).toHaveLength(4);
    expect(within(solutionsSection).getByText("C++ / CSP-J / GESP 课程体系")).toBeInTheDocument();
    expect(screen.getAllByText("职教 AIGC 实训平台").length).toBeGreaterThanOrEqual(1);
    const productsSection = screen.getByRole("region", { name: "产品与平台" });
    expect(within(productsSection).getAllByRole("article")).toHaveLength(4);
    expect(within(productsSection).getByText("Online Judge")).toBeInTheDocument();
    expect(within(productsSection).getByText("文旅智慧运营中台")).toBeInTheDocument();
    const casesSection = screen.getByRole("region", { name: "案例成果" });
    expect(within(casesSection).getAllByRole("article")).toHaveLength(6);
    expect(within(casesSection).getByText("职校")).toBeInTheDocument();
    expect(within(casesSection).getByText("码头文旅数字化运营")).toBeInTheDocument();

    const partnersSection = screen.getByRole("region", { name: "合作伙伴" });
    expect(within(partnersSection).getByText("天津市滨海新区泰达第一中学")).toBeInTheDocument();
    expect(within(partnersSection).getByText("天津大学教育学院")).toBeInTheDocument();
    expect(screen.getByText("执理信息学奥赛学习平台")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "关于执理" })).toBeInTheDocument();
    expect(screen.getByText(/团队起步于 2019 年/)).toBeInTheDocument();
    expect(screen.getByText(/教育 \+ 科技/)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "让业务结构更清晰，让项目落地更高效" }),
    ).toBeInTheDocument();
    expect(
      screen
        .getAllByRole("link", { name: "联系合作" })
        .some((link) => link.getAttribute("href") === "/contact"),
    ).toBe(true);
  });
});
