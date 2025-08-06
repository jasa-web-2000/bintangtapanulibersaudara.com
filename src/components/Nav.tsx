import { whatsapp } from "@/lib";
import Link from "next/link";
import React from "react";
import { Button } from "./ui";
import { MessageCircleMore } from "lucide-react";

export default function Nav() {
  return (
    <nav className="w-full flex flex-col gap-4 md:flex-row md:items-center md:gap-x-7 lg:gap-x-10">
      <Link href="/" title="Beranda">Beranda</Link>
      <Link href="/" title="Travel">Travel</Link>
      <Link href="/" title="Galeri">Galeri</Link>
      <Link href="/" title="Kontak">Kontak</Link>
      <Link
        href={whatsapp()}
        title="whatsapp"
        target="_blank">
        <Button
          size="sm"
          title="kontak">
          <MessageCircleMore /> Kontak
        </Button>
      </Link>
    </nav>
  );
}
