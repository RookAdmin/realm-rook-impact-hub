
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  timeline: string;
}

const ProcessStep = ({ number, title, description, timeline }: ProcessStepProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-16 last:mb-0">
      <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center border border-realm-black text-2xl font-bold">
        {number}
      </div>
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h3 className="text-2xl font-display font-bold">{title}</h3>
          <span className="text-realm-darkgray">{timeline}</span>
        </div>
        <p className="text-realm-darkgray mb-4">{description}</p>
      </div>
    </div>
  );
};

const BrandingProcess = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="realm-container">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
          The Realm Process
        </h2>
        <p className="text-center text-realm-darkgray mb-16 max-w-2xl mx-auto">
          No brand is copied. Everything starts from scratch.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <ProcessStep 
            number="01"
            title="Discover"
            description="We dive deep into understanding your vision, audience, market position, and competitors. Through collaborative workshops and research, we establish the foundation for your brand's strategic direction."
            timeline="2 Weeks"
          />
          
          <ProcessStep 
            number="02"
            title="Design"
            description="Our creative team crafts your visual identity, messaging architecture, and brand guidelines. We iterate collaboratively, ensuring every element authentically represents your brand's essence and resonates with your audience."
            timeline="4 Weeks"
          />
          
          <ProcessStep 
            number="03"
            title="Deliver"
            description="We prepare and deliver a comprehensive brand package including all assets, guidelines, and implementation resources. Our team provides guidance to ensure successful brand activation across all touchpoints."
            timeline="2 Weeks"
          />
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="mailto:hlo@realmrook.com"
            className="realm-button inline-flex items-center gap-2"
          >
            Talk to Branding Team <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandingProcess;
