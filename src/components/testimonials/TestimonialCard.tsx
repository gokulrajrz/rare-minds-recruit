
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  company: string;
  contact: string;
  rating: number;
}

const TestimonialCard = ({ content, author, position, company, contact, rating }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
    >
      <div className="flex space-x-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-5 h-5",
              i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            )}
          />
        ))}
      </div>
      <p className="text-gray-700 text-lg mb-8">"{content}"</p>
      <div className="border-t border-gray-100 pt-6">
        <h4 className="font-bold text-xl text-gray-900">{author}</h4>
        <p className="text-gray-600 font-medium">{position}</p>
        <p className="text-gray-500">{company}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
