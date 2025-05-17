
import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const Testimonial = ({ quote, author, position, company, image }: TestimonialProps) => {
  return (
    <div className="border border-realm-lightgray p-8 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/4">
        <img 
          src={image} 
          alt={author} 
          className="w-20 h-20 object-cover rounded-full"
        />
      </div>
      <div className="md:w-3/4">
        <p className="text-xl mb-6 font-light italic">"{quote}"</p>
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-realm-darkgray">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const BrandingTestimonials = () => {
  const testimonials = [
    {
      quote: "Working with Realm by Rook transformed our business. They didn't just create a logo—they crafted an identity that resonates with our customers on a deeper level and has become integral to our success.",
      author: "Alexandra Chen",
      position: "Founder & CEO",
      company: "Lumina Beauty",
      image: "/placeholder.svg"
    },
    {
      quote: "The team took the time to truly understand our vision, values, and goals. The result was a brand that authentically represents who we are while standing out in a crowded market.",
      author: "Marcus Johnson",
      position: "Co-founder",
      company: "Evergreen Technologies",
      image: "/placeholder.svg"
    }
  ];

  const clientLogos = [
    "/placeholder.svg",
    "/placeholder.svg", 
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="realm-container">
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
        
        <p className="text-center text-xl font-display mt-12 mb-8">
          People don't just love what we create — they trust us with everything.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
              <img 
                src={logo} 
                alt="Client logo" 
                className="max-h-12 max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingTestimonials;
