
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Users, 
  Clock, 
  BarChart3, 
  Puzzle, 
  ArrowRight, 
  Shield, 
  Briefcase,
  Target
} from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import StatCard from "@/components/ui/StatCard";

const WhyRareminds = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { icon: <BarChart3 size={32} />, number: "92%", description: "Success Rate", subtext: "Offer acceptance across industries" },
    { icon: <Users size={32} />, number: "2,500+", description: "Professionals Placed", subtext: "From entry-level to C-suite" },
    { icon: <Clock size={32} />, number: "14 Days", description: "Average Time-to-Hire", subtext: "From job briefing to offer acceptance" }
  ];

  const features = [
    {
      icon: <Target size={32} />,
      title: "Trusted",
      description: "Clients trust us with their most critical roles. Our precise targeting and deep networks consistently deliver top talent others can't find.",
      points: [
        "Exclusive access to passive talent networks",
        "Industry-specific recruitment specialists",
        "Transparent communication and progress tracking"
      ]
    },
    {
      icon: <Shield size={32} />,
      title: "Proven",
      description: "Our methodology has been proven across industries and roles. We've refined our approach through thousands of successful placements.",
      points: [
        "92% offer acceptance rate",
        "87% retention rate after first year",
        "Proprietary screening and assessment tools"
      ]
    },
    {
      icon: <Briefcase size={32} />,
      title: "Scalable",
      description: "Whether you need one strategic hire or an entire department, our flexible recruitment solutions scale to match your growth.",
      points: [
        "Customizable engagement models",
        "Seamless integration with your hiring workflows",
        "Adaptable to changing hiring priorities"
      ]
    }
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-white to-slate-50 relative">
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-60 -translate-y-1/2"></div>
      <div className="absolute left-20 bottom-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/0 to-slate-50/90 pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500 mb-6">
              Why Choose Rareminds?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We blend human expertise with data-driven insights to deliver recruitment that's trusted, proven, and scalable.
            </p>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={`stat-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <StatCard 
                icon={stat.icon} 
                number={stat.number} 
                description={stat.description} 
                subtext={stat.subtext}
                className="shadow-xl border border-white rounded-2xl bg-gradient-to-br from-white to-slate-50"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Interactive Features Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-6 md:p-10">
            {/* Tabs Section */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {features.map((feature, index) => (
                <button
                  key={`tab-${index}`}
                  onClick={() => handleTabClick(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl text-lg font-medium transition-all 
                    ${activeTab === index 
                      ? 'bg-red-600 text-white shadow-lg shadow-red-200' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                >
                  <span className={`${activeTab === index ? 'text-white' : 'text-red-500'}`}>
                    {feature.icon}
                  </span>
                  {feature.title}
                </button>
              ))}
            </div>
            
            {/* Content Section */}
            <div className="relative min-h-[400px] bg-gradient-to-br from-red-50 to-slate-50 rounded-2xl p-8">
              {features.map((feature, index) => (
                <motion.div
                  key={`content-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: activeTab === index ? 1 : 0,
                    x: activeTab === index ? 0 : 20,
                    position: activeTab === index ? 'relative' : 'absolute'
                  }}
                  transition={{ duration: 0.5 }}
                  className={`${activeTab !== index && 'hidden'} w-full`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                      <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center text-red-600 mb-6 shadow-lg rotate-3">
                        {feature.icon}
                      </div>
                      <h3 className="text-3xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-4">
                        {feature.points.map((point, i) => (
                          <motion.li 
                            key={`point-${index}-${i}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="text-green-500 mt-1" size={20} />
                            <span className="text-gray-700">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <div className="relative w-full aspect-square max-w-md">
                        {/* 3D Interactive Element */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden"
                          animate={{ 
                            rotateY: [0, 5, 0, -5, 0],
                            rotateX: [0, -5, 0, 5, 0]
                          }}
                          transition={{ 
                            repeat: Infinity,
                            duration: 12,
                            ease: "easeInOut"
                          }}
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-400/20 to-transparent opacity-70"></div>
                          <div className="text-white text-center p-10 z-10">
                            <h4 className="text-4xl font-bold mb-6">{feature.title}</h4>
                            <div className="mb-8">
                              <Slider 
                                defaultValue={[80]} 
                                max={100} 
                                step={1} 
                                className="w-full h-3"
                              />
                            </div>
                            <p className="text-lg opacity-90 mb-8">{feature.points[0]}</p>
                            <div className="relative w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              {feature.icon}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRareminds;
