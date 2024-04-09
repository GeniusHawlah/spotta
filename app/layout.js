import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { Providers } from "./providers";
import SearchWithoutButton from "./components/navbar/SearchWithoutButton";
import TransparentOverlay from "./components/general-components/TransparentOverlay";
import PostReviewOverlay from "./reviews/PostReviewOverlay";
import Toast from "./components/general-components/Toast";

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
        className={`${inter.className}  text-base font-normal bg-smoke dark:bg-[#171717] text-the-black dark:text-white`}
      >
        <Providers>
          <Toast/>
          <TransparentOverlay />
          <PostReviewOverlay/>
          <Navbar />

          <>{children}</>
        </Providers>
      </body>
    </html>
  );
}
