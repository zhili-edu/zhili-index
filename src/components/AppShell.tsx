import type { ReactNode } from "react";
import Link from "next/link";

import { navigation } from "../content/site";
import styles from "./AppShell.module.css";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <header className={styles.nav}>
        <Link className={styles.brand} href="/" aria-label="北京执理教育科技有限公司首页">
          <span className={styles.mark}>执</span>
          <span>北京执理教育科技有限公司</span>
        </Link>
        <nav className={styles.links} aria-label="官网导航">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>执着理想，让每个人平等地享受高质量的计算机教育。</p>
      </footer>
    </div>
  );
}
