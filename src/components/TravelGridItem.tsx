import { capitalize, whatsapp } from "@/lib";
import { Location } from "@/types";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui";
import Link from "next/link";
import {
  Clock,
  DoorClosed,
  MessageCircleMore,
  PackagePlus,
} from "lucide-react";

interface data {
  origin: Location | null;
  destination: Location | null;
}

interface FeaturedList {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  feature: string;
}

const FeaturedList = ({ icon: Icon, feature }: FeaturedList) => {
  return (
    <div className="flex space-x-2 items-center mb-2">
      <Icon className="text-indigo-500 w-[14px] h-[14px]" />
      <p className="text-sm">{feature}</p>
    </div>
  );
};

export function TravelGridItem({ data }: { data: data | null }) {
  const origin = capitalize(data?.origin?.name || "Tanpanama1");
  const destination = capitalize(data?.destination?.name || "Tanpanama2");
  const title = `Travel ${origin} ${destination}`;

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg border-b-8 border-b-indigo-500">
      <div className="relative">
        <Image
          className="w-full rounded-xl"
          src={`/travel/${data?.origin?.id}/${data?.destination?.id}/thumbnail.jpg`}
          alt={title}
          title={title}
          width={1600}
          height={900}
        />
        <span className="absolute top-0 bg-indigo-500 text-slate-300 font-semibold p-1 px-2 text-xs rounded-br-lg rounded-tl-lg">
          Unggulan
        </span>
      </div>
      <h3
        className="my-4 text-[17px] line-clamp-2"
        title={title}>
        {title}
      </h3>
      <div>
        <FeaturedList
          icon={Clock}
          feature="24 jam"
        />
        <FeaturedList
          icon={DoorClosed}
          feature="Door to door"
        />
        <FeaturedList
          icon={PackagePlus}
          feature="Free bagasi 15kg"
        />
        <Link
          className="text-sm underline"
          href={`/travel/${data?.origin?.id}/${data?.destination?.id}`}
          title={`detail ${title}`}>
          Baca selengkapnya...
        </Link>
        <Button
          asChild
          className="w-full mt-4 shadow-lg"
          title={`pesan ${title}`}>
          <Link
            href={whatsapp(null, `Saya ingin tanya tentang ${title}`)}
            title={title}
            target="_blank">
            <MessageCircleMore /> Pesan Travel
          </Link>
        </Button>
      </div>
    </div>
  );
}
