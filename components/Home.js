import { TopBar } from "./TopBar";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <TopBar />
      <main className="sm:h-[50vh] 0 relative max-w-4xl mx-auto px-8  ">
        <div className="h-full relative ">
          {/* <Image
            src="/images/aftu.jpeg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="group"
            className="rounded-3xl"
          />
          <div className=" absolute w-full h-full bg-black rounded-3xl opacity-50 " /> */}
          <div className="container py-16 sm:py-0 flex h-full justify-center items-center relative mx-auto  px-4 bg-white">
            <div className=" p-4 rounded-md z-10 md:text-left text-center container mx-auto ">
              <h1 className="font-black text-center text-black lg:text-4xl md:text-3xl text-3xl leading-tight my-4	">
                Welcome to the Bus Bi app!
              </h1>
              <p className=" text-sm text-center font-light text-black px-2 my-12 rounded">
                Never miss your bus again with our real-time bus location
                tracking app. With just a few clicks, you can see exactly where
                your bus is and how long until it arrives at your stop. No more
                standing in the cold, wondering when your ride will show up.
                Download Bus Location Tracker today and never stress about
                catching the bus again!
              </p>
              <p className="flex justify-center items-center max-w-sm mx-auto ">
                <FontAwesomeIcon
                  icon="fa-location-pin-lock"
                  size="6x"
                  color="#EAB308"
                />
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className=" max-h-[80vh] md:mt-0 mt-8 md:text-left text-center md:flex items-center max-w-4xl mx-auto xl:px-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-4  justify-center items-center">
            <div>
              <h1 className=" leading-relaxed text-4xl font-bold text-marron  md:max-w-sm  w-full">
                {`"`}Find your ride anytime any where with the
                <span className="text-primary">Bus Bi</span> app.{`"`}
              </h1>
              <div className="flex md:justify-start justify-center  flex-row gap-4 mt-8">
                <Link href="/">
                  <a className="bg-black grid grid-cols-5 justify-center items-center text-white py-2 px-4 rounded-xl">
                    <div className="col-span-1">
                      {" "}
                      <FontAwesomeIcon size="lg" icon={["fab", "apple"]} />{" "}
                    </div>
                    <div className="ml-2 col-span-4 text-sm font-light">
                      <p className="font-light"> Download on</p>
                      <p> App Store </p>
                    </div>
                  </a>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.busbi.topandbrice">
                  <a className="bg-black grid grid-cols-5 justify-center items-center text-white py-2 px-4 rounded-xl">
                    <p className="col-span-1">
                      {" "}
                      <FontAwesomeIcon
                        size="lg"
                        icon={["fab", "google-play"]}
                        color="orange"
                      />{" "}
                    </p>
                    <div className="ml-2 col-span-4 text-sm ">
                      <p className="font-light"> Get it on</p>
                      <p> Play Store </p>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/logo1.png"
                alt="Picture of the author"
                width={500}
                height={500}
                // layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
