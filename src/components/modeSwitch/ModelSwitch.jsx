
import React from "react";
import DarkMode from "./DarkMode";
import LanguageToggle from "./LanguageToggle";

function ModelSwitch() {
  return (
    <div className="flex items-center gap-4 pt-5 container mx-auto px-4 justify-end overflow-x-auto">
      <DarkMode />
      <span className="text-lg sm:text-2xl text-[#777777]">|</span>
      <LanguageToggle />
    </div>
  );
}

export default ModelSwitch;

