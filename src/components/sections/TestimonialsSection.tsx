
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import TestimonialCard from "../testimonials/TestimonialCard";
import TestimonialsHeader from "../testimonials/TestimonialsHeader";

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
        <TestimonialsHeader />

        <div className="max-w-4xl mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="w-full">
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="relative static transform-none mx-2 bg-white shadow-md hover:bg-red-50 border-none" />
              <CarouselNext className="relative static transform-none mx-2 bg-white shadow-md hover:bg-red-50 border-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
