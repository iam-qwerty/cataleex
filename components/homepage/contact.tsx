'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import FadeInSection from "../animations/FadeInSection";
import GlassCard from "../ui/GlassCard";
import GlowingButton from "../ui/GlowingButton";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden px-2 md:px-16">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your blockchain project? Reach out to us today!
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeInSection direction="right">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <GlowingButton type="submit" className="w-full">
                      Send Message
                    </GlowingButton>
                  </div>
                </div>
              </form>
            </GlassCard>
          </FadeInSection>
          
          {/* Contact Info */}
          <FadeInSection direction="left">
            <div className="flex flex-col h-full justify-between">
              <GlassCard className="p-8 mb-6">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <Mail className="text-neon-blue w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email Us</h4>
                      <p className="text-gray-300">contact@cataleex.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4">
                      <Phone className="text-neon-purple w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Call Us</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4">
                      <MapPin className="text-neon-pink w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Visit Us</h4>
                      <p className="text-gray-300">
                        Global Virtual Headquarters<br />
                        With teams across North America, Europe, and Asia
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Connect With Us</h3>
                
                <div className="flex gap-4">
                  <motion.a 
                    href="https://www.linkedin.com/in/oladotun-akangbe"
                    className="bg-white/5 hover:bg-white/10 transition-colors p-3 rounded-full"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                      <Linkedin className="text-neon-blue w-6 h-6" /> 
                  </motion.a>
                  
                  <motion.a 
                    href="#"
                    className="bg-white/5 hover:bg-white/10 transition-colors p-3 rounded-full"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Twitter className="text-neon-purple w-6 h-6" />
                  </motion.a>
                  
                  <motion.a 
                    href="#"
                    className="bg-white/5 hover:bg-white/10 transition-colors p-3 rounded-full"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Github className="text-neon-pink w-6 h-6" />
                  </motion.a>
                </div>
              </GlassCard>
            </div>
          </FadeInSection>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-10 w-40 h-40 rounded-full bg-neon-blue opacity-30 blur-3xl" />
      <div className="absolute bottom-1/4 -right-10 w-64 h-64 rounded-full bg-neon-purple opacity-20 blur-3xl" />
    </section>
  );
};

export default ContactSection;