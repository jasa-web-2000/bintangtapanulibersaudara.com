import { Location } from "@/types";
import React from "react";

export function TravelGridItem({ data }: { data: Location | null }) {
  return <div>{data?.name ?? "Nama tidak ditemukan"}</div>;
}
