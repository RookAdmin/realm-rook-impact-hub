
import React from 'react';
import { LightbulbIcon, Paintbrush, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const RadProcessVisual = () => {
  const steps = [
    {
      id: "ideate",
      title: "Ideate",
      icon: <LightbulbIcon size={28} />,
      description: "Strategic thinking & planning"
    },
    {
      id: "design",
      title: "Design",
      icon: <Paintbrush size={28} />,
      description: "Crafting the experience"
    },
    {
      id: "develop",
      title: "Develop",
      icon: <Code size={28} />,
      description: "Building the solution"
    },
    {
      id: "launch",
      title: "Launch",
      icon: <Rocket size={28} />,
      description: "Deploying with precision"
    }
  ];

  return (
    <section className="realm-section bg-white">
      <div className="realm-container">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">The RAD Process</h2>
          <div className="w-16 h-1 bg-realm-black"></div>
          <p className="mt-6 text-realm-darkgray max-w-3xl mx-auto text-center">
            Our streamlined methodology delivers results 10X faster without sacrificing quality.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-realm-lightgray -translate-y-1/2 z-0"></div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full border-2 border-realm-black bg-white flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
                <p className="text-realm-darkgray">{step.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Result Label */}
          <div className="flex justify-center mt-16">
            <div className="bg-realm-black text-white px-8 py-3 font-display text-lg">
              10X Faster Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadProcessVisual;
