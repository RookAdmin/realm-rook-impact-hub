
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Dialog, DialogContent } from "@/components/ui/dialog"; 
import { useState } from 'react';

const FinalCta = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="bg-realm-black text-white py-24 md:py-32">
      <div className="realm-container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Your brand deserves more than a template.
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-realm-lightgray">
            Let's build something that truly sets you apart and drives real business results.
          </p>  
            <Button onClick={() => setIsContactOpen(true)} className="realm-button rounded-full bg-white text-realm-black hover:bg-realm-lightgray group px-8 py-6 text-lg">
              <span>Let's Build Something Together</span>
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
        
        </motion.div>
      </div>
       <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <div className="py-2">
            <h2 className="text-2xl font-display font-bold mb-6">Let's Build Something Together</h2>
            <ContactForm onSuccess={() => setIsContactOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FinalCta;
