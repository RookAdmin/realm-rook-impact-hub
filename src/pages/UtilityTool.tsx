import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Copy, Check, Plus, X } from "lucide-react";
import { getToolBySlug, getRelatedTools, tools } from "@/data/utilitiesData";
import { cn } from "@/lib/utils";
import ErrorBoundary from "@/components/utilities/ErrorBoundary";
import WordCounter from "@/components/utilities/tools/WordCounter";
import TextCaseConverter from "@/components/utilities/tools/TextCaseConverter";
import URLEncoderDecoder from "@/components/utilities/tools/URLEncoderDecoder";
import MetaTagGenerator from "@/components/utilities/tools/MetaTagGenerator";
import SitemapGenerator from "@/components/utilities/tools/SitemapGenerator";
import RobotsTxtGenerator from "@/components/utilities/tools/RobotsTxtGenerator";
import KeywordDensityChecker from "@/components/utilities/tools/KeywordDensityChecker";
import JSONFormatter from "@/components/utilities/tools/JSONFormatter";
import HashGenerator from "@/components/utilities/tools/HashGenerator";
import UUIDGenerator from "@/components/utilities/tools/UUIDGenerator";
import QRCodeGenerator from "@/components/utilities/tools/QRCodeGenerator";
import RegexTester from "@/components/utilities/tools/RegexTester";
import ColorPicker from "@/components/utilities/tools/ColorPicker";
import ColorConverter from "@/components/utilities/tools/ColorConverter";
import GradientGenerator from "@/components/utilities/tools/GradientGenerator";
import PasswordGenerator from "@/components/utilities/tools/PasswordGenerator";
import InvoiceGenerator from "@/components/utilities/tools/InvoiceGenerator";
import SocialMediaPreview from "@/components/utilities/tools/SocialMediaPreview";

const toolComponents: Record<string, React.ComponentType<any>> = {
  "word-counter": WordCounter,
  "text-case-converter": TextCaseConverter,
  "url-encoder-decoder": URLEncoderDecoder,
  "meta-tag-generator": MetaTagGenerator,
  "sitemap-generator": SitemapGenerator,
  "robots-txt-generator": RobotsTxtGenerator,
  "keyword-density-checker": KeywordDensityChecker,
  "social-media-preview": SocialMediaPreview,
  "json-formatter": JSONFormatter,
  "hash-generator": HashGenerator,
  "uuid-generator": UUIDGenerator,
  "qr-code-generator": QRCodeGenerator,
  "regex-tester": RegexTester,
  "color-picker": ColorPicker,
  "color-converter": ColorConverter,
  "gradient-generator": GradientGenerator,
  "password-generator": PasswordGenerator,
  "invoice-generator": InvoiceGenerator,
};

