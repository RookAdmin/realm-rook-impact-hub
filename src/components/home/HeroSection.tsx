import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

const HeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-32 md:pt-40 md:pb-40 bg-realm-black text-white relative">
      <div className="realm-container relative z-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        {/* Left side: Main hero content */}
        <div className="max-w-4xl flex-1">
          <motion.h1
            className="realm-headline text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            We don't just design.
            <br />
            We create realms of impact.
          </motion.h1>

          <motion.p
            className="realm-subheadline text-xl md:text-2xl font-normal text-realm-lightgray mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At Realm by Rook, we blend creativity and technology to build
            experiences that inspire action.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={() => setIsContactOpen(true)}
              className="realm-button bg-white text-realm-black hover:bg-realm-lightgray flex items-center"
            >
              <span>Get a Proposal</span>
              <ArrowRight size={16} className="ml-2" />
            </Button>

            <Link
              to="/case-studies"
              className="text-white flex items-center space-x-2 realm-link hover:text-realm-lightgray transition-colors"
            >
              <span>View Impact Studies</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Availability indicator - FOMO tactic */}
          <motion.div
            className="mt-20 inline-block border border-realm-lightgray/30 px-4 py-2 text-sm bg-realm-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
            Only 10 slots left for incoming projects
          </motion.div>
        </div>

        {/* Right side: Spline iframe (hidden on mobile) */}
        <div className="w-full md:w-[400px] lg:w-[500px] flex-shrink-0 hidden md:block">
          <div
            className="overflow-hidden shadow-lg"
            style={{ width: 500, height: 500 }}
          >
            <iframe
              src="https://my.spline.design/cubeandballs-wjl2jaRaeLtmYGz1V3ol20GD/"
              frameBorder="0"
              width="500"
              height="500"
              style={{ width: 500, height: 500 }}
              title="3D Spline Visual"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact  Form Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <div className="py-2">
            <h2 className="text-2xl font-display font-bold mb-6">
              Get a Proposal
            </h2>
            <ContactForm onSuccess={() => setIsContactOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
