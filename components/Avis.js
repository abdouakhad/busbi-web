"use client";
import React, { useState, useEffect } from "react";
import { Comments } from "./Comments";
import { FaStar, FaUser } from "react-icons/fa6";
import { IoIosStarHalf } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";

import { db } from "../app/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { comment } from "postcss";

async function getComments() {
  const commentsCol = collection(db, "reviews");
  const commentsSnapshot = await getDocs(commentsCol);
  // Get the id and data for each document
  const commentsList = commentsSnapshot.docs.map((doc) => ({
    id: doc.id.substring(0, 2),
    ...doc.data(),
  }));
  return commentsList;
}

function Avis() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const commentsList = await getComments();
      setComments(commentsList);
    }
    fetchComments();
  }, []);

  const sampleComments = [];

  let count5 = 0;
  let count4 = 0;
  let count3 = 0;
  let count2 = 0;
  let count1 = 0;

  comments.forEach((comment) => {
    switch (comment.rating) {
      case 5:
        count5++;
        break;
      case 4:
        count4++;
        break;
      case 3:
        count3++;
        break;
      case 2:
        count2++;
        break;
      case 1:
        count1++;
        break;
      default:
        break;
    }
  });
  const maxRating=Math.max(count1,count2,count3,count4,count5);
const scaledCount5=Math.round(count5*(100/maxRating));
const scaledCount4=Math.round(count4*(100/maxRating));
const scaledCount3=Math.round(count3*(100/maxRating));
const scaledCount2=Math.round(count2*(100/maxRating));
const scaledCount1=Math.round(count1*(100/maxRating));
const totalrating=((count1*1)+(count2*2)+(count3*3)+(count4*4)+count5*5);
const average=totalrating/comments.length;
console.log(average);
  
  // console.log(scaledCount5);
  // console.log(scaledCount4);
  // console.log(scaledCount3);
  // console.log(scaledCount2);
  // console.log(scaledCount1);

  for (let i = 0; i < comments.length && i < 4; i++) {
    sampleComments.push(comments[i]);
  }

  //console.log("sampleComments", comments);

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
        {sampleComments.map((comment, index) => (
          <Comments key={index} id={comment.id} comments={comment.comment} />
        ))}
      </div>
    </div>
  );
}

export default Avis;
