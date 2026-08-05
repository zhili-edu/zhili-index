import { expect, test } from "@playwright/test";

test("首页可导航到案例页并查看真实项目", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("link", { name: "执理科技首页" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "以科技连接教育、消费与城市运营场景" })).toBeVisible();

  await page.getByRole("navigation", { name: "主导航" }).getByRole("link", { name: "案例成果" }).click();

  await expect(page).toHaveURL(/\/cases$/);
  await expect(page.getByRole("heading", { name: "案例成果以真实项目类型呈现" })).toBeVisible();
  await expect(page.getByText("滨海游船码头票务系统").first()).toBeVisible();
});

test("业务下拉可展开并进入教育科技页", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "业务领域" }).click();
  await page.getByRole("link", { name: "教育科技 AI 教育平台、课程体系、数据评价" }).click();

  await expect(page).toHaveURL(/\/education-tech$/);
  await expect(page.getByRole("heading", { name: "面向学校与区域的 AI 教育建设" })).toBeVisible();
});