const UtilityTool = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const tool = slug ? getToolBySlug(slug) : null;
  const relatedTools = tool ? getRelatedTools(tool) : [];

  // Scroll to top when route changes (slug changes)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug, location.pathname]);

  if (!tool) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-realm-black mb-4">Tool Not Found</h1>
          <Link
            to="/utilities"
            className="text-realm-black hover:text-[#0F7C4F] transition-colors"
          >
            Return to Utilities
          </Link>
        </div>
      </div>
    );
  }

  const ToolComponent = toolComponents[tool.slug];
  const Icon = tool.icon;

  // Log for debugging
  useEffect(() => {
    console.log("UtilityTool render:", { slug: tool.slug, hasComponent: !!ToolComponent });
    if (!ToolComponent) {
      console.error(`Tool component not found for slug: ${tool.slug}`);
      setError(`Tool component "${tool.slug}" not found`);
    } else {
      setError(null);
    }
  }, [tool.slug, ToolComponent]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <Helmet>
        <title>{tool.name} | Free {tool.category} | Realm by Rook</title>
        <meta
          name="description"
          content={`${tool.description}. Free online ${tool.name.toLowerCase()} tool. ${tool.category}. Use our professional utility tool for ${tool.documentation.useCases.join(", ").toLowerCase()}.`}
        />
        <meta
          name="keywords"
          content={`${tool.name}, ${tool.name.toLowerCase()}, ${tool.category.toLowerCase()}, free online tool, ${tool.description.toLowerCase()}, ${tool.documentation.useCases.map((uc) => uc.toLowerCase()).join(", ")}, realm by rook, professional utilities`}
        />
        <meta name="author" content="Realm by Rook" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href={`https://realmrook.com/utilities/${tool.slug}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://realmrook.com/utilities/${tool.slug}`} />
        <meta property="og:title" content={`${tool.name} | Free ${tool.category} | Realm by Rook`} />
        <meta
          property="og:description"
          content={`${tool.description}. Free online ${tool.name.toLowerCase()} tool. Use our professional utility for ${tool.documentation.useCases[0]?.toLowerCase() || "productivity"}.`}
        />
        <meta property="og:image" content="https://realmrook.com/logo-black.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Realm by Rook" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://realmrook.com/utilities/${tool.slug}`} />
        <meta name="twitter:title" content={`${tool.name} | Free ${tool.category} | Realm by Rook`} />
        <meta
          name="twitter:description"
          content={`${tool.description}. Free online ${tool.name.toLowerCase()} tool.`}
        />
        <meta name="twitter:image" content="https://realmrook.com/logo-black.png" />
        <meta name="twitter:site" content="@realmbybrook" />
        <meta name="twitter:creator" content="@realmbybrook" />

        {/* Geo-targeting */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="ICBM" content="39.8283, -98.5795" />
        <meta name="geo.position" content="39.8283;-98.5795" />
        <meta name="DC.title" content={`${tool.name} | Free ${tool.category} | Realm by Rook`} />
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
        <link rel="alternate" hreflang="en" href={`https://realmrook.com/utilities/${tool.slug}`} />
        <link rel="alternate" hreflang="x-default" href={`https://realmrook.com/utilities/${tool.slug}`} />
        <link rel="prev" href="https://realmrook.com/utilities" />
        <link rel="next" href={`https://realmrook.com/utilities/${relatedTools[0]?.slug || ""}`} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": tool.name,
            "url": `https://realmrook.com/utilities/${tool.slug}`,
            "description": tool.description,
            "applicationCategory": tool.category,
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "provider": {
              "@type": "Organization",
              "name": "Realm by Rook",
              "url": "https://realmrook.com",
              "logo": "https://realmrook.com/logo-black.png"
            },
            "featureList": tool.documentation.howToUse,
            "screenshot": "https://realmrook.com/logo-black.png"
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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": tool.name,
                "item": `https://realmrook.com/utilities/${tool.slug}`
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": `How to Use ${tool.name}`,
            "description": tool.description,
            "step": tool.documentation.howToUse.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step,
              "text": step
            }))
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": tool.name,
            "description": tool.description,
            "url": `https://realmrook.com/utilities/${tool.slug}`,
            "applicationCategory": tool.category,
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            },
            "screenshot": "https://realmrook.com/logo-black.png",
            "softwareVersion": "1.0",
            "featureList": tool.documentation.howToUse,
            "provider": {
              "@type": "Organization",
              "name": "Realm by Rook",
              "url": "https://realmrook.com"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": tool.documentation.useCases.map((useCase) => ({
              "@type": "Question",
              "name": `What is ${tool.name} used for?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": useCase
              }
            }))
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-white pt-20 sm:pt-24 pb-24 sm:pb-32">
        <div className="realm-container max-w-5xl px-4 sm:px-6">
          {/* Active Tool Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-end mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-xl rounded-full border border-realm-lightgray shadow-sm">
              <Icon className="w-4 h-4" style={{ color: tool.color }} />
              <span className="text-sm font-medium text-realm-black">{tool.name}</span>
            </div>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <div
                className="p-3 rounded-lg w-fit"
                style={{ backgroundColor: `${tool.color}15` }}
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: tool.color }} />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-realm-black">
                  {tool.name}
                </h1>
                <p className="text-base sm:text-lg text-realm-gray mt-2">{tool.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Tool Interface */}
          <div className="bg-white border border-realm-lightgray rounded-xl shadow-xl p-4 sm:p-6 md:p-8 mb-8">
            {error ? (
              <div className="text-center py-12">
                <p className="text-red-600 mb-2 font-semibold">Error: {error}</p>
                <p className="text-sm text-realm-gray mt-2">Slug: {tool.slug}</p>
                <p className="text-xs text-realm-gray mt-1">Available tools: {Object.keys(toolComponents).join(", ")}</p>
              </div>
            ) : ToolComponent ? (
              <ErrorBoundary>
                <ToolComponent onCopy={copyToClipboard} />
              </ErrorBoundary>
            ) : (
              <div className="text-center py-12">
                <p className="text-realm-gray font-semibold">Tool interface coming soon...</p>
                <p className="text-sm text-realm-gray mt-2">Slug: {tool.slug}</p>
                <p className="text-xs text-realm-gray mt-1">Available components: {Object.keys(toolComponents).join(", ")}</p>
              </div>
            )}
          </div>

          {/* Copy Success Toast */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-realm-black text-white rounded-lg shadow-lg">
                  <Check className="w-4 h-4" />
                  <span className="text-sm">Copied to clipboard!</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Documentation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="mb-8"
          >
            <button
              onClick={() => setIsDocsOpen(!isDocsOpen)}
              className="w-full flex items-center justify-between p-3 sm:p-4 bg-realm-lightgray rounded-lg hover:bg-opacity-80 transition-colors"
              aria-expanded={isDocsOpen}
            >
              <span className="text-sm sm:text-base font-semibold text-realm-black">How to Use</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 sm:w-5 sm:h-5 text-realm-black transition-transform flex-shrink-0",
                  isDocsOpen && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence>
              {isDocsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 sm:p-6 bg-white border border-realm-lightgray rounded-lg mt-2">
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-sm sm:text-base font-semibold text-realm-black mb-2 sm:mb-3">Steps:</h3>
                      <ol className="list-decimal list-inside space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-realm-gray leading-relaxed">
                        {tool.documentation.howToUse.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-realm-black mb-2 sm:mb-3">Use Cases:</h3>
                      <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-realm-gray leading-relaxed">
                        {tool.documentation.useCases.map((useCase, index) => (
                          <li key={index}>{useCase}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-realm-black mb-4 sm:mb-6">
                You might also like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {relatedTools.map((relatedTool) => {
                  const RelatedIcon = relatedTool.icon;
                  return (
                    <Link
                      key={relatedTool.id}
                      to={`/utilities/${relatedTool.slug}`}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="p-3 sm:p-4 bg-white border border-realm-lightgray rounded-lg hover:border-[#0F7C4F] hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <div
                          className="p-1.5 sm:p-2 rounded-lg flex-shrink-0"
                          style={{ backgroundColor: `${relatedTool.color}15` }}
                        >
                          <RelatedIcon
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            style={{ color: relatedTool.color }}
                          />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-realm-black">
                          {relatedTool.name}
                        </h3>
                      </div>
                      <p className="text-xs text-realm-gray leading-relaxed">{relatedTool.description}</p>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </>
  );
};

export default UtilityTool;

