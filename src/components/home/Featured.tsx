import React from "react";
import { SubTitle } from "@/components";
import {
  BanknoteArrowDown,
  Car,
  Clock8,
  DoorClosed,
  PackagePlus,
  Ticket,
} from "lucide-react";
import { FeaturedList } from "@/components/home";

const featuredList = [
  {
    icon: <BanknoteArrowDown />,
    subSubTitle: "Harga Travel Murah",
    description:
      "Nikmati layanan travel berkualitas dengan harga terjangkau. Perjalanan aman, nyaman, dan tepat waktu untuk semua tujuan favorit Anda.",
  },
  {
    icon: <DoorClosed />,
    subSubTitle: "Door to Door",
    description:
      "Layanan antar jemput langsung dari lokasi Anda ke tujuan tanpa repot. Praktis, nyaman, dan tepat waktu setiap hari.",
  },
  {
    icon: <Clock8 />,
    subSubTitle: "Jadwal 24 Jam",
    description:
      "Layanan travel dengan jadwal 24 jam, siap antar kapan saja. Fleksibel, cepat, dan selalu tersedia tanpa batas waktu.",
  },
  {
    icon: <Car />,
    subSubTitle: "Mobil ber-AC",
    description:
      "Semua armada dilengkapi AC dingin untuk kenyamanan maksimal selama perjalanan. Segar, nyaman, dan bebas gerah sepanjang jalan.",
  },
  {
    icon: <PackagePlus />,
    subSubTitle: "Free Bagasi 15kg",
    description:
      "Nikmati layanan bagasi gratis hingga 15kg tanpa biaya tambahan. Bawa barang bawaan lebih leluasa dan tetap hemat biaya.",
  },
  {
    icon: <Ticket />,
    subSubTitle: "Pemesanan Bisa Online",
    description:
      "Pesan travel kini lebih mudah! Hubungi kami lewat WhatsApp untuk booking cepat, tanpa ribet, aman, dan responsif setiap hari.",
  },
];

export function Featured() {
  return (
    <div className="relative">
      <div className="bg-container"></div>
      <div className="relative my-container py-20">
        <SubTitle
          subTitle="Keunggulan Kami sebagai Travel Pekanbaru No. 1"
          paragraph={`Travel terbaik No. 1 dengan beberapa keunggulan seperti:`}
          type="light"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 sm:gap-x-6 lg:gap-x-8 gap-y-7 sm:gap-y-8 lg:gap-y-10">
          {featuredList.map((e, i) => (
            <FeaturedList
              key={i}
              icon={e.icon}
              subSubTitle={e.subSubTitle}
              description={e.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
