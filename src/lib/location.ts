import provinces from "@/lib/data/provinces.json";
import regencies from "@/lib/data/regencies.json";
import districts from "@/lib/data/districts.json";
import { Provinces, Regencies, Districts, Location } from "@/types";

export function findProvinceByIds(ids: string[]): Provinces[] {
  return provinces.filter((p) => ids.includes(p.id));
}

export function findRegenciesByIds(ids: string[]): Regencies[] {
  return regencies.filter((r) => ids.includes(r.id));
}

export function findDistrictsByIds(ids: string[]): Districts[] {
  return districts.filter((d) => ids.includes(d.id));
}

export function findLocationById(id: string): Location | null {
  const found =
    +id <= 51
      ? provinces.find((p) => p.id === id)
      : +id <= 5171
      ? regencies.find((r) => r.id === id)
      : districts.find((d) => d.id === id);

  return found || null;
}

export function findLocationByIds(ids: string[]): Location[] {
  const result: Location[] = [];

  ids.forEach((id) => {
    const found = findLocationById(id);

    if (found) result.push(found);
  });

  return result;
}

export function findProvincesByRecommend(
  ids: string[],
  length: number = 5
): Provinces[] {
  const result: Provinces[] = [...provinces];

  const filtered = result.filter((location) => !ids.includes(location.id));

  return filtered.sort(() => Math.random() - 0.5).slice(0, length);
}

export function findRegenciesByRecommend(
  ids: string[],
  length: number = 5
): Regencies[] {
  const result: Regencies[] = [...regencies];

  const filtered = result.filter((location) => !ids.includes(location.id));

  return filtered.sort(() => Math.random() - 0.5).slice(0, length);
}

export function findDistrictsByRecommend(
  ids: string[],
  length: number = 5
): Districts[] {
  const result: Districts[] = [...districts];

  const filtered = result.filter((location) => !ids.includes(location.id));

  return filtered.sort(() => Math.random() - 0.5).slice(0, length);
}

export function findLocationByRecommend(
  ids: string[],
  length: number = 9
): Location[] {
  const result: Location[] = [...provinces, ...regencies, ...districts];

  const filtered = result.filter((location) => !ids.includes(location.id));

  return filtered.sort(() => Math.random() - 0.5).slice(0, length);
}
