import { caseArtMap } from "../components/caseArt";
import { CtaPanel, PageHero, PartnersBand } from "../components/primitives";
import { caseStudies, casesPage } from "../content/site";

export default function CasesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "首页", href: "/" }, { label: "案例成果" }]}
        title={casesPage.title}
        lead={casesPage.lead}
      />

      <section className="section" data-od-id="cases-grid">
        <div className="container stack">
          <div className="grid-2">
            {caseStudies.map((caseStudy) => {
              const Art = caseArtMap[caseStudy.art];
              return (
                <article className="case-card card reveal" id={caseStudy.id} key={caseStudy.id} data-od-id={caseStudy.id}>
                  <div className="case-art" aria-hidden="true">
                    <Art />
                  </div>
                  <span className="tag case-type">{caseStudy.type}</span>
                  <h3>{caseStudy.title}</h3>
                  <p>{caseStudy.description}</p>
                  <dl className="fact-list">
                    <div className="fact">
                      <dt>服务内容</dt>
                      <dd>{caseStudy.service}</dd>
                    </div>
                    <div className="fact">
                      <dt>交付成果</dt>
                      <dd>{caseStudy.deliver}</dd>
                    </div>
                  </dl>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <PartnersBand />
      <CtaPanel content={casesPage.cta} />
    </>
  );
}
