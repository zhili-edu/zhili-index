import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

import { solutionsPage } from "../content/site";
import { CtaPanel, PageHero } from "../components/primitives";

/**
 * 解决方案页：左侧 tab + 右侧面板。
 * 与定稿静态站一致的契约：点击/方向键切换、当前 tab 同步进 URL hash
 * （#gov / #school / #consume / #enterprise 可深链、可分享）。
 */
export default function SolutionsPage() {
  const tabs = solutionsPage.tabs;
  const rawHash = useRouterState({ select: (state) => state.location.hash });
  const hash = (rawHash ?? "").replace(/^#/, "");

  const [active, setActive] = useState(() => {
    const fromHash = tabs.find((tab) => tab.id === hash);
    return fromHash ? fromHash.id : tabs[0].id;
  });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  /* hash 深链同步（含 SPA 路由切换进入时） */
  useEffect(() => {
    if (!hash) return;
    const match = tabs.find((tab) => tab.id === hash);
    if (match) setActive(match.id);
  }, [hash, tabs]);

  const selectTab = (id: string, focus = false, updateHash = true) => {
    setActive(id);
    if (updateHash && typeof window !== "undefined") {
      window.history.replaceState(window.history.state, "", `#${id}`);
    }
    if (focus) {
      const index = tabs.findIndex((tab) => tab.id === id);
      tabRefs.current[index]?.focus();
    }
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    let next: number | null = null;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    if (next === null) return;
    event.preventDefault();
    selectTab(tabs[next].id, true);
  };

  return (
    <>
      <PageHero
        crumbs={[{ label: "首页", href: "/" }, { label: "解决方案" }]}
        title={solutionsPage.title}
        lead={solutionsPage.lead}
      />

      <section className="section" data-od-id="solutions">
        <div className="container">
          <div className="solutions-shell reveal">
            <div className="solution-tabs" role="tablist" aria-label={solutionsPage.tabsLabel}>
              {tabs.map((tab, index) => {
                const selected = tab.id === active;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    className="solution-tab"
                    type="button"
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={selected}
                    tabIndex={selected ? 0 : -1}
                    aria-controls={`solution-${tab.id}`}
                    onClick={() => selectTab(tab.id)}
                    onKeyDown={(event) => onKeyDown(event, index)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
            <div className="card soft-card">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`solution-panel${tab.id === active ? " active" : ""}`}
                  role="tabpanel"
                  id={`solution-${tab.id}`}
                  aria-labelledby={`tab-${tab.id}`}
                >
                  <h3>{tab.panelTitle}</h3>
                  <div className="solution-points">
                    {tab.points.map((point) => (
                      <div className="point" key={point.label}>
                        <strong>{point.label}</strong>
                        <p>{point.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section band" data-od-id="solution-detail">
        <div className="container stack">
          <div className="section-head reveal">
            <div>
              <h2>{solutionsPage.detailHead.title}</h2>
            </div>
            <p className="lead">{solutionsPage.detailHead.lead}</p>
          </div>
          <div className="grid-2">
            {solutionsPage.detailCards.map((card) => (
              <article className="card link-card reveal" id={card.id} key={card.id}>
                <span className="tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel content={solutionsPage.cta} />
    </>
  );
}
