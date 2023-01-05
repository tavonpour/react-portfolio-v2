import React from "react";
import {
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiReact,
  DiGithubBadge,
  DiPython,
} from "react-icons/di";

const Skills = () => {
  const skillsData = [
    { name: "HTML", icon: <DiHtml5 size={100} /> },
    { name: "CSS", icon: <DiCss3 size={100} /> },
    { name: "JavaScript", icon: <DiJsBadge size={100} /> },
    { name: "React", icon: <DiReact size={100} /> },
    { name: "Github", icon: <DiGithubBadge size={100} /> },
    { name: "Python", icon: <DiPython size={100} /> },
  ];

  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillsData.map((skill, id) => {
            return (
              <div
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
                key={id}
              >
                <div className="skill-icon-holder">{skill.icon}</div>
                <p className="my-4">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
