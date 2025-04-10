
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  
  const slides = [
    {
      headline: "Precision Hiring. Proven Outcomes. Powered by Rareminds",
      subheadline: "The recruitment engine behind India's fastest-growing companies.",
      quote: "500+ Critical Roles Closed This Quarter. Yours Could Be Next."
    },
    {
      headline: "Find Exceptional Talent, Fast & Efficiently",
      subheadline: "Strategic hiring solutions across all industries and roles",
      quote: "92% of roles closed within the first shortlist round"
    },
    {
      headline: "Scale Your Team with Confidence",
      subheadline: "End-to-end recruitment services tailored to your needs",
      quote: "98% candidate offer acceptance rate"
    },
    {
      headline: "Expert Recruiters at Your Service",
      subheadline: "Specialized in technical, bulk, and leadership hiring",
      quote: "Rated 4.8/5 by corporate clients for quality and communication"
    },
    {
      headline: "Nationwide Talent Network",
      subheadline: "Access top candidates from across 20+ states in India",
      quote: "Pan-India reach with regional hiring expertise"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center gradient-bg">
      <div className="absolute inset-0 bg-rareminds-dark bg-opacity-60"></div>
      <div className="container relative z-10 text-white">
        <Carousel className="w-full" setApi={(api) => {
          if (api) {
            api.on("select", () => {
              setCurrent(api.selectedScrollSnap());
            });
            // Move to the current slide when it changes from the timer
            api.scrollTo(current);
          }
        }}>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="p-2">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    {slide.headline}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-100">
                    {slide.subheadline}
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                    <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                      Request Talent Now
                    </Button>
                    <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="border-white hover:bg-white text-slate-950">
                      Explore Our Solutions
                    </Button>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 md:p-6 inline-block">
                    <p className="text-lg md:text-xl font-medium text-white">
                      "{slide.quote}"
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  current === index ? "bg-red-600 w-5" : "bg-white opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
        
        {/* Scroll indicator */}
        <div 
          onClick={() => scrollToSection('why-rareminds')} 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer animate-bounce"
        >
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <ChevronDown className="text-red-600" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
