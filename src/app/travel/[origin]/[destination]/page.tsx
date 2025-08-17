"use server";
import {
  appConfig,
  appGenerateMetadata,
  capitalize,
  travel,
  findProvincesByRecommend,
  findRegenciesByRecommend,
  schema,
} from "@/lib";
import { Metadata } from "next";
import { ParamsTravel, Seo } from "@/types";
import { notFound } from "next/navigation";
import Image from "next/image";
import { BackgroundHero, Cta, HeroBottom } from "@/components";
import Link from "next/link";

export default async function page({ params }: ParamsTravel) {
  const { origin, destination } = await params;
  const IDDate = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const travelData = await travel({ origin, destination });
  if (!travelData?.origin?.name || !travelData?.destination?.name) {
    notFound();
  }

  const originName = capitalize(travelData?.origin?.name || "Tanpanama1");
  const destinationName = capitalize(
    travelData?.destination?.name || "Tanpanama2"
  );
  const title = `Travel ${originName} ${destinationName}`;
  const titleReverse = `Travel ${destinationName} ${originName}`;

  const provincesRecomendationData = findProvincesByRecommend([
    origin,
    destination,
  ]);

  const regenciesRecomendationData = findRegenciesByRecommend([
    origin,
    destination,
  ]);

  const recomedationResult = [
    ...provincesRecomendationData,
    ...regenciesRecomendationData,
  ];

  return (
    <>
      <BackgroundHero className="!pb-32">
        <h1 className="mb-4">{title}</h1>
      </BackgroundHero>

      <HeroBottom>
        <Image
          priority={true}
          className="bg-slate-100 border-b-8 border-b-indigo-500 shadow-lg rounded-xl w-full max-w-[380] md:max-w-[420px] lg:max-w-[480px] mx-auto"
          src={`/travel/${origin}/${destination}/thumbnail.jpg`}
          alt={capitalize(title)}
          title={capitalize(title)}
          width={1300}
          height={731}
        />

        <div
          className="mt-5 [&_*]:text-justify [&_h3]:mb-1 [&_a]:!underline [&>*]:mb-5 [&_ul]:list-decimal [&_ul]:ml-4"
          id="content">
          <p>
            Jasa{" "}
            <Link
              href={`/travel/${origin}/${destination}`}
              title={title}>
              {title}
            </Link>{" "}
            kini hadir untuk membantu perjalan travel anda. Kami akan
            mengantarkan anda kemanapun anda mau. Baik itu dari {originName} ke{" "}
            {destinationName} maupun dari {destinationName} ke {originName}
          </p>
          <p>
            Apakah anda sedang mencari jasa travel terpercaya di daerah
            Sumatera, terutama di {originName}? Jangan sampai salah memilih jasa
            travel!
          </p>
          <p>
            Kami menawarkan layanan door to door dengan kendaraan yang nyaman,
            supir berpengalaman, serta harga yang terjangkau. Baik Anda
            bepergian untuk urusan bisnis, keluarga, atau sekadar berlibur, kami
            siap mengantarkan Anda ke tujuan dengan aman dan tepat waktu.
          </p>
          {/*  */}
          <h2>Penyedia Jasa Travel Terbaik</h2>
          <p>
            <Link
              href={"/"}
              title={appConfig.APP_NAME}>
              {appConfig.APP_NAME}
            </Link>{" "}
            Kami siap menemani perjalanan Anda dan keluarga dengan layanan
            antar-jemput dari Pekanbaru ke seluruh wilayah Sumatera, maupun
            sebaliknya. Keamanan, kenyamanan, dan ketepatan waktu adalah
            prioritas utama kami, demi memastikan setiap perjalanan Anda
            berjalan lancar, menyenangkan, dan tiba di tujuan dengan selamat.
          </p>
          <Cta />
          {/*  */}
          <h2>Kelebihan Jasa {title} Dibandingkan Transportasi Umum?</h2>
          <p>
            Meskipun tersedia berbagai moda transportasi seperti bus, jasa
            travel mobil memiliki beberapa keunggulan yang membuatnya semakin
            populer di kalangan masyarakat:
          </p>
          <h3>Layanan Door to Door</h3>
          <p>
            Anda tidak perlu repot datang ke terminal atau stasiun. Kami akan
            menjemput Anda langsung dari rumah dan mengantarkan sampai ke lokasi
            tujuan.
          </p>
          <h3>Fleksibilitas Jadwal</h3>
          <p>
            Kami menyediakan beberapa pilihan jadwal keberangkatan setiap hari.
            Anda bisa menyesuaikan waktu perjalanan dengan kebutuhan pribadi
            Anda.
          </p>
          <h3>Kenyamanan Lebih</h3>
          <p>
            Armada atau mobil {title} kami terdiri dari kendaraan yang bersih,
            terawat, dan ber-AC. Jumlah penumpang pun dibatasi agar perjalanan
            lebih nyaman.
          </p>
          <h3>Supir Profesional</h3>
          <p>
            Setiap supir telah berpengalaman dan memahami rute Sumatera dengan
            baik. Kami juga mengutamakan keselamatan selama perjalanan.
          </p>
          <h2>Rekomendasi Rute Travel Lainnya</h2>
          <p>
            Kami menyediakan layanan travel ke seluruh wilayah Sumatera dengan
            fokus utama pada rute{" "}
            <Link
              title="Travel Pekanbaru Sibolga"
              href={"/"}>
              Travel Pekanbaru Sibolga
            </Link>
            . Berbagai pilihan rute tersedia untuk memudahkan perjalanan Anda,
            baik antar kota maupun antar provinsi. Dengan jaringan agen yang
            tersebar luas mulai dari tingkat provinsi, kota, kabupaten, hingga
            kecamatan, kami siap melayani kebutuhan transportasi Anda di seluruh
            Pulau Sumatera.
          </p>
          <p>
            Selain {titleReverse}, kami memiliki beberapa pilihan rute yang
            mungkin anda suka:
          </p>
          <ul>
            <li>
              <Link
                href={`/travel/${travelData?.destination?.id}/${travelData?.origin?.id}`}
                title="">
                Travel {destinationName} {originName}
              </Link>
            </li>
            {recomedationResult
              .sort(() => Math.random() - 0.5)
              .slice(0, recomedationResult.length)
              .map((e, i) => (
                <li key={i}>
                  <Link
                    href={`/travel/${i >= 5 ? travelData?.origin?.id : e.id}/${
                      i >= 5 ? e.id : travelData?.origin?.id
                    }`}
                    title="">
                    Travel {i >= 5 ? originName : capitalize(e.name)}{" "}
                    {i >= 5 ? capitalize(e.name) : originName}
                  </Link>
                </li>
              ))}
          </ul>
          <h2>Cara Pesan {title}</h2>
          <Cta />
          <p>
            Proses pemesanan travel Sumatera kini jauh lebih mudah dan tanpa
            repot. Anda tidak perlu datang langsung ke kantor atau titik
            keberangkatan—cukup pesan secara online dari mana saja. Layanan
            pemesanan kami tersedia 24 jam penuh melalui WhatsApp di nomor{" "}
            {appConfig.TELPHONE}. Mohon untuk hanya menghubungi melalui pesan
            chat dan tidak melakukan panggilan suara tanpa izin, agar proses
            pemesanan dapat berjalan lancar dan cepat.
          </p>
          <p>Berikut panduan mudah untuk memesan travel secara online:</p>
          <ul>
            <li>
              Pilih rute perjalanan yang Anda inginkan melalui website resmi
              kami.
            </li>
            <li>Klik ikon WhatsApp untuk langsung menghubungi admin kami.</li>
            <li>
              Isi data penumpang secara lengkap, termasuk nama, jenis kelamin,
              alamat penjemputan, tujuan, dan informasi barang bawaan.
            </li>
            <li>
              Jika diperlukan, Anda bisa melakukan negosiasi harga dengan admin.
            </li>
            <li>
              Tunggu konfirmasi jadwal keberangkatan sesuai informasi yang
              diberikan.
            </li>
          </ul>
          <p>
            Selain itu, kami rutin menghadirkan promo menarik setiap minggu
            dengan potongan harga hingga 20% per orang. Berikut trik mudah untuk
            mendapatkan promo tersebut:
          </p>
          <ul>
            <li>Lakukan pemesanan sebelum pukul 09.00 pagi.</li>
            <li>
              Bagikan bukti pemesanan Anda ke media sosial seperti Instagram
              atau Facebook.
            </li>
            <li>
              Kirimkan screenshot pembagian tersebut kepada admin melalui
              WhatsApp.
            </li>
          </ul>
          <p>
            Ikuti langkah ini, dan Anda langsung berhak mendapatkan diskon
            spesial dari kami!
          </p>
          <h2>Kesimpulan</h2>
          <p>
            Jasa <strong>{title}</strong> hadir sebagai solusi perjalanan
            nyaman, aman, dan terpercaya di wilayah Sumatera. Dengan layanan
            door to door, armada terawat, dan pemesanan online 24 jam, kami siap
            melayani berbagai rute dengan harga terjangkau. Pesan sekarang dan
            nikmati promo menarik khusus hari {IDDate}!
          </p>
        </div>

        {/* Product SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              schema.product({
                name: title,
                description: `${title} terbaik dan termurah untuk hari ini.`,
              })
            ).replace(/</g, "\\u003c"),
          }}
        />

        {/* Product SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              schema.product({
                name: titleReverse,
                description: `${titleReverse} terbaik dan termurah untuk hari ini.`,
              })
            ).replace(/</g, "\\u003c"),
          }}
        />
      </HeroBottom>
    </>
  );
}

export async function generateMetadata({
  params,
}: ParamsTravel): Promise<Metadata> {
  const { origin, destination } = await params;

  const travelData = await travel({ origin, destination });
  if (!travelData?.origin?.name || !travelData?.destination?.name) {
    notFound();
  }

  const title = `Travel ${travelData?.origin?.name} ${travelData?.destination?.name}`;

  const seo: Seo = {
    title: `${capitalize(title)} - Jasa Travel Murah dan Terpercaya`,
    description: `${capitalize(
      title
    )} akan membantu anda mengantar kemana pun dengan biaya travel yang murah dan jadwal 24 jam.`,
  };

  return appGenerateMetadata({
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${appConfig.APP_URL}/travel/${origin}/${destination}`,
      images: [
        {
          url: `travel/${origin}/${destination}/thumbnail.jpg`,
          width: 672,
          height: 672,
          alt: `${capitalize(title)} Termurah, Terpercaya, Jadwal 24 Jam`,
        },
      ],
    },
  });
}
