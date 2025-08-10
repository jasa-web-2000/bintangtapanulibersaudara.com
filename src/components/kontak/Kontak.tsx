import { appConfig } from "@/lib";
import React from "react";
import { SubTitle } from "@/components";
import { ListKontak, Booking } from "@/components/kontak";
import { MapPin, MessageCircleMore, Phone } from "lucide-react";

export function Contact() {
  return (
    <div className="my-container">
      <SubTitle
        subTitle="Pesan Travel Sekarang"
        paragraph={`Anda bisa pesan travel secara online atau datane ke garasi ${appConfig.APP_NAME}.`}
      />
      <div className="mt-10 content-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-9 sm:gap-x-10 md:gap-y-10 md:gap-x-20 lg:gap-x-28 lg:justify-center md:items-center">
        <div className="md:col-span-1 lg:col-span-5 lg:col-start-2">
          <Booking />
        </div>
        <div className="md:col-span-1 lg:col-span-5 content-start grid grid-cols-1 gap-6">
          <ListKontak
            icon={<MapPin />}
            subSubTitle="Garasi"
            paragraph={appConfig.ADDRESS}
          />
          <div className="content-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
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
      </div>
    </div>
  );
}
