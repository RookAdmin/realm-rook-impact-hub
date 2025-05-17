
import React from 'react';
import { Check } from 'lucide-react';

const BrandingDifferentiators = () => {
  const differentiators = [
    {
      title: "100% Custom Strategy",
      description: "Every brand we create begins with in-depth research and a tailored strategic approach specific to your market and audience."
    },
    {
      title: "Human-first, Not Template-driven",
      description: "We design for emotional connection and authentic human experience, never relying on trends or templates."
    },
    {
      title: "Long-term Brand Recall over Buzz",
      description: "We build brands designed to last decades, not just create short-term social media buzz or engagement."
    },
    {
      title: "Owned IP + Style Guide Included",
      description: "You receive complete ownership of all brand assets along with comprehensive guidelines for consistent application."
    },
    {
      title: "Backed by UI/UX + Dev Teams for End-to-End Flow",
      description: "Our integrated approach ensures your brand translates seamlessly across all digital experiences and platforms."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-realm-lightgray">
      <div className="realm-container">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">
          What Sets Us Apart?
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {differentiators.map((item, index) => (
            <div key={index} className="flex items-start gap-4 mb-8 last:mb-0">
              <div className="mt-1 flex-shrink-0 w-6 h-6 bg-realm-black text-white rounded-full flex items-center justify-center">
                <Check size={16} />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-realm-darkgray">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingDifferentiators;
