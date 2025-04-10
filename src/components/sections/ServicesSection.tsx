
import { Button } from "@/components/ui/button";
import ServiceCard from "../ui/ServiceCard";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const services = [
    { icon: <Code />, title: "Technical Hiring", description: "Access pre-screened tech professionals for IT, software, engineering & data roles." },
    { icon: <Users />, title: "Bulk Hiring", description: "Need to grow your workforce fast? We handle high-volume hiring with speed and scale." },
    { icon: <UserPlus />, title: "Leadership Hiring", description: "From CXOs to VPs, our executive search team secures proven leaders aligned to your vision." },
    { icon: <Brain />, title: "Behavioral & Culture Fit Assessments", description: "Hire candidates who fit your company's mindset, not just the role." },
    { icon: <Calendar />, title: "Project-Based Hiring", description: "Flexible staffing for contract or short-term business needs." },
    { icon: <FileCheck />, title: "RPO Services", description: "Outsource your hiring engine to us for end-to-end recruitment management." },
    { icon: <GraduationCap />, title: "Campus Hiring", description: "Engage, assess, and recruit young talent through structured college hiring programs." },
    { icon: <LineChart />, title: "Psychometric Testing", description: "Use data-driven assessments to evaluate candidate fit and soft skills." },
    { icon: <UsersRound />, title: "Diversity Hiring", description: "Inclusive recruitment strategies that reflect your values and expand your reach." },
    { icon: <Map />, title: "Talent Mapping", description: "Gain insights into hiring trends, salary benchmarks, and competitor talent pools." },
    { icon: <MessageSquare />, title: "Interview-as-a-Service", description: "Streamline interview processes with our expert-managed panels and systems." },
    { icon: <BookOpen />, title: "Pre-Onboarding Support", description: "Get candidates job-ready with essential training before their first day." }
  ];

  return (
    <section id="services" className="section py-20 relative">
      <div className="absolute inset-0 bg-white z-0"></div>
      <div className="absolute left-0 top-0 w-64 h-64 bg-gradient-to-br from-red-100 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tl from-red-100 to-transparent rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-red-50 to-red-100 text-red-600 font-medium rounded-full mb-4">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">Services We Offer</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Rareminds, we provide precision recruitment solutions tailored for fast-growing companies, enterprise teams, and industry leaders.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-6 rounded-full"></div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                className="border-none bg-gradient-to-br from-white to-red-50 shadow-lg hover:shadow-xl hover:shadow-red-100/30 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-200 hover:shadow-red-300/50 transition-all duration-300"
          >
            Try us on your toughest role
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
