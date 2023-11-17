import React from "react";
import Image from "next/image";
import Link from "next/link";
// icons
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="h-[468px] bg-[#23272e] top-0 left-0 right-0 pr-[100px] pl-[100px] pb-[37px] pt-[100px] flex justify-between">
      <div className=" flex flex-col gap-[35px] w-[339px] h-[253px]">
        <div className="flex gap-[17px] items-center">
          <div className="w-[61px] h-[64px] relative ">
            <Image src="/airku.png" alt="" fill />
          </div>
          <h1 className="text-white text-4xl font-bold">AIRKU</h1>
        </div>
        <p className="text-gray-400">
          Sebuah web yang menyediakan informasi tentang ketersediaan air bersih
          di suatu daerah dan memiliki fitur pelaporan untuk membantu memudahkan
          sektor swasta atau organisasi peduli masyarakat dalam membantu
          masyarakat.
        </p>
      </div>
      <div className=" flex flex-col gap-2 text-gray-300">
        <h1 className="font-bold">UseFull Link</h1>
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>Profil</Link>
        <Link href={"#"}>Artikel</Link>
        <Link href={"#"}>Lapor</Link>
        <Link href={"#"}>Donasi</Link>
      </div>
      <div className="text-white">
        <h1 className="font-bold text-gray-300">Connet With Us</h1>
        <div className=" flex gap-[25px] text-2xl mt-[19px]">
          <BsInstagram />
          <BsFacebook />
          <BsTwitter />
          <BsYoutube />
          <BsLinkedin />
          <MdEmail />
        </div>
      </div>
      <div className="gap-6 flex flex-col text-gray-600">
        <h1 className="text-gray-300 font-bold">Contact Us</h1>
        <h2>airkucare@gmail.com</h2>
        <h2>+62 813 3341 2983</h2>
      </div>
    </div>
  );
}
