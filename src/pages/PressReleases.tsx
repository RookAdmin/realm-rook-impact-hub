
import React, { useState } from 'react';
import PageHeader from '@/components/common/PageHeader';
import { pressReleases, pressCategories, pressYears } from '@/data/pressReleasesData';
import { Download, Link as LinkIcon } from 'lucide-react';
import DownloadButton from '@/components/common/DownloadButton';
import ExternalLink from '@/components/common/ExternalLink';
import CtaSection from '@/components/CtaSection';

const PressReleases = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeYear, setActiveYear] = useState('All');
  
  const filteredReleases = pressReleases
    .filter(release => activeCategory === 'All' || release.category === activeCategory)
    .filter(release => activeYear === 'All' || release.year === activeYear);
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <main>
      <PageHeader 
        title="Press Room — Realm by Rook in the Spotlight"
        subtitle="Discover our latest news, press releases, and media coverage."
        isLarge={true}
      />
      
      <section className="realm-section">
        <div className="realm-container">
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1">
              <label htmlFor="categoryFilter" className="block text-sm font-medium mb-2">
                Filter by Category
              </label>
              <select
                id="categoryFilter"
                className="w-full p-3 border border-realm-black bg-white"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                {pressCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex-1">
              <label htmlFor="yearFilter" className="block text-sm font-medium mb-2">
                Filter by Year
              </label>
              <select
                id="yearFilter"
                className="w-full p-3 border border-realm-black bg-white"
                value={activeYear}
                onChange={(e) => setActiveYear(e.target.value)}
              >
                {pressYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="border-t border-realm-lightgray">
            {filteredReleases.length > 0 ? (
              filteredReleases.map((release) => (
                <div 
                  key={release.id} 
                  className="py-6 border-b border-realm-lightgray flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
                >
                  <div className="md:w-1/6">
                    <span className="text-sm text-realm-gray">
                      {formatDate(release.date)}
                    </span>
                  </div>
                  
                  <div className="md:w-3/6">
                    <h3 className="text-xl font-medium">
                      {release.title}
                    </h3>
                    <span className="inline-block mt-1 px-3 py-1 text-xs border border-realm-black rounded-full">
                      {release.category}
                    </span>
                  </div>
                  
                  <div className="md:w-2/6 flex justify-end">
                    {release.isExternalLink ? (
                      <ExternalLink href={release.url} className="inline-flex items-center realm-button">
                        View Article <LinkIcon size={16} className="ml-2" />
                      </ExternalLink>
                    ) : (
                      <DownloadButton 
                        label="Download PDF" 
                        url={release.url} 
                        className="realm-button"
                      />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center">
                <p className="text-lg">No press releases found matching your filters.</p>
                <button 
                  className="mt-4 realm-button"
                  onClick={() => {
                    setActiveCategory('All');
                    setActiveYear('All');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
            Press Kit
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Need comprehensive information about Realm by Rook for media coverage?
            Download our complete press kit with company information, executive bios, and high-resolution assets.
          </p>
          <DownloadButton 
            label="Download Press Kit" 
            url="/assets/realm-press-kit.zip" 
            className="realm-button"
          />
        </div>
      </section>
      
      <section className="realm-section">
        <div className="realm-container text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
            Media Inquiries
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            For press inquiries, interview requests, or additional information,
            please contact our media relations team.
          </p>
          <a 
            href="mailto:hlo@realmrook.com" 
            className="realm-button inline-block"
          >
            Contact Media Relations
          </a>
        </div>
      </section>
      
      <CtaSection />
    </main>
  );
};

export default PressReleases;
