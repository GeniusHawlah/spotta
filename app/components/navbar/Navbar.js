"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.svg";
import { Icon } from "@iconify-icon/react";

import { generalStore } from "@/app/a-store/zustand-store/generalStore";

function Navbar() {
  const { menuClicked, setMenuClicked } = generalStore();

  return (
    <nav className="gen-padding h-20 bg-pry-color text-white flex py-2 justify-between items-center">
      <Image src={logo} alt="Spotta Logo" className="cursor-pointer" />
      <div className="flex justify-between items-center">
  
     
      </div>
    </nav>
  );
}

export default Navbar;
