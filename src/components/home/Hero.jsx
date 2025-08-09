import { Badge, Button } from "@/components/ui";
import { appConfig, whatsapp } from "@/lib/index";
import { CarFront, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { Search, BackgroundHero, HeroBottom } from "@/components";
export function Hero() {
  return (
    <>
      <BackgroundHero className="!pb-32">
        <Badge className="bg-primary/40 mb-3 rounded-full px-2.5">
          Travel Sumatra
          <CarFront size={11} />
        </Badge>
        <h1 className="mb-4">{appConfig.APP_NAME}</h1>
        <p className="text-slate-300 text-lg">
          Bersama {appConfig.APP_NAME} menawarkan {appConfig.APP_TAGLINE} dengan
          harga murah dan terjangkau untuk anda.
        </p>
        <div className="[&>*]:w-full [&>*]:sm:w-auto mt-5 flex gap-5 flex-col items-center sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            title="kontak">
            <Link
              href={whatsapp()}
              title="whatsapp"
              target="_blank">
              <MessageCircleMore /> Pesan Travel
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="hover:bg-indigo-950 bg-indigo-950/40 border-1 border-slate-500/60 !text-slate-200"
            title="kontak">
            <Link
              href="#cari-rute"
              title="rute-travel">
              Cari Rute
            </Link>
          </Button>
        </div>
      </BackgroundHero>

      <HeroBottom>
        <Search />
      </HeroBottom>
    </>
  );
}
