// "use client"
import Image from "next/image";
import Left from "./components/landing-page/Left";
import Right from "./components/landing-page/Right";

export default function Home() {
  // const { menuClicked, setMenuClicked } = AllCtx();
  // setMenuClicked("op");
  return (
    <main className="gen-padding lg:flex items-center  justify-between gap-x-5  w-full ">
    <Left/> <Right/>
    </main>
  );
}
