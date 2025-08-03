import { appConfig } from "@/lib";

export function whatsapp(phone: string, message: string): string {
  const telphone = (phone || appConfig.TELPHONE)
    .replace(/\D/g, "")
    .replace(/^62?/, "62");
  return `https://api.whatsapp.com/send?phone=${telphone}&text=${encodeURIComponent(
    message
  )}`;
}
