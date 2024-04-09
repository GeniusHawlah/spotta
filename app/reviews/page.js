"use client";
import React, { useEffect, useState } from "react";
import { generalStore } from "../a-store/zustand-store/generalStore";
import GroupOfButtons from "./GroupOfButtons";
import Amenities from "./Amenities";
import ReviewList from "./ReviewList";
import SearchWithoutButton from "../components/navbar/SearchWithoutButton";
import InvalidAddress from "./InvalidAddress";
import NoReview from "./NoReview";
import Loading from "../loading";

function Reviews() {
  const { selectedAddress, setShowProfileDropdown } = generalStore();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div onClick={() => setShowProfileDropdown(false)} className="gen-padding">
      {selectedAddress?.address && (
        <div className="md:hidden w-full md:w-[80%] flex items-center justify-center gen-padding">
          <SearchWithoutButton />
        </div>
      )}
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
              {selectedAddress?.reviews?.length > 3 && (
                <span className="font-medium text-xs sm:text-base">
                  (People are raving about the selected location)
                </span>
              )}
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
          {loading && <Loading />}
          {selectedAddress?.reviews?.length > 0 && <ReviewList />}
          {selectedAddress?.reviews?.length === 0 && !loading && <NoReview />}
        </div>
      )}

      {!selectedAddress?.address && !loading && <InvalidAddress />}
    </div>
  );
}

export default Reviews;
