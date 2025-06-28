'use client'
import { motion } from "framer-motion";
import FadeInSection from "../animations/FadeInSection";
import GlassCard from "../ui/GlassCard";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Veer",
    role: "Co-founder & CEO",
    bio: "Visionary leader with expertise in strategic growth and client relations.",
    avatar: "https://picsum.photos/id/1005/200"
  },
  {
    id: 2,
    name: "Oladotun",
    role: "Co-founder & CMO",
    bio: "Blockchain marketing specialist dedicated to community-first strategies.",
    avatar: "https://picsum.photos/id/1012/200"
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
                Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the experts behind Cataleex&apos;s innovative community growth strategies
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <FadeInSection key={member.id} delay={index * 0.1}>
              <GlassCard className="p-6 text-center">
                <div className="mb-6 w-32 h-32 mx-auto relative">
                  <div className="rounded-full overflow-hidden w-full h-full neon-border p-0.5">
                    <Image 
                      src={member.avatar} 
                      alt={member.name}
                      fill
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full glow-effect"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-neon-blue mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
                
                <div className="mt-4 flex justify-center gap-3">
                  <motion.a 
                    href="#" 
                    className="text-gray-400 hover:text-neon-purple transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                    whileHover={{ scale: 1.2 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </motion.a>
                </div>
              </GlassCard>
            </FadeInSection>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-neon-blue opacity-30 blur-3xl" />
      <div className="absolute bottom-1/3 -right-10 w-64 h-64 rounded-full bg-neon-purple opacity-20 blur-3xl" />
    </section>
  );
};

export default TeamSection;
