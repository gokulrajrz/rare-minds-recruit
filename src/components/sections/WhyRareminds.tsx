
import { 
  Users, 
  Building2, 
  Factory, 
  Clock,
  CheckCircle2, 
  BadgeCheck, 
  Star, 
  Map, 
  Award,
  Briefcase,
  Globe
} from 'lucide-react';
import StatCard from '../ui/StatCard';
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

const WhyRareminds = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section id="why-rareminds" className="section py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white z-0"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-100 to-transparent rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-100 to-transparent rounded-full blur-3xl opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMCwgMCwgMC4wMykiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')] opacity-50 z-0"></div>

      <div className="container relative z-20">
        {/* Heading section with 3D effect and gradient */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="transform perspective-1000"
          >
            <h2 className="relative inline-block text-4xl md:text-6xl font-bold mb-6 overflow-hidden">
              <span className="inline-block">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-red-600 to-red-800 transform hover:scale-105 transition-transform duration-300">
                  Trusted.
                </span>
              </span>
              <span className="mx-2 md:mx-4 inline-block">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-red-700 transform hover:scale-105 transition-transform duration-300">
                  Proven.
                </span>
              </span>
              <span className="inline-block">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-red-600 to-red-700 transform hover:scale-105 transition-transform duration-300">
                  Scalable.
                </span>
              </span>
              
              {/* Animated underline */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-red-700 via-red-500 to-red-600 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-6">
              Our track record speaks for itself - delivering exceptional talent solutions 
              across India and beyond with speed, quality and precision.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div variants={itemVariants}>
            <StatCard 
              icon={<Users size={32} />} 
              number="5,00,000+" 
              description="candidates successfully placed"
              subtext="We've matched over half a million individuals with meaningful careers — and counting" 
              className="border-none shadow-xl bg-gradient-to-br from-white to-red-50 hover:shadow-red-100/50"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard 
              icon={<Building2 size={32} />} 
              number="250+" 
              description="hiring partners and growing"
              subtext="Corporates across India rely on us to scale their teams efficiently and effectively" 
              className="border-none shadow-xl bg-gradient-to-br from-white to-red-50 hover:shadow-red-100/50"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard 
              icon={<Factory size={32} />} 
              number="20+" 
              description="industries served across India"
              subtext="From IT to Manufacturing, BFSI to Healthcare — we understand your business language" 
              className="border-none shadow-xl bg-gradient-to-br from-white to-red-50 hover:shadow-red-100/50"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard 
              icon={<Clock size={32} />} 
              number="2x" 
              description="faster Turnaround Time"
              subtext="We don't just find talent — we deliver it at speed, without compromising quality" 
              className="border-none shadow-xl bg-gradient-to-br from-white to-red-50 hover:shadow-red-100/50"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { icon: <CheckCircle2 size={32} />, number: "92%", description: "Role Closure Rate", subtext: "of roles closed within the first shortlist round" },
            { icon: <BadgeCheck size={32} />, number: "98%", description: "Offer Acceptance Rate", subtext: "candidate offer acceptance rate" },
            { icon: <Star size={32} />, number: "4.8/5", description: "CSAT Score", subtext: "Rated by corporate clients for quality and communication" },
            { icon: <Map size={32} />, number: "20+", description: "States", subtext: "Pan-India reach with regional hiring" },
            { icon: <Award size={32} />, number: "20+", description: "Brands", subtext: "C-Suite hires in the past year" },
            { icon: <Briefcase size={32} />, number: "150+", description: "Roles", subtext: "Job Families Successfully Placed" }
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <StatCard 
                icon={stat.icon} 
                number={stat.number} 
                description={stat.description}
                subtext={stat.subtext} 
                className="border-none shadow-xl bg-gradient-to-br from-white to-red-50 hover:shadow-red-100/50"
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <motion.div variants={itemVariants}>
            <StatCard 
              icon={<Globe size={32} />} 
              number="10" 
              description="Countries"
              subtext="Domestic hiring @ International Locations" 
              className="border-none shadow-xl bg-gradient-to-br from-white to-red-50 hover:shadow-red-100/50 max-w-md w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyRareminds;
