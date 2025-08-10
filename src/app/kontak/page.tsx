import { Contact, GoogleMap, Hero } from "@/components/kontak";
import { appConfig, appGenerateMetadata } from "@/lib";
import { Seo } from "@/types";
import { Metadata } from "next";

const seo: Seo = {
  title: `Kontak Travel - ${appConfig.APP_NAME}`,
  description: `Kontak Travel - ${appConfig.APP_NAME}`,
};

export const metadata: Promise<Metadata> = appGenerateMetadata({
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${appConfig.APP_URL}/kontak`,
  },
});

export default function page() {
  return (
    <>
      <Hero />

      <div className="my-space"></div>

      <Contact />

      <div className="my-space"></div>

      <GoogleMap />
    </>
  );
}
