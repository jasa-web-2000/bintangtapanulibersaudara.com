import React from "react";
import { Button } from "@/components/ui";
import Link from "next/link";
import { whatsapp } from "@/lib";
import { ArrowBigRightDash } from "lucide-react";

export function Cta() {
  return (
    <div
      id="cta"
      className="p-8 md:p-16 lg:px-32 bg-gray-800/90 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply bg-[url(/images/cta.jpg)] border-b-8 border-b-indigo-500 md:grid grid-cols-12">
      <div className="md:col-span-8">
        <p className="text-2xl max-w-xl mb-5 font-extrabold leading-relaxed tracking-wide text-slate-100">
          Pesan travel anda sekarang juga sebelum kehabisan slot!
        </p>
        <p className="max-w-xl mb-5 text-slate-300 md:mb-0">
          Jadwalkan travel Anda hari ini untuk pengalaman perjalanan yang aman,
          cepat, nyaman, dan terpercaya bersama layanan profesional kami.
        </p>
      </div>
      <div className="md:col-span-4 md:grid justify-end items-center">
        <Button
          asChild
          size="lg"
          variant="outline"
          className="hover:[&_svg]:ml-1 [&_svg]:duration-300"
          title="reservasi tiket">
          <Link
            rel="nofollow noindex"
            href={whatsapp()}
            title="whatsapp"
            target="_blank">
            Pesan Travel <ArrowBigRightDash />
          </Link>
        </Button>
      </div>
    </div>
  );
}
