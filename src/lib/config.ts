interface Developer {
  name: string;
  url: string;
}

interface AppConfig {
  APP_URL: string;
  APP_NAME: string;
  APP_TAGLINE: string;
  TELPHONE: string;
  EMAIL: string;
  DEVELOPER: Developer;
}

export const appConfig: AppConfig = {
  APP_URL: "https://bintangtapanulibersaudara.com",
  // APP_URL: "http://localhost:3000",
  APP_NAME: "CV. Bintang Tapanuli Bersaudara",
  APP_TAGLINE: "Travel Sumatra Terbaik",
  TELPHONE: "+62 813-1544-403",
  EMAIL: "admin@bintangtapanulibersaudara.com",
  DEVELOPER: { name: "Dion Zebua", url: "https://dionzebua.com" },
};
