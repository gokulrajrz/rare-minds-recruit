
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Headphones, 
  Map, 
  Search, 
  CalendarCheck, 
  CheckCircle, 
  BarChart,
  CircleDot
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  const [activeStep, setActiveStep] = useState("1");

  return (
    <section id="process" className="py-16 bg-gradient-to-r from-white via-red-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-b from-red-100 to-transparent rounded-full opacity-60 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-red-100 to-transparent rounded-full opacity-60 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center mb-4">
            <div className="bg-red-600 rounded-full p-3 shadow-lg shadow-red-200">
              <CircleDot className="text-white" size={28} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">
            Our Process, Your Peace of Mind
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Rareminds, we believe a great hire is not a coincidence — it's the outcome of a structured, 
            insight-driven, and human-centric process. Here's how we ensure the right fit, every time:
          </p>
        </motion.div>

        {/* Modern visual process flow - visible in one window */}
        <div className="relative mt-12">
          {/* Process Line */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-1 bg-gradient-to-r from-red-200 via-red-500 to-red-200 z-0"></div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  {/* Step Number Circle */}
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg mb-6
                    ${index % 2 === 0 ? 'bg-gradient-to-br from-red-500 to-red-700' : 'bg-gradient-to-br from-red-600 to-red-800'}`}
                  >
                    {step.number}
                  </div>

                  {/* Step Card */}
                  <Card className="w-full h-full bg-white hover:shadow-xl transition-all duration-300 border-red-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 flex items-center gap-3">
                      <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm">
                        {step.icon}
                      </div>
                      <h3 className="font-bold text-white truncate">{step.title}</h3>
                    </div>
                    <CardContent className="p-4 text-sm">
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Mobile Accordion View */}
        <div className="md:hidden mt-8">
          <Accordion type="single" collapsible className="w-full bg-white rounded-lg shadow-md">
            {steps.map((step, index) => (
              <AccordionItem key={index} value={step.number} className="border-b border-red-100">
                <AccordionTrigger className="px-4 py-3 hover:bg-red-50 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-red-500 to-red-700 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
                      {step.number}
                    </div>
                    <span className="font-medium text-gray-800">{step.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3">
                  <div className="flex items-start gap-3 pl-11">
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
