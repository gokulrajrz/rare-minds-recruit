
import { 
  Headphones, 
  Map, 
  Search, 
  CalendarCheck, 
  CheckCircle, 
  BarChart 
} from 'lucide-react';

const ProcessSection = () => {
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

  return (
    <section id="process" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process, Your Peace of Mind</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Rareminds, we believe a great hire is not a coincidence — it's the outcome of a structured, insight-driven, and human-centric process. Here's how we ensure the right fit, every time:
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline connector (vertical line) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-rareminds-light transform -translate-x-1/2"></div>
          
          {/* Timeline steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:gap-8 animate-on-scroll`}
              >
                {/* Timeline circle */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-rareminds-purple flex items-center justify-center text-white text-xl font-bold">
                    {step.number}
                  </div>
                </div>
                
                {/* Mobile timeline dot */}
                <div className="md:hidden w-10 h-10 mb-4 rounded-full bg-rareminds-purple flex items-center justify-center">
                  <div className="text-white font-bold">{step.number}</div>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-rareminds-purple w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                {/* Empty space for alignment */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
