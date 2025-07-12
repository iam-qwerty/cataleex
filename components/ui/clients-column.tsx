'use client'
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Client } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const ClientCard = ({ client }: { client: Client }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 300, damping: 20 });

  const spotlightX = useTransform(mouseXSpring, [-150, 150], ["0%", "100%"]);
  const spotlightY = useTransform(mouseYSpring, [-150, 150], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.a
      href={client.website}
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative w-full max-w-xs h-80 rounded-2xl overflow-hidden bg-gray-900/50 border border-white/10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02, y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at ${spotlightX} ${spotlightY}, rgba(132, 24, 222, 0.15), transparent 80%)`,
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
        <div className="mb-6 w-24 h-24 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300 ring-1 ring-white/10">
          <motion.img 
            src={client.logo} 
            alt={`${client.name} logo`} 
            className="max-h-12 max-w-20 object-contain group-hover:filter-none transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-neon-blue transition-colors duration-300">
          {client.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300 h-10">
          {client.description}
        </p>
        
        <div className="flex items-center justify-center gap-2 text-neon-purple group-hover:text-neon-blue transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-xs font-medium uppercase tracking-wider">Visit Website</span>
          <ExternalLink size={14} />
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-neon-purple/50 transition-all duration-300 pointer-events-none" />
    </motion.a>
  );
};

const ClientsColumn = ({ 
  clients, 
  className, 
  duration = 15 
}: { 
  clients: Client[]; 
  className?: string; 
  duration?: number; 
}) => {
  return (
    <div className={cn("flex flex-col gap-6 pb-6", className)}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...clients, ...clients].map((client, index) => (
          <ClientCard key={`${client.id}-${index}`} client={client} />
        ))}
      </motion.div>
    </div>
  );
};

export default ClientsColumn;
