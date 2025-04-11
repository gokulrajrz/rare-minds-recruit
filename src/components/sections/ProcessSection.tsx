
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Headphones, 
  Map, 
  Search, 
  CalendarCheck, 
  CheckCircle, 
  BarChart,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const steps = [
  {
    icon: <Headphones className="text-white" size={24} />,
    number: "1",
    title: "Understand Your Need",
    description: "We start by listening. Our team collaborates with your hiring managers to understand your business goals, role expectations, team dynamics, and success metrics."
  },
  {
    icon: <Map className="text-white" size={24} />,
    number: "2",
    title: "Map the Market",
    description: "We conduct real-time talent market analysis to benchmark roles, identify top talent pools, and refine the ideal candidate profile."
  },
  {
    icon: <Search className="text-white" size={24} />,
    number: "3",
    title: "Source & Screen Talent",
    description: "Leveraging AI tools, niche networks, and our deep recruiter expertise, we source the best candidates and rigorously screen them for technical, cultural, and behavioral fit."
  },
  {
    icon: <CalendarCheck className="text-white" size={24} />,
    number: "4",
    title: "Interview Coordination",
    description: "We streamline the interview process — from scheduling to prep support — ensuring a smooth experience for both candidates and your internal teams."
  },
  {
    icon: <CheckCircle className="text-white" size={24} />,
    number: "5",
    title: "Final Selection & Offer Support",
    description: "We guide you through the offer stage with market-aligned salary insights, candidate expectation alignment, and closing strategies that reduce drop-offs."
  },
  {
    icon: <BarChart className="text-white" size={24} />,
    number: "6",
    title: "Post-Onboarding Feedback",
    description: "Our process doesn't end at hiring. We stay engaged with clients and candidates during onboarding to ensure satisfaction, retention, and long-term success."
  }
];

const ProcessSection = () => {
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  return (
    <section id="process" className="section py-24 bg-gradient-to-br from-gray-900 to-red-900 text-white relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTE2IDI0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process, Your Peace of Mind</h2>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg">
            At Rareminds, we believe a great hire is not a coincidence — it's the outcome of a structured, 
            insight-driven, and human-centric process. Here's how we ensure the right fit, every time:
          </p>
        </motion.div>
        
        {/* Desktop Process (hidden on mobile) */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:gap-8`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/50 border-2 border-white/20">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all transform hover:scale-105 hover:shadow-xl duration-300 border border-white/10">
                    <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                      <div className="bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-900/30">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-gray-200">{step.description}</p>
                  </div>
                </div>
                
                {/* Empty space for alignment */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile Process (visible only on mobile) */}
        <div className="md:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <button 
                onClick={() => toggleStep(index)}
                className="w-full px-5 py-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                </div>
                {expandedMobile === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {expandedMobile === index && (
                <div className="px-5 pb-5 pt-2 border-t border-white/10">
                  <p className="text-gray-200">{step.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
