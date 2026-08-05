import { about, capabilities, capabilitiesHeading, defaultCta } from "../content/site";
import { CtaPanel, FactList, PageHero, PartnersBand } from "../components/primitives";

export default function AboutPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "首页", href: "/" }, { label: "关于我们" }]} title={about.title} lead={about.lead} />

      <section className="section band" data-od-id="about-facts">
        <div className="container about-grid reveal">
          <div className="stack">
            <h2>{about.factsHead.title}</h2>
            <p className="lead">{about.factsHead.lead}</p>
          </div>
          <FactList facts={about.facts} />
        </div>
      </section>

      <section className="section" id="capabilities" data-od-id="capabilities">
        <div className="container stack">
          <div className="section-head reveal">
            <div>
              <h2>{capabilitiesHeading.title}</h2>
            </div>
            <p className="lead">{capabilitiesHeading.lead}</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability reveal" key={capability.no}>
                <h3>
                  <span className="num">{capability.no}</span>
                  {capability.title}
                </h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PartnersBand />
      <CtaPanel content={defaultCta} />
    </>
  );
}
