import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    content: "I want to take a moment to express our sincere appreciation for your outstanding support in our recruitment efforts at Park Controls and Communications Private Limited. The quality of service from you and your team has been truly commendable, and we are consistently impressed by your dedication and professionalism. A special thanks for successfully onboarding for three candidates whose contributions are already making a positive impact. Your commitment to excellence and ability to identify top talent reaffirm the strength of our partnership. We are grateful for this collaboration with Rareminds and look forward to continued success together.",
    author: "Manisha Borse",
    position: "DGM – HR & Admin",
    company: "Park Controls and Communications Private Limited",
    contact: "9972088597",
    rating: 5
  },
  {
    content: "A big 'Thank you' to you and your team for being consistent and diligent and finally closing this vacancy for us. Hope to continue our collaboration with Rareminds.",
    author: "Aarohee Aaron",
    position: "Director- HR",
    company: "Plastics For Change",
    contact: "9019099818",
    rating: 5
  },
  {
    content: "I wish to convey our profound appreciation for your outstanding support. The quality of service from your team has consistently impressed us. Special thanks for onboarding Riyaaz; his contributions are already proving invaluable. Additionally, the introductions of Sireesha and Rajireddy align perfectly with our needs. Your commitment to excellence and the caliber of talent you provide reinforce our partnership's strength. We're grateful for our collaboration and look forward to continued success together.",
    author: "Srikanth M",
    position: "TA Manager",
    company: "Infolob Solutions India Pvt. Ltd.",
    contact: "+91 9100765775",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-red-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-100/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
      
      <div className="container relative z-10">
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

        <div className="max-w-4xl mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="relative"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
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
                            i < testimonial.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg mb-8">"{testimonial.content}"</p>
                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="font-bold text-xl text-gray-900">{testimonial.author}</h4>
                      <p className="text-gray-600 font-medium">{testimonial.position}</p>
                      <p className="text-gray-500">{testimonial.company}</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
              <CarouselPrevious className="h-12 w-12 rounded-full border-2 border-red-100" />
              <CarouselNext className="h-12 w-12 rounded-full border-2 border-red-100" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
