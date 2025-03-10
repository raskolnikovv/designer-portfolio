import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../utils/data";
import { Project, ProjectCategory } from "../types";
import Button from "../components/ui/Button";
import ProjectCard from "../components/ui/ProjectCard";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Estado para o projeto atual
  const [project, setProject] = useState<Project | null>(null);

  // Estado para projetos relacionados
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  // Estado para a imagem atual na galeria
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Imagens de exemplo para a galeria (normalmente viriam do backend)
  const projectImages = [
    "/placeholder-project-detail-1.jpg",
    "/placeholder-project-detail-2.jpg",
    "/placeholder-project-detail-3.jpg",
  ];

  // Buscar o projeto pelo ID
  useEffect(() => {
    const foundProject = projects.find((p) => p.id === id);

    if (foundProject) {
      setProject(foundProject);

      // Buscar projetos relacionados (mesma categoria, excluindo o atual)
      const related = projects
        .filter((p) => p.category === foundProject.category && p.id !== id)
        .slice(0, 3);

      setRelatedProjects(related);
    } else {
      // Redirecionar para a página de projetos se o projeto não for encontrado
      navigate("/projetos");
    }
  }, [id, navigate]);

  // Se o projeto ainda não foi carregado, mostrar um indicador de carregamento
  if (!project) {
    return (
      <div className="pt-32 pb-20 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70">Carregando projeto...</p>
        </div>
      </div>
    );
  }

  // Função para formatar o nome da categoria
  const formatCategoryName = (category: ProjectCategory) => {
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Navegação de volta */}
        <div className="mb-4">
          <Link
            to="/projetos"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Voltar para Projetos
          </Link>
        </div>

        {/* Banner do projeto */}
        <div className="bg-gradient-to-r from-dark-gray to-black rounded-lg p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-white/50 mb-2">
                Projeto
              </h2>
              <h3 className="text-2xl font-heading font-bold">
                {formatCategoryName(project.category)}
              </h3>
            </div>
            <div className="hidden md:block">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Título e descrição do projeto */}
          <div className="mt-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              {project.title}
            </h1>

            <p className="text-white/70 text-lg max-w-3xl">
              {project.description}
            </p>

            {/* Tecnologias usadas */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap items-center mt-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-white/10 px-3 py-1 rounded-full text-white/80 mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Galeria de imagens */}
        <div className="mb-10">
          <div className="bg-dark-gray rounded-lg overflow-hidden mb-4">
            <div className="aspect-[16/9] relative">
              {/* Imagem principal ou placeholder */}
              <div className="image-placeholder w-full h-full flex items-center justify-center">
                {projectImages[currentImageIndex].startsWith("/placeholder") ? (
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <svg
                      className="w-16 h-16 mb-4 text-white/30"
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
                      Imagem principal do projeto: {project.title}
                    </p>
                    <p className="text-white/30 text-xs mt-2">
                      Dimensões recomendadas: 1200x675px
                    </p>
                  </div>
                ) : (
                  <img
                    src={projectImages[currentImageIndex]}
                    alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Controles da galeria */}
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === 0 ? projectImages.length - 1 : prev - 1
                      )
                    }
                    className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    aria-label="Imagem anterior"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                  </button>

                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) =>
                        prev === projectImages.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    aria-label="Próxima imagem"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>

                {/* Indicador de posição */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        currentImageIndex === index ? "bg-white" : "bg-white/30"
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Miniaturas */}
          <div className="grid grid-cols-3 gap-4">
            {projectImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`aspect-[16/9] rounded-lg overflow-hidden ${
                  currentImageIndex === index ? "ring-2 ring-white" : ""
                }`}
              >
                <div className="image-placeholder w-full h-full">
                  {image.startsWith("/placeholder") ? (
                    <div className="flex items-center justify-center h-full bg-dark-gray">
                      <span className="text-white/50 text-xs">
                        Imagem {index + 1}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={image}
                      alt={`${project.title} - Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Detalhes do projeto */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Sobre o Projeto
            </h2>

            <div className="space-y-4 text-white/70">
              <p>
                Este projeto foi desenvolvido para {project.title.toLowerCase()}{" "}
                com o objetivo de criar uma identidade visual forte e memorável
                que refletisse os valores e a personalidade da marca.
              </p>

              <p>
                O processo começou com uma pesquisa aprofundada sobre o mercado,
                concorrentes e público-alvo. A partir dessas informações, foram
                desenvolvidos conceitos visuais que foram refinados em
                colaboração com o cliente até chegarmos ao resultado final.
              </p>

              <p>
                O design foi aplicado em diversos materiais e plataformas,
                garantindo consistência e impacto visual em todos os pontos de
                contato com o público.
              </p>

              <h3 className="text-xl font-heading font-bold mt-8 mb-4">
                Desafios e Soluções
              </h3>

              <p>
                Um dos principais desafios foi criar um design que fosse ao
                mesmo tempo moderno e atemporal, capaz de se manter relevante
                por muitos anos. A solução foi focar em elementos essenciais e
                uma paleta de cores cuidadosamente selecionada.
              </p>

              <p>
                Outro desafio foi garantir que o design funcionasse bem em
                diferentes formatos e tamanhos. Para isso, foi desenvolvido um
                sistema flexível que mantém a identidade visual consistente em
                qualquer aplicação.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold mb-6">
              Informações
            </h2>

            <div className="bg-dark-gray rounded-lg p-6">
              <div className="mb-6">
                <h3 className="text-sm uppercase tracking-wider text-white/50 mb-2">
                  Cliente
                </h3>
                <p className="font-medium">
                  {project.title.split(" ").slice(-1)[0]}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm uppercase tracking-wider text-white/50 mb-2">
                  Categoria
                </h3>
                <p className="font-medium">
                  {formatCategoryName(project.category)}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm uppercase tracking-wider text-white/50 mb-2">
                  Data
                </h3>
                <p className="font-medium">Março 2023</p>
              </div>

              {project.technologies && (
                <div className="mb-6">
                  <h3 className="text-sm uppercase tracking-wider text-white/50 mb-2">
                    Tecnologias
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-white/10 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.link && (
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-white/50 mb-2">
                    Link
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white inline-flex items-center hover:underline"
                  >
                    Ver Projeto
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Projetos relacionados */}
        {relatedProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-heading font-bold mb-8">
              Projetos Relacionados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard
                  key={relatedProject.id}
                  project={relatedProject}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Gostou deste projeto?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato para discutirmos como posso ajudar a transformar
            suas ideias em realidade.
          </p>
          <Button href="/contato" size="lg">
            Vamos Conversar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
