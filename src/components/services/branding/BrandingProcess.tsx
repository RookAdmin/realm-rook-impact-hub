
import React ,{ useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from '@/components/ContactForm';

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
  const [isContactOpen, setIsContactOpen] = useState(false);

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
            onClick={() => setIsContactOpen(true)}
            className="realm-button inline-flex items-center gap-2"
          >
            Talk to Branding Team <ArrowRight size={16} />
          </a>
        </div>
      </div>
      {/* Contact Form Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="w-[95vw] sm:w-full max-w-[500px] max-h-[90vh] flex flex-col p-0">
          <div className="flex-shrink-0 px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b">
            <h2 className="text-xl sm:text-2xl font-display font-bold">Talk to Branding Team</h2>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto px-4 sm:px-6 pt-4 pb-8 sm:pb-4">
            <ContactForm onSuccess={() => setIsContactOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BrandingProcess;
