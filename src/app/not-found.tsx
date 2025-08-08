import React from "react";
import { appConfig, appGenerateMetadata } from "@/lib/index";
import { Metadata } from "next";
import { BackgroundHero } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const metadata: Promise<Metadata> = appGenerateMetadata({
  title: `404 Tidak Ditemukan - ${appConfig.APP_NAME}`,
  description:
    "Halaman yang Anda cari tidak ditemukan. Pastikan URL yang dimasukkan benar atau kembali ke halaman utama.",
});

export default function NotFound() {
  return (
    <>
      <BackgroundHero>
        <h1>Laman Tidak Ditemukan</h1>
      </BackgroundHero>
      <div className="my-space"></div>
      <div className="grid place-items-center">
        <Link
          href="/"
          title="Beranda">
          <Image
            src="/images/404.png"
            alt="404 not found"
            width="618"
            height="349"
          />
        </Link>
      </div>
    </>
  );
}
