
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo = ({ variant = 'dark', className = '' }: LogoProps) => {
  // Use the appropriate logo based on variant
  // light variant = white logo (for dark backgrounds)
  // dark variant = black logo (for light backgrounds)
  const logoSrc = variant === 'light' 
    ? '/lovable-uploads/3d11cb9d-d446-4ed1-b346-0fe33eabf938.png' 
    : '/lovable-uploads/b499e890-aa55-455a-a729-36a240124a3b.png';

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src={logoSrc} 
        alt="Realm by Rook" 
        className="h-8 md:h-10 transition-opacity duration-300 hover:opacity-90"
      />
    </Link>
  );
};

export default Logo;
