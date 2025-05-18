
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
    ? '/logo-white.png' 
    : '/logo-black.png';

  return (
    <img 
      src={logoSrc} 
      alt="Realm by Rook" 
      className={`h-8 md:h-10 transition-opacity duration-300 hover:opacity-90 ${className}`}
    />
  );
};

export default Logo;
