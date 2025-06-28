'use client'
// import { motion } from "framer-motion";
import FadeInSection from "../animations/FadeInSection";
import GlassCard from "../ui/GlassCard";
import { Users, Cog, Globe } from "lucide-react";

const reasons = [
  {
    id: 1,
    title: "Community-Centric Approach",
    description: "Your community isn't just an audience—it's your greatest asset.",
    icon: <Users className="text-neon-purple w-8 h-8" />,
  },
  {
    id: 2,
    title: "Proven Frameworks",
    description: "From feedback loops to guerrilla marketing, we deliver results.",
    icon: <Cog className="text-neon-blue w-8 h-8" />,
  },
  {
    id: 3,
    title: "Web3 Pioneers",
    description: "We speak the language of decentralization and live its values.",
    icon: <Globe className="text-neon-pink w-8 h-8" />,
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                Why Choose Us?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Partner with experts who understand the unique challenges of Web3 projects
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <FadeInSection key={reason.id} delay={index * 0.2}>
              <GlassCard className="p-8 text-center">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-white/5 mx-auto mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </GlassCard>
            </FadeInSection>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-neon-purple opacity-30 blur-3xl" />
      <div className="absolute bottom-1/3 -right-10 w-64 h-64 rounded-full bg-neon-blue opacity-20 blur-3xl" />
    </section>
  );
};

export default WhyUsSection;
