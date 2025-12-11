import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search } from "lucide-react";
import Fuse from "fuse.js";
import { motion } from "framer-motion";
import { tools, categories } from "@/data/utilitiesData";
import { cn } from "@/lib/utils";

const Utilities = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTools, setFilteredTools] = useState(tools);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Scroll to top when navigating to utilities page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Initialize Fuse.js for fuzzy search
  const fuse = new Fuse(tools, {
    keys: ["name", "description", "category"],
    threshold: 0.3,
    includeScore: true,
  });

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredTools(tools);
    } else {
      const results = fuse.search(searchQuery);
      setFilteredTools(results.map((result) => result.item));
    }
  }, [searchQuery]);

  // Keyboard shortcut: "/" to focus search
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const getToolsByCategory = (category: string) => {
    return filteredTools.filter((tool) => tool.category === category);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Professional Utilities | Free Online Tools for Developers, Designers & Marketers | Realm by Rook</title>
        <meta
          name="description"
          content="Free professional utilities and online tools for developers, designers, and marketers. Word counter, JSON formatter, QR code generator, password generator, invoice generator, SEO tools, color picker, and more. Enterprise-grade tools for creators and businesses."
        />
        <meta
          name="keywords"
          content="free online tools, developer tools, SEO tools, text tools, JSON formatter, QR code generator, password generator, invoice generator, word counter, color picker, gradient generator, hash generator, UUID generator, regex tester, URL encoder, meta tag generator, sitemap generator, robots.txt generator, keyword density checker, professional utilities, web tools, design tools, productivity tools"
        />
        <meta name="author" content="Realm by Rook" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href="https://realmrook.com/utilities" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://realmrook.com/utilities" />
        <meta property="og:title" content="Professional Utilities | Free Online Tools | Realm by Rook" />
        <meta
          property="og:description"
          content="Free professional utilities and online tools for developers, designers, and marketers. Enterprise-grade tools for creators and businesses."
        />
        <meta property="og:image" content="https://realmrook.com/logo-black.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Realm by Rook" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://realmrook.com/utilities" />
        <meta name="twitter:title" content="Professional Utilities | Free Online Tools | Realm by Rook" />
        <meta
          name="twitter:description"
          content="Free professional utilities and online tools for developers, designers, and marketers. Enterprise-grade tools for creators and businesses."
        />
        <meta name="twitter:image" content="https://realmrook.com/logo-black.png" />
        <meta name="twitter:site" content="@realmbybrook" />
        <meta name="twitter:creator" content="@realmbybrook" />

        {/* Geo-targeting */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="ICBM" content="39.8283, -98.5795" />
        <meta name="geo.position" content="39.8283;-98.5795" />
        <meta name="DC.title" content="Professional Utilities | Free Online Tools | Realm by Rook" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#0F7C4F" />
        <meta name="msapplication-TileColor" content="#0F7C4F" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="alternate" type="application/rss+xml" title="Realm by Rook Utilities RSS" href="https://realmrook.com/utilities/rss.xml" />
        <link rel="alternate" hreflang="en" href="https://realmrook.com/utilities" />
        <link rel="alternate" hreflang="x-default" href="https://realmrook.com/utilities" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Professional Utilities by Realm by Rook",
            "url": "https://realmrook.com/utilities",
            "description": "Free professional utilities and online tools for developers, designers, and marketers. Enterprise-grade tools for creators and businesses.",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1000"
            },
            "provider": {
              "@type": "Organization",
              "name": "Realm by Rook",
              "url": "https://realmrook.com",
              "logo": "https://realmrook.com/logo-black.png"
            },
            "featureList": [
              "Word Counter",
              "Text Case Converter",
              "JSON Formatter",
              "QR Code Generator",
              "Password Generator",
              "Invoice Generator",
              "Color Picker",
              "Hash Generator",
              "UUID Generator",
              "SEO Tools"
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Professional Utilities Tools",
            "description": "Complete list of free professional utilities and online tools",
            "url": "https://realmrook.com/utilities",
            "itemListElement": tools.map((tool, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": tool.name,
              "description": tool.description,
              "url": `https://realmrook.com/utilities/${tool.slug}`
            }))
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://realmrook.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Utilities",
                "item": "https://realmrook.com/utilities"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Realm by Rook Utilities",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1000",
              "bestRating": "5",
              "worstRating": "1"
            },
            "screenshot": "https://realmrook.com/logo-black.png",
            "softwareVersion": "1.0",
            "releaseNotes": "Professional utilities for developers, designers, and marketers"
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Professional Utilities Collection",
            "description": "Collection of free professional utilities and online tools",
            "url": "https://realmrook.com/utilities",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": tools.length,
              "itemListElement": tools.map((tool, index) => ({
                "@type": "SoftwareApplication",
                "position": index + 1,
                "name": tool.name,
                "description": tool.description,
                "url": `https://realmrook.com/utilities/${tool.slug}`,
                "applicationCategory": tool.category
              }))
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-white pt-24 pb-16">
        {/* Hero Section */}
        <section className="realm-container mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-realm-black mb-4">
              Professional Utilities
            </h1>
            <p className="text-xl text-realm-gray mb-8">
              Enterprise-grade tools for creators and businesses
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-realm-gray">
                <Search className="w-5 h-5" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search tools... (Press / to focus)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-realm-lightgray bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-realm-black focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-realm-gray hover:text-realm-black transition-colors"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </motion.div>

          {/* Tools Grid by Category */}
          {categories.map((category) => {
            const categoryTools = getToolsByCategory(category);
            if (categoryTools.length === 0) return null;

            return (
              <motion.div
                key={category}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mb-16"
              >
                <h2 className="text-2xl font-display font-semibold text-realm-black mb-6">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryTools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <motion.div
                        key={tool.id}
                        variants={itemVariants}
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Link
                          to={`/utilities/${tool.slug}`}
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className={cn(
                            "block p-6 bg-white border border-realm-lightgray rounded-lg",
                            "hover:border-[#0F7C4F] hover:shadow-xl transition-all duration-300",
                            "group cursor-pointer"
                          )}
                          aria-label={`Open ${tool.name}`}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className="p-3 rounded-lg flex-shrink-0"
                              style={{ backgroundColor: `${tool.color}15` }}
                            >
                              <Icon
                                className="w-6 h-6"
                                style={{ color: tool.color }}
                                aria-hidden="true"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-realm-black mb-2 group-hover:text-[#0F7C4F] transition-colors">
                                {tool.name}
                              </h3>
                              <p className="text-sm text-realm-gray leading-relaxed">
                                {tool.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}

          {/* No Results */}
          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-realm-gray">
                No tools found matching "{searchQuery}"
              </p>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Utilities;
