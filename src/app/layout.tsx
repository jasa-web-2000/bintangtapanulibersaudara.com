import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { appConfig } from "@/lib/config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: appConfig.APP_NAME,
  description: appConfig.APP_NAME,
  authors: [{ name: appConfig.DEVELOPER.name, url: appConfig.DEVELOPER.url }],
  creator: appConfig.DEVELOPER.name,
  publisher: appConfig.DEVELOPER.name,
  generator: "Next.js",
  applicationName: appConfig.APP_NAME,

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
  },

  openGraph: {
    title: appConfig.APP_NAME,
    description: appConfig.APP_NAME,
    url: "https://travelterdekat.com",
    siteName: appConfig.APP_NAME,
    images: [
      {
        url: "/travel-terdekat-logo-blue.jpg",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Next.js",
    description: "The React Framework for the Web",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"], // Must be an absolute URL
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
      <body className={`${poppins.className} antialiased`}>
        <div className="bg-red-200">{children}</div>
      </body>
    </html>
  );
}
