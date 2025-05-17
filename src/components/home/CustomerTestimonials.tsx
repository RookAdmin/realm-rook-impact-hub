
import React from 'react';
import { User } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

interface CustomerTestimonialsProps {
  testimonials: Testimonial[];
}

const CustomerTestimonials: React.FC<CustomerTestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="realm-section bg-white">
      <div className="realm-container">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold">What Founders Say After Partnering With Realm.</h2>
          <div className="w-16 h-1 bg-realm-black mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 border border-realm-lightgray hover:border-realm-black transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-realm-lightgray flex items-center justify-center mr-4">
                  <User size={20} />
                </div>
              </div>
              <blockquote className="text-xl font-display mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-realm-darkgray">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
