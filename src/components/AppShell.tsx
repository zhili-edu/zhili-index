import { useEffect, useRef, useState } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";

import { businessMenu, navCta, navLinks, siteMeta } from "../content/site";
import { staticRoutes } from "../staticRoutes";
import { SiteLink } from "./SiteLink";

const isMobileViewport = () =>
  typeof window.matchMedia === "function" && window.matchMedia("(max-width: 920px)").matches;

/**
 * 全站外壳：skip-link、顶部导航（业务下拉 + 移动端抽屉）、页脚。
 * 交互行为与定稿静态站 assets/site.js 对齐：
 * 悬停/点击展开下拉、Escape 与点击外部关闭、滚动渐显（含 1.5s 兜底）、
 * 路由切换后的 hash 锚点滚动与 document.title 同步。
 */
export default function AppShell() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const rawHash = useRouterState({ select: (state) => state.location.hash });
  const hash = (rawHash ?? "").replace(/^#/, "");

  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  /* 路由变化：收起全部菜单 */
  useEffect(() => {
    setMobileOpen(false);
    setMenuOpen(false);
  }, [pathname, hash]);

  /* 同步 document.title 与 meta description */
  useEffect(() => {
    const route = staticRoutes.find((item) => item.path === pathname);
    if (!route) return;
    document.title = route.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", route.description);
  }, [pathname]);

  /* hash 锚点滚动（scroll-margin-top 已处理粘性导航偏移） */
  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(hash);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  /* 滚动渐显：IntersectionObserver + reduced-motion 短路 + 1.5s 强制显示兜底 */
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll(".reveal:not(.is-visible)"));
    if (targets.length === 0) return undefined;

    const reduceMotion =
      typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    targets.forEach((element) => observer.observe(element));

    const timer = window.setTimeout(() => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => element.classList.add("is-visible"));
    }, 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [pathname]);

  /* Escape 关闭下拉与移动抽屉 */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  /* 点击导航外部：收起移动抽屉（下拉由遮罩逻辑在点击时关闭） */
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        navRef.current &&
        navRef.current.classList.contains("is-open") &&
        !navRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setMobileOpen(false);
      }
      setMenuOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#content">
        跳转到主要内容
      </a>
      <header className="topnav" data-od-id="topnav">
        <div className="container topnav-inner">
          <SiteLink className="brand" to="/" aria-label={siteMeta.brandAriaLabel}>
            <img className="brand-mark" src="/logo-mark.svg" alt="" width={34} height={34} />
            <span>{siteMeta.name}</span>
          </SiteLink>
          <nav className={`nav-links${mobileOpen ? " is-open" : ""}`} id="site-nav" ref={navRef} aria-label="主导航">
            {navLinks.slice(0, 1).map((link) => (
              <SiteLink
                key={link.href}
                className="nav-link"
                to={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </SiteLink>
            ))}
            <div
              className="nav-item"
              onMouseEnter={() => {
                if (!isMobileViewport()) setMenuOpen(true);
              }}
              onMouseLeave={() => {
                if (!isMobileViewport()) setMenuOpen(false);
              }}
            >
              <button
                className="nav-trigger"
                type="button"
                aria-expanded={menuOpen}
                aria-controls="menu-business"
                onClick={(event) => {
                  event.stopPropagation();
                  setMenuOpen((open) => !open);
                }}
              >
                业务领域
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className={`nav-menu${menuOpen ? " is-open" : ""}`} id="menu-business">
                {businessMenu.map((item) => (
                  <SiteLink key={item.href} to={item.href}>
                    {item.label}
                    <span>{item.description}</span>
                  </SiteLink>
                ))}
              </div>
            </div>
            {navLinks.slice(1).map((link) => (
              <SiteLink
                key={link.href}
                className="nav-link"
                to={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </SiteLink>
            ))}
            <SiteLink className="btn btn-primary nav-cta" to={navCta.href}>
              {navCta.label}
            </SiteLink>
          </nav>
          <div className="nav-action">
            <SiteLink className="btn btn-primary" to={navCta.href}>
              {navCta.label}
            </SiteLink>
            <button
              className={`menu-toggle${mobileOpen ? " is-open" : ""}`}
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="site-nav"
              aria-label={mobileOpen ? "关闭导航菜单" : "打开导航菜单"}
              ref={toggleRef}
              onClick={(event) => {
                event.stopPropagation();
                setMobileOpen((open) => !open);
              }}
            >
              <svg className="icon-open" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg className="icon-close" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main id="content">
        <Outlet />
      </main>

      <footer className="pagefoot" data-od-id="footer">
        <div className="container foot-grid">
          <div>
            <SiteLink className="brand" to="/">
              <img className="brand-mark" src="/logo-mark.svg" alt="" width={34} height={34} />
              <span>{siteMeta.name}</span>
            </SiteLink>
            <p>{siteMeta.footerIntro}</p>
          </div>
          <div>
            <h3>业务方向</h3>
            <SiteLink to="/education-tech">教育科技</SiteLink>
            <SiteLink to="/consumer-tech">消费科技</SiteLink>
            <SiteLink to="/operations-service">运营服务</SiteLink>
          </div>
          <div>
            <h3>解决方案</h3>
            <SiteLink to="/solutions#gov">政府与园区</SiteLink>
            <SiteLink to="/solutions#school">学校与教育主管部门</SiteLink>
            <SiteLink to="/solutions#consume">消费品牌与文旅项目</SiteLink>
          </div>
          <div>
            <h3>联系</h3>
            <span>{siteMeta.location}</span>
            <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
            <span className="meta">
              © <span className="num">{year}</span> {siteMeta.copyright}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
