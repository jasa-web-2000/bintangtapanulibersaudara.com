import { appConfig } from "@/lib";

export function whatsapp(phone: string, message: string): string {
  const telphone = (phone || appConfig.TELPHONE)
    .replace(/\D/g, "") // hapus semua non-digit
    .replace(/^62?/, "62"); // pastikan diawali 62, bukan 0062 atau lainnya
  return `https://api.whatsapp.com/send?phone=${telphone}&text=${encodeURIComponent(message)}`;
}
