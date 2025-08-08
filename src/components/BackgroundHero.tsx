import React from "react";

export function BackgroundHero({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <>
      <div
        className="relative"
        id="hero">
        <div className="bg-container"></div>
        <div
          className={`my-container py-20 lg:py-20 xl:py-20 ${className ?? ""}`}>
          <div className="relative text-center max-w-96 sm:max-w-[480px] lg:max-w-[600px] mx-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
