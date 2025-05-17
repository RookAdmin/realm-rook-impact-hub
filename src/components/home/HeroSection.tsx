
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-32 md:pt-40 md:pb-40 bg-realm-black text-white relative">
      <div className="realm-container relative z-20">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="realm-headline text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
            Designs That Don't Just Look Good. <br />They Win.
          </h1>
          
          <p className="realm-subheadline text-xl md:text-2xl font-normal text-realm-lightgray mb-12" style={{ animationDelay: '0.2s' }}>
            Realm by Rook crafts identities, platforms, and experiences that drive measurable impact.
          </p>
          
          <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={scrollToServices}
              className="realm-button bg-white text-realm-black hover:bg-realm-lightgray flex items-center space-x-2 group"
            >
              <span>See What We Do</span>
              <ArrowDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* Availability indicator - FOMO tactic */}
        <div className="mt-20 inline-block border border-realm-lightgray/30 px-4 py-2 text-sm animate-subtle-pulse bg-realm-black bg-opacity-70">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          Only 2 slots left for incoming projects
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
