"use client";
import provinces from "@/lib/data/provinces.json";
import regencies from "@/lib/data/regencies.json";
import districts from "@/lib/data/districts.json";
import { DummySitemap } from "@/components";
import React from "react";

export default function ClientComponent({ id }: { id: string }) {
  const data = [...provinces, ...regencies, ...districts];

  const url = data
    .filter((item) => item.id != id)
    .map((item) => `/travel/${id}/${item.id}/`);

  return (
    <DummySitemap
      title={`Sitemap Travel Id: ${id}`}
      url={url}
    />
  );
}
