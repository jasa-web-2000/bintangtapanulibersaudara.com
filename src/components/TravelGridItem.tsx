import { capitalize } from "@/lib";
import { Location } from "@/types";
import React from "react";

interface data {
  origin: Location | null;
  destination: Location | null;
}

export function TravelGridItem({ data }: { data: data }) {
  const origin = capitalize(data?.origin?.name);
  const destination = capitalize(data?.destination?.name);

  return <div>{`Travel ${origin} ${destination}`}</div>;
}
