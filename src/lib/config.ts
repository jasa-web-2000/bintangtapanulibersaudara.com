export interface Developer {
  name: string;
  url: string;
}

export interface AppConfig {
  APP_URL: string;
  APP_NAME: string;
  DEVELOPER: Developer;
  GOOGLE_SITE_VERIFICATION: string;
}
export const appConfig: AppConfig = {
  APP_URL: "https://travelterdekat.com",
  APP_NAME: "Travel Terdekat",
  DEVELOPER: { name: "Dion Zebua", url: "https://dionzebua.com" },
  GOOGLE_SITE_VERIFICATION: "your-google-site-verification-code",
};
