
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "./common/Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const invertedRoutes = React.useMemo(
    () => [
      "/services/social-media-marketing",
      "/services/ai-agents-automation",
      "/services/domain-name-consultation",
      "/services/enterprise-domain-management",
      "/discover/d2c-startups",
      "/discover/saas-startups",
      "/about",
      "/case-studies",
      "/resources/insights",
      "/resources/press-releases",
      "/brand-kit",
      "/",
    ],
    []
  );

  const [isInvertedPage, setIsInvertedPage] = useState(false);

  // Navigation items
  const navItems = [
    {
      name: "What We Do?",
      subItems: [
        {
          name: "AI Agents Automation",
          path: "/services/ai-agents-automation",
        },
        { name: "Web/App Development", path: "/services/web-app-development" },
        {
          name: "Social Media Marketing",
          path: "/services/social-media-marketing",
        },
        { name: "Branding", path: "/services/branding" },
        { name: "UI/UX Design", path: "/services/ui-ux-design" },
        { name: "SEO", path: "/services/seo" },
        {
          name: "Domain Name Consultation",
          path: "/services/domain-name-consultation",
        },
        {
          name: "Enterprise Domain Management",
          path: "/services/enterprise-domain-management",
        },
      ],
    },
    {
      name: "Discover",
      subItems: [
        { name: "D2C Startups", path: "/discover/d2c-startups" },
        { name: "SaaS Startups", path: "/discover/saas-startups" },
      ],
    },
    { name: "Who We Are?", path: "/about" },
    { name: "Impact Studies", path: "/case-studies" },

    {
      name: "Resources",
      subItems: [
        { name: "Insights", path: "/resources/insights" },
        { name: "Press Releases", path: "/resources/press-releases" },
        { name: "Who We Partner With?", path: "/who-we-partner-with" },
        { name: "Brand Kit", path: "/brand-kit" },
      ],
    },
    ,
  ];

  const heroObserverRef = useRef(null);

  useEffect(() => {
    const heroSection = document.querySelector(".bg-realm-black");
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (heroObserverRef.current && heroSection) {
        heroObserverRef.current.unobserve(heroSection);
      }
    };
  }, []);

  // Add effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);

    const currentPath = location.pathname;
    setIsInvertedPage(invertedRoutes.includes(currentPath));

    const heroSection = document.querySelector(".bg-realm-black");

    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      setIsHeroVisible(rect.top < window.innerHeight && rect.bottom > 0);

      if (heroObserverRef.current) {
        heroObserverRef.current.disconnect();
      }
      heroObserverRef.current = new IntersectionObserver(
        ([entry]) => {
          setIsHeroVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      heroObserverRef.current.observe(heroSection);
    } else {
      setIsHeroVisible(false);
    }
  }, [location.pathname, invertedRoutes]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [mobileDropdowns, setMobileDropdowns] = useState({
    "What We Do?": false,
    Discover: false,
    Resources: false,
  });

  const toggleMobileDropdown = (itemName) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const useWhiteText = isInvertedPage && !isScrolled && isHeroVisible;

  const headerBackgroundClass =
    isInvertedPage && !isScrolled
      ? "bg-realm-black"
      : isScrolled
      ? "bg-white shadow-md py-3 md:py-4"
      : isHeroVisible
      ? "bg-transparent"
      : "bg-white";

  const textColorClass = useWhiteText ? "text-white" : "text-realm-black";
  const logoColorClass = textColorClass;
  const buttonClass = useWhiteText
    ? "bg-white text-realm-black hover:bg-gray-200"
    : "bg-realm-black text-white hover:bg-realm-darkgray";

  const navLinkClass = `text-sm font-medium ${textColorClass} hover:opacity-80 realm-link transition-colors duration-300`;

  // Mobile menu button classes - ensure visibility on black background
  const mobileMenuButtonClass = cn(
    "md:hidden focus:outline-none transition-colors duration-300 z-50 relative",
    useWhiteText ? "text-white" : "text-realm-black"
  );

  const isLightNavbar =
    headerBackgroundClass.includes("bg-white") ||
    headerBackgroundClass.includes("bg-opacity") ||
    headerBackgroundClass.includes("bg-transparent");
  const logoVariant = isLightNavbar ? "dark" : "light";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 md:py-6",
        headerBackgroundClass
      )}
    >
      <div className="realm-container flex items-center justify-between">
        <Link to="/" className="flex items-center z-50 relative">
          <Logo
            variant={logoVariant}
            className="h-8 md:h-10 transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.subItems ? (
              <NavigationMenu key={item.name}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`text-sm font-medium ${textColorClass} hover:opacity-80 realm-link transition-colors duration-300 bg-transparent`}
                    >
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
              <Link key={item.name} to={item.path} className={navLinkClass}>
                {item.name}
              </Link>
            )
          )}
          <Link to="/contact">
            <Button
              className={`realm-button transition-colors duration-300 ${buttonClass}`}
            >
              Let's Talk
            </Button>
          </Link>
        </nav>

        <button
          className={mobileMenuButtonClass}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X
              size={24}
              className={isLightNavbar ? "text-black" : "text-white"}
            />
          ) : (
            <Menu
              size={24}
              className={isLightNavbar ? "text-black" : "text-white"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-40">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <div className="py-2">
                    <div
                      className="flex items-center justify-between text-lg font-medium text-realm-black mb-2 cursor-pointer"
                      onClick={() => toggleMobileDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${
                          mobileDropdowns[item.name] ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {mobileDropdowns[item.name] && (
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
                    )}
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
