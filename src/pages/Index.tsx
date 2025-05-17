
import React from 'react';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import ServiceCard from '@/components/ServiceCard';
import CtaSection from '@/components/CtaSection';
import { Brush, Code, BarChart, Layers } from 'lucide-react';

const Index = () => {
  // Services data
  const services = [
    {
      title: 'Branding',
      description: 'Crafting unique identities that resonate with your audience and stand the test of time.',
      icon: <Brush size={24} />,
      link: '/services#branding',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing user-friendly experiences that delight users and achieve business goals.',
      icon: <Layers size={24} />,
      link: '/services#ui-ux',
    },
    {
      title: 'Web/App Development',
      description: 'Building responsive, scalable digital homes that perform flawlessly across all devices.',
      icon: <Code size={24} />,
      link: '/services#development',
    },
    {
      title: 'SEO',
      description: 'Boosting online visibility through data-driven strategies that deliver measurable results.',
      icon: <BarChart size={24} />,
      link: '/services#seo',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Trust Section */}
      <TrustSection />
      
      {/* Services Section */}
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
      
      {/* CTA Section */}
      <CtaSection />
    </main>
  );
};

export default Index;
