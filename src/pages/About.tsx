
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, TrendingUp, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Animations configuration
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const clients = [
    { name: 'Client 1', logo: '/PartnerLogos/CapitalEngineeringConsultancy.png' },
    { name: 'Client 2', logo: '/PartnerLogos/CoventryRoadDentalCare.png' },
    { name: 'Client 3', logo: '/PartnerLogos/finequs.webp' },
    { name: 'Client 4', logo: '/PartnerLogos/Greenhouse.png' },
    { name: 'Client 5', logo: '/PartnerLogos/V5Digital.png' },
    { name: 'Client 6', logo: '/PartnerLogos/ZGuard.png' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Beliefs/Pillars data
  const beliefs = [
    {
      title: "Precision-Led Design",
      description: "Aesthetic meets function"
    },
    {
      title: "Performance-Focused Code",
      description: "Fast, scalable, bulletproof"
    },
    {
      title: "Client Obsession",
      description: "We're your partners, not vendors"
    },
    {
      title: "Bold Thinking",
      description: "Ideas that win hearts and markets"
    }
  ];

  // Realm Code statements
  const realmStatements = [
    "Average is an insult.",
    "Design must convert.",
    "Every line of code is brand real estate.",
    "We don't pitch. We prove."
  ];

  // Trusted brands
  const trustedBrands = [
    "ACME Corp", "Zenith", "Horizon", "Vertex", "Nova"
  ];

  // Impact metrics
  const impactMetrics = [
    { 
      value: "40+", 
      label: "brands scaled",
      icon: <Briefcase className="h-6 w-6" />
    },
    { 
      value: "2M+", 
      label: "organic impressions driven",
      icon: <TrendingUp className="h-6 w-6" />
    },
    { 
      value: "95%", 
      label: "client retention",
      icon: <Users className="h-6 w-6" />
    },
    { 
      value: "0", 
      label: "missed deadlines",
      icon: <Clock className="h-6 w-6" />
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-realm-black text-white">
        <div className="realm-container">
          <motion.div 
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h1 className="realm-headline">
              Agencies talk. We build realms that speak volumes.
            </h1>
            
            <p className="realm-subheadline text-realm-lightgray mt-6">
              For brands that want to matter, move people, and dominate digital. 
              Realm by Rook is where identity, design, and growth meet precision.
            </p>
            
            <div className="mt-12">
              <Link to="/contact">
                <Button className="realm-button bg-white text-realm-black hover:bg-realm-lightgray flex items-center space-x-2">
                  <span>Let's Build Your Realm</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-white">
        <div className="realm-container">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold">Built Different</h2>
            <div className="w-16 h-1 bg-realm-black mt-4 mb-8"></div>
            
            <p className="text-xl leading-relaxed mb-6">
              Realm was born from the ashes of mediocrity. We witnessed brands settle for 'good enough' 
              design, half-baked strategies, and indistinguishable digital presences. So we built the 
              antidote—a studio where precision meets ambition.
            </p>
            
            <p className="text-xl leading-relaxed">
              We exist for brands that refuse to be another face in the crowd. Leaders who understand 
              that digital presence isn't decoration—it's the battlefield where market position is won 
              or lost. If you're looking for just another agency, we're not it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Realm Beliefs */}
      <section className="py-20 bg-realm-black text-white">
        <div className="realm-container">
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold">The Realm Beliefs</h2>
            <div className="w-16 h-1 bg-white mt-4"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {beliefs.map((belief, index) => (
              <motion.div 
                key={belief.title}
                className="border border-gray-800 p-10"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-display font-bold mb-3">{belief.title}</h3>
                <p className="text-realm-lightgray">{belief.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Section */}
      <section className="py-20 bg-white">
        <div className="realm-container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl md:text-4xl font-display italic mb-8">
              "From Creators of Rook"
            </div>
            
            <p className="text-lg mb-6">
              Aravindh Ravichandran, Founder
            </p>
            
            <p className="text-lg text-realm-darkgray max-w-2xl mx-auto">
              Realm by Rook was founded by Aravindh Ravichandran as part of the Rook ecosystem, with a mission to help founders and creators launch standout digital identities. Realm operates independently within Rook, with a sharp focus on providing branding, domains, and web systems that are minimal, premium, and built to scale. Trusted by emerging startups and visionaries, Realm is designed to quietly power bold ideas with elegance and clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-realm-black text-white">
        <div className="realm-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {impactMetrics.map((metric, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {metric.icon}
                </div>
                <div className="text-4xl font-display font-bold mb-2">{metric.value}</div>
                <div className="text-realm-lightgray">{metric.label}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-realm-lightgray">
              We don't show off. We show results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="realm-container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Who We Serve</h2>
            
            <p className="text-xl leading-relaxed">
              We partner with visionaries, challengers, and changemakers — not with everyone who has a logo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Realm Code */}
      <section className="py-20 bg-white">
        <div className="realm-container">
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold">The Realm Code</h2>
            <div className="w-16 h-1 bg-realm-black mt-4"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {realmStatements.map((statement, index) => (
              <motion.div 
                key={index}
                className="border-l-4 border-realm-black pl-6 py-2"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl font-display">{statement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Quote */}
      <section className="py-20 bg-realm-black text-white">
        <div className="realm-container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl md:text-5xl font-display font-bold leading-tight">
              "You don't need another agency. You need a realm of your own."
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-white">
        <div className="realm-container">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-large text-realm-darkgray">
              Trusted By Top 1% Brands
            </h3>
          </motion.div>
          
            <motion.div 
                      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    >
                      {clients.map((client, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center justify-center"
                          variants={item}
                        >
                          <img 
                            src={client.logo} 
                            alt={`${client.name} logo`} 
                            className="realm-client-logo"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-realm-black text-white">
        <div className="realm-container">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              If you're ready to lead, we're ready to build.
            </h2>
            
            <Link to="/contact">
              <Button className="realm-button bg-white text-realm-black hover:bg-realm-lightgray flex items-center space-x-2 mx-auto">
                <span>Talk to Realm</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
            
            
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
