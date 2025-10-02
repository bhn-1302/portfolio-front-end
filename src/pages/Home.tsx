import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export function Home() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const cards = [
    { title: t("about"), color: "bg-indigo-600", path: "/about" },
    { title: t("projects"), color: "bg-emerald-600", path: "/projects" },
    { title: t("contact"), color: "bg-rose-600", path: "/contact" },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
    toast.success(
      newLang === "pt"
        ? "Idioma alterado para Português ✅"
        : "Language changed to English ✅",
      { autoClose: 2000, position: "top-right" }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <ParticlesBackground />

      {/* Botão de idioma */}
      <button
        onClick={toggleLanguage}
        className="absolute top-4 right-4 px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition z-20"
      >
        {i18n.language === "pt" ? "EN" : "PT"}
      </button>

      {/* Cards responsivos */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full max-w-5xl mx-auto relative z-10
        "
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              title={card.title}
              color={card.color}
              onClick={() => navigate(card.path)}
            />
          </motion.div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}
