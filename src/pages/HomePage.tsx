import { motion } from "framer-motion";
import HeroScene from "../components/3d/HeroScene";
import ProjectCard from "../components/ui/ProjectCard";
import ServiceCard from "../components/ui/ServiceCard";
import TestimonialCard from "../components/ui/TestimonialCard";
import Button from "../components/ui/Button";
import { projects, services, testimonials } from "../utils/data";
import { useEntryAnimation } from "../hooks/useAnimations";

const HomePage = () => {
  const { ref: refHero, fadeInUp: fadeInUpHero } = useEntryAnimation();
  const { ref: refProjects, fadeInUp: fadeInUpProjects } = useEntryAnimation();

  // Filtrar projetos em destaque
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={refHero}
              animate={fadeInUpHero}
              initial={{ opacity: 0, y: 50 }}
              className="order-2 lg:order-1"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
                DESIGNER
                <br />
                <span className="text-white/80">MULTIDISCIPLINAR</span>
              </h1>
              <p className="text-white/70 text-lg mb-8 max-w-lg">
                Criando experiências visuais memoráveis e impactantes para
                marcas que desejam se destacar no mercado digital e impresso.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/projetos" size="lg">
                  Ver Projetos
                </Button>
                <Button href="/contato" variant="outline" size="lg">
                  Vamos Conversar
                </Button>
              </div>
            </motion.div>

            <div className="order-1 lg:order-2 perspective preserve-3d">
              <HeroScene />
            </div>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="py-20 bg-dark-gray">
        <div className="container-custom">
          <motion.div
            ref={refProjects}
            animate={fadeInUpProjects}
            initial={{ opacity: 0, y: 50 }}
            className="mb-12"
          >
            <h2 className="section-title">Projetos em Destaque</h2>
            <p className="text-white/70 text-lg max-w-2xl">
              Uma seleção dos meus melhores trabalhos em design gráfico, web
              design, branding e muito mais.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/projetos" variant="outline">
              Ver Todos os Projetos
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Meus Serviços</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Ofereço soluções completas em design para ajudar sua marca a se
              destacar e conectar com seu público.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-dark-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">O Que Dizem os Clientes</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Feedback de clientes satisfeitos com os resultados dos projetos
              realizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-dark-gray to-black p-12 rounded-lg text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Estou disponível para novos projetos. Entre em contato para
              discutirmos como posso ajudar a sua marca.
            </p>
            <Button href="/contato" size="lg">
              Iniciar um Projeto
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
