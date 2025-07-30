import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { config } from "@/lib/config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  
  title: config.APP_NAME,
  description: config.APP_NAME,
  authors: [{ name: config.DEVELOPER.name, url: config.DEVELOPER.url }],
  creator: config.DEVELOPER.name,
  publisher: config.DEVELOPER.name,
  generator: "Next.js",
  applicationName: config.APP_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon-48x48.png",
        sizes: "48x48",
      },
    ],
  },

  openGraph: {
    title: config.APP_NAME,
    description: config.APP_NAME,
    url: "https://travelterdekat.com",
    siteName: config.APP_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Travel Terdekat Open Graph Image",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
