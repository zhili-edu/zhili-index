import StaticPage, { staticPageStyles as styles } from "../components/StaticPage";
import { cases } from "../content/site";

export default function CasesPage() {
  return (
    <StaticPage
      eyebrow="Proof"
      title="案例成果"
      description="以真实项目沉淀教育科技与消费科技的交付经验，呈现课程研发、场景运营、平台建设和系统监理等代表性成果。"
    >
      <div className={styles.caseGrid}>
        {cases.map((item) => (
          <section className={`${styles.card} ${styles.caseCard}`} key={item.title}>
            <div className={styles.caseMedia}>
              <img
                className={styles.caseVisual}
                src={item.imageSrc}
                alt={item.imageAlt}
                width={1600}
                height={900}
                sizes="(max-width: 760px) 100vw, 33vw"
                loading="lazy"
              />
              <p>{item.label}</p>
            </div>
            <div className={styles.caseBody}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.outcome}</p>
            </div>
          </section>
        ))}
      </div>
    </StaticPage>
  );
}
