import React from "react";
import { appConfig, appGenerateMetadata } from "@/lib/index";
import { Metadata } from "next";

export const metadata: Promise<Metadata> = appGenerateMetadata({
  title: `404 Tidak Ditemukan - ${appConfig.APP_NAME}`,
  description:
    "Halaman yang Anda cari tidak ditemukan. Pastikan URL yang dimasukkan benar atau kembali ke halaman utama.",
});

export default function NotFound() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
      </div>
    </>
  );
}
