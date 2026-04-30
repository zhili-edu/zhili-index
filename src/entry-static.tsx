import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { RouterProvider, createMemoryHistory } from "@tanstack/react-router";

import { createAppRouter } from "./router";
import { staticRoutes } from "./staticRoutes";
import "./styles/globals.css";

export { staticRoutes };

export async function renderStaticRoute(path: string) {
  const router = createAppRouter({
    history: createMemoryHistory({ initialEntries: [path] }),
    isPrerendering: true,
    isServer: true,
  });

  await router.load();

  return renderToString(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
