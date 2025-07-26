import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Mock components for demonstration
const Button = ({ children, onClick, className }) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);

const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <button
          onClick={() => onOpenChange(false)}
          className="float-right text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

const ContactForm = ({ onSuccess }) => (
  <form className="space-y-4">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-3 border rounded"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-3 border rounded"
    />
    <textarea
      placeholder="Project Details"
      className="w-full p-3 border rounded h-24"
    />
    <button
      type="button"
      onClick={onSuccess}
      className="w-full bg-black text-white p-3 rounded hover:bg-gray-800"
    >
      Send Proposal Request
    </button>
  </form>
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
    <section className="pt-16 pb-32 md:pb-40 bg-black text-white relative overflow-hidden min-h-screen">
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
              {/* We don't just design. */}
              <br />
              We create realms of impact.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl font-normal text-gray-300 mb-12 leading-relaxed"
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
                className="bg-white text-black hover:bg-gray-200 flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span>Get a Proposal</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>

              <button className="text-white flex items-center space-x-2 hover:text-gray-300 transition-colors px-8 py-4 border border-gray-600 rounded-lg hover:border-gray-400">
                <span>View Impact Studies</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>

            {/* Availability indicator - FOMO tactic */}
            <motion.div
              className="mt-16 inline-block border border-gray-600 px-4 py-2 text-sm bg-gray-900 bg-opacity-70 rounded-full"
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
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000" />

      {/* Contact Form Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <div className="py-2">
          <h2 className="text-2xl font-bold mb-6 text-black">Get a Proposal</h2>
          <ContactForm onSuccess={() => setIsContactOpen(false)} />
        </div>
      </Dialog>
    </section>
  );
};

export default HeroSection;
