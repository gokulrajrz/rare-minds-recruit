
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={`text-2xl font-bold ${isScrolled ? 'text-rareminds-dark' : 'text-white'}`}>
            <span className="gradient-text">Rare</span>Minds
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('why-rareminds')}
            className={`font-medium hover:text-rareminds-purple transition-colors ${
              isScrolled ? 'text-rareminds-dark' : 'text-white'
            }`}
          >
            Why Us
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className={`font-medium hover:text-rareminds-purple transition-colors ${
              isScrolled ? 'text-rareminds-dark' : 'text-white'
            }`}
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('industries')}
            className={`font-medium hover:text-rareminds-purple transition-colors ${
              isScrolled ? 'text-rareminds-dark' : 'text-white'
            }`}
          >
            Industries
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className={`font-medium hover:text-rareminds-purple transition-colors ${
              isScrolled ? 'text-rareminds-dark' : 'text-white'
            }`}
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('case-studies')}
            className={`font-medium hover:text-rareminds-purple transition-colors ${
              isScrolled ? 'text-rareminds-dark' : 'text-white'
            }`}
          >
            Case Studies
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="ml-4"
          >
            <Button 
              className="bg-rareminds-purple hover:bg-rareminds-accent text-white"
            >
              Request Talent
            </Button>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-rareminds-dark" : "text-white"} size={24} />
          ) : (
            <Menu className={isScrolled ? "text-rareminds-dark" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('why-rareminds')}
              className="font-medium text-rareminds-dark hover:text-rareminds-purple transition-colors text-left py-2"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="font-medium text-rareminds-dark hover:text-rareminds-purple transition-colors text-left py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="font-medium text-rareminds-dark hover:text-rareminds-purple transition-colors text-left py-2"
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="font-medium text-rareminds-dark hover:text-rareminds-purple transition-colors text-left py-2"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="font-medium text-rareminds-dark hover:text-rareminds-purple transition-colors text-left py-2"
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left"
            >
              <Button 
                className="w-full bg-rareminds-purple hover:bg-rareminds-accent text-white"
              >
                Request Talent
              </Button>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
