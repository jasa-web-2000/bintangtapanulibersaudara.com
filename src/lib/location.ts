import provinces from "@/lib/data/provinces.json";
import regencies from "@/lib/data/regencies.json";
import districts from "@/lib/data/districts.json";

export interface Provinces {
  id: string;
  name: string;
  alt_name: string;
  latitude: number | null;
  longitude: number | null;
}

export interface Regencies {
  id: string;
  province_id: string;
  name: string;
  alt_name: string;
  latitude: number | null;
  longitude: number | null;
}

export interface Districts {
  id: string;
  regency_id: string;
  name: string;
  alt_name: string;
  latitude: number | null;
  longitude: number | null;
}

export function findProvinceById(id: string[]): Provinces[] {
  return provinces.filter((p) => id.includes(p.id));
}

export function findRegenciesById(id: string[]): Regencies[] {
  return regencies.filter((r) => id.includes(r.id));
}

export function findDistrictsById(id: string[]): Districts[] {
  return districts.filter((d) => id.includes(d.id));
}
