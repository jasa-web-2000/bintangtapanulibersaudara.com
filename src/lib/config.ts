interface Developer {
  name: string;
  url: string;
}

interface AppConfig {
  APP_URL: string;
  APP_NAME: string;
  TELPHONE: string;
  EMAIL: string;
  DEVELOPER: Developer;
  GOOGLE_SITE_VERIFICATION: string;
}

export const appConfig: AppConfig = {
  APP_URL: "http://localhost:3000",
  APP_NAME: "Travel Terdekat",
  TELPHONE: "+62 882-8931-7870",
  EMAIL: "admin@travelterdekat.web.id",
  DEVELOPER: { name: "Dion Zebua", url: "https://dionzebua.com" },
  GOOGLE_SITE_VERIFICATION: "your-google-site-verification-code",
};
