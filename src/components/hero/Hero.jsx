import SosialButtons from "./SosialButtons";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Hero() {
  const { content } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-6 pt-10 sm:pt-15 container mx-auto px-4">

      <div className="flex flex-col sm:flex-row items-center gap-2 pt-5 sm:pt-10 text-center md:text-left">
        <span className="block w-20 sm:w-28 h-0.5 dark:bg-[#B7AAFF] bg-[#3730A3]"></span>
        <h1 className="font-medium text-2xl sm:text-3xl dark:text-[#B7AAFF] text-[#3730A3]">
          {content.heroSection.name}
        </h1>
      </div>

    
      <div className="flex flex-col md:flex-row w-full gap-6 md:gap-2 items-center md:items-start">
        <div className="flex flex-col gap-6 md:gap-8 w-full md:w-3/5 flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold dark:text-[#AEBCCF] text-[#1F2937]">
            {content.heroSection.text1}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#6B7280] max-w-full md:max-w-[800px] dark:text-white mx-auto md:mx-0">
            {content.heroSection.description}
          </p>
          <SosialButtons />
        </div>

        
        <div className="w-full md:w-2/5 flex justify-center md:justify-start">
  <img
    src={content.heroSection.profileImage}
    alt="Profile"
    className="rounded-full w-60 sm:w-72 md:w-75 h-auto"
  />
</div>

      </div>
    </div>
  );
}
