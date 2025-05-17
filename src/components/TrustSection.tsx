
import React from 'react';
import { Users, Zap, CheckCircle } from 'lucide-react';

const TrustSection = () => {
  // Mock client logos (in a real application, these would be images imported from assets)
  const clients = [
    { name: 'Client 1', logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100' },
    { name: 'Client 2', logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100' },
    { name: 'Client 3', logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100' },
    { name: 'Client 4', logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100' },
    { name: 'Client 5', logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100' },
    { name: 'Client 6', logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100' },
  ];

  // Impact metrics with icons
  const impactMetrics = [
    { icon: <Users size={32} />, before: '120s', after: '1.8s', metric: 'Load Time', id: 'load' },
    { icon: <Zap size={32} />, before: '1.3%', after: '4.8%', metric: 'Conversion Rate', id: 'conversion' },
    { icon: <CheckCircle size={32} />, before: '56%', after: '89%', metric: 'User Satisfaction', id: 'satisfaction' },
  ];

  return (
    <section className="realm-section bg-white">
      <div className="realm-container">
        <div className="text-center mb-10">
          <h2 className="text-lg font-medium text-realm-darkgray">
            Trusted by 100+ brands across 10 countries
          </h2>
        </div>

        {/* Client logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="realm-client-logo"
              />
            </div>
          ))}
        </div>

        <div className="border-t border-realm-lightgray pt-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Impact Snapshot</h2>
            <p className="text-realm-darkgray mt-4">Measurable results from our recent projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactMetrics.map((metric) => (
              <div key={metric.id} className="border border-realm-lightgray p-8 hover:border-realm-black transition-all duration-300">
                <div className="flex justify-center mb-6">
                  {metric.icon}
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xl font-bold text-red-600 line-through opacity-70">
                    {metric.before}
                  </div>
                  <ArrowIndicator />
                  <div className="text-xl font-bold">
                    {metric.after}
                  </div>
                </div>
                <div className="text-lg text-realm-darkgray font-medium text-center">
                  {metric.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ArrowIndicator = () => (
  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 10H38" stroke="black" strokeWidth="1.5"/>
    <path d="M30 2L38 10L30 18" stroke="black" strokeWidth="1.5"/>
  </svg>
);

export default TrustSection;
