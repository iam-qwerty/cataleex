'use client'
import React from "react";
import { motion } from "framer-motion";
import FadeInSection from "../animations/FadeInSection";
import GlassCard from "../ui/GlassCard";
// import FloatingElements from "../ui/FloatingElements";
import GlowOrbs from "../ui/GlowOrbs";
import { ExternalLink } from "lucide-react";
import { Client, clients } from "@/lib/data";


// Create animated column component
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
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {/* Duplicate the clients array to create seamless loop */}
        {[...Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {clients.map((client) => (
              <motion.a
                key={`${client.id}-${index}`}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-6 group cursor-pointer overflow-hidden relative max-w-xs w-full">
                  {/* Card background animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  
                  <div className="relative z-10">
                    {/* Logo Container */}
                    <div className="mb-4 h-16 flex items-center justify-center relative overflow-hidden rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                      <motion.img 
                        src={client.logo} 
                        alt={`${client.name} logo`} 
                        className="max-h-10 max-w-24 object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      />
                    </div>
                    
                    {/* Client Info */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold mb-2 text-white group-hover:text-neon-blue transition-colors duration-300">
                        {client.name}
                      </h3>
                      {/* <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors duration-300">
                        {client.description}
                      </p> */}
                      
                      {/* Visit Link */}
                      <div className="flex items-center justify-center gap-2 text-neon-purple group-hover:text-neon-blue transition-colors duration-300">
                        <span className="text-xs font-medium">Visit</span>
                        <ExternalLink size={12} />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.a>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const ClientShowcase = () => {
  // Split clients into columns
  const firstColumn = clients.slice(0, 2);
  const secondColumn = clients.slice(2, 4);
  const thirdColumn = clients.slice(4, 6);

  return (
    <section id="clients" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Enhanced decorative elements */}
      {/* <FloatingElements variant="mixed" count={10} /> */}
      <GlowOrbs count={4} />
      
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16 relative">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-purple/5 rounded-3xl blur-3xl" />
            
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                    Trusted By Industry Leaders
                  </span>
                </h2>
              </motion.div>
              
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                We&apos;ve had the privilege of partnering with some of the most innovative projects in the Web3 ecosystem, 
                helping them build thriving communities and achieve sustainable growth.
              </motion.p>
            </div>
          </div>
        </FadeInSection>

        {/* Animated Columns Layout */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
          <ClientsColumn clients={firstColumn} duration={20} />
          <ClientsColumn clients={secondColumn} className="hidden md:block" duration={25} />
          <ClientsColumn clients={thirdColumn} className="hidden lg:block" duration={22} />
        </div>
        
        {/* Enhanced Trust Indicators */}
        <FadeInSection delay={0.6}>
          <div className="mt-16 text-center">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
            >
              {[
                { value: "50+", label: "Projects Launched", color: "neon-blue" },
                { value: "2M+", label: "Community Members", color: "neon-purple" },
                { value: "95%", label: "Client Retention", color: "neon-blue" },
                { value: "24/7", label: "Community Support", color: "neon-purple" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative">
                    <motion.div 
                      className={`text-3xl font-bold text-${stat.color} mb-2 relative`}
                      whileHover={{ 
                        textShadow: `0 0 10px var(--${stat.color})`,
                        scale: 1.1 
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </div>
                    
                    {/* Hover glow effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-lg bg-${stat.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
                      initial={false}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </FadeInSection>
      </div>
      
      {/* Enhanced decorative elements */}
      <motion.div 
        className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-neon-purple opacity-20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 -right-10 w-64 h-64 rounded-full bg-neon-blue opacity-20 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2 
        }}
      />
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-neon-pink opacity-30 blur-2xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default ClientShowcase;