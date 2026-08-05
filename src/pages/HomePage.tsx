import {
  capabilitiesHeading,
  caseStudies,
  defaultCta,
  home,
  homeArchitecture,
  homeBusinessCards,
} from "../content/site";
import { FeatureIcon, HeroBackdrop } from "../components/caseArt";
import { CtaPanel, FactList, PartnersBand } from "../components/primitives";
import { SiteLink } from "../components/SiteLink";

export default function HomePage() {
  const teaserCases = caseStudies.slice(0, 4);

  return (
    <>
      <section className="section hero" id="hero" data-od-id="hero">
        <HeroBackdrop />
        <div className="container hero-split">
          <div className="stack reveal">
            <p className="eyebrow">{home.eyebrow}</p>
            <h1>{home.title}</h1>
            <p className="lead">{home.lead}</p>
            <div className="hero-cta">
              <SiteLink className="btn btn-primary" to={home.ctaPrimary.href}>
                {home.ctaPrimary.label}
              </SiteLink>
              <SiteLink className="btn btn-secondary btn-arrow" to={home.ctaSecondary.href}>
                {home.ctaSecondary.label}
              </SiteLink>
            </div>
            <div className="trust-strip" aria-label="真实业务基础">
              {home.trustTags.map((tag) => (
                <span className="tag" key={"label" in tag ? tag.label : tag.num}>
                  {"label" in tag && tag.label ? (
                    tag.label
                  ) : (
                    <>
                      {tag.before}
                      <span className="num">{tag.num}</span>
                      {tag.after}
                    </>
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="architecture card reveal" aria-label={homeArchitecture.ariaLabel}>
            {homeArchitecture.layers.map((layer) => (
              <div className="arch-layer" key={layer.name}>
                <strong>{layer.name}</strong>
                <div className="arch-node-grid">
                  {layer.nodes.map((node) => (
                    <span className="arch-node" key={node}>
                      {node}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="arch-core">
              <strong>{homeArchitecture.core.name}</strong>
              <div className="arch-core-tags">
                {homeArchitecture.core.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section band" id="business" data-od-id="business">
        <div className="container stack">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">{home.businessHead.eyebrow}</p>
              <h2>{home.businessHead.title}</h2>
            </div>
            <p className="lead">{home.businessHead.lead}</p>
          </div>
          <div className="grid-3">
            {homeBusinessCards.map((card) => (
              <SiteLink key={card.id} className="feature card link-card reveal" to={card.href} data-od-id={card.id}>
                <div className="feature-mark">
                  <FeatureIcon name={card.icon} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className="link-arrow">{card.linkLabel}</span>
              </SiteLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section" data-od-id="capabilities-teaser">
        <div className="container about-grid reveal">
          <div className="stack">
            <h2>{capabilitiesHeading.title}</h2>
            <p className="lead">{capabilitiesHeading.lead}</p>
            <SiteLink className="link-arrow" to={home.capabilitiesTeaser.href}>
              {home.capabilitiesTeaser.linkLabel}
            </SiteLink>
          </div>
          <FactList facts={home.capabilitiesTeaser.facts} />
        </div>
      </section>

      <section className="section band" data-od-id="solutions-teaser">
        <div className="container stack">
          <div className="section-head reveal">
            <div>
              <h2>{home.solutionsTeaser.title}</h2>
            </div>
            <p className="lead">{home.solutionsTeaser.lead}</p>
          </div>
          <div className="grid-4">
            {home.solutionsTeaser.cards.map((card) => (
              <SiteLink key={card.hash} className="card link-card reveal" to={`/solutions#${card.hash}`}>
                <span className="tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </SiteLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section" data-od-id="cases-teaser">
        <div className="container stack">
          <div className="section-head reveal">
            <div>
              <h2>{home.casesTeaser.title}</h2>
            </div>
            <p className="lead">{home.casesTeaser.lead}</p>
          </div>
          <div className="grid-4">
            {teaserCases.map((caseStudy) => (
              <SiteLink key={caseStudy.id} className="card link-card reveal" to={`/cases#${caseStudy.id}`}>
                <span className="tag">{caseStudy.type}</span>
                <h3>{caseStudy.title}</h3>
                <p>{caseStudy.teaser}</p>
              </SiteLink>
            ))}
          </div>
          <div className="reveal">
            <SiteLink className="link-arrow" to="/cases">
              {home.casesTeaser.moreLabel}
            </SiteLink>
          </div>
        </div>
      </section>

      <PartnersBand />
      <CtaPanel content={defaultCta} />
    </>
  );
}
