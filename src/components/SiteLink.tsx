import { Link } from "@tanstack/react-router";

import type { InternalRoute } from "../content/site";

type SiteLinkProps = {
  /** 站内路径，可带 hash，例如 "/solutions#school" */
  to: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/**
 * 站内链接：把 "/solutions#school" 拆成 TanStack Router 的 to + hash，
 * 保证 SPA 导航、预加载与静态产物里的真实 href 都可用。
 */
export function SiteLink({ to, children, ...rest }: SiteLinkProps) {
  const hashIndex = to.indexOf("#");
  const path = (hashIndex === -1 ? to : to.slice(0, hashIndex)) || "/";
  const hash = hashIndex === -1 ? undefined : to.slice(hashIndex + 1);

  return (
    <Link {...rest} to={path as InternalRoute} hash={hash}>
      {children}
    </Link>
  );
}
