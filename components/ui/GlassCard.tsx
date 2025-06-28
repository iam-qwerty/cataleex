'use client'
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard = ({ 
  children, 
  className = "",
  hoverEffect = true 
}: GlassCardProps) => {
  return (
    <motion.div
      className={`
        rounded-xl bg-white/5 backdrop-blur-lg 
        border border-white/10 shadow-xl
        overflow-hidden ${className}
      `}
      whileHover={hoverEffect ? { 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
        borderColor: "rgba(139, 92, 246, 0.3)"
      } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;