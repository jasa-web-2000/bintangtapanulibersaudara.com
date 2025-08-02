import { appGenerateMetadata } from "@/lib";

export const metadata = appGenerateMetadata({
  title: "4040 - Halaman Tidak Ditemukan",
  description: "Halaman yang kamu cari tidak tersedia.",
});

export default function GlobalNotFound() {
  return <h1>404 - Page Not Found</h1>;
}
