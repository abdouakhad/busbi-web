import { Comments } from "./Comments";
import React from "react";
import { FaStar, FaUser } from "react-icons/fa6";
import { IoIosStarHalf } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";

const comments = [
  {
    user: "AB",
    comments:
      "Parfait ! Pensez juste à une mise à jour pour intégrer une carte interactive Map.",
  },
  {
    user: "DE",
    comments:
      "Salam nous les thiessois on souhaite avoir un bus qui prend départ à Dieuppeul comme les autres destinations !",
  },
  {
    user: "AB",
    comments: "C un app complet et utile",
  },
  {
    user: "DE",
    comments: "Faites des efforts par rapport à la régularité des bus !",
  },
];
function Avis() {
  return (
    <div id="reviews" className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-xl">Avis & Commentaires 😀</h1>
      <div className="sm:flex flex-row justify-between items-center">
        <div>
          <h1 className="text-5xl font-black my-4 text-secondary">3.5</h1>
          <div className="flex flex-row">
            <FaStar color="#EAB308" />
            <FaStar color="#EAB308" />
            <FaStar color="#EAB308" />
            <IoIosStarHalf color="#EAB308" />
            <FaRegStar color="#EAB308" />
          </div>
          <p className="flex flex-row gap-2 items-center mt-4 ">
            <FaUser /> 20 personnes
          </p>
        </div>
        <div className=" sm:w-2/3 w-full mt-4">
          <div className="flex flex-row items-center text-xl">
            <span>5</span>
            <div className="ml-4 w-7/12 h-2 bg-primary"></div>
          </div>
          <div className="flex flex-row items-center">
            <span>4</span>
            <div className="ml-4 w-5/12 h-2 bg-primary"></div>
          </div>
          <div className="flex flex-row items-center">
            <span>3</span>
            <div className="ml-4 w-full h-2 bg-primary"></div>
          </div>
          <div className="flex flex-row items-center">
            <span>2</span>
            <div className="ml-4 w-7/12 h-2 bg-primary"></div>
          </div>
          <div className="flex flex-row items-center">
            <span>1</span>
            <div className="ml-4 w-1/12 h-2 bg-primary"></div>
          </div>
        </div>
      </div>
      <div className="my-4 grid md:grid-cols-2 grid-cols-1 gap-4">
        {comments.map((comment, index) => (
          <Comments
            key={index}
            user={comment.user}
            comments={comment.comments}
          />
        ))}
        {/* <Comments /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Avis;
