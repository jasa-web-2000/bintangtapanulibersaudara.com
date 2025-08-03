import { appConfig, capitalize, travel } from "@/lib";
import { ParamsTravel } from "@/types";
import { HorizontalAlign, Jimp, loadFont, VerticalAlign } from "jimp";
import { SANS_128_WHITE, SANS_64_BLACK } from "jimp/fonts";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: ParamsTravel) {
  const { origin, destination } = await params;

  const travelData = await travel({ origin, destination });

  if (!travelData?.origin?.name || !travelData?.destination?.name) {
    return NextResponse.redirect(appConfig.APP_URL + "/not-found");
  }

  const imagePath = appConfig.APP_URL + "/thumbnail.jpg";

  try {
    const image = await Jimp.read(imagePath);

    const width = 1300;
    const height = 731;

    image.resize({ w: width, h: height });

    const fontTitle = await loadFont(SANS_128_WHITE);

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

    const fontTelphone = await loadFont(SANS_64_BLACK);
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
    return notFound();
  }
}
