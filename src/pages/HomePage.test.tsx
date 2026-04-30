import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderRoute } from "../test/renderRoute";

describe("HomePage", () => {
  it("renders the official website brand position", async () => {
    await renderRoute("/");

    expect(
      screen.getByRole("heading", {
        name: /青少年素质教育数字化区域服务商/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "执理教育聚焦青少年科技教育、课后服务数字化和校外教育平台建设，围绕政府、学校、教育集团和公共教育场馆的实际需求，提供“平台建设 + 课程供给 + 运营服务”的一体化解决方案。",
      ),
    ).toBeInTheDocument();
  });
});
