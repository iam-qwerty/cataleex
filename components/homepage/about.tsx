'use client'
import FadeInSection from "../animations/FadeInSection";
import FloatingElements from "../ui/FloatingElements";
import DecorativeGrid from "../ui/DecorativeGrid";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-black px-2 md:px-16">
      {/* Enhanced decorative background */}
      <DecorativeGrid className="opacity-10" />
      <FloatingElements variant="mixed" count={8} />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column with Text */}
          <FadeInSection direction="right">
            <div className="relative">
              {/* Subtle glow behind text */}
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple/5 to-neon-blue/5 rounded-2xl blur-xl" />
              
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
                    About Us
                  </span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-6">
                  We&apos;re a team of Web3 natives, blockchain enthusiasts, and marketing specialists dedicated to growing decentralized projects.
                </p>
                
                <p className="text-gray-400 mb-8">
                  Since 2018, we&apos;ve helped over 100 projects build vibrant communities, design effective tokenomics, and create meaningful connections in the blockchain ecosystem. Our deep understanding of both traditional marketing principles and Web3-specific dynamics allows us to create strategies that resonate with crypto audiences.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "100+", label: "Projects Launched", color: "neon-blue" },
                    { value: "5M+", label: "Community Members", color: "neon-purple" },
                    { value: "$300M+", label: "Raised for Clients", color: "neon-green" },
                    { value: "24/7", label: "Global Support", color: "neon-pink" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-white/5 rounded-lg blur-sm group-hover:bg-white/10 transition-all duration-300" />
                      <div className="relative p-4 rounded-lg border border-white/10">
                        <div className={`text-3xl font-bold text-${stat.color} mb-2`}>{stat.value}</div>
                        <div className="text-gray-400">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
          
          {/* Right Column with enhanced 3D elements */}
          
        </div>
      </div>
      
      {/* Enhanced background decorative elements */}
      {/* <div className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-neon-purple opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 -right-10 w-64 h-64 rounded-full bg-neon-blue opacity-20 blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-neon-pink opacity-30 blur-2xl" /> */}
    </section>
  );
};

export default AboutSection;