import React from "react";
import { Icon } from "@iconify-icon/react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import logoDark from "@/public/images/logo-dark.svg";
import { useRouter } from "next/navigation";

function Logo() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Icon icon="akar-icons:box" className="text-2xl text-white invisible" />
    );

  if (resolvedTheme === "light") {
    return (
      <Image
        onClick={() => router.push("/")}
        src={logo}
        alt="Spotta Logo"
        className="cursor-pointer"
      />
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <Image
        onClick={() => router.push("/")}
        src={logoDark}
        alt="Spotta Logo"
        className="cursor-pointer"
      />
    );
  }
}

export default Logo;
