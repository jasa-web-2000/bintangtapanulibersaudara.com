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

export default async function page() {
  const data = [
    await travel({ origin: "1471", destination: "1271" }),
    await travel({ origin: "11", destination: "1277" }),
    await travel({ origin: "11", destination: "1202050" }),
    await travel({ origin: "11", destination: "1203" }),
  ];

  return (
    <>
      <Hero />

      <div className="my-space"></div>

      <Travel data={data} />
    </>
  );
}
