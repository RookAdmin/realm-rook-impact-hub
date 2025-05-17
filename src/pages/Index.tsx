
import React from 'react';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import ServiceCard from '@/components/ServiceCard';
import CtaSection from '@/components/CtaSection';
import { Brush, Code, BarChart, Layers, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  // Services data
  const services = [
    {
      title: 'Branding',
      description: 'Crafting unique identities that resonate with your audience and stand the test of time.',
      icon: <Brush size={24} />,
      link: '/services#branding',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing user-friendly experiences that delight users and achieve business goals.',
      icon: <Layers size={24} />,
      link: '/services#ui-ux',
    },
    {
      title: 'Web/App Development',
      description: 'Building responsive, scalable digital homes that perform flawlessly across all devices.',
      icon: <Code size={24} />,
      link: '/services#development',
    },
    {
      title: 'SEO',
      description: 'Boosting online visibility through data-driven strategies that deliver measurable results.',
      icon: <BarChart size={24} />,
      link: '/services#seo',
    },
  ];

  // Transformation stories data
  const transformationStories = [
    {
      before: 'A local boutique with a Wix site and 23 monthly visits.',
      after: 'Rebranded, redesigned, and ranking on page 1. 18K monthly visitors. 3x revenue.'
    },
    {
      before: 'Tech startup with inconsistent branding and 2% conversion rate.',
      after: 'Unified identity system, optimized UX flow. Now at 8.5% conversion and $2M in new funding.'
    },
    {
      before: 'E-commerce store with 5-second load time and 70% bounce rate.',
      after: 'Rebuilt from scratch. 1.2s load time, 22% bounce rate, 41% increase in average order value.'
    }
  ];

  // Customer testimonials data
  const testimonials = [
    {
      quote: 'Realm isn't an agency. They're a weapon.',
      author: 'Rishi B.',
      position: 'Founder, Zephyr Skincare'
    },
    {
      quote: 'They understood our product better than we did.',
      author: 'Natasha D.',
      position: 'CEO, Finovo'
    },
    {
      quote: 'The ROI speaks for itself. Best decision we made this year.',
      author: 'Marcus T.',
      position: 'CMO, Elevate Tech'
    }
  ];

  // Realm method steps
  const realmMethodSteps = [
    {
      title: 'Discovery',
      description: 'We dive deep into your brand and users.'
    },
    {
      title: 'Design',
      description: 'Bold, on-brand visuals that convert.'
    },
    {
      title: 'Build',
      description: 'Code that performs and scales.'
    },
    {
      title: 'Amplify',
      description: 'SEO + strategy for long-term growth.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Trust Section */}
      <TrustSection />
      
      {/* Services Section */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold">What We Do</h2>
            <div className="w-16 h-1 bg-realm-black mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Transformation Stories Section */}
      <section className="realm-section bg-realm-black text-white">
        <div className="realm-container">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold">From Ordinary to Unforgettable.</h2>
            <div className="w-16 h-1 bg-white mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformationStories.map((story, index) => (
              <div 
                key={index} 
                className="p-8 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="mb-6">
                  <p className="text-realm-lightgray font-medium line-through opacity-70">
                    Before: {story.before}
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-white font-medium">
                    After: {story.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Customer Voices Section */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold">What Founders Say After Partnering With Realm.</h2>
            <div className="w-16 h-1 bg-realm-black mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 border border-realm-lightgray hover:border-realm-black transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-realm-lightgray flex items-center justify-center mr-4">
                    <User size={20} />
                  </div>
                </div>
                <blockquote className="text-xl font-display mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-realm-darkgray">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Realm Method Section */}
      <section className="realm-section bg-realm-black text-white">
        <div className="realm-container">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold">This Is How We Build Empires.</h2>
            <div className="w-16 h-1 bg-white mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {realmMethodSteps.map((step, index) => (
              <div key={index} className="p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="mb-4 text-4xl font-display font-bold text-white/30">0{index + 1}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-realm-lightgray">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Get Started CTA Section */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              You're Not Too Early. You're Right on Time.
            </h2>
            
            <p className="mt-6 text-lg text-realm-darkgray">
              Whether you're a startup, scale-up, or sleeping giant — Realm by Rook exists to make your next chapter legendary.
            </p>
            
            <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <Link to="/contact">
                <Button className="realm-button flex items-center space-x-2">
                  <span>Schedule Your Free Consult</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
              
              <Link to="/case-studies" className="text-realm-black flex items-center space-x-2 realm-link">
                <span>Explore Our Work</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <p className="mt-6 text-sm text-realm-darkgray">
              One call could change your brand forever.
            </p>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <CtaSection />
    </main>
  );
};

export default Index;
