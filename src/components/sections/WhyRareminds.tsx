
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
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white z-0"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-10"></div>
      
      <div className="container relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              Trusted. Proven. Scalable.
            </span>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
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
