import { Project, Service, Testimonial, ContactInfo } from "../types";

// Dados de exemplo para projetos
export const projects: Project[] = [
  {
    id: "1",
    title: "Branding para Café Artesanal",
    description:
      "Identidade visual completa para uma marca de café artesanal, incluindo logotipo, embalagem e materiais promocionais.",
    category: "branding",
    image: "/placeholder-project-1.jpg",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    featured: true,
  },
  {
    id: "2",
    title: "Website para Estúdio de Arquitetura",
    description:
      "Design e desenvolvimento de website responsivo para um estúdio de arquitetura premiado.",
    category: "web-design",
    image: "/placeholder-project-2.jpg",
    technologies: ["Figma", "HTML/CSS", "JavaScript", "React"],
    featured: true,
  },
  {
    id: "3",
    title: "Campanha Publicitária para Evento de Moda",
    description:
      "Criação de materiais visuais para campanha publicitária de um grande evento de moda.",
    category: "advertising",
    image: "/placeholder-project-3.jpg",
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe After Effects",
    ],
    featured: true,
  },
  {
    id: "4",
    title: "Redesign de Interface de Aplicativo",
    description:
      "Redesign completo da interface de usuário para um aplicativo de produtividade.",
    category: "ui-ux",
    image: "/placeholder-project-4.jpg",
    technologies: ["Figma", "Sketch", "Protopie"],
    featured: false,
  },
  {
    id: "5",
    title: "Embalagem para Linha de Cosméticos",
    description:
      "Design de embalagem para uma nova linha de produtos cosméticos naturais.",
    category: "packaging-design",
    image: "/placeholder-project-5.jpg",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Mockup 3D"],
    featured: false,
  },
  {
    id: "6",
    title: "Animações para Redes Sociais",
    description:
      "Série de animações curtas para campanhas em redes sociais de uma marca de roupas.",
    category: "motion-graphics",
    image: "/placeholder-project-6.jpg",
    technologies: ["Adobe After Effects", "Cinema 4D", "Adobe Illustrator"],
    featured: false,
  },
];

// Dados de exemplo para serviços
export const services: Service[] = [
  {
    id: "1",
    title: "Branding & Identidade Visual",
    description:
      "Criação de identidades visuais completas que capturam a essência da sua marca e conectam com seu público.",
    icon: "palette",
  },
  {
    id: "2",
    title: "Web Design",
    description:
      "Design de websites modernos, responsivos e otimizados para conversão, com foco em experiência do usuário.",
    icon: "desktop",
  },
  {
    id: "3",
    title: "UI/UX Design",
    description:
      "Design de interfaces intuitivas e experiências de usuário que encantam e facilitam a interação com seu produto digital.",
    icon: "layers",
  },
  {
    id: "4",
    title: "Design Gráfico",
    description:
      "Criação de materiais gráficos impressos e digitais que comunicam sua mensagem de forma eficaz e memorável.",
    icon: "pen-tool",
  },
  {
    id: "5",
    title: "Motion Graphics",
    description:
      "Animações e efeitos visuais que dão vida às suas ideias e capturam a atenção do seu público.",
    icon: "film",
  },
  {
    id: "6",
    title: "Design de Embalagens",
    description:
      "Design de embalagens funcionais e atrativas que destacam seu produto nas prateleiras e online.",
    icon: "box",
  },
];

// Dados de exemplo para depoimentos
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ana Silva",
    company: "Café Aroma",
    text: "O trabalho de branding superou todas as nossas expectativas. Nossa marca ganhou personalidade e reconhecimento no mercado.",
    image: "/placeholder-testimonial-1.jpg",
  },
  {
    id: "2",
    name: "Carlos Mendes",
    company: "Estúdio Arquitetura",
    text: "O novo website trouxe um aumento significativo de clientes. O design clean e profissional reflete perfeitamente nosso trabalho.",
    image: "/placeholder-testimonial-2.jpg",
  },
  {
    id: "3",
    name: "Mariana Costa",
    company: "Fashion Week",
    text: "A campanha publicitária foi um sucesso absoluto. O design criativo e impactante atraiu muito mais público do que esperávamos.",
    image: "/placeholder-testimonial-3.jpg",
  },
];

// Dados de contato
export const contactInfo: ContactInfo = {
  email: "contato@designerstudio.com",
  phone: "+55 11 99999-9999",
  address: "São Paulo, SP - Brasil",
  socialMedia: {
    instagram: "https://instagram.com/designerstudio",
    behance: "https://behance.net/designerstudio",
    linkedin: "https://linkedin.com/in/designerstudio",
    dribbble: "https://dribbble.com/designerstudio",
  },
};
