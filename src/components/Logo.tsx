import { appConfig } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Logo() {
  return (
    <div className="flex items-center">
      {/* <span className="w-[10px] border-primary border-l-2 h-1/2 rounded-full"></span> */}
      <Link
        className="h-auto w-[calc(40px+5vw)] min-w-11 max-w-16 block outline-0"
        href="/"
        title={appConfig.APP_NAME}>
        <Image
          className="w-auto"
          title={appConfig.APP_NAME}
          src="/images/logo.png"
          alt={`Logo ${appConfig.APP_NAME}`}
          width={150}
          height={150}
        />
      </Link>
    </div>
  );
}
