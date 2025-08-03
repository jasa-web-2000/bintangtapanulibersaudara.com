import { Travel } from "@/types";
import { findLocationById } from "./location";

export async function travel(travel: Travel) {
  if (travel.origin === travel.destination) return undefined;

  const origin = findLocationById(travel.origin);
  const destination = findLocationById(travel.destination);

  if (!origin && !destination) return undefined;

  return { origin, destination };
}
