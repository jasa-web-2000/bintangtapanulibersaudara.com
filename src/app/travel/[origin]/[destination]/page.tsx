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
import { BackgroundHero, Cta, HeroBottom } from "@/components";
import Link from "next/link";

export default async function page({ params }: ParamsTravel) {
  const { origin, destination } = await params;

  const travelData = await travel({ origin, destination });
  if (!travelData?.origin?.name || !travelData?.destination?.name) {
    notFound();
  }

  const originName = capitalize(travelData?.origin?.name || "Tanpanama1");
  const destinationName = capitalize(
    travelData?.destination?.name || "Tanpanama2"
  );
  const title = `Travel ${originName} ${destinationName}`;
  const titleReverse = `Travel ${destinationName} ${originName}`;

  // const ProvincesRecomendationData = findProvincesByRecommend([
  //   origin,
  //   destination,
  // ]);

  // const RegenciesRecomendationData = findRegenciesByRecommend([
  //   origin,
  //   destination,
  // ]);

  return (
    <>
      <BackgroundHero className="!pb-32">
        <h1 className="mb-4">{title}</h1>
      </BackgroundHero>

      <HeroBottom>
        <Image
          priority={true}
          className="bg-slate-100 border-b-8 border-b-indigo-500 shadow-lg rounded-xl w-full max-w-[380] md:max-w-[420px] lg:max-w-[480px] mx-auto"
          src={`/travel/${origin}/${destination}/thumbnail.jpg`}
          alt={capitalize(title)}
          title={capitalize(title)}
          width={1300}
          height={731}
        />

        <div className="mt-5 [&_p]:text-justify [&_a]:!underline [&>*]:mb-5">
          <p>
            Jasa{" "}
            <Link
              href={`/travel/${origin}/${destination}`}
              title={title}>
              {title}
            </Link>{" "}
            kini hadir untuk membantu perjalan travel anda. Kami akan
            mengantarkan anda kemana pun anda mau. Baik itu dari {originName} ke{" "}
            {destinationName} maupun dari {destinationName} ke {originName}
          </p>
          <p>
            Apakah anda sedang mencari jasa travel terpercaya di daerah Sumatra,
            terutama di {originName}?
          </p>
        </div>

        <Cta />
      </HeroBottom>
    </>
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
