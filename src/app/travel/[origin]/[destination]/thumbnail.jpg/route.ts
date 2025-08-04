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

  // const imagePath = appConfig.APP_URL + "/thumbnail.jpg";
  const imagePath = appConfig.APP_URL + "/thumbnail.jpg";
  // const image = await Jimp.read(imagePath);

  try {
    const image = await Jimp.read(imagePath);

    const width = 1300;
    const height = 731;

    image.resize({ w: width, h: height });

    const fontTitle = await loadFont(
      // path.resolve("./public/open-sans-128-white.fnt")
      appConfig.APP_URL + "/open-sans-128-white.fnt"
    );

    // const title = [
    //   "Agen Travel Agen Travel Agen Travel Agen Travel",
    //   capitalize(travelData?.origin?.name),
    //   capitalize(travelData?.destination?.name),
    // ];

    image.print({
      font: fontTitle,
      x: 50,
      y: 40,
      text: {
        text: `Travel ${capitalize(travelData?.origin?.name)} ${capitalize(
          travelData?.destination?.name
        )} Murah (PP)`,
        alignmentX: HorizontalAlign.CENTER,
        alignmentY: VerticalAlign.MIDDLE,
      },
      maxWidth: width - 50,
      maxHeight: 530,
    });

    const fontTelphone = await loadFont(
      // path.resolve("./public/open-sans-64-black.fnt")
      appConfig.APP_URL + "/open-sans-64-black.fnt"
    );
    image.print({
      font: fontTelphone,
      x: 0,
      y: 590,
      text: {
        text: appConfig.TELPHONE,
        alignmentX: HorizontalAlign.CENTER,
      },
      maxWidth: width,
    });

    const buffer = await image.getBuffer("image/jpeg");

    return new NextResponse(buffer, {
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
