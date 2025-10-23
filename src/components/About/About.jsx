import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Profile() {
  const { content } = useContext(LanguageContext);

  return (
    <div className="container my-16 sm:my-20 mx-auto px-4">
    
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center md:text-left text-[#1F2937] dark:text-[#AEBCCF] font-medium mb-8 sm:mb-10">
        {content.headerTitles.profileHeader}
      </h1>

      
      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
      
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-[#3730A3] dark:text-[#B7AAFF]">
            {content.profile.profileData.profileHeader}
          </h2>

          <div className="space-y-3 text-base sm:text-lg dark:text-white">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <p className="w-full sm:w-40 font-semibold">{content.profile.profileData.birthDateLabel}</p>
              <p>{content.profile.profileData.birthDate}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <p className="w-full sm:w-40 font-semibold">{content.profile.profileData.hometownLabel}</p>
              <p>{content.profile.profileData.hometown}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <p className="w-full sm:w-40 font-semibold">{content.profile.profileData.educationLabel}</p>
              <p>{content.profile.profileData.education}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <p className="w-full sm:w-40 font-semibold">{content.profile.profileData.roleLabel}</p>
              <p>{content.profile.profileData.role}</p>
            </div>
          </div>
        </div>

       
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-[#3730A3] dark:text-[#B7AAFF]">
            {content.profile.aboutData.aboutHeader}
          </h2>
          <p className="text-base sm:text-lg md:text-lg text-[#6B7280] dark:text-white leading-relaxed mb-3">
            {content.profile.aboutData.aboutText1}
          </p>
          <p className="text-base sm:text-lg md:text-lg text-[#6B7280] dark:text-white leading-relaxed">
            {content.profile.aboutData.aboutText2}
          </p>
        </div>
      </div>
    </div>
  );
}
