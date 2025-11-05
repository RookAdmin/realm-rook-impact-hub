import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="realm-section bg-realm-black text-white">
      <div className="realm-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Ready to take your business to the next level?
          </h2>
          <p className="text-white/80 mt-4 mb-8">
            Discover how our solutions can transform your workflows and drive
            growth.
          </p>
          <Link to="/contact">
            <Button className="realm-button rounded-full bg-white text-realm-black hover:bg-realm-lightgray">
              Get Started
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
