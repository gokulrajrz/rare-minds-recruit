import { Button } from "@/components/ui/button";
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center gradient-bg">
      <div className="absolute inset-0 bg-rareminds-dark bg-opacity-60"></div>
      <div className="container relative z-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Precision Hiring. Proven Outcomes. Powered by Rareminds
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            The recruitment engine behind India's fastest-growing companies.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-rareminds-purple hover:bg-rareminds-accent text-white">
              Request Talent Now
            </Button>
            <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="border-white hover:bg-white text-slate-950">
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
    </section>;
};
export default HeroSection;