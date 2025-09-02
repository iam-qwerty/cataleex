'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FadeInSection from "../animations/FadeInSection";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "Their strategic approach to our token launch helped us create an engaged community from day one, with over 50,000 token holders in the first month.",
    author: "Alex Chen",
    role: "Founder, DecentraChain",
    avatar: "https://picsum.photos/id/1025/200"
  },
  {
    id: 2,
    quote: "The team's deep understanding of both Web3 mechanics and traditional marketing principles gave us the edge we needed in a crowded NFT marketplace.",
    author: "Sarah Johnson",
    role: "CMO, MetaCollectibles",
    avatar: "https://picsum.photos/id/1027/200"
  },
  {
    id: 3,
    quote: "We increased our Discord members by 300% in just two months working with their community growth team. Genuine engagement, not just numbers.",
    author: "Michael Rodriguez",
    role: "Community Lead, TokenFi",
    avatar: "https://picsum.photos/id/1012/200"
  },
  {
    id: 4,
    quote: "Their metaverse strategy helped us create brand presence across three different platforms, resulting in 2x the engagement versus our previous approach.",
    author: "Aisha Washington",
    role: "Marketing Director, MetaVista",
    avatar: "https://picsum.photos/id/1011/200"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                Client Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how we&apos;ve helped Web3 projects achieve their community and marketing goals
            </p>
          </div>
        </FadeInSection>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="glass-card p-8 rounded-xl"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : 100,
                  zIndex: index === activeIndex ? 10 : 0
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ 
                  position: index === activeIndex ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  right: 0
                }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  {/* Author Avatar with Neon Border */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden relative neon-border p-0.5">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        fill
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full glow-effect"></div>
                  </div>
                  
                  {/* Quote and Author Info */}
                  <div>
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-purple opacity-50">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                      </svg>
                    </div>
                    
                    <blockquote className="text-xl text-gray-100 mb-4">
                      {testimonial.quote}
                    </blockquote>
                    
                    <div>
                      <div className="font-bold text-white">{testimonial.author}</div>
                      <div className="text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-neon-purple w-8' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-1/4 -left-10 w-40 h-40 rounded-full bg-neon-blue opacity-30 blur-3xl" />
      <div className="absolute top-1/3 -right-10 w-60 h-60 rounded-full bg-neon-purple opacity-20 blur-3xl" />
    </section>
  );
};

export default TestimonialsSection;