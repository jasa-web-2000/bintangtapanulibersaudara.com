import provinces from "@/lib/data/provinces.json";
import regencies from "@/lib/data/regencies.json";
import districts from "@/lib/data/districts.json";

import { appConfig } from "@/lib";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const data = [...provinces, ...regencies, ...districts];

  return data.map((item) => ({
    url: `${appConfig.APP_URL}/travel/${item.id}/sitemap.xml`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));
}
