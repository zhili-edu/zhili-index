import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const outDir = resolve("out");
const ssrOutDir = join(outDir, ".static-renderer");
const ssrEntry = resolve("src/entry-static.tsx");

try {
  await build({
    build: {
      emptyOutDir: true,
      outDir: ssrOutDir,
      rollupOptions: {
        output: {
          entryFileNames: "entry-static.mjs",
          format: "esm",
        },
      },
      ssr: ssrEntry,
    },
    logLevel: "warn",
  });

  const template = await readFile(join(outDir, "index.html"), "utf8");
  const rendererUrl = pathToFileURL(join(ssrOutDir, "entry-static.mjs")).href;
  const { renderStaticRoute, staticRoutes } = await import(rendererUrl);

  await Promise.all(
    staticRoutes.map(async (route) => {
      const html = await renderStaticRoute(route.path);
      const filePath = routeHtmlPath(route.path);
      const page = applyPageMeta(injectAppHtml(template, html), route);

      await mkdir(dirname(filePath), { recursive: true });
      await writeFile(filePath, page);
    }),
  );
} finally {
  await rm(ssrOutDir, { force: true, recursive: true });
}

function routeHtmlPath(path) {
  const segments = path.split("/").filter(Boolean);

  if (segments.length === 0) {
    return join(outDir, "index.html");
  }

  return join(outDir, ...segments, "index.html");
}

function injectAppHtml(template, appHtml) {
  const rootElement = '<div id="root"></div>';

  if (!template.includes(rootElement)) {
    throw new Error(`Could not find ${rootElement} in ${join(outDir, "index.html")}`);
  }

  return template.replace(rootElement, `<div id="root">${appHtml}</div>`);
}

function applyPageMeta(html, route) {
  return html
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeHtml(route.description)}" />`,
    );
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
