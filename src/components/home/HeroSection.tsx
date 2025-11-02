import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog"; 

import ContactForm from '@/components/ContactForm';

// Mock components for demonstration
const Button = ({ children, onClick, className }) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);




const HeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-16 pb-32 md:pb-40 bg-white text-black relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 min-h-[600px]">
          {/* Left side: Main hero content */}
          <div className="flex-1 max-w-3xl lg:pr-8">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Apps Are Dead.
              <br />
              Automate with Conversation.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl font-normal text-gray-700 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Bring your SaaS or D2C product to any chat platform. Voice or text—one message, endless possibilities.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                onClick={() => setIsContactOpen(true)}
                className="bg-black text-white hover:bg-gray-800 flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span>Get a Proposal</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>

            
              <a href="/services/agentica" className="text-black flex items-center space-x-2 hover:text-gray-700 transition-colors px-8 py-4 border border-gray-400 rounded-lg hover:border-gray-600">
                <span>Discover Agentica</span>
                <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* Availability indicator - FOMO tactic */}
            <motion.div
              className="mt-16 inline-block border border-gray-400 px-4 py-2 text-sm bg-gray-100 bg-opacity-70 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Only 10 slots left for incoming projects
            </motion.div>
          </div>

          {/* Right side: Spline 3D Model */}
          <div className="hidden md:flex flex-1 w-full lg:max-w-2xl">
            <motion.div
              className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ perspective: "1000px" }}
            >
              <iframe
                src="https://my.spline.design/threadsfeatureheaderanimation-cgasgRCWav0GUtiGd3NIfGZI/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="rounded-2xl pointer-events-auto cursor-auto"
                title="3D Cube and Balls Animation"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      {/* Contact Form Dialog */}
      {/* <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <div className="py-2">
          <h2 className="text-2xl font-bold mb-6 text-black">Get a Proposal</h2>
          <ContactForm onSuccess={() => setIsContactOpen(false)} />
        </div>
      </Dialog> */}
       <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogContent className="sm:max-w-[500px]">
                <div className="py-2">
                  <h2 className="text-2xl font-display font-bold mb-6">Let's Build Something Together</h2>
                  <ContactForm onSuccess={() => setIsContactOpen(false)} />
                </div>
              </DialogContent>
            </Dialog>
    </section>
  );
};

export default HeroSection;
