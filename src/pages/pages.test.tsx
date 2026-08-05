import { describe, expect, it } from "vitest";

import { renderRoute } from "../test/renderRoute";
import { staticRoutes } from "../staticRoutes";

describe("静态路由渲染", () => {
  it.each(staticRoutes.map((route) => [route.path, route.title] as const))(
    "渲染 %s 且 h1 与页脚完整",
    async (path) => {
      const { container } = await renderRoute(path);

      const heading = container.querySelector("h1");
      expect(heading?.textContent?.trim()).toBeTruthy();

      expect(container.querySelector(".topnav")).toBeTruthy();
      expect(container.querySelector(".pagefoot")).toBeTruthy();
      expect(container.textContent).toContain("执理科技");
      expect(container.textContent).toContain("contact@zhili-edu.com");
    },
  );

  it("首页包含三张业务卡与案例 teaser", async () => {
    const { container } = await renderRoute("/");

    expect(container.textContent).toContain("教育科技");
    expect(container.textContent).toContain("消费科技");
    expect(container.textContent).toContain("运营服务");
    expect(container.textContent).toContain("滨海游船码头票务系统");
  });

  it("案例页渲染 5 个真实项目与线稿", async () => {
    const { container } = await renderRoute("/cases");

    const cards = container.querySelectorAll(".case-card");
    expect(cards.length).toBe(5);
    expect(container.querySelectorAll(".case-art svg").length).toBe(5);
    expect(container.textContent).toContain("服务内容");
    expect(container.textContent).toContain("交付成果");
  });
});
