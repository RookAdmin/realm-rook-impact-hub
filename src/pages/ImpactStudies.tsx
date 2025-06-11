
import React, { useState } from 'react';
import PageHeader from '@/components/common/PageHeader';
import ImpactStudyCard from '@/components/impact-studies/ImpactStudyCard';
import { impactStudies, categories } from '@/data/impactStudiesData';
import CtaSection from '@/components/CtaSection';

const ImpactStudies = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredStudies = activeCategory === 'All' 
    ? impactStudies 
    : impactStudies.filter(study => study.category === activeCategory || study.tags.includes(activeCategory));

  return (
    <main>
      <PageHeader 
        title="Impact Studies — The Proof is in the Results"
        subtitle="Real transformations. Real results. See how our work drives measurable business impact."
        isLarge={true}
      />
      
      <section className="realm-section">
        <div className="realm-container">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 ${
                  activeCategory === category
                    ? 'bg-realm-black text-white'
                    : 'bg-white text-realm-black border border-realm-black'
                } hover:bg-realm-black hover:text-white transition-colors`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <ImpactStudyCard key={study.id} study={study} />
            ))}
          </div>
          
          {filteredStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl">No impact studies found for this category.</p>
              <button 
                className="mt-4 realm-button"
                onClick={() => setActiveCategory('All')}
              >
                View All Studies
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </main>
  );
};

export default ImpactStudies;
