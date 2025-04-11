
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote, Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import TestimonialCard from '../ui/TestimonialCard';
import { cn } from '@/lib/utils';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);

  const showSlide = (index: number) => {
    const normalizedIndex = ((index % testimonials.length) + testimonials.length) % testimonials.length;
    setActiveIndex(normalizedIndex);
    
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${normalizedIndex * 100}%)`;
    }
  };

  const nextSlide = () => showSlide(activeIndex + 1);
  const prevSlide = () => showSlide(activeIndex - 1);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartPos('touches' in e ? e.touches[0].clientX : e.clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const endPos = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = startPos - endPos;
    
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    
    setIsDragging(false);
  };

  return (
    <section id="testimonials" className="section py-24 bg-gradient-to-br from-red-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNE0xNiAyNGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTQiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 bg-red-600 mx-auto mb-6 rounded-full flex items-center justify-center rotate-12 shadow-lg">
            <MessageSquareQuote size={32} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Don't just take our word for it. Hear from the companies that trust Rareminds with their most important asset—their people.
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 h-full flex flex-col">
                  <div className="mb-6">
                    <Quote size={40} className="text-red-300 opacity-50" />
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={cn("w-5 h-5", i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300")} />
                    ))}
                  </div>
                  <p className="text-gray-700 flex-grow mb-6">"{testimonial.content}"</p>
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <h4 className="font-bold text-lg">{testimonial.author}</h4>
                    <p className="text-gray-600">{testimonial.position}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet View */}
        <div className="lg:hidden relative">
          <div 
            className="overflow-hidden"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={() => isDragging && setIsDragging(false)}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          >
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-300 ease-out"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full px-4" 
                  style={{ flex: `0 0 ${100 / testimonials.length}%` }}
                >
                  <div className="bg-white p-6 rounded-3xl shadow-xl h-full flex flex-col">
                    <div className="mb-4">
                      <Quote size={30} className="text-red-300 opacity-50" />
                    </div>
                    <div className="flex space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn("w-4 h-4", i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300")} />
                      ))}
                    </div>
                    <p className="text-gray-700 line-clamp-4 mb-4">{testimonial.content}</p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      <p className="text-gray-500 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-8 items-center gap-4">
            <button 
              onClick={prevSlide}
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-red-600" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => showSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'bg-red-600 w-6' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
