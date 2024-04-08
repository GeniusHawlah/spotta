"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { generalStore } from "@/app/a-store/zustand-store/generalStore";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "./Logo";
import ProfileDropdown from "./ProfileDropdown";
import SearchWithoutButton from "../landing-page/SearchWithoutButton";
import secureLocalStorage from "react-secure-storage";
import { ADDRESSES } from "@/app/a-store/content-store/content-store";

function Navbar() {
  const {
    isLoggedIn,
    setIsLoggedIn,
    addressList,
    setAddressList,
    setSelectedAddress,
    showProfileDropdown,
    setShowProfileDropdown,
  } = generalStore();

  // //>To persist the login state and other data
  useEffect(() => {
    if (secureLocalStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(secureLocalStorage.getItem("isLoggedIn"));
    }

    if (secureLocalStorage.getItem("selectedAddress")) {
      setSelectedAddress(secureLocalStorage.getItem("selectedAddress"));
    }

    if (secureLocalStorage.getItem("addressList")) {
      setAddressList(secureLocalStorage.getItem("addressList"));
    } else {
      setAddressList(ADDRESSES);
    }
  }, []);

  return (
    <nav
      onClick={() => setShowProfileDropdown(false)}
      className="gen-padding z-[4000000]  flex py-2 justify-between items-center mt-5 sm:mt-6 gap-x-12"
    >
      <Logo />

      <div className="flex justify-end md:justify-between items-center w-full  z-40 gap-x-12">
        <div className="w-[70%] hidden md:block ">
          {" "}
          <SearchWithoutButton />{" "}
        </div>
        <div className="flex justify-between items-center relative ">
          <ThemeSwitch />
          <div className="flex items-center">
            {!isLoggedIn && (
              <p
                onClick={() => {
                  setIsLoggedIn(true);
                  secureLocalStorage.setItem("isLoggedIn", true);
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
                  onClick={(e) => {
                    e.stopPropagation();
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
          {isLoggedIn && showProfileDropdown && <ProfileDropdown />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
