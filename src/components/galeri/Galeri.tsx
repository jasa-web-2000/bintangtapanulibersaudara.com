import React from "react";
import { SubTitle } from "@/components";
import Image from "next/image";
import { appConfig } from "@/lib";

export function Galeri() {
  const galeri = [
    [
      ["/images/galeri/1.jpg", "aspect-[10/15]"],
      ["/images/galeri/2.jpg", "aspect-[10/10]"],
      ["/images/galeri/3.jpg", "aspect-[10/11]"],
    ],
    [
      ["/images/galeri/4.jpg", "aspect-[10/12]"],
      ["/images/galeri/5.jpg", "aspect-[10/14]"],
      ["/images/galeri/6.jpg", "aspect-[10/10]"],
    ],
    [
      ["/images/galeri/7.jpg", "aspect-[10/14]"],
      ["/images/galeri/8.jpg", "aspect-[10/11]"],
      ["/images/galeri/9.jpg", "aspect-[10/11]"],
    ],
    [
      ["/images/galeri/10.jpg", "aspect-[10/8.75]"],
      ["/images/galeri/11.jpg", "aspect-[10/8.75]"],
      ["/images/galeri/12.jpg", "aspect-[10/8.75]"],
      ["/images/galeri/13.jpg", "aspect-[10/8.75]"],
    ],
  ];

  let index = 1;

  return (
    <div className="my-container">
      <SubTitle
        subTitle="Galeri Travel & Armada"
        paragraph={`Galeri armada travel ${appConfig.APP_NAME} : nyaman, bersih, dan terawat.`}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7 [&_img]:rounded-md [&_img]:w-full [&_img]:object-cover [&_img]:object-top [&_img]:shadow-lg [&_img]:border-b-8 [&_img]:border-indigo-500 [&_img]:brightness-75 [&_img]:hover:brightness-90">
        {galeri.map((e, i) => {
          return (
            <div
              className="grid gap-5 md:gap-6 lg:gap-7 md:last:grid-cols-4 md:last:col-span-full lg:last:grid-cols-1 lg:last:col-span-1"
              key={i}>
              {e.map((ee, ii) => {
                return (
                  <a
                    href={ee[0]}
                    key={ii}
                    title={`Galeri ${index}`}>
                    <Image
                      title={`Galeri ${index}`}
                      className={ee[1]}
                      src={ee[0]}
                      alt={`Galeri ${index++}`}
                      width={400}
                      height={400}
                    />
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
