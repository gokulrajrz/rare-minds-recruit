
import { CheckCircle } from 'lucide-react';

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Impact, Delivered</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Case Study 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll">
            <div className="bg-rareminds-purple text-white p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🌟</span>
                <h3 className="text-xl font-semibold">Success Story: Park Controls and Communication (PCC)</h3>
              </div>
              <p className="font-medium">Three Critical Hires, One Seamless Strategy</p>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-semibold text-rareminds-dark mb-2">📍 Client</h4>
                <p className="text-gray-700">
                  Park Controls and Communication (PCC) – a precision engineering company requiring fast-track recruitment.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-rareminds-dark mb-2">🎯 Challenge</h4>
                <p className="text-gray-700">
                  PCC urgently needed to close three vital positions:
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-600">
                  <li>Jr. Secretarial Assistant</li>
                  <li>Sr. Secretarial</li>
                  <li>Technical Assistant</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  All roles were received on 3rd Jan 2025 with project-critical deadlines.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-rareminds-dark mb-2">⚙️ Rareminds Solution</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Mobilized our trained candidate network within 24 hours.</li>
                  <li>Conducted focused assessments and aligned panel interviews swiftly.</li>
                  <li>Ensured offers were rolled out to all three candidates by 10th Feb 2025.</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-rareminds-dark mb-2">🌈 The Outcome</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span>All 3 positions joined within 40 days</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span>100% offer-to-join ratio</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span>Positions filled without compromising quality or timelines</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-gray-600 italic">
                  "The Rareminds team was exceptionally agile. They understood our requirement and delivered not just fast, but right."
                </p>
                <p className="text-gray-700 font-semibold mt-2">— HR Lead, PCC</p>
                <p className="text-gray-500 text-sm mt-4">
                  📌 Success like this is what we deliver every day—precision meets people.
                </p>
              </div>
            </div>
          </div>
          
          {/* Case Study 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll">
            <div className="bg-rareminds-purple text-white p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🌟</span>
                <h3 className="text-xl font-semibold">Success Story: Plastic for Change (PFC)</h3>
              </div>
              <p className="font-medium">Niche Hire for a Mission-Driven Role in Under 30 Days</p>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-semibold text-rareminds-dark mb-2">📍 Client</h4>
                <p className="text-gray-700">
                  Plastic for Change (PFC) – a sustainability-focused organization with unique talent needs.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-rareminds-dark mb-2">🎯 Challenge</h4>
                <p className="text-gray-700">
                  Find and onboard a Manager – BD (Merchandise) who aligned with sustainability, had ethical sales experience, and could grow mission-driven merchandise.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-rareminds-dark mb-2">⚙️ Rareminds Solution</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Activated outreach to candidates from social impact networks and green startups.</li>
                  <li>Screened for cultural fit, sales experience, and mission-alignment.</li>
                  <li>Concluded all interviews and offer processes by 10th July 2024.</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-rareminds-dark mb-2">🌈 The Outcome</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span>27 days from JD to Joining</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span>Boosted BD outreach by 20% within the first month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span>Elevated brand trust with the right face representing their cause</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-gray-600 italic">
                  "For a role that needed both heart and hustle, Rareminds delivered someone perfect."
                </p>
                <p className="text-gray-700 font-semibold mt-2">— CEO, PFC</p>
                <p className="text-gray-500 text-sm mt-4">
                  📌 Specialized roles don't have to mean delayed hiring. We make mission-fit hires happen—fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
