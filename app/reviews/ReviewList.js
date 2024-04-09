"use client";
import React, { useState } from "react";
import MobileImagesGroup from "./MobileImagesGroup";
import DesktopImagesGroup from "./DesktopImagesGroup";
import ReviewItem from "./ReviewItem";

function ReviewList() {
  return (
    <div className="lg:flex-row-reverse   lg:flex justify-between mt-4">
      <MobileImagesGroup />
      <div className="w-full lg:w-auto flex gap-x-7">
        <DesktopImagesGroup />
      </div>

      <div className="w-full lg:w-[60%] pb-8 mt-4 lg:mr-7 ">
        <ReviewItem />
      </div>
    </div>
  );
}

export default ReviewList;
