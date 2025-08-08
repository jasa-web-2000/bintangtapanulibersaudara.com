import { Hero } from "@/components/home";
import { appGenerateMetadata, appConfig } from "@/lib";
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
  },
});

export default function page() {
  return (
    <>
      <Hero />
      <div className="my-space"></div>

      <div className="my-space"></div>
    </>
  );
}
