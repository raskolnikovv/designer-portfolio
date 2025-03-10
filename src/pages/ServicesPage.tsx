import { motion } from "framer-motion";
import { services } from "../utils/data";
import ServiceCard from "../components/ui/ServiceCard";
import Button from "../components/ui/Button";
import { useEntryAnimation } from "../hooks/useAnimations";

const ServicesPage = () => {
  const { ref: refTitle, fadeInUp: fadeInUpTitle } = useEntryAnimation();
  const { ref: refProcess, fadeInUp: fadeInUpProcess } = useEntryAnimation();

  // Processo de trabalho - exemplo que pode ser editado
  const workProcess = [
    {
      id: "1",
      title: "Descoberta",
      description:
        "Entendemos suas necessidades, objetivos e público-alvo através de uma análise detalhada.",
      icon: "🔍",
    },
    {
      id: "2",
      title: "Estratégia",
      description:
        "Desenvolvemos um plano estratégico para alcançar seus objetivos de design e comunicação.",
      icon: "📝",
    },
    {
      id: "3",
      title: "Design",
      description:
        "Criamos conceitos visuais e protótipos que traduzem sua visão em elementos tangíveis.",
      icon: "✏️",
    },
    {
      id: "4",
      title: "Implementação",
      description:
        "Finalizamos e entregamos os arquivos prontos para uso em diferentes plataformas.",
      icon: "🚀",
    },
    {
      id: "5",
      title: "Avaliação",
      description:
        "Analisamos os resultados e fazemos ajustes para garantir que os objetivos sejam alcançados.",
      icon: "📊",
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Título da página */}
        <motion.div
          ref={refTitle}
          animate={fadeInUpTitle}
          initial={{ opacity: 0, y: 50 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Nossos Serviços
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas em design para ajudar sua marca a se
            destacar e conectar com seu público-alvo.
          </p>
        </motion.div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Processo de trabalho */}
        <motion.div
          ref={refProcess}
          animate={fadeInUpProcess}
          initial={{ opacity: 0, y: 50 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nosso Processo
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Trabalhamos de forma estruturada para garantir resultados
              excepcionais em cada projeto.
            </p>
          </div>

          <div className="relative">
            {/* Linha conectora */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform -translate-x-1/2"></div>

            {/* Etapas do processo */}
            <div className="space-y-12 md:space-y-0">
              {workProcess.map((step, index) => (
                <div key={step.id} className="relative">
                  <div
                    className={`md:flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Círculo na linha do tempo */}
                    <div className="absolute left-1/2 w-8 h-8 rounded-full bg-white text-black font-bold md:flex hidden items-center justify-center transform -translate-x-1/2">
                      {step.id}
                    </div>

                    {/* Conteúdo */}
                    <div
                      className={`md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                      }`}
                    >
                      <div className="bg-dark-gray p-6 rounded-lg">
                        <div className="text-3xl mb-4">{step.icon}</div>
                        <h3 className="text-xl font-heading font-bold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-white/70">{step.description}</p>
                      </div>
                    </div>

                    {/* Espaçador */}
                    <div className="md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ - Perguntas frequentes */}
        <div className="bg-dark-gray rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-xl font-heading font-bold mb-3">
                Qual é o prazo médio para entrega de um projeto?
              </h3>
              <p className="text-white/70">
                O prazo varia de acordo com a complexidade do projeto. Um
                projeto de identidade visual pode levar de 2 a 4 semanas,
                enquanto um website completo pode levar de 4 a 8 semanas.
                Durante nossa consulta inicial, forneceremos um cronograma
                detalhado.
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-xl font-heading font-bold mb-3">
                Como funciona o processo de pagamento?
              </h3>
              <p className="text-white/70">
                Geralmente trabalhamos com um adiantamento de 50% no início do
                projeto e os 50% restantes na entrega final. Para projetos
                maiores, podemos estabelecer um cronograma de pagamentos baseado
                em marcos do projeto.
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-xl font-heading font-bold mb-3">
                Vocês oferecem suporte após a conclusão do projeto?
              </h3>
              <p className="text-white/70">
                Sim, oferecemos suporte técnico por 30 dias após a entrega final
                do projeto. Também disponibilizamos pacotes de manutenção mensal
                para websites e aplicativos.
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <h3 className="text-xl font-heading font-bold mb-3">
                Quais informações vocês precisam para iniciar um projeto?
              </h3>
              <p className="text-white/70">
                Para iniciar, precisamos entender seus objetivos, público-alvo,
                concorrentes, preferências estéticas e quaisquer materiais
                existentes da sua marca. Fornecemos um briefing detalhado para
                coletar essas informações.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-dark-gray to-black p-12 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Pronto para Transformar suas Ideias em Realidade?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato para discutirmos como podemos ajudar a elevar sua
            marca com design de qualidade.
          </p>
          <Button href="/contato" size="lg">
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
