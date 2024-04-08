"use client";
import React from "react";
import { generalStore } from "../a-store/zustand-store/generalStore";
import { Icon } from "@iconify-icon/react";
import GroupOfButtons from "./GroupOfButtons";
import Amenities from "./Amenities";
import ReviewList from "./ReviewList";

function Reviews() {
  const { selectedAddress, setShowProfileDropdown } = generalStore();

  return (
    <div onClick={() => setShowProfileDropdown(false)} className="gen-padding">
      <div className="mt-4 flex justify-between items-center">
        {/* //>Address details */}
        {selectedAddress?.address && (
          <div>
            <p className="text-base sm:text-2xl font-medium">
              {selectedAddress.address}
            </p>
            <p className="mt-1">
              <span className="text-xs sm:text-base font-semibold">{`"${selectedAddress?.reviews?.length}"`}</span>{" "}
              <span className="font-medium text-xs sm:text-base">Reviews</span>{" "}
              <span className="">
                (People are raving about the selected location)
              </span>
            </p>
          </div>
        )}

        {selectedAddress?.address && (
          <div className="hidden md:block">
            <GroupOfButtons />
          </div>
        )}
      </div>

      {selectedAddress.address && (
        <div>
          <Amenities />
        </div>
      )}

      {selectedAddress?.address && (
        <div className="md:hidden w-full mt-4 flex justify-center">
          <GroupOfButtons />
        </div>
      )}

      {selectedAddress?.address && (
        <div>
          <ReviewList />
        </div>
      )}
    </div>
  );
}

export default Reviews;
