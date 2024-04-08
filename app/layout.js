import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { Providers } from "./providers";
import SearchWithoutButton from "./components/landing-page/SearchWithoutButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotta",
  description:
    "See through the lenses of people who have lived or visited the neighbourhood you might have in mind.",
};

export default function RootLayout({ children, searchParams }) {
  return (
    <html lang="en" suppressHydrationWarning className={``}>
      <body
        className={`${inter.className}  text-base font-normal bg-smoke dark:bg-the-black text-the-black dark:text-white`}
      >
        <Providers>
          <Navbar />
          <div className="md:hidden w-full md:w-[80%] flex items-center justify-center gen-padding">
        <SearchWithoutButton />
      </div>
          <>{children}</>
        </Providers>
      </body>
    </html>
  );
}
