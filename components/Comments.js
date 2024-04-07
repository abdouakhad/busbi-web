import React from "react";
import { FaStar, FaUser } from "react-icons/fa6";
import { IoIosStarHalf } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
export function Comments({ id, comments }) {
  return (
    <div className="bg-teamBg/20 px-4 py-2 rounded-lg mt-4">
      <div className="flex gap-2 flex-row items-start my-4">
        <div className="w-1/12 mr-2">
          <span className="bg-primary rounded-full p-2 text-white">{id}</span>
        </div>

        <div className="w-11/12">
          <div className="flex flex-row ">
          <FaStar color="#EAB308" />
            <FaStar color="#EAB308" />
            <FaStar color="#EAB308" />
            <IoIosStarHalf color="#EAB308" />
            <FaRegStar color="#EAB308" />
          </div>
          <p className="text-sm mt-2">{comments}</p>
        </div>
      </div>
    </div>
  );
}
