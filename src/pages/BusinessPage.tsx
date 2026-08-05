import { businessPage } from "../content/site";
import { CtaPanel, FactList, PageHero } from "../components/primitives";
import { SiteLink } from "../components/SiteLink";

export default function BusinessPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "首页", href: "/" }, { label: "业务领域" }]}
        title={businessPage.title}
        lead={businessPage.lead}
      />

      {businessPage.blocks.map((block, index) => (
        <section
          className={`section${index % 2 === 0 ? " band" : ""}`}
          id={block.id}
          key={block.id}
          data-od-id={`business-${block.id}`}
        >
          <div className="container about-grid reveal">
            <div className="stack">
              <p className="eyebrow">{block.eyebrow}</p>
              <h2>{block.title}</h2>
              <p className="lead">{block.lead}</p>
              <SiteLink className="link-arrow" to={block.link.href}>
                {block.link.label}
              </SiteLink>
            </div>
            <FactList facts={block.facts} />
          </div>
        </section>
      ))}

      <CtaPanel content={businessPage.cta} />
    </>
  );
}
