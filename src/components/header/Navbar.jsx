import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { useScroll } from "../../context/ScrollContext";
import axios from "axios";

function Navbar() {
  const { content } = useContext(LanguageContext);
  const { scrollToSection, skillsRef, projectsRef } = useScroll();
  const handleClick = () => {
    axios.post("https://reqres.in/api/users", { name: "Safiye" },
      { headers: { "x-api-key": "reqres-free-v1" } }
    )
      .then(res => {
        alert(`Your request has been sent! User ID: ${res.data.id}`);
      })
      .catch(err => console.log(err));
  };

  return (
    <nav className="flex items-center gap-2 sm:gap-8 overflow-x-auto">
      <button
        data-testid="skills-button"
        onClick={() => scrollToSection(skillsRef)}
        className="text-[#777777] hover:text-gray-500 cursor-pointer font-semibold px-2 py-2 sm:px-5 sm:py-4 text-sm sm:text-2xl whitespace-nowrap"
      >
        {content.headerTitles.skillHeader}
      </button>

      <button
        data-testid="projects-button"
        onClick={() => scrollToSection(projectsRef)}
        className="text-[#777777] cursor-pointer hover:text-gray-500 font-semibold px-2 py-2 sm:px-5 sm:py-4 text-sm sm:text-2xl whitespace-nowrap"
      >
        {content.headerTitles.projectHeader}
      </button>

      <button
        data-testid="hireme-button"
        onClick={handleClick}
        className="inline-flex cursor-pointer hover:bg-indigo-100 items-center justify-center text-[#3730A3] text-sm sm:text-2xl font-semibold rounded-lg h-10 sm:h-16 px-4 sm:px-6 dark:bg-white border-2 border-[#3730A3] whitespace-nowrap min-w-[100px] max-w-[200px]"
      >
        {content.headerTitles.hireMe}
      </button>


    </nav>
  );
}

export default Navbar;
