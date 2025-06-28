'use client'
import { motion } from "framer-motion";

interface GlowOrbsProps {
  count?: number;
  className?: string;
}

const GlowOrbs = ({ count = 3, className = "" }: GlowOrbsProps) => {
  const orbs = [];

  for (let i = 0; i < count; i++) {
    const size = Math.random() * 200 + 100;
    const color = ['neon-purple', 'neon-blue', 'neon-pink'][i % 3];
    const x = Math.random() * 80 + 10;
    const y = Math.random() * 80 + 10;
    
    orbs.push(
      <motion.div
        key={i}
        className={`absolute rounded-full blur-3xl opacity-20`}
        style={{
          width: size,
          height: size,
          left: `${x}%`,
          top: `${y}%`,
          background: `var(--${color})`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 2,
        }}
      />
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {orbs}
    </div>
  );
};

export default GlowOrbs;
