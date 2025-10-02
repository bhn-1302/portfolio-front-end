import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  vercel?: string;
}

export const Projects: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: "Mini-ATS",
      description: t("project_descriptions.mini_ats"),
      image: "/images/mini-ats-img.png",
      tags: ["React", "TypeScript", "Tailwind"],
      vercel: "https://mini-ats-two.vercel.app/",
      github: "https://github.com/bhn-1302/mini-ats",
    },
    {
      title: "Admin Dashboard",
      description: t("project_descriptions.admin_dashboard"),
      image: "/images/admin-dashboard-img.png",
      tags: ["React", "Vite", "Tailwind"],
      github: "https://github.com/bhn-1302/admin-dashboard",
    },
    {
      title: "Analisador Gemini",
      description: t("project_descriptions.analisador_gemini"),
      image: "/images/analisador-gemini-img.png",
      tags: ["React", "Vite", "API Gemini"],
      github: "https://github.com/bhn-1302/analisador-gemini",
    },
    {
      title: "Search API GitHub",
      description: t("project_descriptions.search_github"),
      image: "/images/search-api-img.png",
      tags: ["React", "API"],
      github: "https://github.com/bhn-1302/search-api-github",
      vercel: "https://search-api-github.vercel.app/",
    },
    {
      title: "Pokémon Explorer",
      description: t("project_descriptions.pokemon_explorer"),
      image: "/images/pokemon-img.png",
      tags: ["React", "API"],
      vercel: "https://pokemon-explorer-smoky.vercel.app/",
      github: "https://github.com/bhn-1302/pokemon-explorer",
    },
    {
      title: "Doce Encanto",
      description: t("project_descriptions.doce_encanto"),
      image: "/images/doce-encanto-img.png",
      tags: ["React", "Tailwind"],
      vercel: "https://doce-encanto-one.vercel.app/",
      github: "https://github.com/bhn-1302/doce-encanto",
    },
  ];

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
    <div className="min-h-screen bg-gray-900 p-6">
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        {t("back_home")}
      </button>

      {/* Título + Botões de idioma */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">{t("projects")}</h1>

        <div className="flex gap-2">
          <button
            onClick={() => changeLanguage("pt")}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm text-white cursor-pointer"
          >
            PT
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm text-white cursor-pointer"
          >
            EN
          </button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4 cursor-default">
              <h2 className="text-lg font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-700 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm text-white"
                  >
                    {t("github")}
                    <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition px-2 py-1 rounded bg-black text-white text-xs pointer-events-none">
                      Ver repositório no GitHub
                    </span>
                  </a>
                )}
                {project.vercel && (
                  <a
                    href={project.vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded text-sm text-white"
                  >
                    {t("vercel")}
                    <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition px-2 py-1 rounded bg-black text-white text-xs pointer-events-none">
                      Ver aplicação ao vivo
                    </span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};
