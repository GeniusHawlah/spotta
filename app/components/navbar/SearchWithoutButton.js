"use client";
import { generalStore } from "@/app/a-store/zustand-store/generalStore";
import { Icon } from "@iconify-icon/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

function SearchWithoutButton() {
  const router = useRouter();

  const {
    searchTerm,
    addressList,
    setSearchTerm,
    setSearchSuggestions,
    searchSuggestions,
    setFocusedSearchBar,
    focusedSearchBar,
    setSelectedAddress,
  } = generalStore();

  function onChange(e) {
    setSearchTerm(e.target.value);

    if (!e.target.value || e.target.value.trim("") === 0) {
      setSearchSuggestions([]);
      setSearchTerm("");
      return;
    }
    const filteredAddresses = addressList.filter((item) => {
      const address = item.address.toLowerCase();
      const searchWords = e.target.value.toLowerCase().split(" ");
      return searchWords.some((word) => address.includes(word));
    });
    setSearchSuggestions(filteredAddresses);
  }

  function pickAddress(addressText, addressObject) {
    setSearchTerm(addressText);
    setSearchSuggestions([]);
    router.push("/reviews");
    setSelectedAddress(addressObject);
    secureLocalStorage.setItem("selectedAddress", addressObject);
  }

  return (
    <div
      onTouchStart={() => setFocusedSearchBar("nav")}
      onMouseOver={() => setFocusedSearchBar("nav")}
      onClick={() => setFocusedSearchBar("nav")}
      className="w-full relative"
    >
      <div className="px-3 py-1 rounded bg-white dark:bg-[#242428] border dark:border-none border-purple-200 flex items-center ">
        <Icon icon="carbon:search" className="text-base" />
        <input
          autoComplete="true"
          onChange={(e) => {
            onChange(e);
          }}
          value={searchTerm}
          type="text"
          id="address"
          className="w-full bg-white dark:bg-[#242428] focus:ring-0 border-0"
          placeholder="Enter Address"
        />

        <Icon
          onClick={() => {
            setSearchTerm("");
            setSearchSuggestions([]);
          }}
          icon="ic:sharp-close"
          className="dark:text-gray-400 cursor-pointer"
        />
      </div>

      {/* //> Search suggestions */}
      {focusedSearchBar === "nav" && (
        <div className="absolute top-12 max-h-60 scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-w-1 scrollbar-rounded-md overflow-y-auto ">
          {searchSuggestions.map((address) => (
            <p
              onTouchStart={() => {
                setSelectedAddress(address);
                secureLocalStorage.setItem("selectedAddress", address);
              }}
              onClick={() => {
                setSelectedAddress(address);
                secureLocalStorage.setItem("selectedAddress", address);
                pickAddress(address.address, address);
              }}
              className="px-3 py-3 bg-[#e5f0fd] w-full cursor-pointer shadow dark:shadow-gray-50 dark:text-white dark:dark:bg-[#242428]"
              key={address.id}
            >
              {address.address}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchWithoutButton;
