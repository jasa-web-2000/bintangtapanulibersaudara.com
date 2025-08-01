import { appConfig, appGenerateMetadata } from "@/lib";
import { Metadata } from "next";

export const metadata: Promise<Metadata> = appGenerateMetadata({
  title: "Travel",
  openGraph: {
    url: `${appConfig.APP_URL}/travel`,
  },
});

export default function page() {
  return <div>travel</div>;
}
