import { DownloadButton } from "./DownloadButton";
import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function Accueil() {
  return (
    <main
      id="accueil"
      className="md:pt-24 min-h-screen md:flex flex-row justify-center items-center text-white bg-primary"
    >
      <div className="flex flex-col justify-center w-full md:px-10 px-4 py-10 bg-primary">
        <h1 className="md:text-5xl text-3xl font-black md:leading-relaxed">
          Bus Bi Te Montre L’itinéraire Le Plus Court Pour Tes Déplacements avec
          Le Bus!{" "}
        </h1>
        <p className="text-lg my-4">
          Bus bi est une application qui te connecte avec différents moyens de
          transport . Avec Bus bi, tu recois des notifications lorsque votre bus
          est à quelques minutes de chez toi, et tu peux commander un taxi ou
          faire du covoiturage.
        </p>
        <div className="flex flex-row justify-between mt-4 m md:max-w-lg">
          <DownloadButton
            icon={<FaApple size={40} />}
            text="App Store"
            link="https://apps.apple.com/pl/app/bus-bi/id1661159390"
          />
          <DownloadButton
            link="https://play.google.com/store/apps/details?id=com.busbi.topandbrice"
            icon={<IoLogoGooglePlaystore size={40} />}
            text="Google Play"
          />
        </div>
      </div>
      <div
        className="w-full md:min-h-full h-screen border "
        style={{
          backgroundImage: "url('/main.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {" "}
      </div>
    </main>
  );
}
