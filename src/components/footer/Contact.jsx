import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

function Contact() {
  const { content } = useContext(LanguageContext);
  return (
    <div className="bg-[#F9F9F9] dark:bg-[#141414]">
      <div className="py-12 sm:py-25 container mx-auto px-4">
        <h1 className="text-[#1F2937] dark:text-[#AEBCCF] text-3xl sm:text-4xl font-semibold pb-6 sm:pb-15 w-full sm:w-1/3">
          {content.footerSection.title}
        </h1>

        <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-4 sm:gap-3 text-lg font-medium">
          <div className="text-lg sm:text-xl">
            👉{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=safiyedal360@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#AF0C48] dark:text-[#BAB2E7] underline"
            >
              {content.footerSection.email}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-6">
            <a
              href="#"
              className="text-[#0A0A14] dark:text-[#E1E1FF] hover:underline"
            >
              {content.footerSection.text}
            </a>
            <a
              href="https://github.com/safiye-dalkiran"
              className="text-[#00AB6B] hover:underline"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/safiyedalkiran"
              className="text-[#0077B5] hover:underline"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
