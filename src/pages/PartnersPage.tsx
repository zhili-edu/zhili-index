import StaticPage, { staticPageStyles as styles } from "../components/StaticPage";
import { partnerGroups } from "../content/site";

export default function PartnersPage() {
  return (
    <StaticPage
      eyebrow="Partners"
      title="合作伙伴"
      description="与教育集团、学校、文旅平台、算力企业、学术机构和出版生态协同建设教育科技能力。"
    >
      <div className={styles.partnerGroups}>
        {partnerGroups.map((group) => (
          <section
            className={`${styles.partnerGroup} ${
              group.partners.length === 3 ? styles.partnerGroupCompact : ""
            }`}
            key={group.title}
          >
            <div>
              <h2>{group.title}</h2>
              <p>{group.description}</p>
            </div>
            <ul>
              {group.partners.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </StaticPage>
  );
}
