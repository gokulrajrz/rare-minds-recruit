
import { useState } from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    content: "I want to take a moment to express our sincere appreciation for your outstanding support in our recruitment efforts at Park Controls and Communications Private Limited. The quality of service from you and your team has been truly commendable, and we are consistently impressed by your dedication and professionalism. A special thanks for successfully onboarding for three candidates whose contributions are already making a positive impact. Your commitment to excellence and ability to identify top talent reaffirm the strength of our partnership. We are grateful for this collaboration with Rareminds and look forward to continued success together.",
    author: "Manisha Borse",
    position: "DGM – HR & Admin",
    company: "Park Controls and Communications Private Limited",
    contact: "9972088597"
  },
  {
    content: "A big 'Thank you' to you and your team for being consistent and diligent and finally closing this vacancy for us. Hope to continue our collaboration with Rareminds.",
    author: "Aarohee Aaron",
    position: "Director- HR",
    company: "Plastics For Change",
    contact: "9019099818"
  },
  {
    content: "I wish to convey our profound appreciation for your outstanding support. The quality of service from your team has consistently impressed us. Special thanks for onboarding Riyaaz; his contributions are already proving invaluable. Additionally, the introductions of Sireesha and Rajireddy align perfectly with our needs. Your commitment to excellence and the caliber of talent you provide reinforce our partnership's strength. We're grateful for our collaboration and look forward to continued success together.",
    author: "Srikanth M",
    position: "TA Manager",
    company: "Infolob Solutions India Pvt. Ltd.",
    contact: "+91 9100765775"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
        </div>
        
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                contact={testimonial.contact}
              />
            ))}
          </div>

          {/* Mobile View with Carousel */}
          <div className="md:hidden">
            <TestimonialCard 
              content={testimonials[activeIndex].content}
              author={testimonials[activeIndex].author}
              position={testimonials[activeIndex].position}
              company={testimonials[activeIndex].company}
              contact={testimonials[activeIndex].contact}
            />
            
            <div className="flex justify-center mt-6 gap-4">
              <button 
                onClick={prevSlide} 
                className="bg-white rounded-full p-2 shadow hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-rareminds-purple" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-rareminds-purple' : 'bg-gray-300'}`}
                  ></div>
                ))}
              </div>
              <button 
                onClick={nextSlide} 
                className="bg-white rounded-full p-2 shadow hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-rareminds-purple" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
