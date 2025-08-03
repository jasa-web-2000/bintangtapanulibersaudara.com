"use server";
import {
  appConfig,
  appGenerateMetadata,
  capitalize,
  findProvincesByRecommend,
  findRegenciesByRecommend,
} from "@/lib/index";
import { Metadata } from "next";
import { ParamsTravel, Seo } from "@/types";
import { travel } from "@/lib/index";
import { notFound } from "next/navigation";

export default async function page({ params }: ParamsTravel) {
  const { origin, destination } = await params;

  const travelData = await travel({ origin, destination });
  if (!travelData?.origin?.name || !travelData?.destination?.name) {
    notFound();
  }

  const ProvincesRecomendationData = findProvincesByRecommend([
    origin,
    destination,
  ]);

  const RegenciesRecomendationData = findRegenciesByRecommend([
    origin,
    destination,
  ]);

  return <div>Travel</div>;
}

export async function generateMetadata({
  params,
}: ParamsTravel): Promise<Metadata> {
  const { origin, destination } = await params;

  const travelData = await travel({ origin, destination });

  const title = `Travel ${travelData?.origin?.name} ${travelData?.destination?.name}`;
  const seo: Seo = {
    title: `${capitalize(title)} - Jasa Travel Murah dan Terpercaya`,
    description: `${capitalize(
      title
    )} akan membantu anda menemukan jasa travel yang murah dan terpercaya di sekitar anda.`,
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
