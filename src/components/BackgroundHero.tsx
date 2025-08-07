import React from "react";

export function BackgroundHero({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className="relative"
        id="hero">
        <div className="bg-container"></div>
        <div className="my-container pt-20 lg:pt-14 xl:pt-20 pb-32">
          <div className="relative text-center max-w-96 sm:max-w-[480px] lg:max-w-[600px] mx-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
