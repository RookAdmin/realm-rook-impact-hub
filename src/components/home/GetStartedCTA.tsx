
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const GetStartedCTA: React.FC = () => {
  return (
    <section className="realm-section bg-white">
      <div className="realm-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            You're Not Too Early. You're Right on Time.
          </h2>
          
          <p className="mt-6 text-lg text-realm-darkgray">
            Whether you're a startup, scale-up, or sleeping giant — Realm by Rook exists to make your next chapter legendary.
          </p>
          
          <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <Link to="/contact">
              <Button className="realm-button flex items-center space-x-2">
                <span>Schedule Your Free Consult</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
            
            <Link to="/case-studies" className="text-realm-black flex items-center space-x-2 realm-link">
              <span>Explore Our Work</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-realm-darkgray">
            One call could change your brand forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetStartedCTA;
