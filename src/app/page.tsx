import { appConfig } from "@/lib/config";
import { appGenerateMetadata } from "@/lib/index";
import { Seo } from "@/types";
import { Metadata } from "next";

const seo: Seo = {
  title: `${appConfig.APP_NAME} - Jasa Travel Murah dan Terpercaya`,
  description: `${appConfig.APP_NAME} akan membantu anda menemukan jasa travel yang murah dan terpercaya di sekitar anda.`,
};

export const metadata: Promise<Metadata> = appGenerateMetadata({
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: "/images/logo.jpg",
        width: 672,
        height: 672,
        alt: appConfig.APP_NAME,
      },
    ],
  },
});

export default function page() {
  return <p>home</p>;
}
