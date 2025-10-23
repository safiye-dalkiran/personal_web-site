import { createContext, useState } from "react";
import data from "../data";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
    const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "tr" : "en"));
  };

  const value = { language, toggleLanguage,setLanguage, content: data[language] };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
