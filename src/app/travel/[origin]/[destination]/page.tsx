"use server";
import { appConfig, appGenerateMetadata } from "@/lib/index";
import { Metadata } from "next";
import { ParamsTravel, Seo, Travel } from "@/types";
import { appGetTravel } from "@/lib/index";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: ParamsTravel): Promise<Metadata> {
  const { origin, destination } = await params;

  const seo: Seo = {
    title: `Travel - Jasa Travel Murah dan Terpercaya`,
    description: `${appConfig.APP_NAME} akan membantu anda menemukan jasa travel yang murah dan terpercaya di sekitar anda.`,
  };

  return appGenerateMetadata({
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: "/travel-terdekat-logo-blue.jpg",
          width: 672,
          height: 672,
          alt: appConfig.APP_NAME,
        },
      ],
    },
  });
}

export default async function page({ params }: ParamsTravel) {
  const { origin, destination } = await params;
  const travelData = await appGetTravel({ origin, destination });

  if (!travelData) {
    // return null;
    notFound();
  }

  // if (!travelData) {
  //   return <div>Error loading travel data</div>;
  // }
  return <div>Travel</div>;
}
