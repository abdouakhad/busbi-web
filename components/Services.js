import Image from "next/image";
import React from "react";

function Services() {
  return (
    <section className="bg-serviceBg ">
      <div
        id="services"
        className="max-w-7xl mx-auto  min-h-screen md:flex flex-row justify-between items-center p-10"
      >
        <h1 className="font-black md:leading-loose leading-relaxed md:text-5xl text-3xl">
          Découvre Les Nouvelles Fonctionnalités <br />
          <span className=" text-serviceText">Sur Bus Bi !</span>
        </h1>
        <div className="flex flex-row  mt-10">
          <div className="h-full  ">
            <Image
              src="/ddd.png"
              alt="Les ligne Tata"
              width={500}
              height={500}
              // objectFit="cover"
              style={{
                borderTopLeftRadius: "1rem",
                borderBottomLeftRadius: "1rem",
                //   height: "550px",
              }}
            />
          </div>
          <div className="h-full  ">
            <Image
              src="/tata.png"
              alt="Les Arrets et Terminus"
              width={500}
              height={500}
              style={{
                borderTopRightRadius: "1rem",
                borderBottomRightRadius: "1rem",
                //   height: "550px",
              }}
              // objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
