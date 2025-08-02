import provinces from "@/lib/data/provinces.json";
import regencies from "@/lib/data/regencies.json";
import districts from "@/lib/data/districts.json";
import { Travel } from "@/types";

export async function appGetTravel(travel: Travel) {
  // if (travel.origin === travel.destination) return undefined;

  const origin = provinces.find(
    (province) =>
      province.id === travel.origin && province.id === travel.destination
  );
  // if (!data.ok) return undefined;
  return origin;
}
