
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ImpactMetrics from '@/components/home/ImpactMetrics';
import ServicesPreview from '@/components/home/ServicesPreview';
import ClientSpotlight from '@/components/home/ClientSpotlight';
import BeforeAfterVisuals from '@/components/home/BeforeAfterVisuals';
import ClientQuotes from '@/components/home/ClientQuotes';
import RadProcessVisual from '@/components/home/RadProcessVisual';
import PartnerLogos from '@/components/home/PartnerLogos';
import InsightsResourcesPreview from '@/components/home/InsightsResourcesPreview';
import FinalCta from '@/components/home/FinalCta';

const   Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Solid Black Background with Bold Typography */}
      <HeroSection />
      
      {/* Impact Metrics Section - Animated Counters */}
      <ImpactMetrics />
      
      {/* What We Do - Services Preview */}
      <ServicesPreview />
      
      {/* Client Spotlight - Success Stories */}
      <ClientSpotlight />
      
      {/* Before & After Visual Strip */}
      <BeforeAfterVisuals />
      
      {/* Client Testimonials */}
      <ClientQuotes />
      
      {/* RAD Process Visual */}
      <RadProcessVisual />
      
      {/* Partner Logos */}
      <PartnerLogos />
      
      {/* Insights and Resources Preview */}
      <InsightsResourcesPreview />
      
      {/* Final CTA Section */}
      <FinalCta />
    </main>
  );
};

export default Index;
