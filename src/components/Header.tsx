import { Popover, PopoverContent, PopoverTrigger } from "./ui";
import { AlignRight } from "lucide-react";
import { Logo, Nav } from "@/components";

export function Header() {
  return (
    <>
      <header className="my-container bg-white top-0 sticky z-[99] shadow-lg">
        <div className="flex justify-between">
          <Logo />

          {/* Nav Laptop */}
          <div className="hidden md:flex items-center">
            <Nav />
          </div>

          {/* Toggle Nav */}
          <div className="block md:hidden my-auto">
            <Popover>
              <PopoverTrigger
                title="toogle menu"
                className="border rounded-sm p-1.5 bg-primary ">
                {/* <Button size="icon"> */}
                <AlignRight
                  size={20}
                  className="text-slate-50"
                />
                {/* </Button> */}
              </PopoverTrigger>
              <PopoverContent className="pt-5 pb-6 block md:hidden">
                <Nav />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>
    </>
  );
}
