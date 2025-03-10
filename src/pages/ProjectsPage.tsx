import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ui/ProjectCard";
import Button from "../components/ui/Button";
import { projects } from "../utils/data";
import { ProjectCategory } from "../types";

const ProjectsPage = () => {
  // Estado para o filtro de categoria atual
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">(
    "all"
  );

  // Extrair categorias únicas dos projetos
  const categories = [
    "all",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ] as Array<ProjectCategory | "all">;

  // Filtrar projetos com base na categoria selecionada
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Função para formatar o nome da categoria para exibição
  const formatCategoryName = (category: string) => {
    if (category === "all") return "Todos";
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Projetos
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore meu portfólio de trabalhos em design gráfico, web design,
            branding e muito mais.
          </p>
        </div>

        {/* Filtros de categoria */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "bg-dark-gray text-white/70 hover:text-white"
              }`}
            >
              {formatCategoryName(category)}
            </button>
          ))}
        </div>

        {/* Grid de projetos com animação */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mensagem quando não há projetos */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/70 mb-4">
              Nenhum projeto encontrado nesta categoria.
            </p>
            <Button onClick={() => setActiveCategory("all")} variant="outline">
              Ver Todos os Projetos
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
