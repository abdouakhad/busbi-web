import Image from "next/image";
import Link from "next/link";
import React from "react";
export function FooterButton({ src, alt, link, title, subtitle }) {
  return (
    <Link href={link} className="link-underline link-underline-black">
      <div className="flex flex-row items-center  bg-white text-black p-2 rounded-xl gap-1">
        <span>
          <Image src={src} alt={alt} width={20} height={20} />
        </span>
        <div className="">
          <h1 className="text-sm">{title}</h1>
          <p className="font-bold">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
