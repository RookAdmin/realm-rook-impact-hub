
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="realm-container">
        <h1 className="realm-headline">What We Do?</h1>
        <p className="realm-subheadline">
          We offer premium branding, UI/UX, development, and SEO services to help businesses achieve their goals.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Services will be expanded in future implementation */}
          <div className="service-card">
            <h3 className="text-2xl font-display font-bold mb-4">Branding</h3>
            <p className="text-realm-darkgray mb-6">Crafting unique identities that resonate with your audience and stand the test of time.</p>
            <Link to="/contact" className="realm-link flex items-center space-x-2">
              <span>Learn more</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="service-card">
            <h3 className="text-2xl font-display font-bold mb-4">UI/UX Design</h3>
            <p className="text-realm-darkgray mb-6">Designing user-friendly experiences that delight users and achieve business goals.</p>
            <Link to="/contact" className="realm-link flex items-center space-x-2">
              <span>Learn more</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="service-card">
            <h3 className="text-2xl font-display font-bold mb-4">Web/App Development</h3>
            <p className="text-realm-darkgray mb-6">Building responsive, scalable digital homes that perform flawlessly across all devices.</p>
            <Link to="/contact" className="realm-link flex items-center space-x-2">
              <span>Learn more</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="service-card">
            <h3 className="text-2xl font-display font-bold mb-4">SEO</h3>
            <p className="text-realm-darkgray mb-6">Boosting online visibility through data-driven strategies that deliver measurable results.</p>
            <Link to="/contact" className="realm-link flex items-center space-x-2">
              <span>Learn more</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/contact">
            <Button className="realm-button flex items-center space-x-2">
              <span>Book a Free Strategy Call</span>
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Services;
