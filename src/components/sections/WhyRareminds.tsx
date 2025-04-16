
import { motion } from "framer-motion";
import { 
  Award,
  Users,
  Building,
  Clock,
  CheckCircle,
  Star,
  MapPin,
  Briefcase,
  Globe,
  CheckSquare,
  BadgeCheck,
  TrendingUp,
  CircleDollarSign
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
    { icon: <Briefcase size={24} />, label: "C-Suite Placement", value: "20+ brands", description: "C-Suite hires in the past year" },
    { icon: <Users size={24} />, label: "Job Families", value: "150+ Roles", description: "Successfully Placed" },
    { icon: <Globe size={24} />, label: "Global Reach", value: "10 Countries", description: "Domestic hiring @ International Locations" }
  ];

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-red-50/50 to-white relative overflow-hidden">
      {/* Modern gradient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-100/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
      
      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-red-600/10 rounded-full">
            <Award className="text-red-600" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Rareminds?
          </h2>
          <p className="text-3xl font-semibold text-gray-800">
            Trusted. Proven. Scalable.
          </p>
        </motion.div>

        {/* Main Stats with Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 bg-white/50 backdrop-blur-sm rounded-2xl h-full border border-gray-100 hover:border-red-100 transition-all duration-300 hover:shadow-lg hover:shadow-red-100/20">
                <div className="inline-flex items-center justify-center p-2 mb-4 bg-red-600/10 rounded-xl group-hover:bg-red-600/20 transition-colors">
                  <div className="text-red-600">{stat.icon}</div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="font-semibold text-gray-800 mb-2">{stat.description}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fancy Metrics Grid with Modern Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            // Select different icon styles for variety
            let IconComponent;
            let gradientClass;
            
            switch (index % 4) {
              case 0:
                IconComponent = <BadgeCheck size={28} className="text-rareminds-purple" />;
                gradientClass = "from-purple-500/10 to-purple-600/5";
                break;
              case 1:
                IconComponent = <TrendingUp size={28} className="text-rareminds-accent" />;
                gradientClass = "from-blue-500/10 to-indigo-600/5";
                break;
              case 2:
                IconComponent = <CircleDollarSign size={28} className="text-green-600" />;
                gradientClass = "from-green-500/10 to-emerald-600/5";
                break;
              case 3:
                IconComponent = <div className="text-red-600">{metric.icon}</div>;
                gradientClass = "from-red-500/10 to-orange-600/5";
                break;
              default:
                IconComponent = <div className="text-red-600">{metric.icon}</div>;
                gradientClass = "from-red-500/10 to-orange-600/5";
            }
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative"
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br ${gradientClass} backdrop-blur-sm border border-gray-100 hover:border-rareminds-purple/30 transition-all duration-300 hover:shadow-lg hover:shadow-rareminds-purple/10 h-full flex flex-col`}>
                  <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-white/20 to-transparent rounded-full -mr-12 -mt-12 opacity-70"></div>
                  
                  <div className="flex items-start gap-4 z-10 relative">
                    <div className="inline-flex items-center justify-center p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-all">
                      {IconComponent}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600 mb-1">{metric.label}</div>
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rareminds-purple to-rareminds-accent mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.description}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyRareminds;
