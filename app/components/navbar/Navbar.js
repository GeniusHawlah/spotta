"use client";

import Image from "next/image";
import React from "react";

import { generalStore } from "@/app/a-store/zustand-store/generalStore";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="gen-padding h-20 bg-pry-color text-white flex py-2 justify-between items-center">
      <Logo />
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
