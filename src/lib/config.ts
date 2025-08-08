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
  ADDRESS: string;
  GOOGLE_MAP: string;
  DEVELOPER: Developer;
}

export const appConfig: AppConfig = {
  APP_URL: "https://bintangtapanulibersaudara.com",
  // APP_URL: "http://localhost:3000",
  APP_NAME: "CV. Bintang Tapanuli Bersaudara",
  APP_TAGLINE: "Travel Sumatra Terbaik",
  TELPHONE: "+62 813-1544-403",
  EMAIL: "admin@bintangtapanulibersaudara.com",
  ADDRESS:
    "Jl. Garuda Sakti KM 6, Gang Kartini No. 5, Desa Karya Indah, Kec. Tapung, Kabupaten Kampar, Riau, 28464",
  GOOGLE_MAP:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.664993800744!2d101.33699547496468!3d0.5023091994927761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMzAnMDguMyJOIDEwMcKwMjAnMjIuNSJF!5e0!3m2!1sid!2sid!4v1754663352973!5m2!1sid!2sid",
  DEVELOPER: { name: "Dion Zebua", url: "https://dionzebua.com" },
};
