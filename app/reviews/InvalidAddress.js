"use client";
import React from "react";
import illustration from "../../public/images/no_review.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function InvalidAddress() {
  const router = useRouter();

  return (
    <div className="w-full h-[70vh] flex flex-col justify-center items-center ">
      <Image src={illustration} alt="Nothing to display" />
      <p className="mt-4">
        Sorry, we probably do not have this location. Make sure you pick from
        the suggested addresses while typing.
      </p>

      <button
        onClick={() => router.push("/")}
        className="px-10 py-3 mt-4 bg-the-blue rounded text-white hover:bg-opacity-80 duration-400 whitespace-nowrap text-sm sm:text-base font-medium"
      >
        FIND MORE PLACES
      </button>
    </div>
  );
}

export default InvalidAddress;
