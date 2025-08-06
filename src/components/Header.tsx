import { appConfig } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Popover, PopoverContent, PopoverTrigger } from "./ui";
import { AlignRight } from "lucide-react";

export default function Header() {
  return (
    <>
      <header className="my-container bg-white top-0 sticky z-[99] shadow-lg">
        <div className="flex justify-between">
          <Link
            className="h-auto w-[calc(40px+5vw)] min-w-11 max-w-16 block"
            href="/"
            title={appConfig.APP_NAME}>
            <Image
              priority={true}
              className="w-auto"
              title={appConfig.APP_NAME}
              src="/images/logo.png"
              alt={`Logo ${appConfig.APP_NAME}`}
              width={100}
              height={100}
            />
          </Link>

          {/* Nav Laptop */}
          <div className="hidden md:flex items-center">
            <Nav />
          </div>

          {/* Toggle Nav */}
          <div className="block md:hidden my-auto">
            <Popover>
              <PopoverTrigger className="border rounded-sm p-1.5 bg-primary ">
                {/* <Button size="icon"> */}
                <AlignRight
                  size={20}
                  className="text-slate-50"
                />
                {/* </Button> */}
              </PopoverTrigger>
              <PopoverContent className="pt-5 pb-6"><Nav /></PopoverContent>
            </Popover>
          </div>
        </div>
      </header>
    </>
  );
}
