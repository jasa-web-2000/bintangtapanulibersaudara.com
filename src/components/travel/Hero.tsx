import React from "react";
import { BackgroundHero, HeroBottom, Search } from "@/components/";

export function Hero() {
  return (
    <>
      <BackgroundHero className="!pb-32">
        <h1>Arsip Rute Travel Lengkap</h1>
      </BackgroundHero>
      <HeroBottom>
        <Search />
      </HeroBottom>
    </>
  );
}
