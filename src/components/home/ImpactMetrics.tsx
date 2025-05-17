
import React, { useState, useEffect } from 'react';
import { Users, Zap, CheckCircle, Infinity as InfinityIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.2 });
    
    const element = document.getElementById('impact-metrics');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  const metricVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const metrics = [
    {
      icon: <Users size={32} />,
      value: "30+",
      label: "High-Impact Clients",
      id: "clients"
    },
    {
      icon: <Zap size={32} />,
      value: "10X",
      label: "Faster Delivery via RAD Process",
      id: "delivery"
    },
    {
      icon: <CheckCircle size={32} />,
      value: "100%",
      label: "Brand Clarity",
      id: "clarity"
    },
    {
      icon: <InfinityIcon size={32} />,
      value: "∞",
      label: "Creative Possibilities",
      id: "possibilities"
    }
  ];

  return (
    <section id="impact-metrics" className="realm-section bg-white">
      <div className="realm-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              className="p-8 border border-realm-lightgray hover:border-realm-black transition-all duration-300 text-center"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={metricVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-6">
                {metric.icon}
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold mb-2">
                {metric.value}
              </div>
              <div className="text-lg text-realm-darkgray">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
