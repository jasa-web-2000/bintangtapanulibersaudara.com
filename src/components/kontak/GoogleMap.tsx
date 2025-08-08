import { appConfig } from "@/lib";
import React from "react";

export function GoogleMap() {
  return (
    <div className="my-container">
      <iframe
        title="alamat"
        src={appConfig.GOOGLE_MAP}
        allowFullScreen={true}
        className=" w-full h-80 lg:h-96 brightness-35 hover:brightness-90 transition-all duration-700 shadow-lg rounded-lg "
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}
