import Link from "next/link";

import {
  about,
  cases,
  hero,
  metrics,
  partnerGroups,
  products,
  solutions,
} from "../content/site";
import AppShell from "./AppShell";
import styles from "./HomeSections.module.css";

function CardList({ items }: { items: typeof solutions }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <article className={styles.card} key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <ul>
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function SolutionsBento() {
  return (
    <div className={styles.solutionsBento}>
      {solutions.map((item, index) => (
        <article className={styles.solutionCard} key={item.title}>
          <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <ul className={styles.tagList}>
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function ProductsGrid() {
  return (
    <div className={styles.productsGrid}>
      {products.map((item) => (
        <article className={styles.productCard} key={item.title}>
          <div className={styles.productCopy}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul className={styles.tagList}>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className={styles.productMockup} aria-hidden="true">
            <span />
            <strong>{item.title.slice(0, 2)}</strong>
            <i />
            <i />
          </div>
        </article>
      ))}
    </div>
  );
}

export default function HomeSections() {
  return (
    <AppShell>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>
          <div className={styles.actions}>
            {hero.actions.map((action, index) => (
              <Link
                className={index === 0 ? styles.primary : styles.secondary}
                href={action.href}
                aria-label={action.label === "联系合作" ? "联系合作，查看合作入口" : undefined}
                key={action.href}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
        <aside className={styles.heroSystem} aria-labelledby="hero-system-title">
          <div className={styles.systemHalo} aria-hidden="true" />
          <div className={styles.systemTopline}>
            <span>Zhili AI Stack</span>
            <strong>Online</strong>
          </div>
          <h2 id="hero-system-title">AI 教育能力系统</h2>
          <p>平台 × 内容 × 运营</p>
          <div className={styles.architectureMap}>
            <div>
              <span>Digital Capabilities</span>
              <strong>课程研发 / AIGC / 数据平台</strong>
            </div>
            <i aria-hidden="true" />
            <div>
              <span>Physical Implementation</span>
              <strong>学校 / 职校 / 文旅场景</strong>
            </div>
          </div>
          <div className={styles.systemFooter}>
            <span>K-12</span>
            <span>Vocational</span>
            <span>Culture Travel</span>
          </div>
        </aside>
      </section>

      <section className={styles.section} aria-labelledby="metrics-title">
        <div className={styles.sectionHeader}>
          <h2 id="metrics-title">真实场景打磨出的教育科技能力</h2>
          <p>从线下教学、进校服务到平台研发和赛事技术运维，用持续交付验证能力。</p>
        </div>
        <ul className={styles.metrics} aria-label="执理能力指标">
          {metrics.map((metric) => (
            <li className={styles.metric} key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="solutions-title" role="region">
        <div className={styles.sectionHeader}>
          <h2 id="solutions-title">四大解决方案</h2>
          <p>围绕 K-12、职教、区域教育和科技研学，形成平台、内容、师资与运营一体化服务。</p>
        </div>
        <SolutionsBento />
      </section>

      <section className={styles.section} aria-labelledby="products-title" role="region">
        <div className={styles.sectionHeader}>
          <h2 id="products-title">产品与平台</h2>
          <p>把真实教育和场景交付沉淀为可复用的平台能力。</p>
        </div>
        <ProductsGrid />
      </section>

      <section className={styles.section} aria-labelledby="cases-title">
        <div className={styles.sectionHeader}>
          <h2 id="cases-title">案例成果</h2>
          <p>以学校合作、平台交付、运营服务和码头文旅数字化构成可信背书。</p>
        </div>
        <div className={styles.grid}>
          {cases.map((item) => (
            <article className={styles.card} key={item.title}>
              <p>{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="partners-title">
        <div className={styles.sectionHeader}>
          <h2 id="partners-title">合作伙伴</h2>
          <p>与教育、文旅、算力、学术和出版生态伙伴协同建设 AI 时代计算机教育。</p>
        </div>
        <div className={styles.partnerGrid}>
          {partnerGroups.flatMap((group) => group.partners).slice(0, 12).map((partner) => (
            <div className={styles.partner} key={partner}>
              {partner}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="about-title">
        <div className={styles.sectionHeader}>
          <h2 id="about-title">关于执理</h2>
          <p>{about.description}</p>
        </div>
        <article className={styles.aboutPanel}>
          <h3>我们的愿景</h3>
          <p>{about.vision}</p>
          <p>{about.ecosystemDescription}</p>
        </article>
      </section>

      <section className={styles.cta}>
        <h2>共同探索 AI 时代的计算机教育与场景数字化解决方案</h2>
        <p>欢迎学校、职业院校、教育集团、文旅机构、产业方与投资机构联系我们。</p>
        <Link className={styles.primary} href="/contact" aria-label="联系合作，提交合作意向">
          联系合作
        </Link>
      </section>
    </AppShell>
  );
}
