
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { insights } from '@/data/insightsData';
import { pressReleases } from '@/data/pressReleasesData';
import { ArrowRight, Download, Link as LinkIcon } from 'lucide-react';
import CtaSection from '@/components/CtaSection';

const Resources = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit this to a newsletter API
    console.log('Submitted email:', email);
    alert('Thanks for subscribing!');
    setEmail('');
  };

  // Get only the 3 most recent insights
  const latestInsights = insights.slice(0, 3);
  
  // Get only the 3 most recent press releases
  const latestPressReleases = pressReleases.slice(0, 3);

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
        title="We don't just build brands. We build minds."
        subtitle="Explore our insights, stories, and updates that drive industry-leading impact."
        isLarge={true}
      />

      {/* Insights Section */}
      <section className="realm-section">
        <div className="realm-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Latest Insights</h2>
            <Link to="/resources/insights" className="group flex items-center font-medium">
              View All Insights 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestInsights.map((insight) => (
              <Card key={insight.id} className="border border-realm-black/10 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img 
                    src={insight.coverImage} 
                    alt={insight.title} 
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-realm-lightgray rounded-full">{insight.tags[0]}</span>
                    <span className="text-xs text-realm-gray">{insight.readTime} read</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">{insight.title}</h3>
                  <p className="text-realm-gray line-clamp-3">{insight.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link 
                    to={`/resources/insights/${insight.slug}`}
                    className="text-sm font-medium underline hover:text-realm-darkgray"
                  >
                    Read More
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Realm in the News</h2>
            <Link to="/resources/press-releases" className="group flex items-center font-medium">
              View All Press Releases 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {latestPressReleases.map((release) => (
              <div 
                key={release.id}
                className="bg-white p-6 flex flex-col md:flex-row md:items-center justify-between border border-realm-black/10 hover:shadow-md transition-shadow"
              >
                <div className="mb-4 md:mb-0">
                  <p className="text-sm text-realm-gray mb-1">{formatDate(release.date)}</p>
                  <h3 className="text-lg font-medium">{release.title}</h3>
                </div>
                {release.isExternalLink ? (
                  <a 
                    href={release.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium"
                  >
                    View Article <LinkIcon size={16} className="ml-2" />
                  </a>
                ) : (
                  <a
                    href={release.url}
                    download
                    className="flex items-center text-sm font-medium"
                  >
                    Download PDF <Download size={16} className="ml-2" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Opt-in Section */}
      <section className="realm-section">
        <div className="realm-container max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Want insights directly to your inbox?</h2>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border-2 border-realm-black text-realm-black placeholder-realm-gray/60 focus:outline-none focus:ring-0"
            />
            <Button type="submit" className="realm-button">Subscribe</Button>
          </form>
          <p className="mt-3 text-xs text-realm-gray">We don't spam. Only the good stuff.</p>
        </div>
      </section>

      {/* Back to Home */}
      <section className="realm-section pt-0">
        <div className="realm-container text-center">
          <Link to="/" className="group flex items-center justify-center font-medium">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Homepage
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <CtaSection />
    </main>
  );
};

export default Resources;
