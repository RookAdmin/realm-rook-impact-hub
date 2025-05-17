
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BrandingHero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 md:pt-24 pb-16">
      <div className="realm-container">
        <div className="max-w-4xl">
          <h1 className="realm-headline mb-6">
            Your Brand Isn't Just a Logo. It's a Legacy.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-realm-darkgray">
            Let us build a unique identity that speaks to hearts and minds.
          </p>
          <Button onClick={scrollToContact} className="realm-button flex items-center gap-2">
            Get Your Brand Built <ArrowRight size={16} />
          </Button>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="border border-realm-lightgray p-10">
            <img 
              src="/placeholder.svg" 
              alt="Brand Wordmark Example" 
              className="w-full max-w-md" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingHero;
