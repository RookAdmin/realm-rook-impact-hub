
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-realm-black text-white relative">
      <div className="realm-image-container absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80" 
          alt="Architectural transformation" 
          className="realm-image realm-image-greyscale"
        />
        <div className="realm-image-overlay"></div>
      </div>
      
      <div className="realm-container relative z-20">
        <div className="max-w-4xl">
          <h1 className="realm-headline animate-fade-in">
            We don't just design.<br />We create realms of impact.
          </h1>
          
          <p className="realm-subheadline text-realm-lightgray animate-fade-in" style={{ animationDelay: '0.2s' }}>
            At Realm by Rook, we blend creativity and technology to build experiences that inspire action.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact">
              <Button className="realm-button bg-white text-realm-black hover:bg-realm-lightgray flex items-center space-x-2">
                <span>Get a Proposal</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/case-studies" className="text-white flex items-center space-x-2 realm-link">
              <span>View Impact Studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        
        {/* Availability indicator - FOMO tactic */}
        <div className="mt-20 inline-block border border-realm-lightgray/30 px-4 py-2 text-sm animate-subtle-pulse bg-realm-black bg-opacity-70">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          Only 2 slots left for May onboarding
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
