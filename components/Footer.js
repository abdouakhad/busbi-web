import { FooterButton } from "./FooterButton";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="container mx-auto flex sm:flex-row flex-col items-center sm:px-2 px-4 justify-between py-4">
        <div className="w-full">
          <h2 className="text-xl font-bold mb-2">Bus Bi</h2>
          <p>Rejoignez nous !</p>
          <div className="bg-footerBg p-2 gap-2 my-4 flex lg:flex-row flex-col justify-between items-center rounded-lg w-11/12">
            <FooterButton
              link="https://apps.apple.com/pl/app/bus-bi/id1661159390"
              src="/icons/appstore.png"
              alt="BusBi appstore"
              title="Disponible dans"
              subtitle="App Store"
            />
            <FooterButton
              link="https://play.google.com/store/apps/details?id=com.busbi.topandbrice"
              src="/icons/playstore.png"
              alt="BusBi playstore"
              title="Disponible dans"
              subtitle="Google Play"
            />
          </div>
        </div>
        <div className="w-full sm:border-l-2 py-4 sm:pl-4 border-l-gray-500">
          <p className="my-4">Suivez nous !</p>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/icons/linkedIn.png"
              alt="Busbi LinkedIn"
              width={20}
              height={20}
            />
            <span>LinkedIn</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/icons/facebook.png"
              alt="BusBi Facebook"
              width={20}
              height={20}
            />
            <span>Facebook</span>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/icons/insta.png"
              alt="BusBi Instagram"
              width={20}
              height={20}
            />
            <span>Instagram</span>
          </div>
        </div>
        <div className="w-full ">
          <p className="my-4">Contactez nous !</p>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/icons/whatsap.png"
              alt="BusBi Phone"
              width={20}
              height={20}
            />
            <span>contact.busbi@gmail.com</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/icons/email.png"
              alt="BusBi Email"
              width={20}
              height={20}
            />
            <span>+221 77 365 94 81</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
