import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from '@/components/ContactForm';

const TopHeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const services = [
    "Website Development",
    "Digital Marketing", 
    "Branding",
    "Process Automation"
  ];

  return (
    <section className="relative py-24 md:py-32 lg:py-48 xl:py-56 flex items-center justify-center overflow-hidden bg-foreground">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--background) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background) / 0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-foreground via-foreground to-foreground/95" />

      {/* Subtle floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-[600px] h-[600px] bg-background/[0.03] rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] bg-background/[0.04] rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.04, 0.03, 0.04],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-w-7xl">
        <div className="text-center space-y-10 md:space-y-14">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 md:space-y-7"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[1.05] text-background tracking-tight">
              Become a Top{" "}
              <span className="font-bold text-[1.15em] inline-block">
                1%
              </span>{" "}
              Brand
            </h1>

            <motion.p 
              className="text-base md:text-xl lg:text-2xl text-background/70 max-w-3xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              We build your brand, while you focus on your business.
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={() => setIsContactOpen(true)}
              className="group relative inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 rounded-full font-medium text-base md:text-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-background/20"
            >
              <span>Get Started</span>
              <ArrowRight 
                size={20} 
                className="transition-transform duration-300 group-hover:translate-x-1" 
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-background/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.8, opacity: 0 }}
                transition={{ duration: 0.7 }}
              />
            </button>
          </motion.div>

          {/* Services tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-sm md:text-base text-background/60 font-light"
          >
            {services.map((service, index) => (
              <React.Fragment key={service}>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + (index * 0.1),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="hover:text-background transition-colors duration-300 cursor-default"
                >
                  {service}
                </motion.span>
                {index < services.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-background/30" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - more subtle */}
      <motion.div
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-6 h-10 border border-background/20 rounded-full p-1.5 flex items-start justify-center">
          <motion.div
            className="w-1.5 h-2.5 bg-background/40 rounded-full"
            animate={{ y: [0, 14, 0] }}
            transition={{
              duration: 2,
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
            <h2 className="text-2xl font-display font-bold mb-6">Get Your AI Growth Strategy</h2>
            <ContactForm onSuccess={() => setIsContactOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TopHeroSection;