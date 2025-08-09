import { Galeri, Hero } from "@/components/galeri";
import { appConfig, appGenerateMetadata } from "@/lib";
import { Seo } from "@/types";
import { Metadata } from "next";

const seo: Seo = {
  title: `Galeri Travel - ${appConfig.APP_NAME}`,
  description: `Galeri Travel - ${appConfig.APP_NAME}`,
};

export const metadata: Promise<Metadata> = appGenerateMetadata({
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${appConfig.APP_URL}/galeri`,
  },
});

export default function page() {
  return (
    <>
      <Hero />

      <div className="my-space"></div>

      <Galeri />
    </>
  );
}
