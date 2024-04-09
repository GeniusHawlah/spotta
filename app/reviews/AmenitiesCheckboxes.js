import React from "react";
import { amenities } from "../a-store/content-store/content-store";
import { Icon } from "@iconify-icon/react";

function AmenitiesCheckboxes({ selectedAmenities, setSelectedAmenities }) {
  function checkAndUncheck(amenity) {
    if (!selectedAmenities.includes(amenity)) {
      setSelectedAmenities((oldIDArray) => [...oldIDArray, amenity]);
    }
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities((oldIDArray) =>
        oldIDArray.filter((id) => amenity !== id)
      );
    }
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="absolute dark:bg-[#242428] rounded bg-[#f3f7fe] w-full border p-2 h-64   text-sm flex flex-col md:grid grid-cols-5 md:gap-x-3 gap-y-2 pb-10 overflow-y-auto scrollbar-hide"
    >
      {amenities.map((amenity) => (
        <div
          onClick={() => {
            checkAndUncheck(amenity);
          }}
          key={amenity}
          className="cursor-pointer flex items-center select-none gap-x-3 "
        >
          {/* //>checkbox */}
          <div className="rounded-md border border-gray-400 flex justify-center items-center w-fit cursor-pointer">
            <Icon
              icon="typcn:tick"
              className={` text-base ${
                selectedAmenities.includes(amenity)
                  ? "visible bg-the-blue text-white"
                  : "invisible bg-transparent text-transparent"
              }`}
            />
          </div>{" "}
          {amenity}
        </div>
      ))}
    </div>
  );
}

export default AmenitiesCheckboxes;
