import { expect, test } from "@playwright/test";

test("homepage navigation reaches cases page without contact route links", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("link", { name: "北京执理教育科技有限公司首页" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "青少年素质教育数字化区域服务商" }),
  ).toBeVisible();
  await expect(page.getByText(/执理教育聚焦青少年科技教育/)).toBeVisible();

  await expect(page.getByRole("link", { name: "联系我们" })).toHaveCount(0);
  await expect(page.locator('a[href="/contact"]')).toHaveCount(0);
  await expect(page.getByRole("link", { name: "产品与平台" })).toHaveCount(0);
  await expect(page.locator('a[href="/products"]')).toHaveCount(0);

  await page.getByRole("navigation", { name: "官网导航" }).getByRole("link", { name: "案例成果" }).click();

  await expect(page).toHaveURL(/\/cases$/);
  await expect(page.getByRole("heading", { name: "案例成果" })).toBeVisible();
  await expect(page.getByText("区本课程研发建设")).toBeVisible();
});
