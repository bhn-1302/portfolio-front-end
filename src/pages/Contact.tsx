import React from "react";
import QRCode from "react-qr-code";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const linkedInUrl = "http://www.linkedin.com/in/brenno-henrique-nascimento";
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=5512996355942&text=Olá, sou Brenno Henrique do Nascimento!";
  const email = "mailto:nascimenttobrenno1302@gmail.com";

  const floatingElements = Array.from({ length: 10 });

  const changeLanguage = (lang: "pt" | "en") => {
    i18n.changeLanguage(lang);
    toast.success(
      lang === "pt"
        ? "Idioma alterado para Português ✅"
        : "Language changed to English ✅",
      { autoClose: 2000, position: "top-right" }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-900 relative overflow-hidden">
      {/* Background animado com gradiente */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-3xl"></div>

      {/* Elementos flutuantes */}
      {floatingElements.map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white opacity-20"
          style={{
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50 + Math.random() * 100, 0],
            x: [0, -50 + Math.random() * 100, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Card principal */}
      <div className="relative z-10 bg-gray-800 rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        {/* Botões de idioma e voltar para Home */}
        <div className="flex justify-between mb-4">
          <div className="flex">
            <button
              onClick={() => changeLanguage("pt")}
              className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-l"
            >
              PT
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-r"
            >
              EN
            </button>
          </div>

          {/* Botão voltar para Home */}
          <button
            onClick={() => navigate("/")}
            className="px-3 py-1 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded"
          >
            {t("back_home")}
          </button>
        </div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-6 cursor-default"
        >
          {t("contact_title")}
        </motion.h1>

        {/* QR Code */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white inline-block p-4 rounded-lg mb-6"
        >
          <QRCode value={linkedInUrl} size={128} />
        </motion.div>
        <p className="text-gray-300 mb-6 cursor-default">
          {t("contact_qr_text")}
        </p>

        {/* Botões */}
        <div className="flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          >
            {t("contact_whatsapp")}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href={email}
            target="_blank"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            {t("contact_email")}
          </motion.a>
        </div>
      </div>

      {/* Gradiente animado */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 10s ease infinite;
        }
      `}</style>

      {/* Container para os toasts */}
      <ToastContainer />
    </div>
  );
};
