
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { impactStudies } from '@/data/impactStudiesData';
import Tag from '@/components/common/Tag';
import CtaSection from '@/components/CtaSection';
import { ArrowLeft } from 'lucide-react';

const ImpactStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = impactStudies.find(s => s.slug === slug);
  
  if (!study) {
    return (
      <div className="realm-container py-20 text-center">
        <h1 className="text-3xl font-display font-bold mb-6">Study Not Found</h1>
        <p className="mb-8">The impact study you're looking for doesn't exist.</p>
        <Link to="/case-studies" className="realm-button">
          View All Impact Studies
        </Link>
      </div>
    );
  }

  return (
    <main>
      <div className="bg-realm-black text-white py-16 md:py-24 relative">
        {/* Add a background image with overlay */}
        <div className="realm-image-container absolute inset-0 z-0 opacity-30">
          <img 
            src={study.featuredImage || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"}
            alt={study.title}
            className="realm-image realm-image-greyscale"
          />
          <div className="realm-image-overlay"></div>
        </div>
        
        <div className="realm-container relative z-10">
          <Link to="/case-studies" className="inline-flex items-center text-white mb-8 hover:underline">
            <ArrowLeft size={16} className="mr-2" />
            Back to Impact Studies
          </Link>
          
          <div className="flex items-center mb-4">
            <img 
              src={study.companyLogo} 
              alt={`${study.company} logo`} 
              className="w-12 h-12 object-contain mr-3 bg-white rounded"
            />
            <h1 className="text-2xl font-semibold">{study.company}</h1>
          </div>
          
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl mb-6">
            {study.title}
          </h2>
          
          <p className="text-xl md:text-2xl font-medium max-w-3xl mb-8">
            {study.impactSummary}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {study.tags.map((tag) => (
              <Tag 
                key={tag} 
                label={tag} 
                className="bg-white text-realm-black" 
              />
            ))}
          </div>
        </div>
      </div>
      
      <section className="realm-section">
        <div className="realm-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Problem</h3>
              <div className="w-12 h-1 bg-realm-black mb-4"></div>
              <div className="aspect-square bg-realm-lightgray overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80"
                  alt="Problem visualization"
                  className="realm-image realm-image-greyscale"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed">
                {study.problem}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Process</h3>
              <div className="w-12 h-1 bg-realm-black mb-4"></div>
              <div className="aspect-square bg-white border border-realm-black overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                  alt="Process visualization"
                  className="realm-image realm-image-greyscale"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed">
                {study.process}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="realm-section">
        <div className="realm-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Outcome</h3>
              <div className="w-12 h-1 bg-realm-black mb-4"></div>
              <div className="aspect-square bg-realm-lightgray overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80"
                  alt="Outcome visualization"
                  className="realm-image realm-image-greyscale"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed">
                {study.outcome}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {/* Use study images if available, otherwise use placeholder images */}
                {(study.images || [
                  "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1526674215612-9e9672dfa8b3?auto=format&fit=crop&q=80",
                  "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80"
                ]).map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`${study.company} result ${index + 1}`}
                    className="w-full rounded realm-image-greyscale"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {study.testimonial && (
        <section className="realm-section bg-realm-black text-white">
          <div className="realm-container max-w-4xl mx-auto text-center">
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic mb-8">
              "{study.testimonial}"
            </blockquote>
            <cite className="not-italic flex flex-col items-center">
              {study.testimonialAuthorImage && (
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <img 
                    src={study.testimonialAuthorImage} 
                    alt={study.testimonialAuthor}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="font-medium text-lg">{study.testimonialAuthor}</div>
              <div className="text-realm-lightgray">{study.testimonialPosition}</div>
            </cite>
          </div>
        </section>
      )}
      
      <section className="realm-section">
        <div className="realm-container text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
            Let's Write Your Impact Story
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Ready to achieve measurable results that transform your business?
            Let's create your own success story together.
          </p>
          <Link to="/contact" className="realm-button inline-block">
            Start Your Transformation
          </Link>
        </div>
      </section>
      
      <CtaSection />
    </main>
  );
};

export default ImpactStudyDetail;
