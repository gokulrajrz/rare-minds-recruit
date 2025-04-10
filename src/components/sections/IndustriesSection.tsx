
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const industryIcons = [
  { icon: "💻", name: "Information Technology" },
  { icon: "🏦", name: "Banking & Finance" },
  { icon: "🏭", name: "Manufacturing" },
  { icon: "🔬", name: "Healthcare & Pharma" },
  { icon: "🛒", name: "Retail & E-commerce" },
  { icon: "📱", name: "Telecommunications" },
  { icon: "🚗", name: "Automotive" },
  { icon: "🏗️", name: "Construction" },
  { icon: "✈️", name: "Travel & Hospitality" },
  { icon: "🎮", name: "Media & Entertainment" },
  { icon: "⚡", name: "Energy & Utilities" },
  { icon: "🌱", name: "Agriculture & Food" },
];

const IndustriesSection = () => {
  const scrollToCaseStudies = () => {
    const element = document.getElementById('case-studies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="industries" className="section bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="w-full md:w-1/2">
            <Globe size={56} className="text-rareminds-purple mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
            <div className="text-gray-700 space-y-4 mb-8">
              <p>
                Rareminds is a global recruitment and cross-border talent acquisition firm based in India, specializing in hiring third-country nationals for international roles.
              </p>
              <p>
                We have deep expertise across multiple industry verticals, allowing us to understand the specific talent requirements and business language of diverse sectors.
              </p>
            </div>
            <Button 
              onClick={scrollToCaseStudies}
              className="bg-rareminds-purple hover:bg-rareminds-accent text-white"
            >
              See Our Impact Stories
            </Button>
          </div>

          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-on-scroll">
              {industryIcons.map((industry, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl mb-2">{industry.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
