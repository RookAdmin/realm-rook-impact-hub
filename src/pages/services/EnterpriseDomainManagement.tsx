
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Database, Layers, Users, BarChart, Lock } from "lucide-react";
import PageHeader from '@/components/common/PageHeader';

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

const EnterpriseDomainManagement = () => {
  // Domain risks section
  const risks = [
    "Shut down email systems",
    "Break your login flows",
    "Damage brand trust"
  ];

  // Enterprise offerings
  const offerings = [
    {
      title: "Domain Portfolio Structuring",
      description: "Strategic organization of your domain assets for optimal management."
    },
    {
      title: "Auto-Renew + Expiry Monitoring",
      description: "Automated systems to prevent accidental domain expirations."
    },
    {
      title: "Registrar Consolidation",
      description: "Centralize domains from multiple registrars for streamlined management."
    },
    {
      title: "DNS Zone Security & SSL Monitoring",
      description: "Continuous monitoring of DNS configurations and SSL certificates."
    },
    {
      title: "White-Labeled Management Reports",
      description: "Customized reporting for stakeholders and executives."
    },
    {
      title: "Enterprise Support with SLA",
      description: "Dedicated support team with service level agreements."
    }
  ];

  // Ideal clients
  const idealClients = [
    "Startups managing 3+ products or domains",
    "VC-backed companies preparing for acquisition",
    "Global orgs with region-specific domains (.in, .de, .co.uk)",
    "Brand architecture spanning sub-brands or IPs"
  ];

  return (
    <main className="min-h-screen">
      <PageHeader 
        title="Manage Domains at Scale—Without the Chaos."
        subtitle="We secure, monitor, and renew your critical digital assets—so your tech team can focus on scaling, not chasing expiring domains."
        isLarge={true}
      />
      
      {/* Hero CTA Buttons */}
      <section className="py-8 bg-white">
        <div className="realm-container flex flex-wrap gap-4 justify-center">
          <Link to="/contact">
            <Button className="realm-button bg-realm-black text-white">
              Request Enterprise Onboarding
            </Button>
          </Link>
          <Link to="/case-studies">
            <Button className="realm-button border border-realm-black bg-white text-realm-black hover:bg-realm-black hover:text-white">
              Explore Domain Portfolio Services
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Domain Risks Section */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Losing a Domain Can Cost You Millions.
            </h2>
            
            <p className="text-xl mb-8 text-realm-darkgray">
              From phishing threats to accidental expiries, unmanaged domains can:
            </p>
            
            <ul className="space-y-4 mb-8">
              {risks.map((risk, index) => (
                <li key={index} className="flex items-center text-lg">
                  <span className="w-6 h-6 mr-3 flex-shrink-0 flex items-center justify-center bg-realm-black text-white rounded-full text-sm">
                    ✓
                  </span>
                  {risk}
                </li>
              ))}
            </ul>
            
            <p className="text-lg font-medium">
              We eliminate these risks with full-stack domain lifecycle oversight.
            </p>
            
            {/* Domain Lifecycle Visualization */}
            <div className="mt-12 p-8 border border-realm-black">
              <h3 className="text-xl font-medium mb-6 text-center">Domain Lifecycle Management</h3>
              <div className="flex flex-wrap justify-between items-center">
                <div className="text-center p-4">
                  <div className="h-12 w-12 rounded-full bg-realm-black text-white flex items-center justify-center mx-auto mb-2">1</div>
                  <p>Registration</p>
                </div>
                <div className="hidden md:block">→</div>
                <div className="text-center p-4">
                  <div className="h-12 w-12 rounded-full bg-realm-black text-white flex items-center justify-center mx-auto mb-2">2</div>
                  <p>DNS Configuration</p>
                </div>
                <div className="hidden md:block">→</div>
                <div className="text-center p-4">
                  <div className="h-12 w-12 rounded-full bg-realm-black text-white flex items-center justify-center mx-auto mb-2">3</div>
                  <p>Monitoring</p>
                </div>
                <div className="hidden md:block">→</div>
                <div className="text-center p-4">
                  <div className="h-12 w-12 rounded-full bg-realm-black text-white flex items-center justify-center mx-auto mb-2">4</div>
                  <p>Renewal</p>
                </div>
                <div className="hidden md:block">→</div>
                <div className="text-center p-4">
                  <div className="h-12 w-12 rounded-full bg-realm-black text-white flex items-center justify-center mx-auto mb-2">5</div>
                  <p>Compliance</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Enterprise Offerings Grid */}
      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Enterprise-Grade Domain Management
            </h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {offerings.map((offering, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-8 border border-realm-lightgray hover:border-realm-black transition-all duration-300"
                >
                  <h3 className="text-xl font-display font-medium mb-4">
                    {offering.title}
                  </h3>
                  <p className="text-realm-darkgray">
                    {offering.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Ideal Clients Section */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              Tailored for High-Scale Brands
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {idealClients.map((client, index) => (
                <div key={index} className="flex items-start">
                  <div className="realm-icon-container mr-4 mt-1">
                    <Shield size={24} />
                  </div>
                  <p className="text-lg">{client}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Guarantee Section */}
      <section className="realm-section bg-realm-black text-white">
        <div className="realm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Zero Downtime. Zero Surprises.
            </h2>
            
            <p className="text-xl mb-12 text-white/80 max-w-3xl mx-auto">
              Our enterprise DNS + domain monitoring detects and resolves issues before they affect your users.
              We provide 24/7 alerts, redundancy planning, and managed renewals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-white/20 hover:border-white transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-white">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-medium mb-2">Proactive Security</h3>
              </div>
              <div className="p-6 border border-white/20 hover:border-white transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-white">
                  <Database size={32} />
                </div>
                <h3 className="text-xl font-medium mb-2">Redundancy</h3>
              </div>
              <div className="p-6 border border-white/20 hover:border-white transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-white">
                  <Lock size={32} />
                </div>
                <h3 className="text-xl font-medium mb-2">Compliance</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              One Partner. All Your Domains. Zero Stress.
            </h2>
            
            <div className="flex flex-wrap gap-6 justify-center mt-12">
              <Link to="/contact">
                <Button className="realm-button bg-realm-black text-white">
                  Request a Portfolio Review
                </Button>
              </Link>
              <Link to="/resources">
                <Button className="realm-button border border-realm-black bg-white hover:bg-realm-black hover:text-white">
                  Download Service Brochure
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default EnterpriseDomainManagement;
