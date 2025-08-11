import { appConfig } from "@/lib";

interface Brand {
  "@type": string;
  name: string;
}

interface Offers {
  "@type": string;
  lowPrice: number;
  highPrice: number;
  priceCurrency: string;
  offerCount: number;
}

interface Person {
  "@type": string;
  name: string;
}

interface Rating {
  "@type": string;
  ratingValue: number;
  bestRating: number;
}

interface ListItem {
  "@type": string;
  position: number;
  name: string;
}

interface positiveNotes {
  "@type": string;
  itemListElement: ListItem[];
}

interface Review {
  "@type": string;
  positiveNotes: positiveNotes;
  reviewRating: Rating;
  author: Person;
}

interface AggregateRating {
  "@type": string;
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
}

interface ProductInput {
  name: string;
  description: string;
  image?: string[];
}

interface ProductSchema extends ProductInput {
  "@context": string;
  "@type": string;
  brand: Brand;
  offers: Offers;
  name: string;
  description: string;
  review: Review;
  aggregateRating: AggregateRating;
}

export function product(input: ProductInput): ProductSchema {
  const tanggal = new Date();

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1); // 1 Jan
  const diff = now.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;

  const reviewCount: number =
    tanggal.getFullYear() - 2024 + Math.floor(diff / oneDay) + 1;
  const ratingValue: number = reviewCount % 2 === 0 ? 4.9 : 4.8;

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: input?.name ?? appConfig.APP_NAME,
    description: input?.description ?? appConfig.APP_NAME,
    image: input?.image ?? [
      appConfig.APP_URL + "/images/logo.jpg",
      appConfig.APP_URL + "/images/logo.png",
    ],
    brand: {
      "@type": "Brand",
      name: appConfig.APP_NAME,
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: 100000,
      highPrice: 250000,
      priceCurrency: "IDR",
      offerCount: 10,
    },
    review: {
      "@type": "Review",
      positiveNotes: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Harga sangat terjangkau",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Mobil nyaman dan bersih",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Sopir ramah dan profesional",
          },
        ],
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: ratingValue,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: appConfig.DEVELOPER.name,
      },
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
