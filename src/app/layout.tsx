import { Poppins } from "next/font/google";
import "./globals.css";
import { appConfig, schema } from "@/lib/index";
import { Header } from "@/components";
import { Badge } from "@/components/ui";
import Link from "next/link";
import { CarFront } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="scroll-smooth ">
      <body
        className={`${poppins.className} antialiased w-full h-dvh !overflow-visible`}>
        {/* Header */}
        <Header />
        {/* Header */}

        <div className="relative">
          <div className="bg-container"></div>
          <div className="my-container py-20">
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
            </div>
          </div>
        </div>
        <div className="h-[3000px]"></div>

        {children}

        {/* Product SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              schema.product({
                name: "Produk Terdekat",
                description: "Produk terdekat yang tersedia di sekitar Anda.",
              })
            ).replace(/</g, "\\u003c"),
          }}
        />

        {/* Site SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema.site()).replace(/</g, "\\u003c"),
          }}
        />

        {/* Local Business SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema.organization()).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {/* FAQ SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema.faq()).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
