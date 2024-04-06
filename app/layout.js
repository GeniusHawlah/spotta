import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotta",
  description: "See through the lenses of people who have lived or visited the neighbourhood you might have in mind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-the-black dark:text-white bg-white text-the-black`}>
        <Navbar />
        <>{children}</>
      </body>
    </html>
  );
}
