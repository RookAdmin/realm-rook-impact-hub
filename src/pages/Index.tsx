import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/home/HeroSection';
import PodcastCarousel from '@/components/home/PodcastCarousel';
import ImpactMetrics from '@/components/home/ImpactMetrics';
import ServicesPreview from '@/components/home/ServicesPreview';
import ClientSpotlight from '@/components/home/ClientSpotlight';
import ClientQuotes from '@/components/home/ClientQuotes';
import RadProcessVisual from '@/components/home/RadProcessVisual';
import PartnerLogos from '@/components/home/PartnerLogos';
import InsightsResourcesPreview from '@/components/home/InsightsResourcesPreview';
import FinalCta from '@/components/home/FinalCta';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Realm by Rook | AI-Powered Tech & Marketing Corp

</title>
        <meta name="description" content="Premium creative-tech agency offering top-tier branding, UI/UX design, web development, SEO, and AI automation services. Transform your business with award-winning design and technology solutions." />
        <meta name="keywords" content="creative agency, tech agency, branding, UI/UX design, web development, SEO, AI automation, digital transformation" />
      </Helmet>
      <main className="min-h-screen">
        {/* Hero Section - Solid Black Background with Bold Typography */}
        <HeroSection />
        
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
