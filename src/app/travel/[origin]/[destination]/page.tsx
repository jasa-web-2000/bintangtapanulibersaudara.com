"use server";
import {
  appGenerateMetadata,
  capitalize,
  findProvincesByRecommend,
  findRegenciesByRecommend,
} from "@/lib/index";
import { Metadata } from "next";
import { ParamsTravel, Seo } from "@/types";
import { travel } from "@/lib/index";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function page({ params }: ParamsTravel) {
  const { origin, destination } = await params;

  const travelData = await travel({ origin, destination });
  if (!travelData?.origin?.name || !travelData?.destination?.name) {
    notFound();
  }

  const title = `Travel ${travelData?.origin?.name} ${travelData?.destination?.name}`;

  const ProvincesRecomendationData = findProvincesByRecommend([
    origin,
    destination,
  ]);

  const RegenciesRecomendationData = findRegenciesByRecommend([
    origin,
    destination,
  ]);

  return (
    <div>
      <Image
        src={`/travel/${origin}/${destination}/thumbnail.jpg`}
        alt={capitalize(title)}
        title={capitalize(title)}
        width={1300}
        height={731}
      />
    </div>
  );
}

export async function generateMetadata({
  params,
}: ParamsTravel): Promise<Metadata> {
  const { origin, destination } = await params;

  const travelData = await travel({ origin, destination });
  if (!travelData?.origin?.name || !travelData?.destination?.name) {
    notFound();
  }

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
          url: `travel/${origin}/${destination}/thumbnail.jpg`,
          width: 672,
          height: 672,
          alt: `${capitalize(title)} Termurah, Terpercaya, Jadwal 24 Jam`,
        },
      ],
    },
  });
}
