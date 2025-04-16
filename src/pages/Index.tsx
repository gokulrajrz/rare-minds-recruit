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
import TeamSection from "@/components/sections/TeamSection";

const Index = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
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
    setTimeout(handleScroll, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <main>
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
        <div id="process">
          <ProcessSection />
        </div>
        <div id="team">
          <TeamSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <FooterBar />
    </div>
  );
};

export default Index;
