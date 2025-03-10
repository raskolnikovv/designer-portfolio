import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Project } from "../../types";
import { useHoverAnimation } from "../../hooks/useAnimations";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { cardHover } = useHoverAnimation();

  // Atraso na animação baseado no índice
  const delay = index * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      variants={cardHover}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/projetos/${project.id}`} className="block">
        <div className="overflow-hidden rounded-lg bg-dark-gray relative aspect-[4/3]">
          {/* Placeholder para imagem */}
          <div className="image-placeholder w-full h-full flex items-center justify-center">
            {/* Se tiver uma imagem real, use-a, caso contrário, mostre um placeholder */}
            {project.image.startsWith("/placeholder") ? (
              <div className="flex flex-col items-center justify-center p-6 text-center">
                <svg
                  className="w-12 h-12 mb-4 text-white/30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-white/50 text-sm">
                  Imagem do projeto: {project.title}
                </p>
                <p className="text-white/30 text-xs mt-2">
                  Dimensões recomendadas: 800x600px
                </p>
              </div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}

            {/* Overlay com informações */}
            <motion.div
              className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ opacity: isHovered ? 1 : 0 }}
            >
              <span className="text-xs uppercase tracking-wider text-white/70 mb-2">
                {project.category.replace("-", " ")}
              </span>
              <h3 className="text-xl font-heading font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-white/70 text-sm line-clamp-2">
                {project.description}
              </p>

              {/* Tecnologias usadas */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Botão de ver detalhes */}
              <div className="mt-4 text-center">
                <span className="inline-flex items-center text-white font-medium">
                  Ver Detalhes
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
