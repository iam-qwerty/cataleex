'use client'
import { motion } from "framer-motion";
import GlowingButton from "@/components/ui/GlowingButton";
import NetworkBackground from "@/components/animations/NetworkBackground";
import ParticleBackground from "@/components/animations/ParticleBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Background elements */}
      <NetworkBackground />
      <ParticleBackground />
      
      {/* Content container */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
                Empowering Web3
              </span>
              <br />
              <span className="text-white">
                Communities to Thrive
              </span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Cataleex is your catalyst for building, managing, and scaling vibrant decentralized ecosystems.
            We turn blockchain projects into thriving communities through innovation, trust, and actionable feedback loops.
          </motion.p>

          <motion.p 
            className="text-gray-400 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Welcome to Cataleex—your global full‐stack community management and marketing agency 
            designed for the Web3 ecosystem. We don&apos;t just manage communities; we create dynamic 
            ecosystems that empower blockchain projects.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <GlowingButton size="lg">
              Discover Our Services
            </GlowingButton>
            
            <GlowingButton 
              variant="outline" 
              size="lg" 
              glowColor="rgba(255, 255, 255, 0.4)"
            >
              Get In Touch
            </GlowingButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-white/70"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;