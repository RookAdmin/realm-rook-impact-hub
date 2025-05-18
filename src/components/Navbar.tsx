import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: 'What We Do?', path: '/services' },
    { 
      name: 'Discover', 
      subItems: [
        { name: 'D2C Startups', path: '/discover/d2c-startups' },
        { name: 'SaaS Startups', path: '/discover/saas-startups' },
      ]
    },
    { name: 'Who We Are?', path: '/about' },
    { name: 'Impact Studies', path: '/case-studies' },
    { 
      name: 'Resources', 
      subItems: [
        { name: 'Insights', path: '/resources/insights' },
        { name: 'Press Releases', path: '/resources/press-releases' },
      ]
    },
    { name: 'Brand Kit', path: '/brand-kit' },
  ];

  // Set up intersection observer for hero section
  const heroObserverRef = useRef(null);
  
  useEffect(() => {
    const heroSection = document.querySelector('.bg-realm-black');
    if (heroSection) {
      heroObserverRef.current = new IntersectionObserver(
        ([entry]) => {
          // When hero is visible (or partially visible), set isHeroVisible to true
          setIsHeroVisible(entry.isIntersecting);
        },
        { threshold: 0.1 } // Trigger when at least 10% of the hero is visible
      );
      
      heroObserverRef.current.observe(heroSection);
    }
    
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
      if (heroObserverRef.current && heroSection) {
        heroObserverRef.current.unobserve(heroSection);
      }
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Determine text color based on hero visibility and scroll position
  const textColorClass = isHeroVisible ? 'text-white' : 'text-realm-black';
  const logoColorClass = isHeroVisible ? 'text-white' : 'text-realm-black';
  const buttonClass = isHeroVisible ? 'bg-white text-realm-black hover:bg-realm-lightgray' : 'bg-realm-black text-white hover:bg-realm-darkgray';
  
  const navLinkClass = `text-sm font-medium ${textColorClass} hover:opacity-80 realm-link transition-colors duration-300`;

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 md:py-6",
      isScrolled ? "bg-white shadow-md py-3 md:py-4" : isHeroVisible ? "bg-transparent" : "bg-white"
    )}>
      <div className="realm-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className={`text-xl font-display font-bold tracking-tight transition-colors duration-300 ${logoColorClass}`}>
            REALM<span className="font-normal">by</span>ROOK
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.subItems ? (
              <NavigationMenu key={item.name}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={`text-sm font-medium ${textColorClass} hover:opacity-80 realm-link transition-colors duration-300 bg-transparent`}>
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={subItem.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-realm-lightgray hover:text-realm-black focus:bg-realm-lightgray focus:text-realm-black"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {subItem.name}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <Link 
                key={item.name} 
                to={item.path} 
                className={navLinkClass}
              >
                {item.name}
              </Link>
            )
          ))}
          <Link to="/contact">
            <Button className={`realm-button transition-colors duration-300 ${buttonClass}`}>Let's Talk</Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className={`md:hidden ${textColorClass} focus:outline-none transition-colors duration-300`}
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
                {item.subItems ? (
                  <div className="py-2">
                    <div className="text-lg font-medium text-realm-black mb-2">{item.name}</div>
                    <div className="pl-4 space-y-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-1 text-base text-realm-black hover:text-realm-darkgray"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className="block py-2 text-lg font-medium text-realm-black hover:text-realm-darkgray"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
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
