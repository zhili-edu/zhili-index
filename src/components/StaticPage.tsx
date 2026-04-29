import type { ReactNode } from "react";

import AppShell from "./AppShell";
import styles from "./StaticPage.module.css";

type StaticPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function StaticPage({
  eyebrow,
  title,
  description,
  children,
}: StaticPageProps) {
  return (
    <AppShell>
      <article className={styles.page}>
        <header className={styles.hero}>
          <p>{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </header>
        {children}
      </article>
    </AppShell>
  );
}

export { styles as staticPageStyles };
