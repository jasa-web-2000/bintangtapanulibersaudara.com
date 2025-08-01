import type { Metadata } from "next";
import { appConfig } from "./index";

export async function appGenerateMetadata(input: Metadata): Promise<Metadata> {
  const metadata: Metadata = {
    metadataBase: new URL(appConfig.APP_URL),
    title: input?.title ?? appConfig.APP_NAME,
    description: input?.description ?? appConfig.APP_NAME,
    alternates: {
      canonical: input?.openGraph?.url ?? appConfig.APP_URL,
    },
    authors: [{ name: appConfig.DEVELOPER.name, url: appConfig.DEVELOPER.url }],
    creator: appConfig.DEVELOPER.name,
    publisher: appConfig.DEVELOPER.name,
    generator: "Next.js",
    applicationName: appConfig.APP_NAME,

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
    },

    openGraph: {
      title: input?.title ?? appConfig.APP_NAME,
      description: input?.description ?? appConfig.APP_NAME,
      url: input?.openGraph?.url ?? appConfig.APP_URL,
      siteName: appConfig.APP_NAME,
      images: [
        {
          url: "/travel-terdekat-logo-blue.jpg",
          width: 672,
          height: 672,
          alt: appConfig.APP_NAME,
        },
      ],
      locale: "id_ID",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: input?.title ?? appConfig.APP_NAME,
      description: input?.description ?? appConfig.APP_NAME,
      images: input?.openGraph?.images ?? [
        {
          url: "/travel-terdekat-logo-blue.jpg",
          width: 672,
          height: 672,
          alt: appConfig.APP_NAME,
        },
      ],
    },
  };

  return metadata;
}
