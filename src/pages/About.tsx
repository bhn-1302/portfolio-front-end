import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-gray-700">
      {/* Cabeçalho */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-3 text-left text-white font-semibold focus:outline-none"
      >
        {title}
        <span className="ml-2 cursor-pointer">{isOpen ? "-" : "+"}</span>
      </button>

      {/* Conteúdo */}

      {isOpen && (
        <div className="pb-4 text-gray-300 text-sm whitespace-pre-line">
          {content}
        </div>
      )}
    </div>
  );
};

export const About: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const changeLanguage = (lang: "pt" | "en") => {
    i18n.changeLanguage(lang);
    toast.info(
      lang === "pt" ? "Idioma alterado para Português ✅" : "Language changed to English ✅",
      {autoClose: 2000, position: "top-right"}
    )
  }

  const items = [
    { title: t("objective"), content: t("objective_text") },
    { title: t("resume"), content: t("resume_text") },
    {
      title: t("education"),
      content: (t("education_items", { returnObjects: true }) as string[]).join(
        "\n"
      ),
    },
    {
      title: t("courses"),
      content: (t("courses_items", { returnObjects: true }) as string[]).join(
        "\n"
      ),
    },
    {
      title: t("languages"),
      content: (t("languages_items", { returnObjects: true }) as string[]).join(
        "\n"
      ),
    },
    {
      title: t("tech_skills"),
      content: (
        t("tech_skills_items", { returnObjects: true }) as string[]
      ).join("\n"),
    },
    {
      title: t("soft_skills"),
      content: (
        t("soft_skills_items", { returnObjects: true }) as string[]
      ).join("\n"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6 cursor-default">
        {/* Botões de idioma */}
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => changeLanguage("pt")}
            className={`px-3 py-1 rounded ${
              i18n.language === "pt" ? "bg-indigo-600" : "bg-gray-700"
            }`}
          >
            🇧🇷 PT
          </button>

          <button
            onClick={() => changeLanguage("en")}
            className={`px-3 py-1 rounded ${
              i18n.language === "en" ? "bg-indigo-600" : "bg-gray-700"
            }`}
          >
            🇺🇸 EN
          </button>
        </div>
        <h1 className="text-2xl font-bold text-white mb-4">{t("about")}</h1>

        <button
          onClick={() => navigate("/")}
          className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          {t("back_home")}
        </button>

        {items.map((item, i) => (
          <AccordionItem
            key={item.title}
            title={item.title}
            content={item.content}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};
