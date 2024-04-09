"use client";
import { Icon } from "@iconify-icon/react";
import React from "react";
import { generalStore } from "../a-store/zustand-store/generalStore";
import toast from "react-hot-toast";
import { errorToastOptions } from "./utils";

function GroupOfButtons() {
  const { setShowPostReviewOverlay } = generalStore();

  return (
    <div className="flex items-center gap-x-4">
      <button
        onClick={() => setShowPostReviewOverlay(true)}
        className="px-10 py-3 bg-the-blue rounded text-white hover:bg-opacity-80 duration-400 whitespace-nowrap text-sm sm:text-base font-medium"
      >
        LEAVE A REVIEW
      </button>

      <button
        onClick={() => toast("Bookmark not implemented.", errorToastOptions)}
        className="flex justify-center items-center rounded border border-the-blue bg-white text-the-blue dark:bg-the-black dark:hover:bg-opacity-80 duration-300 p-[9px]"
      >
        <Icon
          icon="material-symbols-light:bookmark-outline"
          className="text-2xl"
        />
      </button>

      <button onClick={() => toast("Share not implemented.", errorToastOptions)} className="flex justify-center items-center rounded border border-the-blue bg-white text-the-blue dark:bg-the-black dark:hover:bg-opacity-80 duration-300 p-[9px]">
        <Icon
          icon="material-symbols-light:share-outline"
          className="text-2xl"
        />
      </button>
    </div>
  );
}

export default GroupOfButtons;
