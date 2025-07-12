'use client'
import React from "react";
import { motion } from "framer-motion";
import FadeInSection from "../animations/FadeInSection";

import GlowOrbs from "../ui/GlowOrbs";

import { Client, clients } from "@/lib/data";
import ClientsColumn from "../ui/clients-column";




const ClientShowcase = () => {
  const showcaseClients = clients.slice(0, 6);

  const columns = React.useMemo(() => {
    const numColumns = 3;
    const columns = Array.from({ length: numColumns }, (): Client[] => []);
    showcaseClients.forEach((client, i) => {
      columns[i % numColumns].push(client);
    });
    return columns;
  }, [showcaseClients]);

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

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
          {columns.map((column, index) => (
            <ClientsColumn
              key={index}
              clients={column}
              duration={20 + index * 5}
              className={index > 0 ? (index === 1 ? "hidden md:flex" : "hidden lg:flex") : "flex"}
            />
          ))}
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