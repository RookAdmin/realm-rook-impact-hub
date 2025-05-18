
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageHeader from '@/components/common/PageHeader';
import { impactStudies, categories } from '@/data/impactStudiesData';
import ImpactStudyCard from '@/components/impact-studies/ImpactStudyCard';
import CtaSection from '@/components/CtaSection';

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeRegion, setActiveRegion] = useState('All');
  
  // Create a list of unique regions from the impact studies
  const regions = ['All', ...new Set(impactStudies.map(study => study.region || 'Global'))];

  // Filter studies by both category and region
  const filteredStudies = impactStudies.filter(study => {
    const matchesCategory = activeCategory === 'All' || study.category === activeCategory || study.tags.includes(activeCategory);
    const matchesRegion = activeRegion === 'All' || study.region === activeRegion;
    return matchesCategory && matchesRegion;
  });

  // Featured case studies for the top section
  const featuredCaseStudies = [
    {
      category: "E-commerce / UX Design",
      title: "RetailCore Rebrand",
      description: "How we increased conversion rates by 38% through strategic UX redesign and brand positioning.",
      link: "/impact-studies/retailcore-rebrand"
    },
    {
      category: "SaaS / Development",
      title: "Fluent Finance Dashboard",
      description: "Rebuilding a complex financial app that reduced load time by 75% and improved user retention.",
      link: "/impact-studies/fluent-finance"
    }
  ];

  return (
    <main className="min-h-screen">
      <PageHeader 
        title="Impact Studies"
        subtitle="Real transformations. Real results. See how our work drives measurable business impact."
        isLarge={true}
      />
      
      {/* Featured Case Studies Section */}
      <section className="realm-section">
        <div className="realm-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Featured Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredCaseStudies.map((study, index) => (
              <div key={index} className="border border-realm-lightgray p-8 hover:border-realm-black transition-all duration-300">
                <span className="text-sm text-realm-darkgray block mb-4">{study.category}</span>
                <h3 className="text-2xl font-display font-bold mb-4">{study.title}</h3>
                <p className="text-realm-darkgray mb-6">{study.description}</p>
                <Link to={study.link} className="realm-link flex items-center space-x-2">
                  <span>View case study</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Results & Metrics */}
      <section className="realm-section bg-realm-black text-white">
        <div className="realm-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Our Impact By The Numbers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-white/20">
              <h3 className="text-4xl font-bold mb-2">38%</h3>
              <p className="text-sm text-white/80">Average Increase in Conversion Rate</p>
            </div>
            <div className="text-center p-6 border border-white/20">
              <h3 className="text-4xl font-bold mb-2">75%</h3>
              <p className="text-sm text-white/80">Reduction in Load Times</p>
            </div>
            <div className="text-center p-6 border border-white/20">
              <h3 className="text-4xl font-bold mb-2">230%</h3>
              <p className="text-sm text-white/80">Increase in Social Engagement</p>
            </div>
            <div className="text-center p-6 border border-white/20">
              <h3 className="text-4xl font-bold mb-2">85+</h3>
              <p className="text-sm text-white/80">Successful Client Projects</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* All Case Studies / Impact Studies */}
      <section className="realm-section">
        <div className="realm-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">All Impact Studies</h2>
          
          {/* Filter by Industry/Category */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Filter by Industry</h3>
            <div className="flex flex-wrap items-center gap-2 mb-6">
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
          </div>
          
          {/* Filter by Region */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3">Filter by Region</h3>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {regions.map((region) => (
                <button
                  key={region}
                  className={`px-4 py-2 ${
                    activeRegion === region
                      ? 'bg-realm-black text-white'
                      : 'bg-white text-realm-black border border-realm-black'
                  } hover:bg-realm-black hover:text-white transition-colors`}
                  onClick={() => setActiveRegion(region)}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <ImpactStudyCard key={study.id} study={study} />
            ))}
          </div>
          
          {filteredStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl">No impact studies found matching your filters.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <button 
                  className="realm-button bg-realm-black text-white"
                  onClick={() => {
                    setActiveCategory('All');
                    setActiveRegion('All');
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Client Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white">
              <p className="text-lg italic mb-6">
                "Realm transformed our entire digital presence. The results speak for themselves—our conversion rates have never been higher."
              </p>
              <p className="font-medium">— Marketing Director, RetailCore</p>
            </div>
            <div className="p-8 bg-white">
              <p className="text-lg italic mb-6">
                "Working with Realm was the best decision we made last year. Their strategic approach to our challenges delivered measurable impact."
              </p>
              <p className="font-medium">— CEO, Fluent Finance</p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
};

export default CaseStudies;
