"use client";
import { whatsapp } from "@/lib";
import { MessageCircleMore } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export function ChatWhatsapp() {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);

  useEffect(() => {
    setCurrentUrl(`Halo admin!\n${window.location.href}`);
  }, []);

  return (
    <Link
      target="_blank"
      className="bg-gradient-to-bl hover:from-green-600 hover:to-green-800 from-green-700 to-green-900 rounded-full fixed right-5 bottom-5 p-3 shadow z-[999] hover:rotate-12 duration-300"
      href={whatsapp(null, currentUrl)}
      title="whatsapp">
      <MessageCircleMore className="text-slate-50 w-8 h-8" />
    </Link>
  );
}
