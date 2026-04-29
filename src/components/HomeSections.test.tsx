import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomeSections from "./HomeSections";

describe("HomeSections", () => {
  it("renders official navigation and homepage content from the content model", () => {
    render(<HomeSections />);

    expect(screen.getByLabelText("执理教育科技首页")).toHaveAttribute("href", "/");
    expect(screen.getByRole("navigation", { name: "官网导航" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "联系合作" })).toHaveAttribute("href", "/contact");
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
    expect(screen.getAllByText("职教 AIGC 实训平台").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("执理信息学奥赛学习平台")).toBeInTheDocument();
    expect(screen.getByText("天津市滨海新区泰达第一中学")).toBeInTheDocument();
    expect(screen.getByText("天津大学教育学院")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "关于执理" })).toBeInTheDocument();
    expect(screen.getByText(/团队起步于 2019 年/)).toBeInTheDocument();
    expect(screen.getByText(/教育 \+ 科技/)).toBeInTheDocument();
    expect(
      screen
        .getAllByRole("link", { name: "联系合作" })
        .some((link) => link.getAttribute("href") === "/contact"),
    ).toBe(true);
  });
});
