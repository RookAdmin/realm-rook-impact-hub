
import React from 'react';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import CtaSection from '@/components/CtaSection';
import ServicesSection from '@/components/home/ServicesSection';
import TransformationStories from '@/components/home/TransformationStories';
import CustomerTestimonials from '@/components/home/CustomerTestimonials';
import RealmMethodSection from '@/components/home/RealmMethodSection';
import GetStartedCTA from '@/components/home/GetStartedCTA';
import { useHomeData } from '@/components/home/HomeData';

const Index = () => {
  const { services, transformationStories, testimonials, realmMethodSteps } = useHomeData();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Trust Section */}
      <TrustSection />
      
      {/* Services Section */}
      <ServicesSection services={services} />
      
      {/* Transformation Stories Section */}
      <TransformationStories stories={transformationStories} />
      
      {/* Customer Voices Section */}
      <CustomerTestimonials testimonials={testimonials} />
      
      {/* Realm Method Section */}
      <RealmMethodSection steps={realmMethodSteps} />
      
      {/* Get Started CTA Section */}
      <GetStartedCTA />
      
      {/* Final CTA Section */}
      <CtaSection />
    </main>
  );
};

export default Index;
