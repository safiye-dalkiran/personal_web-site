import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { useScroll } from "../../context/ScrollContext"; 

export default function Projects() {
  const { content } = useContext(LanguageContext);
  const { projectsRef } = useScroll(); // 👈 
  return (
    
    <div ref={projectsRef} id="projects" className="pb-16 sm:pb-20 container mx-auto px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center md:text-left text-[#1F2937] dark:text-[#AEBCCF] font-medium mb-8 sm:mb-10">
        {content.headerTitles.projectHeader}
      </h1>

      <div className="grid grid-cols-1 mx-10 md:mx-0 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-20 auto-rows-fr">
        {content.projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-3 min-h-[500px]">
            <img
              src={project.img}
              className="w-full h-52 sm:h-60 md:h-52 object-cover rounded-lg"
              alt={project.name}
            />
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-[#3730A3] dark:text-[#BAB2E7]">
              {project.name}
            </h2>
            <p className="text-base sm:text-base md:text-lg text-[#6B7280] dark:text-white leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="border-2 border-[#3730A3] dark:border-[#8F88FF] text-sm sm:text-base md:text-lg text-[#3730A3] dark:text-[#8F88FF] px-3 sm:px-5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex md:justify-between text-[#3730A3] dark:text-[#8F88FF] text-base sm:text-lg font-medium mt-2 gap-10">
              <a href={project.link} className="hover:underline">
                Github
              </a>
              <a className="hover:underline">
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
