"use client";
import { DummySitemap, navItem } from "@/components";
import React from "react";

const url = [...navItem.map((arr) => arr[0]), "/travel/sitemap.xml"];

export default function page() {
  return (
    <DummySitemap
      title="Sitemap Index"
      url={url}
    />
  );
}
