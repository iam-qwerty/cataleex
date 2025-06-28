'use client'
import { useCallback } from "react";
import { motion } from "framer-motion";

const ParticleBackground = () => {
  // Generate random position for particles
  const getRandomPosition = useCallback(() => {
    return {
      x: Math.random() * 100,
      y: Math.random() * 100
    };
  }, []);

  // Create different sized particles
  const createParticles = useCallback(() => {
    const particles = [];
    for (let i = 0; i < 40; i++) {
      const pos = getRandomPosition();
      const size = Math.random() * 8 + 2;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;

      particles.push(
        <motion.div
          key={i}
          className="particle"
          initial={{ 
            x: `${pos.x}%`, 
            y: `${pos.y}%`,
            opacity: Math.random() * 0.5 + 0.2 
          }}
          animate={{
            x: [
              `${pos.x}%`, 
              `${pos.x + Math.random() * 10 - 5}%`,
              `${pos.x + Math.random() * 10 - 5}%`,
              `${pos.x}%`
            ],
            y: [
              `${pos.y}%`, 
              `${pos.y + Math.random() * 10 - 5}%`,
              `${pos.y + Math.random() * 10 - 5}%`,
              `${pos.y}%`
            ]
          }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
            delay
          }}
          style={{
            width: size,
            height: size,
            background: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 155 + 100)}, ${Math.random() * 0.5 + 0.1})`,
            boxShadow: `0 0 ${Math.floor(size)}px rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 155 + 100)}, 0.8)`
          }}
        />
      );
    }
    return particles;
  }, [getRandomPosition]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {createParticles()}
    </div>
  );
};

export default ParticleBackground;
