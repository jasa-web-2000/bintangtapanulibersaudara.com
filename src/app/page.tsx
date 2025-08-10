import { Hero } from "@/components/home";
import { Travel } from "@/components/travel";
import { appGenerateMetadata, appConfig } from "@/lib";
import { Seo } from "@/types";
import { Metadata } from "next";

const seo: Seo = {
  title: `${appConfig.APP_NAME} - ${appConfig.APP_TAGLINE}`,
  description: `${appConfig.APP_NAME} menawarkan jasa ${appConfig.APP_TAGLINE} dan Travel seluruh Pulau Sumatra.`,
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

      <Travel data={[]} />

      <div className="my-space"></div>
    </>
  );
}
