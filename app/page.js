// "use client"
import Image from "next/image";
import Left from "./components/landing-page/Left";
import Right from "./components/landing-page/Right";
import SearchWithoutButton from "./components/landing-page/SearchWithoutButton";

export default function Home() {


  // const { menuClicked, setMenuClicked } = AllCtx();
  // setMenuClicked("op");
  return (
    <main className="gen-padding ">
      <div className="md:hidden w-full md:w-[80%] flex items-center justify-center ">
        <SearchWithoutButton />
      </div>
      <div className="lg:flex items-center  justify-between gap-x-5  w-full">
        <Left /> <Right />
      </div>
    </main>
  );
}
