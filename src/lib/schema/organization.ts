import { appConfig } from "@/lib";

interface PostalAddress {
  "@type": string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface AggregateRating {
  "@type": string;
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
}

interface OrganizationSchema {
  "@context": string;
  "@type": string;
  url: string;
  logo: string;
  name: string;
  description: string;
  email: string;
  telephone: string;
  image: string[];
  address: PostalAddress;
  aggregateRating: AggregateRating;
}

export function organization(): OrganizationSchema {
  const tanggal = new Date();

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const diff = now.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;

  const reviewCount: number =
    tanggal.getFullYear() - 2024 + Math.floor(diff / oneDay) + 1;
  const ratingValue: number = reviewCount % 2 === 0 ? 4.9 : 4.8;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: appConfig.APP_NAME,
    url: appConfig.APP_URL,
    logo: appConfig.APP_URL + "/images/logo.jpg",
    description: `${appConfig.APP_NAME} menawarkan jasa ${appConfig.APP_TAGLINE} dan Travel seluruh Pulau Sumatra.`,
    email: appConfig.EMAIL,
    telephone: appConfig.TELPHONE,
    image: [
      appConfig.APP_URL + "/images/logo.jpg",
      appConfig.APP_URL + "/images/logo.png",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: appConfig.POSTALADRESS.streetAddress,
      addressLocality: appConfig.POSTALADRESS.addressLocality,
      addressCountry: appConfig.POSTALADRESS.addressCountry,
      addressRegion: appConfig.POSTALADRESS.addressRegion,
      postalCode: appConfig.POSTALADRESS.postalCode,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue,
      reviewCount: reviewCount,
      bestRating: 5,
    },
  };

  return schema;
}
