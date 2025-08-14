import { Featured, Hero } from "@/components/home";
import { Travel } from "@/components/travel";
import { appGenerateMetadata, appConfig } from "@/lib";
import { Seo } from "@/types";
import { Metadata } from "next";
import { featuredTravelData } from "@/app/travel/page";
import { Cta } from "@/components";
import { Galeri } from "@/components/galeri";
import { Contact } from "@/components/kontak";

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

export default async function page() {
  const data = await featuredTravelData();

  return (
    <>
      <Hero />

      <div className="my-space"></div>

      <Travel data={data} />

      <div className="my-space"></div>

      <Featured />

      <div className="my-space"></div>

      <div className="my-container">
        <Cta />
      </div>

      <div className="my-space"></div>

      <Galeri />

      <div className="my-space"></div>

      <Contact />
    </>
  );
}
