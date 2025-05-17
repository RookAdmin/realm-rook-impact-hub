
import React from 'react';

interface MethodStep {
  title: string;
  description: string;
}

interface RealmMethodSectionProps {
  steps: MethodStep[];
}

const RealmMethodSection: React.FC<RealmMethodSectionProps> = ({ steps }) => {
  return (
    <section className="realm-section bg-realm-black text-white">
      <div className="realm-container">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold">This Is How We Build Empires.</h2>
          <div className="w-16 h-1 bg-white mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="mb-4 text-4xl font-display font-bold text-white/30">0{index + 1}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-realm-lightgray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealmMethodSection;
