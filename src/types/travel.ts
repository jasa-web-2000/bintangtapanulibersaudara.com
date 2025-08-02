export interface Travel {
  origin: string;
  destination: string;
}

export interface ParamsTravel {
  params: Promise<Travel>;
}
