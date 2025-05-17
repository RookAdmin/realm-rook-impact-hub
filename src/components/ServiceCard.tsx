
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, link, index }: ServiceCardProps) => {
  return (
    <div 
      className="service-card group"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="h-12 w-12 mb-6 text-realm-black flex items-center justify-center border border-realm-lightgray group-hover:bg-realm-black group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-display font-medium mb-4">{title}</h3>
      
      <p className="text-realm-darkgray mb-6">
        {description}
      </p>
      
      <Link 
        to={link} 
        className="inline-flex items-center space-x-2 font-medium group-hover:text-realm-black transition-colors"
      >
        <span>Learn more</span>
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
