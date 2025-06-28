'use client'
import { motion } from "framer-motion";
import FadeInSection from "../animations/FadeInSection";
import GlassCard from "../ui/GlassCard";
import GlowingButton from "../ui/GlowingButton";
import FloatingElements from "../ui/FloatingElements";
import { Clock, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Decentralized Community Management",
    excerpt: "Explore how DAOs are revolutionizing traditional community structures and creating new possibilities for engagement.",
    date: "April 10, 2025",
    readTime: "5 min read",
    image: "https://picsum.photos/id/1/600/400",
    author: "Veer",
    category: "Strategy"
  },
  {
    id: 2,
    title: "Innovative Strategies for Blockchain Adoption",
    excerpt: "Learn about effective approaches to increase user adoption and engagement in blockchain projects.",
    date: "April 5, 2025",
    readTime: "7 min read",
    image: "https://picsum.photos/id/180/600/400",
    author: "Oladotun",
    category: "Growth"
  },
  {
    id: 3,
    title: "Building Trust in Web3 Communities",
    excerpt: "Discover how transparency and consistent communication can establish long-lasting trust with your community.",
    date: "March 28, 2025",
    readTime: "4 min read",
    image: "https://picsum.photos/id/160/600/400",
    author: "Maya Chen",
    category: "Community"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Enhanced decorative elements */}
      <FloatingElements variant="squares" count={8} />
      
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16 relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-purple/5 rounded-3xl blur-3xl" />
            
            <div className="relative">
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                  Blog & Insights
                </span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Stay updated with the latest trends and strategies in Web3 community growth
              </motion.p>
            </div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <FadeInSection key={post.id} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-0 overflow-hidden h-full flex flex-col group cursor-pointer">
                  {/* Enhanced image container */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    
                    {/* Category badge */}
                    <motion.div 
                      className="absolute top-4 left-4 bg-neon-purple/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      {post.category}
                    </motion.div>
                    
                    {/* Date badge */}
                    <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      {post.date}
                    </div>
                    
                    {/* Hover overlay effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>
                  
                  {/* Enhanced content area */}
                  <div className="p-6 flex flex-col flex-grow relative">
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <motion.h3 
                        className="text-xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {post.title}
                      </motion.h3>
                      
                      <p className="text-gray-300 mb-4 flex-grow group-hover:text-gray-200 transition-colors duration-300">
                        {post.excerpt}
                      </p>
                      
                      {/* Enhanced meta information */}
                      <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced read more button */}
                      <motion.div
                        className="flex items-center gap-2 text-neon-blue group-hover:text-neon-purple transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-sm font-medium">Read more</span>
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Card border glow effect */}
                  <motion.div
                    className="absolute inset-0 border border-transparent group-hover:border-neon-blue/30 rounded-xl transition-all duration-300 pointer-events-none"
                    whileHover={{
                      boxShadow: "0 0 20px rgba(0, 180, 219, 0.3)"
                    }}
                  />
                </GlassCard>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
        
        {/* Enhanced CTA section */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GlowingButton variant="outline">
              View All Articles
            </GlowingButton>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced decorative elements */}
      <motion.div 
        className="absolute top-1/3 -right-10 w-40 h-40 rounded-full bg-neon-pink opacity-30 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 -left-10 w-64 h-64 rounded-full bg-neon-blue opacity-20 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1 
        }}
      />
      
      {/* Additional animated elements */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-neon-green opacity-40 blur-xl"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default BlogSection;