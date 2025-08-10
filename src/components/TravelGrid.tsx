import React from "react";

export function TravelGrid({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 sm:gap-x-6 md:gap-x-7 lg:gap-x-8 gap-y-7 sm:gap-y-8 md:gap-y-9 lg:gap-y-10">
      {children}
    </div>
  );
}
