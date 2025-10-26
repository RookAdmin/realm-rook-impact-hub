import React, { useState } from "react";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from '@/components/ContactForm';

const TopHeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const stats = [
    { icon: Users, label: "Brands Partnered", value: "50+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" },
    { icon: Zap, label: "AI Tools Deployed", value: "200+" }
  ];

  return (
    <section className="relative py-20 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Main content */}
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 md:space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
                Become A Top 1%{" "}
                <span className="relative inline-block">
                  Brand
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-foreground/20"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Unleash next-level growth with AI-powered agents orchestrating your tech, marketing, and creative—crafted for brands serious about dominance.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => setIsContactOpen(true)}
                className="group bg-foreground text-background px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Your AI Growth Strategy
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="/case-studies"
                className="border-2 border-foreground/20 text-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5 flex items-center justify-center gap-2"
              >
                See Our Work
                <ArrowRight size={18} />
              </a>
            </motion.div>

            {/* Agency details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4 md:pt-6 space-y-2"
            >
              <p className="text-sm font-medium text-foreground">
                Agency-grade AI agents for marketing, operations, and product.
              </p>
              <p className="text-sm text-muted-foreground">
                Trusted by high-growth startups.
              </p>
            </motion.div>
          </div>

          {/* Right side - Stats panel with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Glassmorphism panel */}
            <div className="relative backdrop-blur-xl bg-foreground/5 border border-foreground/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl">
              {/* Animated glow effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-foreground/20 to-foreground/10 rounded-3xl blur opacity-30"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative space-y-6 md:space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Driving Results That Matter
                  </h3>
                  <p className="text-muted-foreground">
                    Real impact, measurable growth
                  </p>
                </div>

                {/* Stats */}
                <div className="grid gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className="group flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-foreground/5 hover:border-foreground/20 transition-all duration-300 hover:scale-105"
                      >
                        <div className="p-3 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                          <Icon className="w-6 h-6 text-foreground" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-foreground">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Floating geometric elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border border-foreground/10 rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-foreground/10 rounded-lg rotate-45 animate-pulse delay-1000" />
              </div>
            </div>

            {/* Additional floating elements */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 border border-foreground/5 rounded-full -z-10"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full p-1">
          <motion.div
            className="w-1 h-2 bg-foreground/40 rounded-full mx-auto"
            animate={{
              y: [0, 16, 0],
            }}
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