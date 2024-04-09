import { generalStore } from "@/app/a-store/zustand-store/generalStore";
import React from "react";
import secureLocalStorage from "react-secure-storage";

function ProfileDropdown() {
  const { setIsLoggedIn } = generalStore();
  return (
    <div className="flex flex-col bg-white dark:bg-the-black   rounded absolute  top-10 right-0">
      <button className="p-2 select-none hover:bg-gray-50 dark:hover:bg-opacity-20 duration-300 rounded dark:shadow-white shadow-sm text-left">
        Profile
      </button>
      <button className="p-2 select-none hover:bg-gray-50 dark:hover:bg-opacity-20 duration-300 rounded dark:shadow-white text-left-white shadow-sm">
        Reviews
      </button>
      <button
        onClick={() => {
          setIsLoggedIn(false);
          secureLocalStorage.removeItem("isLoggedIn");
        }}
        className="p-2 select-none hover:bg-gray-50 dark:hover:bg-opacity-20 duration-300 rounded dark:shadow-white text-left-white shadow-sm text-left"
      >
        Logout
      </button>
    </div>
  );
}

export default ProfileDropdown;
