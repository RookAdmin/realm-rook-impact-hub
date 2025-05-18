
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Globe, Shield, Layers, Zap, Check } from "lucide-react";
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

const SaaSStartups = () => {
  // SaaS unique challenges
  const challenges = [
    {
      title: "Global Domain Presence",
      description: "Secure consistent branding across international markets"
    },
    {
      title: "Product Domain Portfolio",
      description: "Manage multiple products and subdomains seamlessly"
    },
    {
      title: "Security & Reliability",
      description: "Enterprise-grade protection from phishing and DNS attacks"
    },
    {
      title: "Scaling Infrastructure",
      description: "Domain architecture that scales with your user base"
    }
  ];

  // Benefits list
  const benefits = [
    "Unified dashboard for all your product domains",
    "DNS priority support with 99.9% uptime guarantee",
    "Automatic renewal system to prevent costly outages",
    "Expert guidance on geographical expansion strategy"
  ];

  return (
    <main className="min-h-screen">
      <ServiceBreadcrumb 
        serviceName="SaaS Startups" 
        serviceUrl="/discover/saas-startups" 
      />
      
      {/* Hero Section */}
      <PageHeader 
        title="Domain Management Built for SaaS Scale"
        subtitle="Simplified infrastructure management for fast-growing software companies."
        isLarge={true}
      />
      
      {/* Hero CTA Buttons */}
      <section className="py-8 bg-white">
        <div className="realm-container flex flex-wrap gap-4 justify-center">
          <Link to="/contact">
            <Button className="realm-button bg-realm-black text-white">
              Protect Your SaaS Brand Now
            </Button>
          </Link>
          <Link to="/services/domain-consultation">
            <Button className="realm-button border border-realm-black bg-white text-realm-black hover:bg-realm-black hover:text-white">
              Simplify Your Domain Management
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              SaaS Domain Challenges Solved
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg text-center mb-12">
              <p>
                Your software is only as reliable as the domain infrastructure it runs on. 
                As you scale to serve thousands of users, even minutes of downtime can damage 
                your reputation and impact revenue.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {challenges.map((challenge, index) => (
                <div key={index} className="p-6 border border-realm-lightgray hover:border-realm-black transition-all duration-300">
                  <h3 className="text-xl font-medium mb-2">{challenge.title}</h3>
                  <p>{challenge.description}</p>
                </div>
              ))}
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              Enterprise Management at Startup Speed
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
            
            <div className="mt-12 p-8 border border-realm-black">
              <h3 className="text-xl font-medium mb-4 text-center">SaaS Domain Portfolio Management</h3>
              <div className="flex flex-wrap justify-between items-center">
                <div className="text-center p-4 w-full md:w-auto">
                  <div className="h-14 w-14 rounded-full bg-realm-black text-white flex items-center justify-center mx-auto mb-3">
                    <Globe size={24} />
                  </div>
                  <p>Core App Domains</p>
                </div>
                <div className="hidden md:block">→</div>
                <div className="text-center p-4 w-full md:w-auto">
                  <div className="h-14 w-14 rounded-full bg-realm-black text-white flex items-center justify-center mx-auto mb-3">
                    <Layers size={24} />
                  </div>
                  <p>API Subdomains</p>
                </div>
                <div className="hidden md:block">→</div>
                <div className="text-center p-4 w-full md:w-auto">
                  <div className="h-14 w-14 rounded-full bg-realm-black text-white flex items-center justify-center mx-auto mb-3">
                    <Shield size={24} />
                  </div>
                  <p>Security & DNS</p>
                </div>
                <div className="hidden md:block">→</div>
                <div className="text-center p-4 w-full md:w-auto">
                  <div className="h-14 w-14 rounded-full bg-realm-black text-white flex items-center justify-center mx-auto mb-3">
                    <Zap size={24} />
                  </div>
                  <p>Automated Monitoring</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Client Logos Section */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Trusted By Growing SaaS Companies
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
              <div className="realm-client-logo h-12 w-32 bg-gray-200 flex items-center justify-center">Client 1</div>
              <div className="realm-client-logo h-12 w-32 bg-gray-200 flex items-center justify-center">Client 2</div>
              <div className="realm-client-logo h-12 w-32 bg-gray-200 flex items-center justify-center">Client 3</div>
              <div className="realm-client-logo h-12 w-32 bg-gray-200 flex items-center justify-center">Client 4</div>
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
              Never Worry About Domain Management Again
            </h2>
            
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Focus on building your product while we handle your entire domain infrastructure.
            </p>
            
            <Link to="/contact">
              <Button className="realm-button bg-white text-realm-black hover:bg-gray-200">
                Schedule Strategy Session
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SaaSStartups;
