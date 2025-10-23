import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { useScroll } from "../../context/ScrollContext"; 

function Skills() {
  const { content } = useContext(LanguageContext);
  const { skillsRef } = useScroll(); 

  return (
    <section
     id="skills"
      ref={skillsRef} 
      className="my-16 sm:my-20 container mx-auto px-4"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-8 sm:mb-10 text-center md:text-left text-[#1F2937] dark:text-[#AEBCCF]">
        {content.headerTitles.skillHeader}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {content.skillSection.skills.map((skill) => (
          <article key={skill.name} className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl mb-2 text-[#3730A3] dark:text-[#B7AAFF]">
              {skill.name}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#1F2937] dark:text-[#FFFFFF]">
              {skill.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
