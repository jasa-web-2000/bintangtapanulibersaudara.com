import { appConfig } from "../index";

interface Site {
  "@context": string;
  "@type": string;
  name: string;
  alternateName: string[];
  url: string;
}

export function site(): Site {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: appConfig.APP_NAME,
    alternateName: ["TT", "T-T", appConfig.APP_NAME],
    url: appConfig.APP_URL,
  };

  return schema;
}
