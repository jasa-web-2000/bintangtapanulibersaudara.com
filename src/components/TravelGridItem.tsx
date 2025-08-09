import { capitalize } from "@/lib";
import { Location } from "@/types";
import React from "react";

interface data {
  origin: Location | null;
  destination: Location | null;
}

export function TravelGridItem({ data }: { data: data | null }) {
  const origin = capitalize(data?.origin?.name || 'Tanpanama1');
  const destination = capitalize(data?.destination?.name || 'Tanpanama2');

  return <div>{`Travel ${origin} ${destination}`}</div>;
}
