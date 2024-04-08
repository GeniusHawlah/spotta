"use client";
import React from "react";
import { generalStore } from "../../a-store/zustand-store/generalStore";

function TransparentOverlay() {
  const { setShowProfileDropdown, showProfileDropdown } = generalStore();
  return (
    <div
      onClick={() => setShowProfileDropdown(false)}
      className={`absolute w-full h-screen bg-transparent ${
        showProfileDropdown ? "block" : "hidden"
      }`}
    ></div>
  );
}

export default TransparentOverlay;
