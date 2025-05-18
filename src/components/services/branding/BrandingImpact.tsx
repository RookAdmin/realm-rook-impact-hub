
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ImpactCardProps {
  brandName: string;
  result: string;
  quote?: string;
  author?: string;
  image: string;
}

const ImpactCard = ({ brandName, result, quote, author, image }: ImpactCardProps) => {
  return (
    <Card className="border border-realm-lightgray hover:border-realm-black transition-all duration-300">
      <CardContent className="p-6">
        <div className="mb-6 aspect-video bg-realm-lightgray flex items-center justify-center">
          <img 
            src={image} 
            alt={`${brandName} branding transformation`} 
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-xl font-display font-bold mb-2">{brandName}</h3>
        <p className="text-realm-darkgray font-medium mb-4">{result}</p>
        {quote && (
          <div className="border-l-2 border-realm-black pl-4 mt-4 italic">
            <p className="mb-2">"{quote}"</p>
            {author && <p className="text-sm font-medium">— {author}</p>}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const BrandingImpact = () => {
  const impacts = [
    {
      brandName: "Zephyr Skincare",
      result: "+300% online revenue after rebranding",
      quote: "Realm completely transformed how people perceive our brand.",
      author: "Rishi B., Founder",
      image: "/placeholder.svg"
    },
    {
      brandName: "TechNova Solutions",
      result: "40% increase in brand recognition",
      quote: "Our new identity perfectly captures our innovative spirit.",
      author: "Sarah L., CEO",
      image: "/placeholder.svg"
    },
    {
      brandName: "Evergreen Organics",
      result: "+180% in retail partnerships post-rebrand",
      quote: "We're now recognized instantly on store shelves.",
      author: "Daniel K., Marketing Director",
      image: "/placeholder.svg"
    }
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
