import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaApple } from "react-icons/fa";
export function DownloadButton({ icon, text, link, src }) {
  return (
    <Link href={link}>
      <div className="flex flex-row items-center bg-black p-2 rounded-lg">
        {!icon ? (
          <Image
            src={src}
            alt="Logo"
            width={30}
            height={30}
            className="rounded-full"
          />
        ) : (
          <span>{icon}</span>
        )}

        <div>
          <h1>Disponible sur</h1>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
}
