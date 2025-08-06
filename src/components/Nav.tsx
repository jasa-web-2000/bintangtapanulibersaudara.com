import { whatsapp } from "@/lib";
import Link from "next/link";
import React from "react";
import { Button } from "./ui";
import { MessageCircleMore } from "lucide-react";

export default function Nav() {
  return (
    <nav className="bg-red-50 w-full">
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
