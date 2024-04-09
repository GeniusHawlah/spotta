"use client";
import Image from "next/image";
import React from "react";
import reviewMockup from "@/public/images/review_mockup.png";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function Right() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="hidden   lg:flex  lg:w-[55%]   dark:text-white items- justify-end invisible ">
        <Image
          priority
          width={504}
          height={1024}
          src={"/images/review_mockup.png"}
          alt="Review Mockup"
          className="-mt-20"
        />
      </div>
    );

  if (resolvedTheme === "light") {
    return (
      <div className="hidden   lg:flex  lg:w-[55%]   dark:text-white items- justify-end ">
        <Image
          priority
          width={504}
          height={1024}
          src={"/images/review_mockup.png"}
          alt="Review Mockup"
          className="-mt-20"
        />
      </div>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <div className="hidden   lg:flex  lg:w-[55%]   dark:text-white items- justify-end ">
        <Image
          width={504}
          height={1024}
          src={"/images/review_mockup_dark.png"}
          alt="Review Mockup"
          className="-mt-20"
        />
      </div>
    );
  }
}

export default Right;
