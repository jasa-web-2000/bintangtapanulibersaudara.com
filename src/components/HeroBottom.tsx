import React from "react";

export function HeroBottom({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="my-container relative -mt-20 max-w-[800px]">{children}</div>
  );
}
