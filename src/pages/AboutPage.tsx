import StaticPage, { staticPageStyles as styles } from "../components/StaticPage";
import { about } from "../content/site";

export default function AboutPage() {
  return (
    <StaticPage eyebrow="About Zhili" title="关于我们" description={about.description}>
      <div className={styles.grid}>
        <section className={styles.card}>
          <h2>愿景</h2>
          <p>{about.vision}</p>
        </section>
        <section className={styles.card}>
          <h2>组织能力</h2>
          <p>执理团队形成教研、技术、新媒体运营、商务与交付协同的复合组织能力。</p>
        </section>
      </div>
      <section className={styles.featureBlock}>
        <div>
          <p className={styles.kicker}>Education & Technology Ecosystem</p>
          <h2>业务主体与生态</h2>
          <p>{about.ecosystemDescription}</p>
        </div>
        <div className={styles.unitGrid}>
          {about.businessUnits.map((unit) => (
            <article className={styles.unitCard} key={unit.name}>
              <span>{unit.label}</span>
              <h3>{unit.name}</h3>
              <p>{unit.description}</p>
            </article>
          ))}
        </div>
      </section>
    </StaticPage>
  );
}
