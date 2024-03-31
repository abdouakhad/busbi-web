import Image from "next/image";
import React from "react";
export function Member({ src, name, profession }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={src}
        alt="team"
        width={260}
        height={260}
        className="rounded-lg"
        style={{
          borderRadius: "10px",
          border: "3px solid #0D00FF",
        }}
      />
      <div className="text-center mt-8">
        <h4 className="text-xl font-bold">{name}</h4>
        <p className="text-gray-600">{profession}</p>
      </div>
    </div>
  );
}
