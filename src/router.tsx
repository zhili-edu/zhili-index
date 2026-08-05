import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";

import AppShell from "./components/AppShell";
import AboutPage from "./pages/AboutPage";
import { ConsumerTechPage, EducationTechPage, OperationsServicePage } from "./pages/BusinessDetailPage";
import BusinessPage from "./pages/BusinessPage";
import CasesPage from "./pages/CasesPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import SolutionsPage from "./pages/SolutionsPage";

const rootRoute = createRootRoute({
  component: AppShell,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const businessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/business",
  component: BusinessPage,
});

const educationTechRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/education-tech",
  component: EducationTechPage,
});

const consumerTechRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/consumer-tech",
  component: ConsumerTechPage,
});

const operationsServiceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/operations-service",
  component: OperationsServicePage,
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

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  businessRoute,
  educationTechRoute,
  consumerTechRoute,
  operationsServiceRoute,
  solutionsRoute,
  casesRoute,
  contactRoute,
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
