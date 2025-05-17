
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
    <section className="pt-16 md:pt-24 pb-16 relative">
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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-realm-lightgray p-10">
            <img 
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80" 
              alt="Brand Identity Example" 
              className="w-full realm-image-greyscale" 
            />
          </div>
          <div className="border border-realm-lightgray p-10">
            <img 
              src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&q=80" 
              alt="Brand Wordmark Example" 
              className="w-full realm-image-greyscale" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingHero;
