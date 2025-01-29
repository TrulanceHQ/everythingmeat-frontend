"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "John Frank",
    role: "CEO",
    image: "/aboutImages/team/team1.jpg",
  },
  {
    name: "Philipp Wurich",
    role: "Director",
    image: "/aboutImages/team/team2.jpg",
  },
  {
    name: "Keith Tanner",
    role: "Account",
    image: "/aboutImages/team/team3.jpg",
  },
  {
    name: "Rayan Mill",
    role: "Marketer",
    image: "/aboutImages/team/team4.jpg",
  },
  {
    name: "Jade Destiny",
    role: "HR",
    image: "/aboutImages/team/team5.jpg",
  },
];

const AboutTeam = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(teamMembers[0].name);

  const toggleExpand = (name: string) => {
    setExpandedMember(name); // Always set the clicked member as expanded
  };

  useEffect(() => {
    setExpandedMember(teamMembers[0].name);
  }, []);

  return (
    <div className="p-8 md:p-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-1">
        Meet Our Team
      </h2>
      <p className="mb-2">
        Get in Touch. Send us a message and let&#x27;s make things happen
        together.
      </p>
      <div className="w-14 border-b-4 border-customRed mb-5"></div>
      {/* Image Expanded */}
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member) => {
          const isExpanded = expandedMember === member.name;
          return (
            <div
              key={member.name}
              className={`relative cursor-pointer duration-300 ${
                isExpanded ? "w-[392px] h-[490px] cursor-none" : "w-[183px] h-[490px]"
              }`}
              onClick={() => toggleExpand(member.name)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-tr-[50px] rounded-bl-[50px]"
                />
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent rounded-bl-[50px]"></div>
              </div>
              {isExpanded && (
                <div className="absolute bottom-0 text-white text-center py-2 w-full rounded-bl-[50px] h-28">
                  <p className="text-2xl">{member.name}</p>
                  <p className="text-lg">{member.role}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutTeam;
