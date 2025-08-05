import { appConfig } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button, Popover, PopoverContent, PopoverTrigger } from "./ui";
import { AlignRight } from "lucide-react";

export default function Header() {
  return (
    <>
      <header className="my-container">
        <div className="flex justify-between">
          <Link
            className="h-auto w-[calc(40px+5vw)] min-w-11 max-w-16 block"
            href="/"
            title={appConfig.APP_NAME}>
            <Image
              className="w-auto"
              title={appConfig.APP_NAME}
              src="/images/logo.png"
              alt={`Logo ${appConfig.APP_NAME}`}
              width={100}
              height={100}
            />
          </Link>

          {/* <Nav /> */}

          <Popover>
            <PopoverTrigger>
              <Button size="icon">
                <AlignRight />
              </Button>
            </PopoverTrigger>
            <PopoverContent>{/* <Nav /> */}</PopoverContent>
          </Popover>
        </div>
      </header>
    </>
  );
}
