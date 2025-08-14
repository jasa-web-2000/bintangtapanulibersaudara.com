import provinces from "@/lib/data/provinces.json";
import regencies from "@/lib/data/regencies.json";
import districts from "@/lib/data/districts.json";

import { appConfig } from "@/lib";
import { NextResponse } from "next/server";

function generateSitemapXml(
  urls: {
    url: string;
    lastModified: string;
    changeFrequency: string;
    priority: number;
  }[]
) {
  const xmlns = "http://www.sitemaps.org/schemas/sitemap/0.9";
  const urlEntries = urls
    .map(
      ({ url, lastModified, changeFrequency, priority }) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="${xmlns}">
${urlEntries}
</urlset>`;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ origin: string }> }
) {
  const { origin } = await params;

  const data = [...provinces, ...regencies, ...districts];

  if (!data.some((e) => e.id === origin)) {
    return NextResponse.redirect(appConfig.APP_URL + "/not-found");
  }

  const sitemapIndexes = data
    .filter((e) => e.id !== origin)
    .map((item) => ({
      url: `${appConfig.APP_URL}/travel/${origin}/${item.id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    }));

  const xml = generateSitemapXml(sitemapIndexes);

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
