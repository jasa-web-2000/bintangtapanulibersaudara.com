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
    await travel({ origin: "11", destination: "12" }),
    await travel({ origin: "11", destination: "13" }),
    await travel({ origin: "11", destination: "14" }),
  ];

  return (
    <>
      <Hero />

      <div className="my-space"></div>

      <Travel data={data} />
    </>
  );
}
