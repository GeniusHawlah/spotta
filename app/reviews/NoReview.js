import React from "react";
import illustration from "../../public/images/no_review.svg";
import Image from "next/image";

function NoReview() {
  return (
    <div className="w-full h-[70vh] flex flex-col justify-center items-center ">
      <Image src={illustration} alt="Nothing to display" />
      <p className="mt-4">Oops! No review yet.</p>

      <button className="px-10 py-3 mt-4 bg-the-blue rounded text-white hover:bg-opacity-80 duration-400 whitespace-nowrap text-sm sm:text-base font-medium">
        LEAVE A REVIEW
      </button>
    </div>
  );
}

export default NoReview;
