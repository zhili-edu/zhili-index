import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AboutPage from "./about/page";
import CasesPage from "./cases/page";
import ContactPage from "./contact/page";
import PartnersPage from "./partners/page";
import ProductsPage from "./products/page";
import SolutionsPage from "./solutions/page";

describe("static official website pages", () => {
  it("renders the solutions page", () => {
    render(<SolutionsPage />);
    expect(screen.getByRole("heading", { name: "解决方案" })).toBeInTheDocument();
    expect(screen.getByText("教育综合体运营")).toBeInTheDocument();
  });

  it("renders the products page", () => {
    render(<ProductsPage />);
    expect(screen.getByRole("heading", { name: "产品与平台" })).toBeInTheDocument();
    expect(screen.getByText("研途有答案")).toBeInTheDocument();
  });

  it("renders the cases page", () => {
    render(<CasesPage />);
    expect(screen.getByRole("heading", { name: "案例成果" })).toBeInTheDocument();
    expect(screen.getByText(/文旅数字化重点落在码头/)).toBeInTheDocument();
  });

  it("renders the partners page", () => {
    render(<PartnersPage />);
    expect(screen.getByRole("heading", { name: "合作伙伴" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "教育集团与学校" })).toBeInTheDocument();
    expect(screen.getByText("天津市滨海新区泰达第一中学")).toBeInTheDocument();
    expect(screen.getByText("天津城市建设管理职业技术学院")).toBeInTheDocument();
  });

  it("renders the about page", () => {
    render(<AboutPage />);
    expect(screen.getByRole("heading", { name: "关于我们" })).toBeInTheDocument();
    expect(screen.getAllByText(/执着理想/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByRole("heading", { name: "业务主体与生态" })).toBeInTheDocument();
    expect(screen.getByText("计算蔚蓝少儿编程")).toBeInTheDocument();
    expect(screen.getAllByText(/新媒体运营/).length).toBeGreaterThanOrEqual(1);
  });

  it("renders the contact page", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { name: "联系我们" })).toBeInTheDocument();
    expect(screen.getByText("投资与产业合作")).toBeInTheDocument();
    expect(screen.queryByText(/请围绕该合作方向联系执理团队/)).not.toBeInTheDocument();
    expect(screen.getByText("联系人：闫鑫")).toBeInTheDocument();
    expect(screen.getByText("公司：执理（天津）教育科技有限公司")).toBeInTheDocument();
    expect(screen.getByText("地址：天津经济技术开发区")).toBeInTheDocument();
  });
});
