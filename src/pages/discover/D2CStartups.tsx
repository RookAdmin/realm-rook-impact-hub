
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Rocket, Shield, Settings, Check } from "lucide-react";
import PageHeader from '@/components/common/PageHeader';
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const D2CStartups = () => {
  // Benefits list
  const benefits = [
    "Secure your brand domains across all sales channels",
    "Protect against cybersquatting and brand impersonation",
    "Manage all domains in one unified dashboard",
    "Expert support for international expansion"
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Realm eliminated our domain headaches so we could focus on growing our brand presence across channels.",
      author: "Sarah J.",
      company: "GlowCo Skincare"
    },
    {
      quote: "Their domain security package saved us from a potential brand disaster and customer confusion.",
      author: "Michael T.",
      company: "FitBox Subscription"
    }
  ];

  return (
    <main className="min-h-screen">
      <ServiceBreadcrumb 
        serviceName="D2C Startups" 
        serviceUrl="/discover/d2c-startups" 
      />
      
      {/* Hero Section */}
      <PageHeader 
        title="Protect & Scale Your D2C Brand Identity"
        subtitle="Domain management and brand protection tailored for direct-to-consumer businesses."
        isLarge={true}
      />
      
      {/* Hero CTA Buttons */}
      <section className="py-8 bg-white">
        <div className="realm-container flex flex-wrap gap-4 justify-center">
          <Link to="/contact">
            <Button className="realm-button bg-realm-black text-white">
              Secure Your Brand Today
            </Button>
          </Link>
          <Link to="/services/domain-consultation">
            <Button className="realm-button border border-realm-black bg-white text-realm-black hover:bg-realm-black hover:text-white">
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Main Value Proposition */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              D2C Brands Face Unique Domain Challenges
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg text-center mb-12">
              <p className="mb-6">
                As you scale across multiple channels, your domain portfolio becomes increasingly complex and vulnerable. 
                A single domain oversight can cost you sales, customer trust, and brand equity.
              </p>
              <p className="font-medium">
                Realm provides enterprise-grade domain management—scaled for growing D2C brands.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 border border-realm-lightgray hover:border-realm-black transition-all duration-300">
                <div className="w-16 h-16 mb-4 flex items-center justify-center border border-realm-black">
                  <Rocket size={32} />
                </div>
                <h3 className="text-xl font-medium mb-2">Growth-Ready</h3>
                <p>Domain infrastructure that scales with your channel expansion strategy</p>
              </div>
              
              <div className="p-6 border border-realm-lightgray hover:border-realm-black transition-all duration-300">
                <div className="w-16 h-16 mb-4 flex items-center justify-center border border-realm-black">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-medium mb-2">Brand Protected</h3>
                <p>Security measures to prevent counterfeits and unauthorized resellers</p>
              </div>
              
              <div className="p-6 border border-realm-lightgray hover:border-realm-black transition-all duration-300">
                <div className="w-16 h-16 mb-4 flex items-center justify-center border border-realm-black">
                  <Settings size={32} />
                </div>
                <h3 className="text-xl font-medium mb-2">Effortless</h3>
                <p>One dashboard for all your domains, renewals, and DNS settings</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
                Built For D2C Growth Trajectories
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-realm-black mr-3 mt-1">
                      <Check size={20} />
                    </span>
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Trusted by D2C Brands Like Yours
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-realm-lightgray p-8">
                  <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="realm-section bg-realm-black text-white">
        <div className="realm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Your Brand Deserves Enterprise-Level Protection
            </h2>
            
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Join the D2C brands that trust Realm with their most valuable digital assets.
            </p>
            
            <Link to="/contact">
              <Button className="realm-button bg-white text-realm-black hover:bg-gray-200">
                Get Started Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default D2CStartups;
