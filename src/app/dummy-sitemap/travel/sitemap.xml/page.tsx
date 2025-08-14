"use client";
import provinces from "@/lib/data/provinces.json";
import regencies from "@/lib/data/regencies.json";
import districts from "@/lib/data/districts.json";
import { DummySitemap } from "@/components";
import React from "react";

export default function page() {
  const data = [...provinces, ...regencies, ...districts];

  const url = data.map((item) => `/travel/${item.id}/sitemap.xml`);
  return (
    <DummySitemap
      title="Sitemap All Travel"
      url={url}
    />
  );
}
