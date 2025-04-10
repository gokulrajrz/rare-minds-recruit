
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { ChevronDown } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const SLIDES = [
  {
    headline: "Precision Hiring. Proven Outcomes.",
    subheadline: "The recruitment engine behind India's fastest-growing companies.",
  },
  {
    headline: "500+ Critical Roles Closed",
    subheadline: "Quarter after quarter, we deliver talent that transforms.",
  },
  {
    headline: "98% Offer Acceptance Rate",
    subheadline: "Candidates who say yes and stay committed.",
  },
  {
    headline: "20+ Industries Served",
    subheadline: "Specialized recruitment across diverse sectors.",
  },
  {
    headline: "Hire with Confidence",
    subheadline: "Let Rareminds power your next critical hire.",
  }
];

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Auto slide every 10 seconds
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 10000);
    
    // Track current slide
    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      clearInterval(interval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/ccd11c7f-c634-4ff7-bda2-e6c2641322b0.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Carousel */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={emblaRef} className="overflow-hidden w-full max-w-7xl">
          <div className="flex">
            {SLIDES.map((slide, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] min-w-0 relative h-screen flex items-center"
              >
                <div className="container relative z-10 text-white px-4">
                  <div className="max-w-3xl mx-auto text-center">
                    <div className={`transition-all duration-700 ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        {slide.headline}
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-gray-100">
                        {slide.subheadline}
                      </p>
                      <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                        <Button 
                          onClick={() => scrollToSection('contact')} 
                          size="lg" 
                          className="bg-red-600 hover:bg-red-700 text-white"
                        >
                          Request Talent Now
                        </Button>
                        <Button 
                          onClick={() => scrollToSection('services')} 
                          size="lg" 
                          variant="outline" 
                          className="border-white hover:bg-white hover:text-red-800"
                        >
                          Explore Our Solutions
                        </Button>
                      </div>
                      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 md:p-6 inline-block">
                        <p className="text-lg md:text-xl font-medium text-white">
                          "500+ Critical Roles Closed This Quarter. Yours Could Be Next."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel navigation dots */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-20">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index 
                  ? "bg-red-500 w-6" 
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20"
          onClick={() => scrollToSection('why-rareminds')}
        >
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-1">Scroll Down</span>
            <ChevronDown className="text-white h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
