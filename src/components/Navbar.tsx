
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: 'Who We Are?', path: '/about' },
    { name: 'What We Do?', path: '/services' },
    { name: 'Impact Studies', path: '/case-studies' },
    { name: 'Resources', path: '/resources' },
    { name: 'Brand Kit', path: '/brand-kit' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 md:py-6",
      isScrolled ? "bg-white shadow-md py-3 md:py-4" : "bg-transparent"
    )}>
      <div className="realm-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl font-display font-bold tracking-tight">REALM<span className="font-normal">by</span>ROOK</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="text-sm font-medium text-realm-black hover:text-realm-black realm-link"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="realm-button">Let's Talk</Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-realm-black focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link 
                  to={item.path} 
                  className="block py-2 text-lg font-medium text-realm-black hover:text-realm-darkgray"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="realm-button w-full mt-4">Let's Talk</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
