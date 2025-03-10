import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { useEntryAnimation } from "../hooks/useAnimations";

const AboutPage = () => {
  const { ref: refHero, fadeInUp: fadeInUpHero } = useEntryAnimation();
  const { ref: refSkills, fadeInUp: fadeInUpSkills } = useEntryAnimation();

  // Habilidades - exemplo que pode ser editado
  const skills = [
    { name: "Design Gráfico", percentage: 95 },
    { name: "UI/UX Design", percentage: 90 },
    { name: "Branding", percentage: 85 },
    { name: "Web Design", percentage: 80 },
    { name: "Motion Graphics", percentage: 75 },
    { name: "Ilustração", percentage: 70 },
  ];

  // Experiência - exemplo que pode ser editado
  const experience = [
    {
      period: "2020 - Presente",
      title: "Designer Sênior",
      company: "Estúdio Criativo XYZ",
      description:
        "Lidero projetos de design para clientes de diversos setores, com foco em identidade visual e design de interfaces.",
    },
    {
      period: "2017 - 2020",
      title: "UI/UX Designer",
      company: "Agência Digital ABC",
      description:
        "Desenvolvi interfaces de usuário e experiências para aplicativos móveis e websites, trabalhando em estreita colaboração com desenvolvedores.",
    },
    {
      period: "2015 - 2017",
      title: "Designer Gráfico",
      company: "Estúdio de Design 123",
      description:
        "Criei materiais impressos e digitais para diversas marcas, incluindo logotipos, folhetos e materiais promocionais.",
    },
  ];

  // Educação - exemplo que pode ser editado
  const education = [
    {
      period: "2013 - 2015",
      degree: "Mestrado em Design Gráfico",
      institution: "Universidade de Design",
      description:
        "Especialização em design de interfaces e experiência do usuário.",
    },
    {
      period: "2009 - 2013",
      degree: "Bacharelado em Design",
      institution: "Faculdade de Artes Visuais",
      description:
        "Formação abrangente em design gráfico, web design e branding.",
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Imagem/Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="image-placeholder aspect-square rounded-lg overflow-hidden">
              <div className="flex flex-col items-center justify-center p-6 text-center h-full">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <p className="text-white/50 text-sm">
                  Sua foto ou imagem de perfil
                </p>
                <p className="text-white/30 text-xs mt-2">
                  Dimensões recomendadas: 600x600px
                </p>
              </div>
            </div>
          </div>

          {/* Texto de introdução */}
          <motion.div
            ref={refHero}
            animate={fadeInUpHero}
            initial={{ opacity: 0, y: 50 }}
            className="order-1 lg:order-2"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Sobre Mim
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Olá! Sou um designer multidisciplinar apaixonado por criar
              experiências visuais memoráveis e impactantes. Com mais de 8 anos
              de experiência no mercado, tenho trabalhado com marcas de diversos
              segmentos, ajudando-as a se destacar através do design.
            </p>
            <p className="text-white/70 text-lg mb-8">
              Minha abordagem combina estética com funcionalidade, sempre
              buscando soluções criativas que atendam às necessidades do cliente
              e conectem com seu público-alvo. Acredito que o bom design tem o
              poder de transformar negócios e criar conexões emocionais
              duradouras.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/projetos">Ver Projetos</Button>
              <Button href="/contato" variant="outline">
                Entre em Contato
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Habilidades */}
        <motion.div
          ref={refSkills}
          animate={fadeInUpSkills}
          initial={{ opacity: 0, y: 50 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
            Minhas Habilidades
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-white/70">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experiência e Educação */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Experiência */}
          <div>
            <h2 className="text-3xl font-heading font-bold mb-8">
              Experiência
            </h2>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l border-white/10"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-white transform -translate-x-1.5"></div>
                  <span className="text-white/50 text-sm">{item.period}</span>
                  <h3 className="text-xl font-heading font-bold mt-1">
                    {item.title}
                  </h3>
                  <p className="text-white/70 font-medium">{item.company}</p>
                  <p className="text-white/70 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Educação */}
          <div>
            <h2 className="text-3xl font-heading font-bold mb-8">Educação</h2>

            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l border-white/10"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-white transform -translate-x-1.5"></div>
                  <span className="text-white/50 text-sm">{item.period}</span>
                  <h3 className="text-xl font-heading font-bold mt-1">
                    {item.degree}
                  </h3>
                  <p className="text-white/70 font-medium">
                    {item.institution}
                  </p>
                  <p className="text-white/70 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-dark-gray rounded-lg p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Meus Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-heading font-bold mb-2">Propósito</h3>
              <p className="text-white/70">
                Cada projeto tem um propósito claro. Busco entender
                profundamente os objetivos para criar soluções que realmente
                façam a diferença.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-heading font-bold mb-2">Inovação</h3>
              <p className="text-white/70">
                Estou sempre em busca de novas ideias e abordagens criativas
                para resolver problemas de design de forma única e memorável.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-heading font-bold mb-2">
                Colaboração
              </h3>
              <p className="text-white/70">
                Acredito que os melhores resultados surgem da colaboração.
                Trabalho em estreita parceria com meus clientes em cada etapa do
                processo.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-dark-gray to-black p-12 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Se você está procurando um designer apaixonado e comprometido com
            resultados excepcionais, entre em contato para discutirmos seu
            próximo projeto.
          </p>
          <Button href="/contato" size="lg">
            Iniciar um Projeto
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
