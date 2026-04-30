import { mkdir, copyFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = "out";
const routes = ["solutions", "cases", "partners", "about"];

await Promise.all(
  routes.map(async (route) => {
    const routeDir = join(outDir, route);
    await mkdir(routeDir, { recursive: true });
    await copyFile(join(outDir, "index.html"), join(routeDir, "index.html"));
  }),
);
