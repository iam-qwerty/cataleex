'use client'
import { motion } from "framer-motion";
import GlowingButton from "../ui/GlowingButton";
import FadeInSection from "../animations/FadeInSection";

const CtaSection = () => {
  return (
    <section id="cta" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/40 to-neon-blue/40 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-20"></div>
            
            {/* Animated Background Lines */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,50 Q25,30 50,50 T100,50"
                className="network-line"
                stroke="rgba(139, 92, 246, 0.3)"
                strokeWidth="0.5"
                fill="none"
                animate={{ 
                  d: [
                    "M0,50 Q25,30 50,50 T100,50",
                    "M0,50 Q25,70 50,50 T100,50",
                    "M0,50 Q25,30 50,50 T100,50"
                  ]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.path
                d="M0,30 Q35,50 70,30 T100,30"
                className="network-line"
                stroke="rgba(0, 180, 219, 0.3)"
                strokeWidth="0.5"
                fill="none"
                animate={{ 
                  d: [
                    "M0,30 Q35,50 70,30 T100,30",
                    "M0,30 Q35,10 70,30 T100,30",
                    "M0,30 Q35,50 70,30 T100,30"
                  ]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.path
                d="M0,70 Q45,50 75,70 T100,70"
                className="network-line"
                stroke="rgba(236, 72, 153, 0.3)"
                strokeWidth="0.5"
                fill="none"
                animate={{ 
                  d: [
                    "M0,70 Q45,50 75,70 T100,70",
                    "M0,70 Q45,90 75,70 T100,70",
                    "M0,70 Q45,50 75,70 T100,70"
                  ]
                }}
                transition={{ 
                  duration: 9, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </svg>
            
            {/* Content */}
            <div className="relative p-12 md:p-16 text-center z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">
                  Ready to Build Your Web3 Community?
                </h2>
                <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                  Connect with our team of Web3 marketing experts and start growing your decentralized project today
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <GlowingButton 
                    size="lg" 
                    variant="primary"
                    glowColor="rgba(139, 92, 246, 0.6)"
                  >
                    Schedule a Consultation
                  </GlowingButton>
                  
                  <GlowingButton 
                    size="lg" 
                    variant="outline"
                    glowColor="rgba(255, 255, 255, 0.4)"
                  >
                    View Case Studies
                  </GlowingButton>
                </div>
              </motion.div>
            </div>

            {/* Animated directional cues */}
            <motion.div 
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-12 h-36"
              animate={{ 
                x: [-10, 0, -10],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 24 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5,10 L15,50 L5,90" 
                  stroke="rgba(139, 92, 246, 0.7)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                <path 
                  d="M12,10 L22,50 L12,90" 
                  stroke="rgba(0, 180, 219, 0.7)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            <motion.div 
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 rotate-180 w-12 h-36"
              animate={{ 
                x: [-10, 0, -10],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 24 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5,10 L15,50 L5,90" 
                  stroke="rgba(236, 72, 153, 0.7)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                <path 
                  d="M12,10 L22,50 L12,90" 
                  stroke="rgba(16, 185, 129, 0.7)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CtaSection;
