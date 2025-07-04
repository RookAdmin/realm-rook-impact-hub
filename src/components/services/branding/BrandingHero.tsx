
import React, { useState }  from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from '@/components/ContactForm'

const BrandingHero = () => {

  const [isContactOpen, setIsContactOpen] = useState(false);
  

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

          <Button onClick={() => setIsContactOpen(true)} className="realm-button flex items-center gap-2">
            Get Your Brand Built <ArrowRight size={16} />
          </Button>

        </div>
        {/* Centered Responsive Image */}
      <div className="w-full my-12">
        <img
          src="/services/branding.png"
          alt="Web and App Development Illustration"
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
      </div>
      {/* Contact Form Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <div className="py-2">
            <h2 className="text-2xl font-display font-bold mb-6">Get Your Brand Built</h2>
            <ContactForm onSuccess={() => setIsContactOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BrandingHero;
