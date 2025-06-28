'use client'
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowingButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  glowColor?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const GlowingButton = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  glowColor = "rgba(139, 92, 246, 0.6)",
  className = "",
  onClick,
  type = "button"
}: GlowingButtonProps) => {
  
  // Base classes
  const baseClasses = "relative overflow-hidden rounded-full font-heading font-bold transition-all duration-300";
  
  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  // Variant classes
  const variantClasses = {
    primary: "bg-gradient-to-r from-neon-purple to-neon-blue text-white",
    secondary: "bg-gradient-to-r from-neon-green to-neon-blue text-white",
    outline: "bg-transparent border-2 border-neon-purple text-white"
  };

  return (
    <motion.button
      className={`
        ${baseClasses} 
        ${sizeClasses[size]} 
        ${variantClasses[variant]}
        ${className}
      `}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 0 15px ${glowColor}`
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      type={type}
    >
      <span className="relative z-10">
        {children}
      </span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default GlowingButton;