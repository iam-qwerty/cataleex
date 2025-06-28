'use client'
import FadeInSection from "../animations/FadeInSection";
import FloatingElements from "../ui/FloatingElements";
import DecorativeGrid from "../ui/DecorativeGrid";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-black">
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
          <FadeInSection direction="left">
            <div className="relative h-[500px] grid-bg rounded-2xl neon-border overflow-hidden">
              {/* Enhanced holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10 rounded-2xl opacity-60" />
              
              {/* Additional floating particles */}
              <FloatingElements variant="circles" count={12} className="opacity-60" />
              
              {/* Enhanced decorative elements */}
              <motion.div 
                className="absolute top-10 left-10 w-32 h-32 rounded-xl bg-neon-blue/20 backdrop-blur-sm border border-white/10"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.1 }}
              />
              
              <motion.div 
                className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-neon-purple/20 backdrop-blur-sm border border-white/10"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
                whileHover={{ scale: 1.15 }}
              />
              
              {/* Enhanced blockchain visualization */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear"
                }}
              >
                <svg 
                  width="100%" 
                  height="100%" 
                  viewBox="0 0 200 200" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.circle 
                    cx="100" cy="100" r="80" 
                    stroke="#8B5CF6" strokeWidth="1" 
                    strokeDasharray="5 5" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.circle 
                    cx="100" cy="100" r="60" 
                    stroke="#00B4DB" strokeWidth="1" 
                    strokeOpacity="0.7" strokeDasharray="10 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.circle 
                    cx="100" cy="100" r="40" 
                    stroke="#EC4899" strokeWidth="1" 
                    strokeOpacity="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  />
                  
                  {/* Enhanced nodes with hover effects */}
                  {[
                    { cx: 100, cy: 20, fill: "#8B5CF6" },
                    { cx: 100, cy: 180, fill: "#8B5CF6" },
                    { cx: 20, cy: 100, fill: "#00B4DB" },
                    { cx: 180, cy: 100, fill: "#00B4DB" },
                    { cx: 140, cy: 40, fill: "#EC4899" },
                    { cx: 60, cy: 160, fill: "#EC4899" },
                    { cx: 40, cy: 40, fill: "#10B981" },
                    { cx: 160, cy: 160, fill: "#10B981" }
                  ].map((node, index) => (
                    <motion.circle
                      key={index}
                      cx={node.cx}
                      cy={node.cy}
                      r="8"
                      fill={node.fill}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      whileHover={{ scale: 1.5, r: 12 }}
                    />
                  ))}
                  
                  {/* Animated connections */}
                  {[
                    { x1: 100, y1: 20, x2: 140, y2: 40 },
                    { x1: 100, y1: 20, x2: 40, y2: 40 },
                    { x1: 20, y1: 100, x2: 40, y2: 40 },
                    { x1: 180, y1: 100, x2: 140, y2: 40 },
                    { x1: 140, y1: 40, x2: 160, y2: 160 },
                    { x1: 40, y1: 40, x2: 60, y2: 160 },
                    { x1: 100, y1: 180, x2: 60, y2: 160 },
                    { x1: 100, y1: 180, x2: 160, y2: 160 }
                  ].map((line, index) => (
                    <motion.line
                      key={index}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke="#8B5CF6"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 2 + index * 0.1, duration: 1 }}
                    />
                  ))}
                </svg>
              </motion.div>
              
              {/* Enhanced floating text elements */}
              {[
                { text: "Web3", position: { top: 10, right: 10 }, delay: 0 },
                { text: "Blockchain", position: { bottom: 10, left: 10 }, delay: 0.5 },
                { text: "Crypto", position: { bottom: 40, right: 16 }, delay: 1 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute text-neon-blue font-bold bg-white/5 backdrop-blur-md px-3 py-1 rounded-md border border-white/10"
                  style={{ ...item.position }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay
                  }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                >
                  {item.text}
                </motion.div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
      
      {/* Enhanced background decorative elements */}
      <div className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-neon-purple opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 -right-10 w-64 h-64 rounded-full bg-neon-blue opacity-20 blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-neon-pink opacity-30 blur-2xl" />
    </section>
  );
};

export default AboutSection;