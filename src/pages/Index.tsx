
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import WhyRareminds from "@/components/sections/WhyRareminds";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  // Animation on scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
        
        if (isVisible) {
          el.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyRareminds />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <ProcessSection />
      <ContactSection />
      
      <footer className="bg-rareminds-dark text-white py-6">
        <div className="container text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Rareminds. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
