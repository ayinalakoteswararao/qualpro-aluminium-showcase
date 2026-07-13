import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { servicesList, productsList } from "../lib/data";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = request ? new URL(request.url).origin : "https://qualproaluminium.com";
        
        const staticEntries = [
          { path: "/", priority: "1.0" },
          { path: "/about", priority: "0.8" },
          { path: "/services", priority: "0.9" },
          { path: "/products", priority: "0.9" },
          { path: "/infrastructure", priority: "0.8" },
          { path: "/projects", priority: "0.8" },
          { path: "/gallery", priority: "0.7" },
          { path: "/contact", priority: "0.7" },
        ];

        const serviceEntries = servicesList.map(s => ({
          path: `/services/${s.id}`,
          priority: "0.8"
        }));

        const productEntries = productsList.map(p => ({
          path: `/products/${p.id}`,
          priority: "0.8"
        }));

        const entries = [...staticEntries, ...serviceEntries, ...productEntries];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map(
            (e) =>
              `  <url>\n    <loc>${origin}${e.path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
