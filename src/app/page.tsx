import { Featured, Hero } from "@/components/home";
import { Travel } from "@/components/travel";
import { appGenerateMetadata, appConfig, travel } from "@/lib";
import { Seo } from "@/types";
import { Metadata } from "next";
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
  const featuredTravelData = [
    await travel({ origin: "1471", destination: "1271" }),
    await travel({ origin: "1271", destination: "1473" }),
    await travel({ origin: "1471", destination: "1277" }),
    await travel({ origin: "1276  ", destination: "1471" }),
    await travel({ origin: "1471", destination: "1202050" }),
    await travel({ origin: "1471", destination: "1203" }),
    await travel({ origin: "1471", destination: "1221" }),
    await travel({ origin: "1275", destination: "1471" }),
    await travel({ origin: "1471", destination: "15" }),
    await travel({ origin: "1471", destination: "11" }),
    await travel({ origin: "1471", destination: "12" }),
    await travel({ origin: "1471", destination: "1671" }),
    await travel({ origin: "1471", destination: "18" }),
  ];
  return (
    <>
      <Hero />

      <div className="my-space"></div>

      <Travel data={featuredTravelData} />

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
