"use client";

import Image from "next/image";
import React, { useState } from "react";

import { generalStore } from "@/app/a-store/zustand-store/generalStore";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "./Logo";
import ProfileDropdown from "./ProfileDropdown";

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = generalStore();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <nav className="gen-padding h-20 bg-pry-color text-the-black dark:text-white flex py-2 justify-between items-center mt-5 sm:mt-6 ">
      <Logo />
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center relative ">
          <ThemeSwitch />
          <div className="flex items-center">
            {!isLoggedIn && (
              <p
                onClick={() => {
                  setIsLoggedIn(true);
                }}
                className="text-sm font-semibold dark:text-the-blue text-the-blue cursor-pointer select-none  "
              >
                LOGIN
              </p>
            )}

            {isLoggedIn && (
              <div className=" flex gap-x-[13px] items-center  ">
                <span className="font-normal text-base hidden lg:block">
                  Welcome!
                </span>{" "}
                <Image
                  onClick={() => {
                    setShowProfileDropdown(!showProfileDropdown);
                  }}
                  className="cursor-pointer"
                  src="/images/user_dp.png"
                  alt="User DP"
                  width={36}
                  height={36}
                />
              </div>
            )}
          </div>
          {isLoggedIn && showProfileDropdown && (
            <ProfileDropdown setIsLoggedIn={setIsLoggedIn} />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
