import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/homepage/hero";
import AboutSection from "@/components/homepage/about";
import ServicesSection from "@/components/homepage/services";
import ProcessSection from "@/components/homepage/process";
import TeamSection from "@/components/homepage/team";
import WhyUsSection from "@/components/homepage/why-us";
import ClientShowcase from "@/components/homepage/client-showcase";
import BlogSection from "@/components/homepage/blog";
import CtaSection from "@/components/homepage/cta";
import ContactSection from "@/components/homepage/contact";
import TestimonialsSection from "@/components/homepage/testimonials";
import { LogoMarquee } from "@/components/homepage/logo-marquee";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <LogoMarquee />
      <ClientShowcase />
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
