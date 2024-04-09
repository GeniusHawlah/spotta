import Left from "./components/landing-page/Left";
import Right from "./components/landing-page/Right";

export default function Home() {
  return (
    <main className="gen-padding lg:flex items-center  justify-between gap-x-5  w-full ">
      <Left /> <Right />
    </main>
  );
}
