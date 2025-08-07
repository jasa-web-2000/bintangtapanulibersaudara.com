import { appConfig } from "@/lib";

interface Answer {
  "@type": string;
  text: string;
}

interface Question {
  "@type": string;
  name: string;
  acceptedAnswer: Answer;
}

interface FAQSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  mainEntity: Question[];
}

export function faq(): FAQSchema {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Tanya Jawab Seputar Travel Terdekat",
    description:
      "Pertanyaan yang sering diajukan tentang layanan travel terdekat.",
    mainEntity: [
      {
        "@type": "Question",
        name: "Berapa harga travel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Harga travel bervariasi tergantung pada rute dan layanan yang dipilih. Silakan hubungi kami untuk informasi lebih lanjut.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana cara memesan tiket?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Pemesansan tiket dapat dilakukan secara online dengan menghubungi whatsapp kami pada nomor ${appConfig.TELPHONE} atau dengan mendatangi garasi kami.`,
        },
      },
      {
        "@type": "Question",
        name: "Mobil apa yang digunakan tersedia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Kami menyediakan berbagai jenis mobil untuk perjalanan, termasuk Avanza, Innova, dan Elf. Silakan hubungi kami untuk informasi lebih lanjut mengenai ketersediaan mobil.`,
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana cara merubah atau membatalkan pemesanan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Untuk merubah atau membatalkan pemesanan, silakan hubungi kami melalui whatsapp pada nomor ${appConfig.TELPHONE}. Kami akan membantu Anda dengan proses tersebut.`,
        },
      },
    ],
  };

  return schema;
}
