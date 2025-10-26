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
    <section className="relative py-32 md:py-40 lg:py-48 flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Subtle floating orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-foreground/[0.02] rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.02, 0.03, 0.02],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-foreground/[0.02] rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.03, 0.02, 0.03],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="text-center space-y-12">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] text-foreground tracking-tight">
              Become a Top{" "}
              <span className="font-bold text-[1.2em] inline-block">
                1%
              </span>{" "}
              Brand
            </h1>

            <motion.p 
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light"
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
              className="group relative inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium transition-all duration-500 hover:scale-[1.02] hover:shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight 
                size={18} 
                className="transition-transform duration-300 group-hover:translate-x-1" 
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-foreground/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </button>
          </motion.div>

          {/* Services tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground font-light"
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
                  className="hover:text-foreground transition-colors duration-300"
                >
                  {service}
                </motion.span>
                {index < services.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - more subtle */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-5 h-8 border border-foreground/10 rounded-full p-1 flex items-start justify-center">
          <motion.div
            className="w-1 h-2 bg-foreground/20 rounded-full"
            animate={{ y: [0, 12, 0] }}
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