// "use client"
import Image from "next/image";
import Left from "./components/landing-page/Left";
import Right from "./components/landing-page/Right";
import { generalStore } from "./a-store/zustand-store/generalStore";

export default function Home() {
const {setShowProfileDropdown} = generalStore()
  return (
    <main  onClick={() => setShowProfileDropdown(false)} className="gen-padding lg:flex items-center  justify-between gap-x-5  w-full ">
    <Left/> <Right/>
    </main>
  );
}
