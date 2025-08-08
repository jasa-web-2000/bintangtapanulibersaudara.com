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
    url: appConfig.APP_URL,
    logo: "/travel-terdekat-logo-blue.jpg",
    name: appConfig.APP_NAME,
    description:
      "Jasa Travel Murah dan Terpercaya di sekitar anda. Kami membantu anda menemukan jasa travel yang sesuai dengan kebutuhan anda.",
    email: appConfig.EMAIL,
    telephone: appConfig.TELPHONE,
    image: [
      "/travel-terdekat-logo-blue.jpg",
      "/travel-terdekat-logo-white.jpg",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "JL. Pemuda, Rowojabul, Pojoksari",
      addressLocality: "Kabupaten Semarang",
      addressCountry: "ID",
      addressRegion: "Jawa Tengah",
      postalCode: "50614",
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
