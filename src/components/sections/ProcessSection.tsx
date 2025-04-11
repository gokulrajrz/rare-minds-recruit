
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Headphones, 
  Map, 
  Search, 
  CalendarCheck, 
  CheckCircle, 
  BarChart
} from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

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
  const [activeTab, setActiveTab] = useState("1");

  return (
    <section id="process" className="py-16 bg-gradient-to-br from-red-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-red-100 to-transparent rounded-full opacity-70 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-red-100 to-transparent rounded-full opacity-70 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">
            Our Process, Your Peace of Mind
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Rareminds, we believe a great hire is not a coincidence — it's the outcome of a structured, 
            insight-driven, and human-centric process. Here's how we ensure the right fit, every time:
          </p>
        </motion.div>

        {/* Desktop view - Tabs layout */}
        <div className="hidden md:block">
          <Tabs 
            defaultValue="1" 
            className="w-full" 
            value={activeTab} 
            onValueChange={setActiveTab}
          >
            <TabsList className="grid grid-cols-6 bg-red-50/50 backdrop-blur-sm rounded-xl p-1 mb-8 w-full">
              {steps.map((step) => (
                <TabsTrigger 
                  key={step.number} 
                  value={step.number}
                  className="data-[state=active]:bg-white data-[state=active]:text-red-600 data-[state=active]:shadow-md py-3"
                >
                  <span className="font-bold text-lg mr-2">{step.number}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {steps.map((step) => (
              <TabsContent key={step.number} value={step.number} className="mt-0">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-100"
                >
                  <div className="grid grid-cols-5">
                    <div className="col-span-1 bg-gradient-to-br from-red-500 to-red-700 p-8 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <div className="col-span-4 p-8">
                      <h3 className="text-2xl font-bold mb-4 text-red-600 flex items-center">
                        <span className="inline-block w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center mr-3">{step.number}</span>
                        {step.title}
                      </h3>
                      <p className="text-gray-700 text-lg">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Process timeline indicators */}
          <div className="flex justify-between items-center mt-8 px-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <button 
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${activeTab === step.number ? 'bg-red-600 text-white' : 'bg-red-100 text-red-600'}`}
                  onClick={() => setActiveTab(step.number)}
                >
                  {step.number}
                </button>
                {index < steps.length - 1 && (
                  <div className="h-1 w-24 bg-red-200 mt-6 absolute translate-x-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile view - Card layout */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-red-100/50"
            >
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 flex items-center gap-3">
                <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="font-bold text-white text-lg">{step.title}</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
