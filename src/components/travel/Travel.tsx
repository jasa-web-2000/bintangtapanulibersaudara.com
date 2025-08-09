import React from "react";
import { SubTitle, TravelGrid, TravelGridItem } from "@/components";
import { appConfig, travel } from "@/lib";

export function Travel() {
  const data = [
    travel({ origin: "3", destination: "5" }),
  ];
  return (
    <div className="my-container">
      <SubTitle
        subTitle="Rute Travel Utama Kami"
        paragraph={`${appConfig.APP_NAME} melayani rute se-Sumatra dan memiliki beberapa rute utama seperti:`}
      />
      <TravelGrid>
        <TravelGridItem data={null} />
      </TravelGrid>
    </div>
  );
}
