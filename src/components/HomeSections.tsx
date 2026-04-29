import Image from "next/image";
import Link from "next/link";

import {
  about,
  cases,
  hero,
  metrics,
  partnerGroups,
  solutions,
} from "../content/site";
import AppShell from "./AppShell";
import styles from "./HomeSections.module.css";

function SolutionsBento() {
  return (
    <div className={styles.solutionsBento}>
      {solutions.map((item, index) => (
        <article className={styles.solutionCard} key={item.title}>
          <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p className={index === 0 ? styles.featuredSolutionDescription : undefined}>
            {item.description}
          </p>
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

export default function HomeSections() {
  return (
    <AppShell>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 className={styles.title} aria-label={hero.title.join("")}>
            {hero.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
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
          <p>围绕区域校内外教育协同，形成平台建设、课程供给、运营支持与数据服务一体化能力。</p>
        </div>
        <SolutionsBento />
      </section>

      <section className={styles.section} aria-labelledby="cases-title" role="region">
        <div className={styles.sectionHeader}>
          <h2 id="cases-title">案例成果</h2>
          <p>以学校合作、平台交付、运营服务和码头文旅数字化构成可信背书。</p>
        </div>
        <div className={styles.casesGrid}>
          {cases.map((item) => (
            <article className={styles.caseCard} key={item.title}>
              <div className={styles.caseMedia}>
                <Image
                  className={styles.caseImage}
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={1600}
                  height={1000}
                  sizes="(max-width: 620px) 100vw, (max-width: 960px) 50vw, 33vw"
                />
                <span className={styles.caseLabel}>{item.label}</span>
              </div>
              <div className={styles.caseCopy}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <strong>{item.outcome}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="partners-title" role="region">
        <div className={styles.sectionHeader}>
          <h2 id="partners-title">合作伙伴</h2>
          <p>与教育集团、学校、文旅平台、算力企业、学术机构和出版生态伙伴协同建设教育科技能力。</p>
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

      <section className={styles.cta} aria-labelledby="final-cta-title">
        <p className={styles.ctaEyebrow}>Ready for implementation</p>
          <h2 id="final-cta-title">
            <span>让业务结构更清晰</span>
            <span>让项目落地更高效</span>
          </h2>
        <p>欢迎学校、教育集团、公共教育场馆、文旅机构、产业方与投资机构联系我们。</p>
        <div className={styles.actions}>
          <Link className={styles.primaryOnDark} href="/cases">
            查看案例
          </Link>
          <Link className={styles.secondaryOnDark} href="/partners">
            查看伙伴
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
