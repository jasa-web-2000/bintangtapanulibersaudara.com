import React from "react";

interface PropsListKontak {
  icon: React.ReactElement;
  subSubTitle: string;
  paragraph: string;
}

export function ListKontak({ icon, subSubTitle, paragraph }: PropsListKontak) {
  return (
    <div className="flex gap-x-5 items-start mb-5">
      <div className="grid place-items-center text-slate-50 bg-gradient-to-br from-indigo-400 to-indigo-600 h-12 w-12 rounded-lg shadow shrink-0">
        {icon}
      </div>
      <div className="">
        <h3 className="leading-[100%] mb-2">{subSubTitle}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
