
import { MessageSquareQuote } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 mx-auto mb-6 rounded-full flex items-center justify-center rotate-12 shadow-lg">
        <MessageSquareQuote size={32} className="text-white" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        Don't just take our word for it. Hear from the companies that trust Rareminds with their most important asset—their people.
      </p>
    </motion.div>
  );
};

export default TestimonialsHeader;
