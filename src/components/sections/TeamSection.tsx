
import { motion } from 'framer-motion';
import { LinkedinIcon, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Subiksha",
    photo: "/placeholder.svg", // You can replace with actual photo path
    designation: "Talent Acquisition Specialist",
    linkedin: "https://linkedin.com/in/subiksha",
    mission: "Connecting exceptional talent with transformative opportunities"
  },
  {
    name: "Ronnie",
    photo: "/placeholder.svg",
    designation: "Senior Recruitment Consultant",
    linkedin: "https://linkedin.com/in/ronnie",
    mission: "Building future-ready teams through strategic hiring"
  },
  {
    name: "Sudha",
    photo: "/placeholder.svg",
    designation: "HR Operations Manager",
    linkedin: "https://linkedin.com/in/sudha",
    mission: "Fostering inclusive workplaces through thoughtful recruitment"
  },
  {
    name: "Varalakshmi",
    photo: "/placeholder.svg",
    designation: "Technical Recruiter",
    linkedin: "https://linkedin.com/in/varalakshmi",
    mission: "Bridging talent gaps with precision and expertise"
  },
  {
    name: "Rohit",
    photo: "/placeholder.svg",
    designation: "Recruitment Lead",
    linkedin: "https://linkedin.com/in/rohit",
    mission: "Empowering organizations with top-tier talent solutions"
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-red-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-b from-red-100 to-transparent rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-gradient-to-t from-red-100 to-transparent rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center mb-4">
            <div className="bg-red-600 rounded-full p-3 shadow-lg shadow-red-200">
              <Users className="text-white" size={28} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500">
            Meet the Minds Behind Rareminds
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col items-center">
                    <Avatar className="w-24 h-24 mb-4 border-4 border-white shadow-lg">
                      <AvatarImage src={member.photo} alt={member.name} />
                      <AvatarFallback className="bg-red-100 text-red-500 text-xl">
                        {member.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-red-600 font-medium text-sm mb-3">
                      {member.designation}
                    </p>
                    
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-300 mb-4"
                    >
                      <LinkedinIcon size={18} />
                      <span className="text-sm">Connect on LinkedIn</span>
                    </a>
                    
                    <p className="text-gray-600 text-sm text-center italic">
                      "{member.mission}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
