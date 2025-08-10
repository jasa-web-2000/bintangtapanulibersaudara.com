"use client";

import { appConfig } from "@/lib";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="my-space "></div>
      <footer className="relative">
        <div className="bg-container"></div>
        <div className="relative my-container">
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
          </div>
          <div className="text-center text-sm text-slate-300 border-t border-slate-700 py-5">
            <p>
              Copyright © {new Date().getFullYear()} {appConfig.APP_NAME}.
            </p>
            <p>
              Developed by{" "}
              <Link
                className="underline text-slate-300"
                href={appConfig.DEVELOPER.url}
                title={appConfig.DEVELOPER.name}>
                {appConfig.DEVELOPER.name}
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
