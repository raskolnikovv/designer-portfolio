import { motion } from "framer-motion";
import { Testimonial } from "../../types";
import { useEntryAnimation } from "../../hooks/useAnimations";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { ref, fadeInUp } = useEntryAnimation();

  return (
    <motion.div
      ref={ref}
      animate={fadeInUp}
      initial={{ opacity: 0, y: 50 }}
      className="bg-dark-gray rounded-lg p-8 h-full flex flex-col"
    >
      {/* Aspas decorativas */}
      <div className="text-white/20 mb-6">
        <svg
          className="w-12 h-12"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Texto do depoimento */}
      <p className="text-white/80 text-lg mb-8 flex-grow italic">
        "{testimonial.text}"
      </p>

      {/* Informações da pessoa */}
      <div className="flex items-center">
        {/* Placeholder para foto ou foto real */}
        <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center mr-4">
          {testimonial.image &&
          !testimonial.image.startsWith("/placeholder") ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <svg
              className="w-6 h-6 text-white/30"
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
              ></path>
            </svg>
          )}
        </div>

        <div>
          <h4 className="font-heading font-bold">{testimonial.name}</h4>
          <p className="text-white/60 text-sm">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
