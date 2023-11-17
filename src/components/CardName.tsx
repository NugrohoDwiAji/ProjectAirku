import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/Fa";
import { FaGithub } from "react-icons/Fa";
import { FaLinkedin } from "react-icons/Fa";

export default function CardName() {
  return (
    <div
      className="h-[253px] w-[395px] bg-white bg-no-repeat bg-right-bottom p-[25px] rounded-lg"
      style={{ backgroundImage: "url('/airku-bg2.png')" }}
    >
      <div className="flex items-center gap-[25px]">
        <div className="relative rounded-full h-[96px] w-[96px]">
          <Image
            src=""
            alt=""
            fill
            className="bg-teal-600 rounded-full min-h-full min-w-full"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold ">nama</h1>
          <h2 className="text-xs">role</h2>
        </div>
      </div>
      <div className="mt-[25px] text-gray-600 font-semibold ">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, hic.
        </p>
      </div>
      <div className=" flex gap-[9px] mt-[18px]">
        <FaInstagram />
        <FaGithub />
        <FaLinkedin />
      </div>
    </div>
  );
}
