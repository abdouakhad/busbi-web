import { Member } from "./Member";
import Image from "next/image";
import React from "react";

const team = [
  {
    src: "/team/brice.png",
    name: "Brice Kebere",
    profession: "Directeur General",
  },
  {
    src: "/team/top.png",
    name: "Abdoul Akhad Top",
    profession: "Ingenieur en informatique",
  },
  {
    src: "/team/fatima.png",
    name: "Fatoumata Diouf",
    profession: "Developpeuse Front-end web",
  },
  {
    src: "/team/monica.png",
    name: "Astou Monique Ngom",
    profession: "Developpeuse Front-end web",
  },
];

function Team() {
  return (
    <section id="about" className="bg-teamBg/10 text-black">
      <div className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold mb-2 text-center">Notre equipe</h2>
        <h3 className="text-2xl mb-8 text-gray-600 text-center">
          Decouvrez les membres de notre equipe
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
          {/* <Member
            src="/team/brice.png"
            name="Brice Kebere"
            profession=" Directeur General"
          /> */}
          {team.map((member, index) => (
            <Member
              key={index}
              src={member.src}
              name={member.name}
              profession={member.profession}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
