import { Badge, Button } from "@/components/ui";
import { appConfig, whatsapp } from "@/lib/index";
import { CarFront, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { Search } from "@/components";

export function Hero() {
  return (
    <>
      <div className="relative">
        <div className="bg-container"></div>
        <div className="my-container pt-20 lg:pt-14 xl:pt-20 pb-32">
          <div className="relative text-center max-w-96 sm:max-w-[480px] lg:max-w-[600px] mx-auto">
            <Badge className="bg-primary/40 mb-3 rounded-full px-2.5">
              Travel Sumatra
              <CarFront size={11} />
            </Badge>
            <h1 className="text-3xl mb-5 font-semibold tracking-tight text-slate-200">
              {appConfig.APP_NAME}
            </h1>
            <p className="text-slate-300 text-lg">
              Bersama {appConfig.APP_NAME} menawarkan {appConfig.APP_TAGLINE}{" "}
              dengan harga murah dan terjangkau untuk anda.
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
                  <MessageCircleMore /> Cari Rute
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-container relative -mt-20 max-w-[800px]">
        <Search />
      </div>
    </>
  );
}
