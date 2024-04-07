import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { Providers } from "./providers";

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
        className={`${inter.className} dark:bg-the-black dark:text-white bg-white text-the-black`}
      >
        <Providers>
          <Navbar />
          <>{children}</>
        </Providers>
      </body>
    </html>
  );
}
