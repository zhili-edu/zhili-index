import StaticPage, { staticPageStyles as styles } from "../../components/StaticPage";
import { solutions } from "../../content/site";

export default function SolutionsPage() {
  return (
    <StaticPage
      eyebrow="Solutions"
      title="解决方案"
      description="围绕青少年科技教育、课后服务数字化、校外教育平台建设和课程运营，提供平台、内容、师资与运营一体化方案。"
    >
      <div className={styles.grid}>
        {solutions.map((solution) => (
          <section className={styles.card} key={solution.title}>
            <h2>{solution.title}</h2>
            <p>{solution.description}</p>
            <ul>
              {solution.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </StaticPage>
  );
}
