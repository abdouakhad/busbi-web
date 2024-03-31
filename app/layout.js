"use client";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "../components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// export const metadata = {
//   title: "Page Title",
//   description: "Page Description",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
