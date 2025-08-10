import React from "react";

interface PropsFeaturedList {
  icon: React.ReactElement;
  subSubTitle: string;
  description: string;
}

export function FeaturedList({
  icon,
  subSubTitle,
  description,
}: PropsFeaturedList) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 md:p-8">
      <div className="grid place-items-center text-slate-50 bg-gradient-to-br from-indigo-400 to-indigo-600 h-12 w-12 rounded-md md:rounded-lg shadow shrink-0">
        {icon}
      </div>
      <h3 className="mt-5 mb-1">{subSubTitle}</h3>
      <p className="opacity-95">{description}</p>
    </div>
  );
}
