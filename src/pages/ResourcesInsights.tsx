
import React, { useState } from 'react';
import PageHeader from '@/components/common/PageHeader';
import InsightCard from '@/components/resources/InsightCard';
import { insights, insightTags } from '@/data/insightsData';
import CtaSection from '@/components/CtaSection';

const ResourcesInsights = () => {
  const [activeTag, setActiveTag] = useState('All');
  
  const filteredInsights = activeTag === 'All' 
    ? insights 
    : insights.filter(insight => insight.tags.includes(activeTag));

  return (
    <main>
      <PageHeader 
        title="Insights — Thoughtful Ideas. Industry-Relevant Content."
        subtitle="Strategic frameworks, creative processes, and thought leadership to help you navigate the digital landscape."
        isLarge={true}
      />
      
      <section className="realm-section">
        <div className="realm-container">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-12">
            {insightTags.map((tag) => (
              <button
                key={tag}
                className={`px-4 py-2 rounded-full ${
                  activeTag === tag
                    ? 'bg-realm-black text-white'
                    : 'bg-white text-realm-black border border-realm-black'
                } hover:bg-realm-black hover:text-white transition-colors`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
          
          {filteredInsights.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl">No insights found for this tag.</p>
              <button 
                className="mt-4 realm-button"
                onClick={() => setActiveTag('All')}
              >
                View All Insights
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
            Want us to cover a topic?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            If there's a specific design, development, or strategy topic you'd like our team to address,
            we're all ears.
          </p>
          <a 
            href="mailto:hlo@realmrook.com" 
            className="realm-button inline-block"
          >
            Write to us
          </a>
        </div>
      </section>
      
      <CtaSection />
    </main>
  );
};

export default ResourcesInsights;
