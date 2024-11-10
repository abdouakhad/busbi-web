"use client";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showNavbar = pathname === "/";

  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        {showNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}
