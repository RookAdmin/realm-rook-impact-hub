
import React from 'react';
import { motion } from 'framer-motion';

const PartnerLogos = () => {
  // Mock client logos (in a real application, these would be images imported from assets)
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

  return (
    <section className="realm-section bg-realm-lightgray">
      <div className="realm-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold">Trusted By Industry Leaders</h2>
        </div>

        {/* Client logos grid */}
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
  );
};

export default PartnerLogos;
