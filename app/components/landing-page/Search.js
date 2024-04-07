"use client";
import { ADDRESSES } from "@/app/a-store/content-store/content-store";
import { generalStore } from "@/app/a-store/zustand-store/generalStore";
import { Icon } from "@iconify-icon/react";
import React, { useEffect } from "react";

function Search() {
  const {
    reviews,
    setReviews,
    searchTerm,
    setSearchTerm,
    setSearchSuggestions,
    searchSuggestions,
    isLoggedIn,
  } = generalStore();

  function onChange(e) {
    setSearchTerm(e.target.value);

    if (!e.target.value || e.target.value.trim("") === 0) {
      setSearchSuggestions([]);
      setSearchTerm("");
      return;
    }
    const filteredAddresses = ADDRESSES.filter((item) => {
      const address = item.address.toLowerCase();
      const searchWords = e.target.value.toLowerCase().split(" ");
      return searchWords.some((word) => address.includes(word));
    });
    setSearchSuggestions(filteredAddresses);
  }

  function pickAddress(selectedAddress) {
    setSearchTerm(selectedAddress);
    setSearchSuggestions([]);
  }

  return (
    <div className="mt-10 relative">
      <div className="px-3 py-1 rounded bg-[#f3f7fe] dark:bg-[#242428] border dark:border-none border-purple-200 flex items-center ">
        <Icon icon="carbon:search" className="text-base" />
        <input
          autocomplete
          onChange={(e) => {
            onChange(e);
          }}
          value={searchTerm}
          type="text"
          id="address"
          className="w-full bg-[#f3f7fe] dark:bg-[#242428] focus:ring-0 border-0"
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

      <button className="px-10 py-4 bg-the-blue rounded mt-3 md:mt-5 text-white hover:bg-opacity-80 duration-400">
        SEARCH
      </button>

      {/* //> Search suggestions */}
      <div className="absolute top-12 max-h-60 scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-w-1 scrollbar-rounded-md overflow-y-auto ">
        {searchSuggestions.map((address) => (
          <p
            onClick={() => pickAddress(address.address)}
            className="px-3 py-3 bg-[#e5f0fd] w-full cursor-pointer shadow dark:shadow-gray-50 dark:text-white dark:dark:bg-[#242428]"
            key={address.id}
          >
            {address.address}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Search;
