'use client'
import { motion } from "framer-motion";

interface DecorativeGridProps {
  className?: string;
  animated?: boolean;
}

const DecorativeGrid = ({ className = "", animated = true }: DecorativeGridProps) => {
  return (
    <div className={`absolute inset-0 opacity-30 ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <pattern
            id="decorativeGrid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={animated ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#decorativeGrid)" />
      </svg>
    </div>
  );
};

export default DecorativeGrid;
