// Tipos para projetos
export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  link?: string;
  technologies?: string[];
  featured?: boolean;
}

// Categorias de projetos
export type ProjectCategory =
  | "branding"
  | "web-design"
  | "ui-ux"
  | "print"
  | "motion-graphics"
  | "advertising"
  | "social-media"
  | "packaging-design"
  | "illustration";

// Tipos para serviços
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Tipos para depoimentos
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  image?: string;
}

// Tipos para contato
export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  socialMedia: {
    instagram?: string;
    behance?: string;
    linkedin?: string;
    dribbble?: string;
    twitter?: string;
  };
}
