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
export type Location = Provinces | Regencies | Districts;
