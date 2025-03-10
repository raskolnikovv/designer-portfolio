import { useInView } from "framer-motion";
import { useRef } from "react";

// Hook personalizado para animações de entrada
export const useEntryAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animação de fade-in da esquerda
  const fadeInLeft = {
    opacity: isInView ? 1 : 0,
    x: isInView ? 0 : -50,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  // Animação de fade-in da direita
  const fadeInRight = {
    opacity: isInView ? 1 : 0,
    x: isInView ? 0 : 50,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  // Animação de fade-in de baixo
  const fadeInUp = {
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 50,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  // Animação de fade-in com escala
  const fadeInScale = {
    opacity: isInView ? 1 : 0,
    scale: isInView ? 1 : 0.8,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return { ref, isInView, fadeInLeft, fadeInRight, fadeInUp, fadeInScale };
};

// Hook para animações de hover
export const useHoverAnimation = () => {
  // Animação de hover para cards
  const cardHover = {
    rest: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Animação de hover para botões
  const buttonHover = {
    rest: {
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return { cardHover, buttonHover };
};
