"use client";
import { Icon } from "@iconify-icon/react";
import React, { useRef } from "react";
import { generalStore } from "../a-store/zustand-store/generalStore";

function Amenities() {
  const { selectedAddress } = generalStore();
  const scrollRef = useRef();

  function scroll(value) {
    scrollRef.current.scrollLeft += value;
  }
  return (
    <div className="flex justify-between w-full mt-4">
      <div className="flex cursor-pointer items-center">
        {" "}
        <Icon
          onClick={() => {
            scroll(-200);
          }}
          icon="mingcute:left-fill"
        />
      </div>
      <div
        ref={scrollRef}
        className="flex scroll-smooth  overflow-x-scroll justify-between items-center scrollbar-hide gap-x-2 "
      >
        {selectedAddress?.amenities
          ?.map((amenity, i) => (
            <div className="  relative " key={amenity}>
              <button
                className={`px-2 py-1 cursor-pointer rounded select-none whitespace-nowrap bg-white dark:bg-[#242428] border  dark:border dark:border-gray-500 text-sm font-normal`}
              >
                {amenity}
              </button>
            </div>
          ))
          .reverse()}
      </div>
      <div className="flex cursor-pointer items-center bg-transparent ">
        {" "}
        <Icon
          icon="mingcute:right-fill"
          onClick={() => {
            scroll(200);
          }}
        />
      </div>
    </div>
  );
}

export default Amenities;
