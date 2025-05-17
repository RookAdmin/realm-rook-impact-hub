
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="realm-section bg-realm-black text-white">
      <div className="realm-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Let's Create Something Timeless.
          </h2>
          
          <p className="mt-6 text-lg text-realm-lightgray">
            Ready to transform your digital presence and create meaningful impact?
          </p>
          
          <div className="mt-10">
            <Link to="/contact">
              <Button className="realm-button bg-white text-realm-black hover:bg-realm-lightgray flex items-center space-x-2">
                <span>Get a Proposal</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          
          <p className="mt-8 text-sm text-realm-lightgray">
            No commitment required. We'll prepare a customized proposal for your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
