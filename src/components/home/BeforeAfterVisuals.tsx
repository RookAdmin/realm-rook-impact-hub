
import React from 'react';
import { motion } from 'framer-motion';

const BeforeAfterVisuals = () => {
  const transformations = [
    {
      id: "branding",
      title: "Branding Transformation",
      before: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800&h=500",
      after: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800&h=500",
      beforeLabel: "Before Rook",
      afterLabel: "After Rook",
      caption: "From unclear visual identity to cohesive brand system that communicates value."
    }
  ];

  return (
    <section className="realm-section bg-white">
      <div className="realm-container">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Transformation Stories</h2>
          <div className="w-16 h-1 bg-realm-black"></div>
        </div>

        {transformations.map((item) => (
          <motion.div 
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div className="relative">
                <img 
                  src={item.before}
                  alt={`${item.title} before`}
                  className="w-full realm-image-greyscale border border-realm-lightgray"
                />
                <div className="absolute top-4 left-4 bg-realm-black text-white px-4 py-2 font-medium">
                  {item.beforeLabel}
                </div>
              </div>
              <p className="text-center text-realm-darkgray italic">Inconsistent design, poor hierarchy, confusing messaging</p>
            </div>
            
            <div className="space-y-8">
              <div className="relative">
                <img 
                  src={item.after}
                  alt={`${item.title} after`}
                  className="w-full realm-image-greyscale border border-realm-black"
                />
                <div className="absolute top-4 left-4 bg-realm-black text-white px-4 py-2 font-medium">
                  {item.afterLabel}
                </div>
              </div>
              <p className="text-center text-realm-darkgray italic">Clear visual hierarchy, strategic messaging, consistent brand system</p>
            </div>
            
            <div className="md:col-span-2 text-center mt-8">
              <p className="text-lg font-display">{item.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BeforeAfterVisuals;
