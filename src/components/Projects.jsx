import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsData = [
    // { name: "sample a", img: "images/workImg.jpeg" },
    // { name: "sample b", img: "images/workImg.jpeg" },
    // { name: "sample c", img: "images/workImg.jpeg" },
    // { name: "sample d", img: "images/realestate.jpg" },
    // { name: "sample e", img: "images/realestate.jpg" },
    // { name: "sample f", img: "images/realestate.jpg" },
  ];

  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projectsData.length > 0 ? (
            projectsData.map((project, id) => {
              return (
                <ProjectCard img={project.img} name={project.name} key={id} />
              );
            })
          ) : (
            <p>No projects to display!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
