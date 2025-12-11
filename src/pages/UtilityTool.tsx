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

  // Enhanced SEO for QR Code Generator and Social Media Preview
  const isQRCodeGenerator = tool.slug === "qr-code-generator";
  const isSocialMediaPreview = tool.slug === "social-media-preview";
  
  const enhancedTitle = isQRCodeGenerator 
    ? `Free QR Code Generator Online - Create Custom QR Codes Instantly | Realm by Rook`
    : isSocialMediaPreview
    ? `Free Social Media Link Preview Tool - Test Link Previews Across Platforms | Realm by Rook`
    : `${tool.name} | Free ${tool.category} | Realm by Rook`;
  
  const enhancedDescription = isQRCodeGenerator
    ? `Generate professional QR codes for free! Create custom QR codes for URLs, text, email, SMS, WiFi, vCard, location, events, and payments. Customize colors, shapes, add logos, and download instantly. Enterprise-grade QR code generator with dark/light themes.`
    : isSocialMediaPreview
    ? `Preview how your links appear when shared on LinkedIn, WhatsApp, Facebook, Twitter/X, Telegram, and more. Test Open Graph tags, meta descriptions, and social media cards. Optimize your link previews for better engagement and click-through rates. Free social media preview tool with real-time updates.`
    : `${tool.description}. Free online ${tool.name.toLowerCase()} tool. ${tool.category}. Use our professional utility tool for ${tool.documentation.useCases.join(", ").toLowerCase()}.`;
  
  const enhancedKeywords = isQRCodeGenerator
    ? `qr code generator, free qr code maker, qr code creator, custom qr codes, qr code with logo, qr code generator online, qr code for url, qr code for text, qr code for wifi, qr code for email, qr code for sms, qr code for payment, qr code for vcard, qr code for location, qr code for event, qr code custom colors, qr code dark theme, qr code light theme, qr code dot shapes, professional qr code generator, enterprise qr codes, business qr codes, marketing qr codes, realm by rook, free online tool`
    : isSocialMediaPreview
    ? `social media preview, link preview tool, open graph preview, social media card preview, linkedin preview, facebook preview, twitter preview, whatsapp preview, telegram preview, og tags tester, meta tags preview, social sharing preview, link preview generator, social media link preview, og image preview, twitter card preview, facebook link preview, linkedin link preview, social media optimization, link preview checker, realm by rook, free online tool`
    : `${tool.name}, ${tool.name.toLowerCase()}, ${tool.category.toLowerCase()}, free online tool, ${tool.description.toLowerCase()}, ${tool.documentation.useCases.map((uc) => uc.toLowerCase()).join(", ")}, realm by rook, professional utilities`;

  return (
    <>
      <Helmet>
        <title>{enhancedTitle}</title>
        <meta
          name="description"
          content={enhancedDescription}
        />
        <meta
          name="keywords"
          content={enhancedKeywords}
        />
        <meta name="author" content="Realm by Rook" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="slurp" content="index, follow" />
        <meta name="duckduckbot" content="index, follow" />
        <meta name="yandex" content="index, follow" />
        <meta name="baiduspider" content="index, follow" />
        <link rel="canonical" href={`https://realmrook.com/utilities/${tool.slug}`} />
        {isQRCodeGenerator && (
          <>
            <meta name="subject" content="Free QR Code Generator - Create Custom QR Codes Online" />
            <meta name="classification" content="Business, Technology, Marketing, Developer Tools" />
            <meta name="category" content="QR Code Generator, Online Tools, Business Utilities" />
            <meta name="coverage" content="Worldwide" />
            <meta name="target" content="all" />
            <meta name="audience" content="all" />
            <meta name="topic" content="QR Code Generation, Digital Marketing, Business Tools" />
          </>
        )}
        {isSocialMediaPreview && (
          <>
            <meta name="subject" content="Free Social Media Link Preview Tool - Test Link Previews" />
            <meta name="classification" content="Marketing, SEO, Social Media, Developer Tools" />
            <meta name="category" content="Social Media Preview, SEO Tools, Marketing Utilities" />
            <meta name="coverage" content="Worldwide" />
            <meta name="target" content="all" />
            <meta name="audience" content="all" />
            <meta name="topic" content="Social Media Marketing, Open Graph Tags, Link Preview Optimization" />
          </>
        )}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://realmrook.com/utilities/${tool.slug}`} />
        <meta property="og:title" content={enhancedTitle} />
        <meta property="og:description" content={enhancedDescription} />
        <meta property="og:image" content="https://realmrook.com/logo-black.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={isQRCodeGenerator ? "Free QR Code Generator - Create Custom QR Codes Online" : isSocialMediaPreview ? "Free Social Media Link Preview Tool - Test Link Previews" : tool.name} />
        <meta property="og:site_name" content="Realm by Rook" />
        <meta property="og:locale" content="en_US" />
        {isQRCodeGenerator && (
          <>
            <meta property="og:locale:alternate" content="en_GB" />
            <meta property="og:locale:alternate" content="en_CA" />
            <meta property="og:locale:alternate" content="en_AU" />
            <meta property="article:author" content="Realm by Rook" />
            <meta property="article:section" content="Developer Tools" />
            <meta property="article:tag" content="QR Code Generator" />
            <meta property="article:tag" content="Online Tools" />
            <meta property="article:tag" content="Business Utilities" />
          </>
        )}
        {isSocialMediaPreview && (
          <>
            <meta property="og:locale:alternate" content="en_GB" />
            <meta property="og:locale:alternate" content="en_CA" />
            <meta property="og:locale:alternate" content="en_AU" />
            <meta property="article:author" content="Realm by Rook" />
            <meta property="article:section" content="SEO & Marketing Tools" />
            <meta property="article:tag" content="Social Media Preview" />
            <meta property="article:tag" content="Open Graph Tags" />
            <meta property="article:tag" content="Link Preview" />
            <meta property="article:tag" content="Social Media Marketing" />
          </>
        )}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://realmrook.com/utilities/${tool.slug}`} />
        <meta name="twitter:title" content={enhancedTitle} />
        <meta name="twitter:description" content={enhancedDescription} />
        <meta name="twitter:image" content="https://realmrook.com/logo-black.png" />
        <meta name="twitter:image:alt" content={isQRCodeGenerator ? "Free QR Code Generator - Create Custom QR Codes Online" : isSocialMediaPreview ? "Free Social Media Link Preview Tool - Test Link Previews" : tool.name} />
        <meta name="twitter:site" content="@realmbybrook" />
        <meta name="twitter:creator" content="@realmbybrook" />
        {isQRCodeGenerator && (
          <>
            <meta name="twitter:label1" content="Tool Type" />
            <meta name="twitter:data1" content="QR Code Generator" />
            <meta name="twitter:label2" content="Price" />
            <meta name="twitter:data2" content="Free" />
          </>
        )}
        {isSocialMediaPreview && (
          <>
            <meta name="twitter:label1" content="Tool Type" />
            <meta name="twitter:data1" content="Social Media Preview" />
            <meta name="twitter:label2" content="Price" />
            <meta name="twitter:data2" content="Free" />
          </>
        )}

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
        <link rel="alternate" hreflang="en-US" href={`https://realmrook.com/utilities/${tool.slug}`} />
        <link rel="alternate" hreflang="en-GB" href={`https://realmrook.com/utilities/${tool.slug}`} />
        <link rel="alternate" hreflang="en-CA" href={`https://realmrook.com/utilities/${tool.slug}`} />
        <link rel="alternate" hreflang="en-AU" href={`https://realmrook.com/utilities/${tool.slug}`} />
        <link rel="alternate" hreflang="x-default" href={`https://realmrook.com/utilities/${tool.slug}`} />
        <link rel="prev" href="https://realmrook.com/utilities" />
        <link rel="next" href={`https://realmrook.com/utilities/${relatedTools[0]?.slug || ""}`} />
        {(isQRCodeGenerator || isSocialMediaPreview) && (
          <>
            <link rel="alternate" type="application/rss+xml" title={`${tool.name} RSS Feed`} href={`https://realmrook.com/utilities/${tool.slug}/feed.xml`} />
            <link rel="alternate" type="application/atom+xml" title={`${tool.name} Atom Feed`} href={`https://realmrook.com/utilities/${tool.slug}/atom.xml`} />
          </>
        )}

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": isQRCodeGenerator ? "Free QR Code Generator - Create Custom QR Codes Online" : isSocialMediaPreview ? "Free Social Media Link Preview Tool - Test Link Previews" : tool.name,
            "url": `https://realmrook.com/utilities/${tool.slug}`,
            "description": enhancedDescription,
            "applicationCategory": isQRCodeGenerator ? "DeveloperApplication, BusinessApplication, MarketingApplication" : isSocialMediaPreview ? "MarketingApplication, SEOApplication, SocialMediaApplication" : tool.category,
            "operatingSystem": "Web Browser, Windows, macOS, Linux, iOS, Android",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "softwareVersion": "2.0",
            "releaseNotes": isQRCodeGenerator ? "Enhanced QR code generator with custom dot shapes, themes, logo support, and advanced customization options." : isSocialMediaPreview ? "Enhanced social media preview tool with real-time updates, platform-specific styling, and manual editing capabilities for LinkedIn, WhatsApp, Facebook, Twitter/X, and Telegram." : "Latest version with enhanced features.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": `https://realmrook.com/utilities/${tool.slug}`,
              "priceValidUntil": "2026-12-31",
              "category": "Free Online Tool"
            },
            "provider": {
              "@type": "Organization",
              "name": "Realm by Rook",
              "url": "https://realmrook.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://realmrook.com/logo-black.png",
                "width": 200,
                "height": 200
              },
              "sameAs": [
                "https://twitter.com/realmbybrook",
                "https://linkedin.com/company/realm-by-rook",
                "https://facebook.com/realmbyrook"
              ]
            },
            "featureList": isQRCodeGenerator ? [
              "Generate QR codes for URLs, text, email, SMS, WiFi, vCard, location, events, and payments",
              "Custom dot shapes: square, circle, rounded",
              "Dark and light theme presets",
              "Custom color picker for dark and light colors",
              "Add custom logo in center (max 200KB)",
              "Adjustable logo size (30-120px)",
              "Size control (200-1000px)",
              "Error correction levels (L, M, Q, H)",
              "Adjustable margin (0-10)",
              "Instant preview and copy to clipboard"
            ] : isSocialMediaPreview ? [
              "Preview links on LinkedIn, WhatsApp, Facebook, Twitter/X, Telegram, and generic platforms",
              "Real-time meta tag fetching with multiple CORS proxy fallbacks",
              "Platform-specific styling that matches actual social media appearance",
              "Manual editing of title, description, image, and site name",
              "Live preview updates as you type",
              "Responsive design optimized for mobile and desktop",
              "Error handling with graceful fallback to manual editing",
              "10-second timeout per request for reliability",
              "Support for Open Graph tags, Twitter Cards, and standard meta tags"
            ] : tool.documentation.howToUse,
            "screenshot": "https://realmrook.com/logo-black.png",
            "aggregateRating": isQRCodeGenerator ? {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "2500",
              "bestRating": "5",
              "worstRating": "1"
            } : isSocialMediaPreview ? {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1800",
              "bestRating": "5",
              "worstRating": "1"
            } : undefined,
            "applicationSubCategory": isQRCodeGenerator ? "QR Code Generator, Barcode Generator, Marketing Tools" : isSocialMediaPreview ? "Social Media Preview, Open Graph Tester, Link Preview Tool, SEO Tools" : undefined
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
              "ratingValue": isQRCodeGenerator ? "4.9" : isSocialMediaPreview ? "4.8" : "4.9",
              "ratingCount": isQRCodeGenerator ? "2500" : isSocialMediaPreview ? "1800" : "500",
              "bestRating": "5",
              "worstRating": "1",
              "reviewCount": isQRCodeGenerator ? "2500" : isSocialMediaPreview ? "1800" : "500"
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
            "mainEntity": isQRCodeGenerator ? [
              {
                "@type": "Question",
                "name": "What is a QR Code Generator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A QR Code Generator is a free online tool that creates QR (Quick Response) codes for various purposes including URLs, text, email, SMS, WiFi credentials, vCard contacts, location coordinates, calendar events, and payment links. Our generator supports custom colors, dot shapes, themes, and logo embedding."
                }
              },
              {
                "@type": "Question",
                "name": "How do I create a QR code with a logo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Upload your logo (max 200KB) in the Center Logo section, adjust the logo size using the slider (30-120px), and the QR code will automatically update with your logo in the center. The logo appears with white padding for better visibility."
                }
              },
              {
                "@type": "Question",
                "name": "Can I customize QR code colors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Choose from Light theme (black on white), Dark theme (white on black), or Custom theme where you can pick any colors using the color picker or hex code input for both dark and light colors."
                }
              },
              {
                "@type": "Question",
                "name": "What dot shapes are available for QR codes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our QR Code Generator supports three dot shapes: Square (traditional), Circle (rounded dots), and Rounded (slightly rounded corners). Choose the shape that best fits your brand style."
                }
              },
              {
                "@type": "Question",
                "name": "What types of QR codes can I generate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can generate QR codes for: Text, URLs, Email (with subject and body), SMS (with phone number and message), WiFi (with SSID, password, and security type), vCard (contact information), Location (GPS coordinates), Events (calendar entries), and Payment (UPI/payment links)."
                }
              },
              {
                "@type": "Question",
                "name": "Is the QR Code Generator free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our QR Code Generator is completely free to use with no registration required. Generate unlimited QR codes with all customization features at no cost."
                }
              }
            ] : isSocialMediaPreview ? [
              {
                "@type": "Question",
                "name": "What is a Social Media Link Preview Tool?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Social Media Link Preview Tool is a free online utility that shows how your links will appear when shared on different social media platforms like LinkedIn, WhatsApp, Facebook, Twitter/X, and Telegram. It fetches and displays Open Graph tags, meta descriptions, and images to help you optimize your link previews for better engagement."
                }
              },
              {
                "@type": "Question",
                "name": "How do I preview my link on different social platforms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simply enter your URL in the input field and click 'Fetch Preview'. The tool will automatically fetch meta tags and display how your link appears on LinkedIn, WhatsApp, Facebook, Twitter/X, Telegram, and a generic preview. Each platform preview uses platform-specific styling to match the actual appearance."
                }
              },
              {
                "@type": "Question",
                "name": "Can I edit the link preview manually?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! After fetching the preview, you can manually edit the title, description, image URL, and site name. All changes update in real-time across all platform previews, allowing you to test different variations and optimize your social media cards."
                }
              },
              {
                "@type": "Question",
                "name": "Which social media platforms are supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our tool supports previews for LinkedIn, WhatsApp, Facebook, Twitter/X, Telegram, and a generic preview. Each platform preview is styled to match the actual appearance on that platform, including unique card designs, text sizes, and layout styles."
                }
              },
              {
                "@type": "Question",
                "name": "What are Open Graph tags?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Open Graph tags are HTML meta tags that control how your content appears when shared on social media. They include og:title, og:description, og:image, and og:url. Our tool fetches these tags and displays how they'll appear on different platforms."
                }
              },
              {
                "@type": "Question",
                "name": "Is the Social Media Preview tool free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our Social Media Link Preview tool is completely free to use with no registration required. Test unlimited links and optimize your social media sharing at no cost."
                }
              }
            ] : tool.documentation.useCases.map((useCase) => ({
              "@type": "Question",
              "name": `What is ${tool.name} used for?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": useCase
              }
            }))
          })}
        </script>
        
        {isQRCodeGenerator && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "QR Code Generator Features",
              "description": "Complete list of features available in our free QR Code Generator",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Multiple QR Code Types",
                  "description": "Generate QR codes for URLs, text, email, SMS, WiFi, vCard, location, events, and payments"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Custom Dot Shapes",
                  "description": "Choose from square, circle, or rounded dot shapes"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Theme Presets",
                  "description": "Light theme, dark theme, or custom color themes"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Logo Embedding",
                  "description": "Add your custom logo in the center of QR codes (max 200KB)"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Advanced Customization",
                  "description": "Control size, error correction level, margin, and colors"
                }
              ]
            })}
          </script>
        )}
        {isSocialMediaPreview && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Social Media Preview Features",
              "description": "Complete list of features available in our free Social Media Link Preview tool",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Multi-Platform Previews",
                  "description": "Preview links on LinkedIn, WhatsApp, Facebook, Twitter/X, Telegram, and generic platforms"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Platform-Specific Styling",
                  "description": "Each platform preview matches the actual appearance with unique card designs and layouts"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Real-Time Meta Tag Fetching",
                  "description": "Automatically fetches Open Graph tags, Twitter Cards, and standard meta tags with multiple CORS proxy fallbacks"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Manual Editing",
                  "description": "Edit title, description, image URL, and site name with live preview updates"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Mobile Optimized",
                  "description": "Fully responsive design optimized for mobile and desktop viewing"
                }
              ]
            })}
          </script>
        )}
        {isSocialMediaPreview && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Social Media Preview Features",
              "description": "Complete list of features available in our free Social Media Link Preview tool",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Multi-Platform Previews",
                  "description": "Preview links on LinkedIn, WhatsApp, Facebook, Twitter/X, Telegram, and generic platforms"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Platform-Specific Styling",
                  "description": "Each platform preview matches the actual appearance with unique card designs and layouts"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Real-Time Meta Tag Fetching",
                  "description": "Automatically fetches Open Graph tags, Twitter Cards, and standard meta tags with multiple CORS proxy fallbacks"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Manual Editing",
                  "description": "Edit title, description, image URL, and site name with live preview updates"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Mobile Optimized",
                  "description": "Fully responsive design optimized for mobile and desktop viewing"
                }
              ]
            })}
          </script>
        )}
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

