import React from 'react';
import { motion } from 'framer-motion';

const PartnerLogos = () => {
  const clients = [
    { name: 'Client 1', logo: '/PartnerLogos/CapitalEngineeringConsultancy.png' },
    { name: 'Client 2', logo: '/PartnerLogos/CoventryRoadDentalCare.png' },
    { name: 'Client 3', logo: '/PartnerLogos/finequs.webp' },
    { name: 'Client 4', logo: '/PartnerLogos/Greenhouse.png' },
    { name: 'Client 5', logo: '/PartnerLogos/V5Digital.png' },
    { name: 'Client 6', logo: '/PartnerLogos/ZGuard.png' },
    { name: 'Client 7', logo: '/PartnerLogos/chefavr.png' },
    { name: 'Client 8', logo: '/PartnerLogos/dspgroups.png' },
    { name: 'Client 9', logo: '/PartnerLogos/namsushi.png' },
    { name: 'Client 10', logo: '/PartnerLogos/sports29.png' },
    { name: 'Client 11', logo: '/PartnerLogos/annauni.png' },
    { name: 'Client 12', logo: '/PartnerLogos/huarchery.png' },
  ];

  return (
    <section className="realm-section bg-realm-lightgray overflow-hidden">
      <div className="realm-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold">
            Trusted By Industry Leaders
          </h2>
        </div>

        {/* Continuous sliding logos */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{
              x: ["0%", "-100%"], // continuous scroll
            }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-32 h-20 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
