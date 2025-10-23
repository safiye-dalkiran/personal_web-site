import axios from "axios";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

function SosialButtons() {
  const { content } = useContext(LanguageContext);
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
    <div className="flex gap-2">
   
      <button
        onClick={handleClick}
        className={`
          text-white dark:text-[#000000]
          text-md sm:text-2xl font-semibold
          rounded-lg h-16 px-4 sm:px-6
          bg-[#3730A3] dark:bg-[#E1E1FF]
          border-2 border-[#3730A3]
          whitespace-nowrap truncate
          transition-transform  duration-300
          hover:scale-105 hover:bg-[#4f46e5] dark:hover:bg-[#c7d2fe]
          ${content.headerTitles.hireMe.length > 10 
            ? 'w-[220px] sm:w-[250px]' 
            : 'w-40 sm:w-[180px]'}
        `}
      >
        {content.headerTitles.hireMe}
      </button>

      
      {content.heroSection.socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center gap-2
            border-2 border-[#3730A3] dark:border-[#E1E1FF]
            dark:bg-[#383838] text-[#3730a3] dark:text-[#E1E1FF]
            rounded-lg w-40 h-16 p-2 text-xl sm:text-2xl
            transition-transform duration-300
            hover:scale-105 hover:bg-[#E1E1FF] dark:hover:bg-[#4b5563] 
            hover:text-[#3730A3] dark:hover:text-[#E1E1FF]
          "
        >
          <img 
            src={social.logo} 
            alt={social.altText} 
            className="w-6 h-6 sm:w-8 sm:h-8 fill-current" 
          />
          {social.text}
        </a>
      ))}
    </div>
  );
}

export default SosialButtons;
