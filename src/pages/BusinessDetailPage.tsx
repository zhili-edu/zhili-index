import { businessDetailPages, type BusinessDetailPage } from "../content/site";
import { CtaPanel, FactList, PageHero } from "../components/primitives";

export function BusinessDetailContent({ page }: { page: BusinessDetailPage }) {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "首页", href: "/" },
          { label: page.breadcrumbParent.label, href: page.breadcrumbParent.href },
          { label: businessName(page) },
        ]}
        title={page.title}
        lead={page.lead}
      />

      <section className="section band" data-od-id={`${page.key}-scope`}>
        <div className="container about-grid reveal">
          <div className="stack">
            <h2>{page.scope.title}</h2>
            <p className="lead">{page.scope.lead}</p>
          </div>
          <FactList facts={page.scope.facts} />
        </div>
      </section>

      <section className="section" data-od-id={`${page.key}-modules`}>
        <div className="container stack">
          <div className="section-head reveal">
            <div>
              <h2>{page.modulesHead.title}</h2>
            </div>
            <p className="lead">{page.modulesHead.lead}</p>
          </div>
          <div className="grid-4">
            {page.modules.map((module) => (
              <article className="card link-card reveal" key={module.title}>
                <span className="tag">{module.tag}</span>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel content={page.cta} band />
    </>
  );
}

function businessName(page: BusinessDetailPage) {
  return page.key === "education" ? "教育科技" : page.key === "consumer" ? "消费科技" : "运营服务";
}

export function EducationTechPage() {
  return <BusinessDetailContent page={businessDetailPages.education} />;
}

export function ConsumerTechPage() {
  return <BusinessDetailContent page={businessDetailPages.consumer} />;
}

export function OperationsServicePage() {
  return <BusinessDetailContent page={businessDetailPages.operations} />;
}
