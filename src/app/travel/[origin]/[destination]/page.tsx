"use server";
import {
  appConfig,
  appGenerateMetadata,
  capitalize,
  travel,
  findProvincesByRecommend,
  findRegenciesByRecommend,
} from "@/lib";
import { Metadata } from "next";
import { ParamsTravel, Seo } from "@/types";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function page({ params }: ParamsTravel) {
  const { origin, destination } = await params;

  const travelData = await travel({ origin, destination });
  if (!travelData?.origin?.name || !travelData?.destination?.name) {
    notFound();
  }

  const title = `Travel ${travelData?.origin?.name} ${travelData?.destination?.name}`;

  // const ProvincesRecomendationData = findProvincesByRecommend([
  //   origin,
  //   destination,
  // ]);

  // const RegenciesRecomendationData = findRegenciesByRecommend([
  //   origin,
  //   destination,
  // ]);

  return (
    <div>
      {travelData?.origin?.name}
      {travelData?.destination?.name}
      <Image
        priority={true}
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
    )} akan membantu anda mengantar kemana pun dengan biaya travel yang murah dan jadwal 24 jam.`,
  };

  return appGenerateMetadata({
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${appConfig.APP_URL}/travel/${origin}/${destination}`,
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
