
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { insights } from '@/data/insightsData';
import Tag from '@/components/common/Tag';
import CtaSection from '@/components/CtaSection';
import { ArrowLeft, Clock } from 'lucide-react';

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const insight = insights.find(i => i.slug === slug);
  
  if (!insight) {
    return (
      <div className="realm-container py-20 text-center">
        <h1 className="text-3xl font-display font-bold mb-6">Insight Not Found</h1>
        <p className="mb-8">The insight you're looking for doesn't exist.</p>
        <Link to="/resources/insights" className="realm-button">
          View All Insights
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(insight.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main>
      <div className="pt-24 pb-8 border-b border-realm-lightgray">
        <div className="realm-container max-w-4xl">
          <Link to="/resources/insights" className="inline-flex items-center mb-8 hover:underline">
            <ArrowLeft size={16} className="mr-2" />
            Back to Insights
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {insight.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          
          <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            {insight.title}
          </h1>
          
          <div className="flex items-center justify-between flex-wrap gap-4 pb-6">
            <div className="flex items-center">
              <img 
                src={insight.authorAvatar}
                alt={insight.author}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium">{insight.author}</p>
                <p className="text-sm text-realm-gray">{insight.authorPosition}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-realm-gray">
              <span>{formattedDate}</span>
              <span className="flex items-center">
                <Clock size={14} className="mr-1" />{insight.readTime}
              </span>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="bg-realm-lightgray p-6 rounded-lg">
              <h2 className="text-lg font-medium mb-2">TL;DR</h2>
              <p>{insight.excerpt}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="realm-section">
        <div className="realm-container max-w-4xl">
          <div className="aspect-video mb-8">
            <img 
              src={insight.coverImage} 
              alt={insight.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div 
            className="prose prose-lg max-w-none" 
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-realm-lightgray">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center">
                <img 
                  src={insight.authorAvatar}
                  alt={insight.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-lg">{insight.author}</p>
                  <p className="text-realm-gray">{insight.authorPosition}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                {insight.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to get notified when we publish new content on design, development, and digital strategy.
          </p>
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 border border-realm-black"
              aria-label="Email address"
              required
            />
            <button type="submit" className="realm-button whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      <CtaSection />
    </main>
  );
};

export default InsightDetail;
