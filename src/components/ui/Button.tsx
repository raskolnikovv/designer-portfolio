import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useHoverAnimation } from "../../hooks/useAnimations";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  isExternal?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  isExternal = false,
  icon,
  iconPosition = "right",
  type = "button",
}: ButtonProps) => {
  const { buttonHover } = useHoverAnimation();

  // Classes base para todos os botões
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all rounded-full";

  // Classes específicas para cada variante
  const variantClasses = {
    primary: "bg-white text-black hover:bg-opacity-90",
    outline: "border border-white text-white hover:bg-white hover:text-black",
    text: "text-white hover:text-white/80",
  };

  // Classes específicas para cada tamanho
  const sizeClasses = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };

  // Combinação de todas as classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Conteúdo do botão com ícone
  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  );

  // Renderização condicional baseada na presença de href
  if (href) {
    // Link externo
    if (isExternal) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          whileHover="hover"
          initial="rest"
          variants={buttonHover}
        >
          {content}
        </motion.a>
      );
    }

    // Link interno usando React Router
    return (
      <motion.div whileHover="hover" initial="rest" variants={buttonHover}>
        <Link to={href} className={buttonClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  // Botão normal
  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      whileHover="hover"
      initial="rest"
      variants={buttonHover}
      type={type}
    >
      {content}
    </motion.button>
  );
};

export default Button;
