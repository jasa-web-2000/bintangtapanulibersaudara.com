import React from "react";
import { SubTitle, TravelGrid, TravelGridItem } from "@/components";
import { appConfig, travel } from "@/lib";

export async function Travel() {
  const data = [
    await travel({ origin: "31", destination: "33" }),
    await travel({ origin: "31", destination: "3211111233" }),
  ];

  console.log(data);

  return (
    <div className="my-container">
      <SubTitle
        subTitle="Rute Travel Utama Kami"
        paragraph={`${appConfig.APP_NAME} melayani rute se-Sumatra dan memiliki beberapa rute utama seperti:`}
      />
      <TravelGrid>
        {data
          .filter((e) => e?.origin !== null && e?.destination !== null)
          .map((e, i) => (
            <TravelGridItem
              key={i}
              data={e}
            />
          ))}
      </TravelGrid>
    </div>
  );
}
