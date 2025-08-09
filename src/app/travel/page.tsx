import { Hero, Travel } from "@/components/travel";
import { appConfig, appGenerateMetadata } from "@/lib";
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

export default function page() {
  return (
    <>
      <Hero />

      <div className="my-space"></div>

      <Travel />
    </>
  );
}
