import { generalStore } from "@/app/a-store/zustand-store/generalStore";
import { errorToastOptions } from "@/app/reviews/utils";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import secureLocalStorage from "react-secure-storage";

function ProfileDropdown() {
  const router = useRouter();
  const {
    searchTerm,
    addressList,

    setSelectedAddress,
  } = generalStore();
  const { setIsLoggedIn } = generalStore();
  function onReviewsClicked() {
    let filteredAddresses;
    if (!searchTerm || searchTerm.trim() === "") {
      filteredAddresses = [];
    } else {
      filteredAddresses = addressList.filter((item) => {
        const address = item.address.toLowerCase();
        const searchWords = searchTerm.toLowerCase().split(" ");
        return searchWords.some((word) => address.includes(word));
      });
    }

    if (filteredAddresses.length > 0) {
      setSelectedAddress(filteredAddresses[0]);
      secureLocalStorage.setItem("selectedAddress", filteredAddresses[0]);
    } else {
      setSelectedAddress({});
      secureLocalStorage.setItem("selectedAddress", {});
    }

    router.push("/reviews");
  }

  return (
    <div className="flex flex-col bg-white dark:bg-the-black   rounded absolute  top-10 right-0">
      <button
        onClick={() => toast("No real profile implemented.", errorToastOptions)}
        className="p-2 select-none hover:bg-gray-50 dark:hover:bg-opacity-20 duration-300 rounded dark:shadow-white shadow-sm text-left"
      >
        Profile
      </button>
      <button
        onClick={() => router.push("/reviews")}
        className="p-2 select-none hover:bg-gray-50 dark:hover:bg-opacity-20 duration-300 rounded dark:shadow-white text-left-white shadow-sm"
      >
        Reviews
      </button>
      <button
        onClick={() => {
          setIsLoggedIn(false);
          secureLocalStorage.removeItem("isLoggedIn");
          onReviewsClicked()
        }}
        className="p-2 select-none hover:bg-gray-50 dark:hover:bg-opacity-20 duration-300 rounded dark:shadow-white text-left-white shadow-sm text-left"
      >
        Logout
      </button>
    </div>
  );
}

export default ProfileDropdown;
