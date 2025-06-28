import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TeamSection from "@/components/sections/TeamSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ClientShowcase from "@/components/sections/ClientShowCase";
import BlogSection from "@/components/sections/BlogSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
// import ClientShowcaseDemo from "@/components/sections/ClientSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <ClientShowcase />
      {/* <ClientShowcaseDemo /> */}
      <TeamSection />
      <TestimonialsSection />
      <WhyUsSection />
      <BlogSection />
      <ContactSection />
      <CtaSection />
      <Footer />
    </>
  );
}
