import { appConfig, capitalize, travel } from "@/lib";
import { ParamsTravel } from "@/types";
import { HorizontalAlign, Jimp, loadFont, VerticalAlign } from "jimp";

import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: ParamsTravel) {
  const { origin, destination } = await params;

  const travelData = await travel({ origin, destination });

  if (!travelData?.origin?.name || !travelData?.destination?.name) {
    return NextResponse.redirect(appConfig.APP_URL + "/not-found");
  }

  try {
    const image = await Jimp.read(appConfig.APP_URL + "/images/thumbnail.jpg");
    const width = 1100;
    const height = 618.75;

    image.resize({ w: width, h: height });
    const fontTitle = await loadFont(
      appConfig.APP_URL + "/fonts/open-sans-64-white.fnt"
    );

    image.print({
      font: fontTitle,
      x: 50,
      y: 0,
      text: {
        text: `Travel dari ${capitalize(
          travelData?.origin?.name
        )} ke ${capitalize(
          travelData?.destination?.name
        )} murah dan door to door`,
        alignmentX: HorizontalAlign.CENTER,
        alignmentY: VerticalAlign.MIDDLE,
      },
      maxWidth: width - 100,
      maxHeight: height,
    });

    const fontTelphone = await loadFont(
      appConfig.APP_URL + "/fonts/open-sans-64-black.fnt"
    );
    image.print({
      font: fontTelphone,
      x: 0,
      y: height - 125,
      text: {
        text: appConfig.TELPHONE,
        alignmentX: HorizontalAlign.CENTER,
      },
      maxWidth: width,
      maxHeight: height,
    });

    const buffer = await image.getBuffer("image/jpeg", { quality: 50 });
    const uint8Array = new Uint8Array(buffer);

    return new NextResponse(uint8Array, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    // return NextResponse.redirect(appConfig.APP_URL + error);
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";

    return new NextResponse(message, {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "no-store",
      },
    });
  }
}
