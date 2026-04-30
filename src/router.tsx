import { Outlet, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";

import AboutPage from "./pages/AboutPage";
import CasesPage from "./pages/CasesPage";
import HomePage from "./pages/HomePage";
import PartnersPage from "./pages/PartnersPage";
import SolutionsPage from "./pages/SolutionsPage";

const rootRoute = createRootRoute({
  component: Outlet,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const solutionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/solutions",
  component: SolutionsPage,
});

const casesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cases",
  component: CasesPage,
});

const partnersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/partners",
  component: PartnersPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  solutionsRoute,
  casesRoute,
  partnersRoute,
  aboutRoute,
]);

type RouterOptions = Parameters<typeof createRouter>[0];

type AppRouterOptions = Partial<Pick<RouterOptions, "history" | "isPrerendering" | "isServer">>;

export function createAppRouter(options?: AppRouterOptions) {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    ...options,
  });
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createAppRouter>;
  }
}
