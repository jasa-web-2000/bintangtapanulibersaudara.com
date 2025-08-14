import { appConfig, whatsapp } from "@/lib";
import Link from "next/link";
import { Logo, navItem } from "@/components";
import { ChevronRight, MapPin, MessageCircleMore, Phone } from "lucide-react";

export function Footer() {
  const contactItem = [
    {
      href: appConfig.LINK_ADDRESS,
      label: appConfig.ADDRESS,
      icon: MapPin,
    },
    {
      href: `tel:${appConfig.TELPHONE.replace(/\D/g, "").replace(
        /^62?/,
        "62"
      )}`,
      label: appConfig.TELPHONE,
      icon: Phone,
    },
    {
      href: whatsapp(),
      label: appConfig.TELPHONE,
      icon: MessageCircleMore,
    },
  ];

  const url = [
    ...navItem,
    ["/sitemap.xml", "Sitemap"],
    ["/dummy-sitemap", "Dummy Sitemap"],
  ];
  return (
    <>
      <div className="my-space "></div>
      <footer className="relative mt-10">
        <div className="bg-container"></div>
        <div className="relative my-container">
          <div className="py-12 grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-12 [&_h3]:mb-3 [&_h3]:!text-slate-300 [&_.footerList]:flex [&_.footerList]:flex-col [&_.footerList]:gap-y-1 [&_.footerList_a]:text-slate-400 [&_.footerList_a]:hover:text-slate-200 [&_.footerList_a]:flex [&_.footerList_a]:items-center [&_.footerList_a]:gap-1.5 [&_.footerList_a_svg]:shrink-0">
            {/* Logo */}
            <div className="sm:col-span-full md:col-span-6 sm:max-w-3/4 md:max-w-full lg:max-w-[400px]">
              <Logo />
              <p className="light">
                {appConfig.APP_NAME} menawarkan jasa {appConfig.APP_TAGLINE} dan
                Travel seluruh Pulau Sumatera.
              </p>
            </div>

            {/* Laman */}
            <div className="sm:col-span-1 md:col-span-2">
              <h3 className="light">Laman</h3>
              <div className="footerList">
                {url.map((e, i) => (
                  <Link
                    key={i}
                    href={e[0]}
                    title={e[1]}>
                    <ChevronRight size={16} /> {e[1]}
                  </Link>
                ))}
              </div>
            </div>

            {/* Kontak */}
            <div className="sm:col-span-1 md:col-span-4">
              <h3 className="light">Kontak</h3>
              <Link
                className="bg-gradient-to-bl hover:from-green-600 hover:to-green-800 from-green-700 to-green-900 rounded-full fixed right-5 bottom-5 p-3 shadow z-[999] hover:rotate-12 duration-300"
                href={whatsapp()}
                title="whatsapp">
                <MessageCircleMore className="text-slate-50 w-8 h-8" />
              </Link>
              <div className="footerList">
                {contactItem.map((item, index) => (
                  <Link
                    key={index}
                    rel="nofollow noindex"
                    href={item.href}
                    title={item.label}>
                    <item.icon size={16} />
                    <span className="line-clamp-1">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-slate-300 border-t border-slate-700 py-5">
            <p>
              Copyright © since {new Date().getFullYear()} - 2025 |{" "}
              {appConfig.APP_NAME}.
            </p>
            <p>
              Developed by{" "}
              <Link
                className="underline text-slate-300"
                href={appConfig.DEVELOPER.url}
                title={appConfig.DEVELOPER.name}>
                {appConfig.DEVELOPER.name}
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
