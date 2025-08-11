"use client";
import React from "react";
import { SubTitle, TravelGrid, TravelGridItem } from "@/components";
import { appConfig } from "@/lib";
import { Location } from "@/types";

interface Data {
  origin: Location | null;
  destination: Location | null;
}

export function Travel({ data }: { data: (Data | undefined)[] }) {
  return (
    <div className="my-container">
      <SubTitle
        subTitle="Rute Travel Utama Kami"
        paragraph={`${appConfig.APP_NAME} melayani rute se-Sumatera dan memiliki beberapa rute utama seperti:`}
      />
      <TravelGrid>
        {data
          .filter(
            (e) =>
              e !== undefined && e?.origin !== null && e?.destination !== null
          )
          .map((e, i) => (
            <TravelGridItem
              key={i}
              data={e || null}
            />
          ))}
      </TravelGrid>
    </div>
  );
}
