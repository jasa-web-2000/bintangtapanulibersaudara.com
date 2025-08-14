import React from "react";
import ClientComponent from "./ClientComponent";

export default async function page({
  params,
}: {
  params: Promise<{ origin: string }>;
}) {
  const { origin } = await params;

  return <ClientComponent id={origin} />;
}
