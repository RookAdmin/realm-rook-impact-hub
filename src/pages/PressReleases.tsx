import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/common/PageHeader';
import { pressReleases, pressCategories, pressYears } from '@/data/pressReleasesData';
import { Download, Link as LinkIcon, Eye, ArrowRight } from 'lucide-react';
import DownloadButton from '@/components/common/DownloadButton';
import { Button } from '@/components/ui/button';
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
    <>
      <Helmet>
        <title>Press Releases | Realm by Rook - Latest News & Media Coverage</title>
        <meta name="description" content="Latest news, press releases, and media coverage of Realm by Rook. Stay updated with our company announcements, achievements, and industry recognition." />
        <meta name="keywords" content="press releases, news, media coverage, company announcements, Realm by Rook news" />
      </Helmet>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredReleases.length > 0 ? (
                filteredReleases.map((release) => (
                  <div
                    key={release.id}
                    className="p-6 border border-realm-lightgray flex flex-col h-full bg-white"
                  >
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-block px-3 py-1 text-xs border border-realm-black rounded-full">
                          {release.category}
                        </span>
                        <span className="text-sm text-realm-gray">
                          {formatDate(release.date)}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium">
                        {release.title}
                      </h3>
                    </div>

                    <div className="mt-auto">
                      {release.isExternalLink ? (
                        <ExternalLink href={release.url} className="inline-flex items-center realm-button">
                          View Article <LinkIcon size={16} className="ml-2" />
                        </ExternalLink>
                      ) : (
                        <div className="flex gap-3 flex-wrap">
                          <DownloadButton
                            label="Download PDF"
                            url={release.url}
                            className="realm-button w-[200px]"
                          />
                          <Button asChild className="realm-button w-[200px] flex items-center gap-2">
                            <a
                              href={release.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Read Full Release <ArrowRight size={16} />
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 py-12 text-center">
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
            <a
              href="/BrandKit"
              target="_blank"
              rel="noopener noreferrer"
              className="realm-button inline-flex items-center bg-black text-white rounded-md hover:bg-opacity-90"
            >
              <span>Download Press Kit</span>
            </a>

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
    </>
  );
};

export default PressReleases;
