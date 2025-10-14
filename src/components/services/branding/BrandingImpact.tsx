
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import Rlinks from "@/components/assets/impact-studies/rlinks.png"
import Coventry from "@/components/assets/impact-studies/coventry.png"
import Namsushi from "@/components/assets/impact-studies/namsushi.png"

interface ImpactCardProps {
  brandName: string;
  result: string;
  quote?: string;
  author?: string;
  image: string;
  slug: string;
}

const ImpactCard = ({ brandName, result, quote, author, image, slug }: ImpactCardProps) => {
  return (
    <Card className="border border-realm-lightgray hover:border-realm-black transition-all duration-300">
      <CardContent className="p-6">
        <a href={slug} >
        <div className="mb-6 aspect-video bg-realm-lightgray flex items-center justify-center">
          <img 
            src={image} 
            alt={`${brandName} branding transformation`} 
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-xl font-display font-bold mb-2">{brandName}</h3>
        {/* <p className="text-realm-darkgray font-medium mb-4">{result}</p> */}
        {quote && (
          <div className="border-l-2 border-realm-black pl-4 mt-4 italic">
            <p className="mb-2">"{quote}"</p>
            {/* {author && <p className="text-sm font-medium">— {author}</p>} */}
          </div>
        )}
        </a>
      </CardContent>
    </Card>
  );
};

const BrandingImpact = () => {
  const impacts = [
    {
      brandName: "Nam Sushi",
      result: "+300% online revenue after rebranding",
      quote: "Building Nam Sushi’s Digital Experience & SEO Success.",
      author: "Rishi B., Founder",
      image: Namsushi,
      slug: "/case-studies/building-nam-sushi-s-digital-experience-and-seo-success"
    },
    {
      brandName: "Rook Links",
      result: "+180% in retail partnerships post-rebrand",
      quote: "Enterprise-Grade, In-House SaaS for Visual Link Management",
      author: "Daniel K., Marketing Director",
      image: Rlinks,
      slug: "/case-studies/building-rook-links-enterprise-grade-in-house-saas-for-visual-link-management"
    },
    {
      brandName: "Coventry Road Dental Care",
      result: "40% increase in brand recognition",
      quote: "Transforming Coventry Road Dentalcare’s Social Media Presence & ROI",
      author: "Sarah L., CEO",
      image: Coventry,
      slug: "/case-studies/transforming-coventry-road-dentalcare-s-social-media-presence-and-roi"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="realm-container">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Impact & Proof
        </h2>
        <p className="text-realm-darkgray mb-12 max-w-2xl">
          Real results from real brands we've transformed through strategic identity development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <ImpactCard 
              key={index}
              brandName={impact.brandName}
              result={impact.result}
              quote={impact.quote}
              author={impact.author}
              image={impact.image}
              slug={impact.slug}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/case-studies" className="inline-flex items-center gap-2 font-medium realm-link">
            View All Branding Case Studies <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandingImpact;
