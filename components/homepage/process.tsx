'use client'
// import { motion } from "framer-motion";
import FadeInSection from "../animations/FadeInSection";
import GlassCard from "../ui/GlassCard";
import { Search, Code, BarChart3 } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description: "Begin with an in-depth analysis of your project and community. We identify key performance indicators and tailor a strategy to meet your goals.",
    icon: <Search className="text-neon-blue w-8 h-8" />,
  },
  {
    id: 2,
    title: "Engagement & Implementation",
    description: "Our team integrates community management with product testing, delivering targeted growth campaigns and PR initiatives.",
    icon: <Code className="text-neon-purple w-8 h-8" />,
  },
  {
    id: 3,
    title: "Analysis & Iteration",
    description: "Using data analytics and user feedback, we continually optimize strategies to ensure sustained engagement and growth.",
    icon: <BarChart3 className="text-neon-pink w-8 h-8" />,
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden px-2 md:px-16">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
                Our Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven framework for transforming your Web3 project into a thriving community
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <FadeInSection key={step.id} delay={index * 0.2}>
              <GlassCard className="p-8 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-lg flex items-center justify-center border border-white/10">
                    <span className="text-2xl font-bold text-neon-blue">{step.id}</span>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="mb-4 flex justify-center">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </GlassCard>
            </FadeInSection>
          ))}

          {/* Connecting lines between cards (visible on desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple opacity-20" />
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-neon-purple to-neon-pink opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
