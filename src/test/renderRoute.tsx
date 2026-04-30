import { createMemoryHistory, RouterProvider } from "@tanstack/react-router";
import { act, render } from "@testing-library/react";

import { createAppRouter } from "../router";

export async function renderRoute(path = "/") {
  const router = createAppRouter({
    history: createMemoryHistory({ initialEntries: [path] }),
  });

  await act(() => router.load());

  return render(<RouterProvider router={router} />);
}
