import { navItem } from "@/components";
import { appConfig } from "@/lib";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const navItemResult = [...navItem, ["/travel/sitemap.xml"]];
  return navItemResult.map((item) => ({
    url: `${appConfig.APP_URL}${item[0]}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));
}
