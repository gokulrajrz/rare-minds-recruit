
import { useEffect, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import WhyRareminds from "@/components/sections/WhyRareminds";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import Header from "@/components/layout/Header";
import FooterBar from "@/components/layout/FooterBar";

const Index = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
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
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <HeroSection />
      <div id="why-rareminds">
        <WhyRareminds />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="industries">
        <IndustriesSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="case-studies">
        <CaseStudiesSection />
      </div>
      <ProcessSection />
      <div id="contact">
        <ContactSection />
      </div>
      
      <FooterBar />
    </div>
  );
};

export default Index;
