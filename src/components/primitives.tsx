import type { CtaPanelContent, Fact } from "../content/site";
import { partners, partnersHeading } from "../content/site";
import { SiteLink } from "./SiteLink";

export type Crumb = { label: string; href?: string };

export function PageHero({ crumbs, title, lead }: { crumbs: Crumb[]; title: string; lead: string }) {
  return (
    <section className="section page-hero" data-od-id="page-hero">
      <div className="container reveal">
        <nav className="breadcrumb" aria-label="面包屑">
          {crumbs.map((crumb, index) => (
            <span key={`${crumb.label}-${index}`} style={{ display: "contents" }}>
              {index > 0 && <span>/</span>}
              {crumb.href ? <SiteLink to={crumb.href}>{crumb.label}</SiteLink> : <>{crumb.label}</>}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}

export function FactList({ facts, className, style }: { facts: Fact[]; className?: string; style?: React.CSSProperties }) {
  return (
    <dl className={`fact-list${className ? ` ${className}` : ""}`} style={style}>
      {facts.map((fact) => (
        <div className="fact" key={fact.term}>
          <dt>{fact.term}</dt>
          <dd>{fact.detail}</dd>
        </div>
      ))}
    </dl>
  );
}

export function PartnersBand() {
  return (
    <section className="section band" data-od-id="partners">
      <div className="container reveal">
        <h2>{partnersHeading}</h2>
        <div className="partner-strip" aria-label="合作与项目相关机构">
          {partners.map((partner) => (
            <span className="partner" key={partner}>
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaPanel({ content, band = false }: { content: CtaPanelContent; band?: boolean }) {
  return (
    <section className={`section${band ? " band" : ""}`} data-od-id="cta-strip">
      <div className="container reveal">
        <div className="cta-panel">
          <h2>{content.title}</h2>
          <p className="lead">{content.lead}</p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <SiteLink className="btn btn-primary" to={content.primary.href}>
              {content.primary.label}
            </SiteLink>
            <SiteLink className="btn btn-secondary btn-arrow" to={content.secondary.href}>
              {content.secondary.label}
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}
