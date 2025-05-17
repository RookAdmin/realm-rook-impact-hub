
import React from 'react';
import ServiceCard from '@/components/ServiceCard';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

interface ServicesSectionProps {
  services: ServiceItem[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="realm-section bg-white">
      <div className="realm-container">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold">What We Do</h2>
          <div className="w-16 h-1 bg-realm-black mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
