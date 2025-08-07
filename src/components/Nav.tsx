import { whatsapp } from "@/lib";
import Link from "next/link";
import { Button } from "./ui";
import { MessageCircleMore } from "lucide-react";

export function Nav() {
  return (
    <nav className="w-full flex flex-col gap-4 md:flex-row md:items-center md:gap-x-7 lg:gap-x-10">
      <Link
        href="/"
        title="Beranda">
        Beranda
      </Link>
      <Link
        href="/"
        title="Travel">
        Travel
      </Link>
      <Link
        href="/"
        title="Galeri">
        Galeri
      </Link>
      <Link
        href="/"
        title="Kontak">
        Kontak
      </Link>
      <Button
        size="sm"
        asChild
        title="kontak">
        <Link
          href={whatsapp()}
          title="whatsapp"
          target="_blank">
          <MessageCircleMore /> Kontak
        </Link>
      </Button>
    </nav>
  );
}
