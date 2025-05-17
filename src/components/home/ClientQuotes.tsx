
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const ClientQuotes = () => {
  const testimonials = [
    {
      id: "test1",
      quote: "Realm isn't an agency. They're a weapon. They completely transformed how people perceive and interact with our brand, and the numbers speak for themselves.",
      author: "Rishi B.",
      position: "Founder",
      company: "Zephyr Skincare",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: "test2",
      quote: "They understood our product better than we did. The team at Realm didn't just redesign our interface—they transformed how users interact with financial tools completely.",
      author: "Natasha D.",
      position: "CEO",
      company: "Finovo",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      id: "test3",
      quote: "The ROI speaks for itself. Best decision we made this year. Our customers constantly comment on how fast and easy our site is to use now.",
      author: "Marcus T.",
      position: "CMO",
      company: "Elevate Tech",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <section className="realm-section bg-realm-black text-white">
      <div className="realm-container">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Client Voices</h2>
          <div className="w-16 h-1 bg-white"></div>
        </div>
        
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-1">
                <motion.div
                  className="p-8 border border-white/30 h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-6">
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover grayscale mr-4" 
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                        <User size={20} className="text-white" />
                      </div>
                    )}
                  </div>
                  
                  <blockquote className="text-lg font-display mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-realm-lightgray">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ClientQuotes;
