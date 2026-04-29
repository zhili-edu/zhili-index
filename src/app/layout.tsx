import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "执理教育｜青少年素质教育数字化区域服务商",
  description:
    "执理教育聚焦青少年科技教育、课后服务数字化和校外教育平台建设，提供平台建设、课程供给与运营服务。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
