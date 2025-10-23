
import sunIcon from "../../assets/icons8-sun-32.png";
import moonIcon from "../../assets/icons8-moon-32.png";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";

function DarkModeToggle() {
  const { content } = useContext(LanguageContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={toggleTheme}
        className="relative w-20 h-9 flex items-center rounded-full transition-all duration-300 bg-[#4731D3] dark:bg-[#3A3A3A]"
      >
        <div
          className={`absolute w-6 h-6 rounded-full shadow-md flex items-center justify-center transform transition-all duration-300 ${
            darkMode ? "translate-x-1":"translate-x-12"  
          }`}
        >
        
          <img
            src={darkMode ? moonIcon : sunIcon}
            alt="theme icon"
            className="w-6 h-6"
          />
        </div>
      </button>

     
      <span className="hidden sm:block font-bold text-2xl text-[#777777] w-40 text-left dark:text-[#D9D9D9]">
        {darkMode ? content.darkMode.light : content.darkMode.dark}
      </span>
    </div>
  );
}

export default DarkModeToggle;
