import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

const TopHeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const services = ["AI Automation", "App/Website Development", "Digital Marketing", "Domain Name Advisory"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated line VFX - More visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal lines */}
        <motion.div
          className="absolute h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"
          style={{ width: "60%", top: "20%", left: "0" }}
          animate={{
            x: ["-100%", "200%"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent"
          style={{ width: "40%", top: "45%", right: "0" }}
          animate={{
            x: ["100%", "-200%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />
        <motion.div
          className="absolute h-[2px] bg-gradient-to-r from-transparent via-purple-300 to-transparent"
          style={{ width: "50%", top: "70%", left: "0" }}
          animate={{
            x: ["-100%", "200%"],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 10,
          }}
        />

        {/* Vertical lines */}
        <motion.div
          className="absolute w-[2px] bg-gradient-to-b from-transparent via-gray-400 to-transparent"
          style={{ height: "50%", left: "25%", top: "0" }}
          animate={{
            y: ["-100%", "200%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute w-[2px] bg-gradient-to-b from-transparent via-blue-300 to-transparent"
          style={{ height: "60%", left: "70%", bottom: "0" }}
          animate={{
            y: ["100%", "-200%"],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
            delay: 8,
          }}
        />
        
        {/* Diagonal line for extra dynamism */}
        <motion.div
          className="absolute w-[2px] h-[80%] bg-gradient-to-b from-transparent via-indigo-200 to-transparent origin-center"
          style={{ left: "50%", top: "10%", transform: "rotate(25deg)" }}
          animate={{
            opacity: [0, 0.3, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 15,
          }}
        />
      </div>

      {/* Minimal floating gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ backgroundColor: "rgba(59, 130, 246, 0.08)" }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-[350px] h-[350px] rounded-full blur-[100px]"
        style={{ backgroundColor: "rgba(168, 85, 247, 0.06)" }}
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-w-6xl py-24">
        <div className="text-center space-y-10 md:space-y-12">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 md:space-y-6"
          >
            <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-light leading-[1.1] text-black tracking-tight lg:whitespace-nowrap">
              Become a Top <span className="font-bold text-[1.15em] inline-block">1%</span> Brand
            </h1>

            <motion.p
              className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              We build your brand, while you focus on your business.
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={() => setIsContactOpen(true)}
              className="group relative inline-flex items-center gap-3 bg-black text-white px-10 py-4 md:px-12 md:py-5 rounded-full font-medium text-base md:text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/10"
            >
              <span>Get Started</span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Services tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-sm md:text-base text-gray-500 font-light pt-4"
          >
            {services.map((service, index) => (
              <React.Fragment key={service}>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="hover:text-gray-900 transition-colors duration-300 cursor-default"
                >
                  {service}
                </motion.span>
                {index < services.length - 1 && <span className="w-1 h-1 rounded-full bg-gray-300" />}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 md:bottom-14 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.8 },
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full p-1.5 flex items-start justify-center">
          <motion.div
            className="w-1.5 h-2.5 bg-gray-400 rounded-full"
            animate={{ y: [0, 14, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Contact Form Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <div className="py-2">
            <h2 className="text-2xl font-display font-bold mb-6 text-black">Get Your AI Growth Strategy</h2>
            <ContactForm onSuccess={() => setIsContactOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TopHeroSection;
