import React from "react";
import { Icon } from "@iconify-icon/react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";


function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
        <Icon icon="akar-icons:box" className="text-2xl text-white invisible" />
    );

  if (resolvedTheme === "light") {
    return (
      <Icon
        onClick={() => setTheme("dark")}
        icon="bi:moon-fill"
        className="text-gray-600 text-2xl cursor-pointer"
      />
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <Icon
        onClick={() => setTheme("light")}
        icon="game-icons:sun"
        className="text-the-blue text-2xl cursor-pointer"
      />
    );
  }
}

export default ThemeSwitch;
