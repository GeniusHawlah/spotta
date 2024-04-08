import React from "react";
import Search from "./Search";

function Left() {
  return (
    <div className="lg:w-[45%] lg:-mt-28 w-full flex flex-col justify-center h-[90vh]">
      <p className="text-[2.5rem]/[2.5rem] font-bold dark:text-white lg:text-[64px]/[77px]">
        Find a place you will love to live!
      </p>

      <p className="mt-4 text-base md:text-2xl font-normal dark:text-white">
        See through the lenses of people who have lived or visited the
        neighbourhood you might have in mind.
      </p>

      <Search />
    </div>
  );
}

export default Left;
