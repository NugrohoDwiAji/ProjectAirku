import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLogInCircle } from "react-icons/bi";

export default function Header() {
  return (
    <div className="h-[98px] bg-[#23272e] shadow-2xl flex justify-between pt-[27px] pb-[27px] pl-[100px] pr-[100px] items-center fixed z-50 top-0 left-0 right-0">
      <div className=" flex items-center gap-[17px]">
        <div className="h-[52px] w-[50px] relative">
          <Image src={"/airku.png"} alt="" fill />
        </div>
        <h1 className="text-white text-2xl font-bold">airku</h1>
      </div>
      <div className="flex gap-[50px] items-center text-white">
        <Link href={""} className="hover:text-teal-600">Home</Link>
        <Link href={""} className="hover:text-teal-600">Profil</Link>
        <Link href={""} className="hover:text-teal-600" >Artikel</Link>
        <Link href={""} className="hover:text-teal-600" >Lapor</Link>
        <Link href={""} className="hover:text-teal-600">Donasi</Link>
        <Link
          href={"/login"}
          className=" flex items-center gap-2 rounded-lg bg-teal-600 pt-[9.5px] pb-[9.5px] pr-[22.5px] pl-[22.5px] text-white"
        >
         <BiLogInCircle/> Login
        </Link>
      </div>
    </div>
  );
}
