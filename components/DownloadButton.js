import Link from "next/link";
import React from "react";
import { FaApple } from "react-icons/fa";
export function DownloadButton({ icon, text, link }) {
  return (
    <Link href={link}>
      <div className="flex flex-row items-center bg-black p-2 rounded-lg">
        <span>{icon}</span>
        <div>
          <h1>Disponible sur</h1>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
}
