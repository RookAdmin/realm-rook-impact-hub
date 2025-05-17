
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="realm-container">
        <h1 className="realm-headline">Impact Studies</h1>
        <p className="realm-subheadline">
          Explore our case studies to see how we've helped businesses achieve measurable results.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Case Studies will be expanded in future implementation */}
          <div className="border border-realm-lightgray p-8 hover:border-realm-black transition-all duration-300">
            <span className="text-sm text-realm-darkgray block mb-4">E-commerce / UX Design</span>
            <h3 className="text-2xl font-display font-bold mb-4">RetailCore Rebrand</h3>
            <p className="text-realm-darkgray mb-6">How we increased conversion rates by 38% through strategic UX redesign and brand positioning.</p>
            <Link to="/contact" className="realm-link flex items-center space-x-2">
              <span>View case study</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="border border-realm-lightgray p-8 hover:border-realm-black transition-all duration-300">
            <span className="text-sm text-realm-darkgray block mb-4">SaaS / Development</span>
            <h3 className="text-2xl font-display font-bold mb-4">Fluent Finance Dashboard</h3>
            <p className="text-realm-darkgray mb-6">Rebuilding a complex financial app that reduced load time by 75% and improved user retention.</p>
            <Link to="/contact" className="realm-link flex items-center space-x-2">
              <span>View case study</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/contact">
            <Button className="realm-button flex items-center space-x-2">
              <span>Explore How We Can Help You</span>
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CaseStudies;
