import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { appGenerateMetadata, schema } from "@/lib/index";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
  display: "swap",
});

export const metadata: Promise<Metadata> = appGenerateMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>
        <div className="bg-red-200">{children}</div>

        {/* Product */}
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

        {/* Site */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema.site()).replace(/</g, "\\u003c"),
          }}
        />

        {/* Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema.organization()).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {/* FAQ */}
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
