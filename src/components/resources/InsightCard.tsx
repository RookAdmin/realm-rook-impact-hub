
import React from 'react';
import { Link } from 'react-router-dom';
import { Insight } from '@/types';
import { ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Tag from '@/components/common/Tag';

interface InsightCardProps {
  insight: Insight;
}

const InsightCard = ({ insight }: InsightCardProps) => {
  const formattedDate = new Date(insight.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="border border-realm-lightgray hover:border-realm-black transition-all duration-300 h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <Link to={`/resources/insights/${insight.slug}`}>
          <div className="aspect-video rounded overflow-hidden mb-4">
            <img 
              src={insight.coverImage} 
              alt={insight.title} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="flex items-center gap-4 text-sm mb-2 text-realm-gray">
            <span>{formattedDate}</span>
            <span className="flex items-center">
              <Clock size={14} className="mr-1" />{insight.readTime}
            </span>
          </div>
          
          <h2 className="text-xl font-display font-bold mb-3 hover:underline">
            {insight.title}
          </h2>
          
          <p className="text-realm-darkgray mb-4 line-clamp-3">
            {insight.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {insight.tags.slice(0, 3).map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </Link>
      </CardContent>
      
      <CardFooter className="pt-0 flex items-center">
        <div className="flex items-center">
          <img 
            src={insight.authorAvatar}
            alt={insight.author}
            className="w-8 h-8 rounded-full mr-3"
          />
          <div>
            <p className="font-medium text-sm">{insight.author}</p>
            <p className="text-xs text-realm-gray">{insight.authorPosition}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default InsightCard;
