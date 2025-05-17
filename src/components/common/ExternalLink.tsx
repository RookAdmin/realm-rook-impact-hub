
import React from 'react';
import { Link } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

const ExternalLink = ({ href, children, className, showIcon = true }: ExternalLinkProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={cn('inline-flex items-center hover:underline', className)}
    >
      <span>{children}</span>
      {showIcon && <Link size={14} className="ml-1 inline-block" />}
    </a>
  );
};

export default ExternalLink;
