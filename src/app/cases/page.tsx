import StaticPage, { staticPageStyles as styles } from "../../components/StaticPage";
import { cases } from "../../content/site";

export default function CasesPage() {
  return (
    <StaticPage
      eyebrow="Proof"
      title="案例成果"
      description="用学校合作、教育综合体运营、区域智慧教育平台、智慧研学平台、新媒体运营和码头文旅数字化交付证明执理的真实能力。"
    >
      <div className={styles.grid}>
        {cases.map((item) => (
          <section className={styles.card} key={item.title}>
            <p>{item.label}</p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.outcome}</p>
          </section>
        ))}
      </div>
    </StaticPage>
  );
}
