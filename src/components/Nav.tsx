import { whatsapp } from "@/lib";
import Link from "next/link";
import { Button } from "@/components/ui";
import { MessageCircleMore } from "lucide-react";

export const navItem = [
  ["/", "Beranda"],
  ["/travel", "Travel"],
  ["/galeri", "Galeri"],
  ["/kontak", "Kontak"],
];

export function Nav() {
  return (
    <nav className="w-full flex flex-col gap-4 md:flex-row md:items-center md:gap-x-7 lg:gap-x-10">
      {navItem.map((e, i) => (
        <Link
          key={i}
          href={e[0]}
          title={e[1]}>
          {e[1]}
        </Link>
      ))}
      <Button
        size="sm"
        asChild
        title="kontak">
        <Link
          rel="nofollow noindex"
          href={whatsapp()}
          title="whatsapp"
          target="_blank">
          <MessageCircleMore /> Pesan
        </Link>
      </Button>
    </nav>
  );
}
