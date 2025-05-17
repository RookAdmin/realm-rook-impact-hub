
import React from 'react';
import { Link } from 'react-router-dom';
import { ImpactStudy } from '@/types';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Tag from '@/components/common/Tag';

interface ImpactStudyCardProps {
  study: ImpactStudy;
}

const ImpactStudyCard = ({ study }: ImpactStudyCardProps) => {
  return (
    <Card className="border border-realm-lightgray hover:border-realm-black transition-all duration-300 flex flex-col h-full">
      <CardContent className="pt-6 flex-grow">
        {/* Added featured image */}
        <div className="aspect-video mb-6 overflow-hidden">
          <img 
            src={study.featuredImage || "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400"}
            alt={study.title}
            className="realm-image realm-image-greyscale hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="mb-4 flex items-center">
          <img 
            src={study.companyLogo} 
            alt={`${study.company} logo`} 
            className="w-10 h-10 object-contain mr-3"
          />
          <h3 className="font-semibold">{study.company}</h3>
        </div>
        
        <h2 className="text-xl font-display font-bold mb-3 line-clamp-2">
          {study.title}
        </h2>
        
        <p className="font-medium text-lg mb-4">
          {study.impactSummary}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {study.tags.slice(0, 3).map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Link 
          to={`/impact-studies/${study.slug}`}
          className="realm-button inline-flex items-center"
        >
          Read Full Study
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ImpactStudyCard;
