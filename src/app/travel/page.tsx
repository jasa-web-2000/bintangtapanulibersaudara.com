import { Hero, Travel } from "@/components/travel";
import { appConfig, appGenerateMetadata, travel } from "@/lib";
import { Seo } from "@/types";
import { Metadata } from "next";

const seo: Seo = {
  title: `Rute Travel Lengkap - ${appConfig.APP_NAME}`,
  description: `Rute Travel Lengkap - ${appConfig.APP_NAME}`,
};

export const metadata: Promise<Metadata> = appGenerateMetadata({
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${appConfig.APP_URL}/travel`,
  },
});

export async function featuredTravelData() {
  return [
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
}

export default async function page() {
  const data = await featuredTravelData();
  return (
    <>
      <Hero />

      <div className="my-space"></div>

      <Travel data={data} />
    </>
  );
}
