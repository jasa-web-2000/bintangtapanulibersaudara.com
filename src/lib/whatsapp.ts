import { appConfig } from "@/lib";

export function whatsapp(
  telephone?: string | null,
  message?: string | null
): string {
  const telphoneResult = (telephone || appConfig.TELPHONE)
    .replace(/\D/g, "")
    .replace(/^62?/, "62");
  const messageResult = message ?? `Halo admin ${appConfig.APP_URL}`;
  return `https://api.whatsapp.com/send?phone=${telphoneResult}&text=${encodeURIComponent(
    messageResult
  )}`;
}
