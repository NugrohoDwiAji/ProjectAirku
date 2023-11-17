import React from "react";
import Image from "next/image";
import { GrLinkNext } from "react-icons/gr";

type cardArtikelTipe = {
src:string;
title:string;
desc:string;
time:string;

}

export default function CardArtikel(props:cardArtikelTipe) {
  return (
    <div className="bg-white w-[280px] h-[355px] p-[15px] rounded-lg">
      <div className="relative rounded-lg h-[122px] w-[250px]">
        <Image src={props.src} alt="" fill className="bg-teal-600 rounded-lg" />
      </div>
      <div className="mt-[14px] flex">
        <div className="w-[24px] h-[25px] relative">
          <Image src="/timetable.png" alt="" fill />
        </div>
        <h3 className="ml-2 text-sm">{props.time}</h3>
      </div>
        <h1 className="mt-[16px] text-teal-600 font-semibold">
          {props.title}
        </h1>
        <p className="mt-[4px] font-medium text-gray-600 text-sm">
          {props.desc}
        </p>
        <button
          type="button"
          className="flex items-center border-2 border-blue-700 rounded-lg pt-[8px] pb-[8px] pl-[12px] pr-[12px] text-[14px] text-blue-700 mt-[12px]"
        >
          Selengkapnya
          <div className="ml-[6px]">
            <GrLinkNext />
          </div>
        </button>
    </div>
  );
}
