
// import sunIcon from "../../assets/icons8-sun-32.png";
// import moonIcon from "../../assets/icons8-moon-32.png";
// import { useContext } from "react";
// import { LanguageContext } from "../../context/LanguageContext";
// import { ThemeContext } from "../../context/ThemeContext";

// function DarkModeToggle() {
//   const { content } = useContext(LanguageContext);
//   const { darkMode, toggleTheme } = useContext(ThemeContext);

//   return (
//     <div className="flex items-center space-x-2 text-sm sm:text-base">
//       <button
//         onClick={toggleTheme}
//         className="relative w-16 sm:w-20 h-8 sm:h-9 flex items-center rounded-full transition-all duration-300 dark:bg-[#4731D3] bg-[#3A3A3A]"
//       >
//         <div
//           className={`absolute w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md flex items-center justify-center transform transition-all duration-300 ${darkMode ? "translate-x-9 sm:translate-x-12" : "translate-x-1"
//             }`}
//         >
//           <img
//             src={darkMode ? sunIcon : moonIcon}
//             alt="theme icon"
//             className="w-5 sm:w-6 h-5 sm:h-6"
//           />
//         </div>
//       </button>

//       <span className="font-bold text-base sm:text-2xl text-[#777777] dark:text-[#D9D9D9] w-32 sm:w-40 text-left hidden md:block">
//         {darkMode ? content.darkMode.dark : content.darkMode.light}
//       </span>
//     </div>
//   );
// }

// export default DarkModeToggle;
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
