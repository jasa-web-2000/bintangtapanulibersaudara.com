import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { appGenerateMetadata } from "@/lib/metadata";

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
      </body>
    </html>
  );
}
