import React from "react";
import { BackgroundHero } from "./BackgroundHero";
import { DummySitemap as DS } from "@/types";
import { appConfig } from "@/lib";

export function DummySitemap({ title, url }: DS) {
  return (
    <>
      <BackgroundHero>
        <h1>{title}</h1>
      </BackgroundHero>
      <div className="my-space"></div>
      <div className="my-container">
        <ul className="pl-24 list-decimal overflow-x-auto [&_li]:mb-3">
          {url.map((e, i) => (
            <li
              className="list-decimal"
              key={i}>
              <a
                className="text-nowrap visited:text-gray-500"
                href={e}>
                {appConfig.APP_URL + e}
              </a>
              <br />
              <a
                className="text-nowrap visited:text-gray-500 underline"
                href={appConfig.APP_URL + "/dummy-sitemap" + e}>
                {appConfig.APP_URL + "/dummy-sitemap" + e}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
