
import { motion } from "framer-motion";
import { 
  Award,
  Users,
  Briefcase,
  Clock,
  CheckCircle,
  Star,
  MapPin,
  Building,
  Briefcase as BriefcaseIcon,
  Globe,
  CheckSquare
} from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const WhyRareminds = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const stats = [
    { 
      icon: <Users size={32} />, 
      number: "5,00,000+", 
      description: "Candidates Successfully Placed", 
      subtext: "We've matched over half a million individuals with meaningful careers — and counting" 
    },
    { 
      icon: <Briefcase size={32} />, 
      number: "250+", 
      description: "Hiring Partners", 
      subtext: "Corporates across India rely on us to scale their teams efficiently and effectively." 
    },
    { 
      icon: <Building size={32} />, 
      number: "20+", 
      description: "Industries Served", 
      subtext: "From IT to Manufacturing, BFSI to Healthcare — we understand your business language." 
    },
    { 
      icon: <Clock size={32} />, 
      number: "2x", 
      description: "Faster Turnaround Time", 
      subtext: "We don't just find talent — we deliver it at speed, without compromising quality." 
    }
  ];

  const metrics = [
    { icon: <CheckCircle size={24} />, label: "Role Closure Rate", value: "92%", description: "of roles closed within the first shortlist round" },
    { icon: <CheckSquare size={24} />, label: "Offer Acceptance Rate", value: "98%", description: "candidate offer acceptance rate" },
    { icon: <Star size={24} />, label: "CSAT Score", value: "4.8/5", description: "Rated by corporate clients for quality and communication" },
    { icon: <MapPin size={24} />, label: "Pan-India Reach", value: "20+ states", description: "with regional hiring capabilities" },
    { icon: <BriefcaseIcon size={24} />, label: "C-Suite Placement", value: "20+ brands", description: "C-Suite hires in the past year" },
    { icon: <Users size={24} />, label: "Job Families", value: "150+ Roles", description: "Successfully Placed" },
    { icon: <Globe size={24} />, label: "Global Reach", value: "10 Countries", description: "Domestic hiring @ International Locations" }
  ];

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-60 -translate-y-1/2"></div>
      <div className="absolute left-20 bottom-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex justify-center items-center mb-4">
              <div className="bg-red-600 rounded-full p-3 shadow-lg shadow-red-200">
                <Award className="text-white" size={28} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500 mb-6">
              Why Rareminds?
            </h2>
            <p className="text-3xl font-semibold text-gray-800 mb-4">
              Trusted. Proven. Scalable.
            </p>
          </motion.div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-red-600 mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
              <p className="font-semibold text-gray-700 mb-2">{stat.description}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="text-red-600 mt-1">{metric.icon}</div>
              <div>
                <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRareminds;
