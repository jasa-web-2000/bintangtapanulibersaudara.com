import { Poppins } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { schema } from "@/lib/index";

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
      data-scroll-behavior="smooth"
      lang="id"
      className="scroll-smooth">
      <body
        className={`${poppins.className} flex flex-col antialiased w-full h-dvh !overflow-visible`}>
        {/* Header */}
        <Header />
        {/* Header */}

        <main className="">{children}</main>

        <Footer />

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
