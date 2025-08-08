import { appConfig } from "@/lib";
import React from "react";
import { SubTitle } from "@/components";
import { ListKontak } from "./ListKontak";
import { MapPin, MessageCircleMore, Phone } from "lucide-react";
import { Booking } from "./Booking";

export function Kontak() {
  return (
    <div className="my-container">
      <SubTitle
        subTitle="Pesan Travel Sekarang"
        paragraph={`Anda bisa pesan travel secara online atau datane ke garasi ${appConfig.APP_NAME}.`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-7 sm:gap-x-10 md:gap-y-8 lg:gap-y-9 lg:gap-x-14">
        <div className="md:col-span-1 lg:col-span-5 grid grid-cols-1 gap-6">
          <ListKontak
            icon={<MapPin />}
            subSubTitle="Garasi"
            paragraph={appConfig.ADDRESS}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            <ListKontak
              icon={<Phone />}
              subSubTitle="Telepon"
              paragraph={appConfig.TELPHONE}
            />
            <ListKontak
              icon={<MessageCircleMore />}
              subSubTitle="whatsapp Chat"
              paragraph={appConfig.TELPHONE}
            />
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-7">
          <Booking />
        </div>
      </div>
    </div>
  );
}
