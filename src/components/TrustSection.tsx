
import React from 'react';

const TrustSection = () => {
  // Mock client logos (in a real application, these would be images imported from assets)
  const clients = [
    { name: 'Client 1', id: 'client1' },
    { name: 'Client 2', id: 'client2' },
    { name: 'Client 3', id: 'client3' },
    { name: 'Client 4', id: 'client4' },
    { name: 'Client 5', id: 'client5' },
    { name: 'Client 6', id: 'client6' },
  ];

  // Mock impact metrics
  const impactMetrics = [
    { before: '120s', after: '1.8s', metric: 'Load Time', id: 'load' },
    { before: '1.3%', after: '4.8%', metric: 'Conversion Rate', id: 'conversion' },
    { before: '56%', after: '89%', metric: 'User Satisfaction', id: 'satisfaction' },
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
          {clients.map((client) => (
            <div 
              key={client.id}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              {/* In a real app, this would be an image */}
              <div className="w-24 h-12 bg-realm-lightgray flex items-center justify-center">
                {client.name}
              </div>
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
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xl font-bold text-red-600 line-through opacity-70">
                    {metric.before}
                  </div>
                  <ArrowIndicator />
                  <div className="text-xl font-bold">
                    {metric.after}
                  </div>
                </div>
                <div className="text-lg text-realm-darkgray font-medium">
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
