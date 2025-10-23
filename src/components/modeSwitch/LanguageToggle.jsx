
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";

function LanguageToggle() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleLanguage}
      className="text-sm sm:text-2xl text-[#777777] cursor-pointer select-none"
    >
      {language === "en" ? (
        <>
          <span className="font-bold dark:text-[#BAB2E7] text-[#4731D3]">TÜRKÇE</span>'YE GEÇ
        </>
      ) : (
        <>
          <span className="font-bold dark:text-[#BAB2E7] text-[#4731D3]">ENGLISH</span> MODE
        </>
      )}
    </div>
  );
}

export default LanguageToggle;

