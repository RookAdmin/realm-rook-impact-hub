import React from "react";
import { Helmet } from "react-helmet-async";
import TopHeroSection from "@/components/home/TopHeroSection";
import HeroSection from "@/components/home/HeroSection";
import PodcastCarousel from "@/components/home/PodcastCarousel";
import ImpactMetrics from "@/components/home/ImpactMetrics";
import ServicesPreview from "@/components/home/ServicesPreview";
import ClientSpotlight from "@/components/home/ClientSpotlight";
import ClientQuotes from "@/components/home/ClientQuotes";
import GEOSection from "@/components/home/GEOSection";
import RadProcessVisual from "@/components/home/RadProcessVisual";
import PartnerLogos from "@/components/home/PartnerLogos";
import InsightsResourcesPreview from "@/components/home/InsightsResourcesPreview";
import FinalCta from "@/components/home/FinalCta";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          Realm by Rook | Award-Winning Digital Marketing, Web Development & AI
          Automation Agency
        </title>
        <meta
          name="description"
          content="Accelerate your business growth with expert branding, UI/UX design, custom web development, data-driven SEO, GEO optimization, and cutting-edge AI automation. Trusted by 40+ brands worldwide."
        />
        <meta
          name="keywords"
          content="digital marketing agency, web development services, AI automation solutions, brand identity design, UI UX designer, SEO optimization, GEO citation optimization, social media marketing, business growth agency"
        />
        <meta
          property="og:title"
          content="Realm by Rook | Award-Winning Digital Marketing & AI Automation Agency"
        />
        <meta
          property="og:description"
          content="Transform your digital presence with award-winning branding, web development, AI automation, and data-driven marketing strategies. Get measurable results."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Realm by Rook | Digital Marketing & AI Automation Experts"
        />
        <meta
          name="twitter:description"
          content="Accelerate growth with expert digital marketing, web development, and AI automation services. 40+ brands scaled, 95% client retention."
        />
      </Helmet>
      <main className="min-h-screen">
        {/* Top Hero Section - Modern AI Agency Positioning */}
        <TopHeroSection />

        {/* Hero Section - Solid Black Background with Bold Typography */}
        <HeroSection />

        {/* GEO Section - AI Citation Optimization */}
        <GEOSection />

        {/* Client Spotlight - Success Stories */}
        <ClientSpotlight />

        {/* What We Do - Services Preview */}
        <ServicesPreview />

        {/* Client Testimonials */}
        <ClientQuotes />

        {/* Impact Metrics Section - Animated Counters */}
        <ImpactMetrics />

        {/* RAD Process Visual */}
        <RadProcessVisual />

        {/* Partner Logos */}
        <PartnerLogos />

        {/* Insights and Resources Preview */}
        {/* <InsightsResourcesPreview /> */}

        {/* Podcast Carousel - Running Thumbnails */}
        <PodcastCarousel />

        {/* Final CTA Section */}
        <FinalCta />
      </main>
    </>
  );
};

export default Index;
