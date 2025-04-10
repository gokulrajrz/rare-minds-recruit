
import { Button } from "@/components/ui/button";
import ServiceCard from "../ui/ServiceCard";
import { 
  Code, 
  Users, 
  UserPlus, 
  Brain, 
  Calendar, 
  FileCheck, 
  GraduationCap,
  LineChart,
  UsersRound,
  Map,
  MessageSquare,
  BookOpen
} from 'lucide-react';

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services We Offer</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Rareminds, we provide precision recruitment solutions tailored for fast-growing companies, enterprise teams, and industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Code />}
            title="Technical Hiring"
            description="Access pre-screened tech professionals for IT, software, engineering & data roles."
          />
          <ServiceCard
            icon={<Users />}
            title="Bulk Hiring"
            description="Need to grow your workforce fast? We handle high-volume hiring with speed and scale."
          />
          <ServiceCard
            icon={<UserPlus />}
            title="Leadership Hiring"
            description="From CXOs to VPs, our executive search team secures proven leaders aligned to your vision."
          />
          <ServiceCard
            icon={<Brain />}
            title="Behavioral & Culture Fit Assessments"
            description="Hire candidates who fit your company's mindset, not just the role."
          />
          <ServiceCard
            icon={<Calendar />}
            title="Project-Based Hiring"
            description="Flexible staffing for contract or short-term business needs."
          />
          <ServiceCard
            icon={<FileCheck />}
            title="RPO Services"
            description="Outsource your hiring engine to us for end-to-end recruitment management."
          />
          <ServiceCard
            icon={<GraduationCap />}
            title="Campus Hiring"
            description="Engage, assess, and recruit young talent through structured college hiring programs."
          />
          <ServiceCard
            icon={<LineChart />}
            title="Psychometric Testing"
            description="Use data-driven assessments to evaluate candidate fit and soft skills."
          />
          <ServiceCard
            icon={<UsersRound />}
            title="Diversity Hiring"
            description="Inclusive recruitment strategies that reflect your values and expand your reach."
          />
          <ServiceCard
            icon={<Map />}
            title="Talent Mapping"
            description="Gain insights into hiring trends, salary benchmarks, and competitor talent pools."
          />
          <ServiceCard
            icon={<MessageSquare />}
            title="Interview-as-a-Service"
            description="Streamline interview processes with our expert-managed panels and systems."
          />
          <ServiceCard
            icon={<BookOpen />}
            title="Pre-Onboarding Support"
            description="Get candidates job-ready with essential training before their first day."
          />
        </div>

        <div className="mt-12 text-center">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-rareminds-purple hover:bg-rareminds-accent text-white"
          >
            Try us on your toughest role
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
