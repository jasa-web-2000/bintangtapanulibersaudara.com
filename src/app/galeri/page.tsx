import { BackgroundHero, HeroBottom } from "@/components";
import React from "react";

export default function page() {
  return (
    <>
      <BackgroundHero>
        <div className="">
          <h1>Galeri Travel</h1>
        </div>
      </BackgroundHero>
      <HeroBottom>
        <img
          className="w-full max-w-[500px] object-cover shadow rounded-lg mx-auto"
          src="/images/image-bottom.jpg"
          alt="Galeri Travel"
        />
      </HeroBottom>
    </>
  );
}
