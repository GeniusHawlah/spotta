"use client";
import React, { useState } from "react";
import { generalStore } from "../a-store/zustand-store/generalStore";
import { Icon } from "@iconify-icon/react";
import { amenities } from "../a-store/content-store/content-store";
import AmenitiesCheckboxes from "./AmenitiesCheckboxes";
import _ from "lodash";
import toast from "react-hot-toast";
import { toastOptions } from "./utils";
import secureLocalStorage from "react-secure-storage";

function PostReviewOverlay() {
  function formatDate() {
    const month = (new Date().getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const day = new Date().getDate().toString().padStart(2, "0");
    const year = new Date().getFullYear();
    const hours = new Date().getHours().toString().padStart(2, "0");
    const minutes = new Date().getMinutes().toString().padStart(2, "0");
    const seconds = new Date().getSeconds().toString().padStart(2, "0");

    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
  }
  const {
    setShowPostReviewOverlay,
    showPostReviewOverlay,
    selectedAddress,
    addressList,
    setAddressList,
    setSelectedAddress,
  } = generalStore();
  const [showAmenities, setShowAmenities] = useState(false);
  const [review, setReview] = useState({
    id: "",
    author: "",
    like: 0,
    dislike: 0,
    comments: 0,
    time: "",
    rating: 1,
    content: "",
  });

  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [reservedAuthorValue, setReservedAuthorValue] = useState();
  const [anonymous, setAnonymous] = useState(false);

  function postAsAnonymous() {
    if (!anonymous) {
      setReview((currentState) => ({
        ...currentState,
        author: "Anonymous",
      }));
      setAnonymous(true);
    } else {
      setReview((currentState) => ({
        ...currentState,
        author: reservedAuthorValue,
      }));
      setAnonymous(false);
    }
  }

  const ratings = [1, 2, 3, 4, 5];

  function createReview() {
    const temporalAddressList = _.cloneDeep(addressList);
    const addressToReview = temporalAddressList.find(
      (address) => address?.id === selectedAddress?.id
    );

    // To update amenities if available
    if (selectedAmenities.length > 0) {
      let addressAmenitiesSet = new Set(addressToReview.amenities);
      selectedAmenities.forEach((amm) => {
        if (!addressAmenitiesSet.has(amm)) {
          addressToReview.amenities.unshift(amm);
          addressAmenitiesSet.add(amm);
        }
      });

      addressToReview.amenities = [...addressAmenitiesSet];
    }

    addressToReview.reviews.unshift({
      ...review,
      time: formatDate(),
      id: Date.now(),
    });

    const updatedAddressList = _.cloneDeep(temporalAddressList);

    const updatedAddress = updatedAddressList.find(
      (address, i) => address?.id === selectedAddress?.id
    );

    setAddressList(updatedAddressList);
    setSelectedAddress(updatedAddress);
    secureLocalStorage.setItem("selectedAddress", updatedAddress);
    secureLocalStorage.setItem("addressList", updatedAddressList);
    setSelectedAmenities([]);
    setReview((currentState) => ({
      ...currentState,
      author: "",
      rating: 1,
      content: "",
    }));
    setAnonymous(false);
    setShowPostReviewOverlay(false);

    toast("Review Submitted", toastOptions);
  }

  return (
    <div
      onClick={() => setShowPostReviewOverlay(false)}
      className={` fixed z-50 top-0 w-full h-screen justify-center items-center bg-[#213449] ${
        showPostReviewOverlay ? "flex" : "hidden"
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          setShowAmenities(false);
        }}
        className="bg-white overflow-y-auto max-h-[95vh] scrollbar- dark:bg-the-black text-the-black dark:text-white w-[95%] sm:w-[80%] lg:w-[60%] rounded-md px-4 py-6"
      >
        <p className="text-lg text-center font-medium">Review Location</p>

        <p className="text-xl text-center font-medium">
          {selectedAddress?.address}
        </p>

        {/* //>Amenity */}
        <div className="mt-8 relative">
          <button
            onClick={(e) => {
              setShowAmenities(!showAmenities);
              e.stopPropagation();
            }}
            className="rounded bg-[#f3f7fe] dark:bg-[#242428] flex justify-between items-center py-4 w-full px-2 text-sm"
          >
            <span>Select Amenities</span>
            <Icon icon="mingcute:down-line" className="text-base" />
          </button>

          {showAmenities && (
            <AmenitiesCheckboxes
              selectedAmenities={selectedAmenities}
              setSelectedAmenities={setSelectedAmenities}
            />
          )}
        </div>

        {/* //>Rate location */}
        <p className="text-sm font-medium mt-4">Rate Location</p>
        <div className="flex items-center mt-[6px] gap-x-[6px]">
          {ratings.map((rating) => (
            <Icon
              onClick={() => {
                setReview((currentState) => ({
                  ...currentState,
                  rating: rating,
                }));
              }}
              key={rating}
              icon="material-symbols-light:star"
              className={`text-2xl cursor-pointer -ml-2 ${
                review?.rating >= rating
                  ? "text-yellow-300"
                  : "text-yellow-100 dark:text-gray-50"
              }`}
            />
          ))}
        </div>

        {/* //>Author */}
        <p className="text-sm font-medium mt-4">Your Name</p>
        <input
          disabled={anonymous}
          value={review?.author}
          type="name"
          name="author"
          onChange={(e) => {
            setReview((currentState) => ({
              ...currentState,
              author: e.target.value,
            }));
            setReservedAuthorValue(e.target.value);
          }}
          className="mt-[14px] text-sm p-3 rounded w-full border resize-none border-gray-300 focus:outline-none focus:ring-0 focus:border-the-blue "
        />

        {/* //>Write review */}
        <p className="text-sm font-medium mt-4">Write Review</p>
        <textarea
          value={review?.content}
          name="content"
          onChange={(e) => {
            setReview((currentState) => ({
              ...currentState,
              content: e.target.value,
            }));
          }}
          rows={4}
          className="mt-[14px] text-sm p-3 rounded w-full border resize-none border-gray-300 focus:outline-none focus:ring-0 focus:border-the-blue dark:bg-[#242428] "
        />

        {/* //>Anonymous */}
        <div
          onClick={() => postAsAnonymous()}
          className="cursor-pointer flex items-center mt-4 select-none gap-x-2 text-sm"
        >
          {/* //>checkbox */}
          <div className="rounded-md border  w-[14px] h-[14px] border-gray-400 flex justify-center items-center  cursor-pointer">
            <Icon
              icon="typcn:tick"
              className={` text-base ${
                anonymous
                  ? "visible bg-the-blue text-white"
                  : "invisible bg-transparent text-transparent"
              }`}
            />
          </div>{" "}
          Post as Anonymous
        </div>

        {/* //>Action Buttons */}
        <div className="flex w-full items-center justify-between gap-x-6 mt-6">
          <button
            onClick={() => createReview()}
            disabled={(!review?.author && !anonymous) || !review?.content}
            className=" w-1/2 py-3 bg-the-blue rounded text-white hover:bg-opacity-80 duration-400  text-sm sm:text-base font-medium disabled:bg-gray-400"
          >
            SUBMIT
          </button>

          <button
            onClick={() => setShowPostReviewOverlay(false)}
            className=" py-3 w-1/2 text-the-blue rounded dark:text-white dark:bg-[#242428] bg-white hover:bg-opacity-80 duration-400 whitespace-nowrap text-sm sm:text-base font-medium border hover:bg-gray-50 duration-300 box-border border-the-blue dark:border-gray-200 "
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostReviewOverlay;
