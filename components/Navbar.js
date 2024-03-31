import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Accueil",
      value: "#accueil",
    },
    {
      id: 2,
      link: "Services",
      value: "#services",
    },
    {
      id: 3,
      link: "A propos",
      value: "#about",
    },
    {
      id: 5,
      link: "Reviews",
      value: "#reviews",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full  px-4 text-black bg-white md:fixed nav  ">
      <div className>
        {/* <h1 className="= font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="= font-signature ml-2">
          {/* <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          > */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
          {/* </a> */}
        </h1>
      </div>

      <ul className="hidden md:flex  md:w-2/3 justify-between">
        {links.map(({ id, link, value }) => (
          <li
            key={id}
            className="nav-links 2xl:px-12 xl:px-10 lg:px-8 px-4 cursor-pointer capitalize font-light  hover:scale-105 py-2 hover:text-gray-500 duration-200 link-underline"
          >
            <Link href={value}>{link}</Link>
          </li>
        ))}
        <li className="nav-links 2xl:px-12 xl:px-10 lg:px-8 px-4 cursor-pointer capitalize font-light  hover:scale-105 py-2 text-white hover:text-gray-500 duration-200 bg-secondary rounded-2xl link-underline">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10  md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-4/5 bg-white ">
          {links.map(({ id, link, value }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={value}>
                {link}
              </Link>
            </li>
          ))}
          <li className="px-4 bg-secondary rounded-3xl cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(!nav)} href="#contact">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
