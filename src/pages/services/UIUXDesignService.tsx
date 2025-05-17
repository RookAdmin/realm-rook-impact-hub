
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceBreadcrumb from '@/components/services/ServiceBreadcrumb';

const UIUXDesignService = () => {
  // Scroll to contact section handler
  const scrollToContact = () => {
    const contactSection = document.getElementById('uiux-contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Tools we use data
  const designTools = [
    { name: 'Figma', description: 'Our primary design and collaboration tool' },
    { name: 'Adobe XD', description: 'For specific design requirements' },
    { name: 'Framer', description: 'For advanced prototyping and interactions' },
    { name: 'Miro', description: 'For user journey mapping and brainstorming' },
    { name: 'FigJam', description: 'For collaborative ideation sessions' },
    { name: 'Whimsical', description: 'For wireframing and flow diagrams' }
  ];

  // Process steps
  const processSteps = [
    { name: 'Discovery Workshop', description: 'Understanding your users, business goals, and market position.' },
    { name: 'User Personas & Journey Mapping', description: 'Creating detailed user profiles and experience flows.' },
    { name: 'Wireframes & Interaction Plans', description: 'Low-fidelity layouts and functional specifications.' },
    { name: 'Hi-Fi UI Design (Web & Mobile)', description: 'Pixel-perfect visual design across all screen sizes.' },
    { name: 'Clickable Prototypes', description: 'Interactive models for testing and validation.' },
    { name: 'Dev Handoff & QA', description: 'Clean assets and specifications for seamless implementation.' }
  ];

  // Specialty areas
  const specialtyAreas = [
    'SaaS Dashboards',
    'Founders & Creators Portfolio Sites',
    'Product Landing Pages',
    'E-commerce UX',
    'App Interfaces',
    'Developer Hand-off Kits'
  ];

  // Impact proofs
  const impactProofs = [
    { stat: '50% bounce rate drop after UI redesign', client: 'SaaS Platform' },
    { stat: 'User task time decreased by 40%', client: 'Fintech App' },
    { stat: 'App downloads grew 3x in 2 months post-redesign', client: 'Fitness Startup' }
  ];

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="realm-container">
        <ServiceBreadcrumb serviceName="UI/UX Design" serviceUrl="/services/ui-ux-design" />
        
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl">
            <h1 className="realm-headline mb-6">
              Designs That Don't Just Look Good. They Work.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-realm-darkgray">
              We craft human-first, experience-driven digital interfaces.
            </p>
            <Button onClick={scrollToContact} className="realm-button flex items-center gap-2">
              Let's Design Together <ArrowRight size={16} />
            </Button>
          </div>
        </section>
        
        {/* Why Realm for UI/UX */}
        <section className="py-16 border-t border-realm-lightgray">
          <h2 className="text-3xl font-display font-bold mb-12">Why Realm for UI/UX?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-6 h-6 bg-realm-black text-white rounded-full flex items-center justify-center">
                <Check size={16} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Research-Led, User-First</h3>
                <p className="text-realm-darkgray">We design based on what your users actually need, not just what looks trendy.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-6 h-6 bg-realm-black text-white rounded-full flex items-center justify-center">
                <Check size={16} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Mobile-Optimized, Web-Responsive</h3>
                <p className="text-realm-darkgray">Every design works flawlessly across all devices and screen sizes.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-6 h-6 bg-realm-black text-white rounded-full flex items-center justify-center">
                <Check size={16} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Built for Conversions</h3>
                <p className="text-realm-darkgray">Strategic UI patterns that guide users toward your business goals.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-6 h-6 bg-realm-black text-white rounded-full flex items-center justify-center">
                <Check size={16} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Accessibility + Inclusivity in Every Pixel</h3>
                <p className="text-realm-darkgray">WCAG compliant designs that welcome all users regardless of ability.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-6 h-6 bg-realm-black text-white rounded-full flex items-center justify-center">
                <Check size={16} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Motion & Micro-interactions included</h3>
                <p className="text-realm-darkgray">Subtle animations that enhance user experience without overwhelming.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Process */}
        <section className="py-16 border-t border-realm-lightgray">
          <h2 className="text-3xl font-display font-bold mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 bg-realm-black text-white flex items-center justify-center font-medium">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.name}</h3>
                  <p className="text-realm-darkgray">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Tools We Use */}
        <section className="py-16 border-t border-realm-lightgray">
          <h2 className="text-3xl font-display font-bold mb-12">Tools We Use</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {designTools.map((tool, index) => (
              <div key={index} className="border border-realm-lightgray p-4 hover:border-realm-black transition-all duration-300 flex flex-col items-center justify-center text-center h-32">
                <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                <p className="text-sm text-realm-darkgray">{tool.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Specialty Design Areas */}
        <section className="py-16 border-t border-realm-lightgray">
          <h2 className="text-3xl font-display font-bold mb-12">Specialty Design Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {specialtyAreas.map((area, index) => (
              <div key={index} className="border border-realm-lightgray p-6 hover:border-realm-black transition-all duration-300">
                <h3 className="text-xl font-bold">{area}</h3>
              </div>
            ))}
          </div>
        </section>
        
        {/* Proof of Work */}
        <section className="py-16 border-t border-realm-lightgray">
          <h2 className="text-3xl font-display font-bold mb-12">Proof of Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactProofs.map((proof, index) => (
              <div key={index} className="border border-realm-lightgray p-6 hover:border-realm-black transition-all duration-300">
                <p className="text-2xl font-bold mb-2">{proof.stat}</p>
                <p className="text-realm-darkgray">{proof.client}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 border-t border-realm-lightgray">
          <h2 className="text-3xl font-display font-bold mb-12">What Our Clients Say</h2>
          <div className="border border-realm-lightgray p-10">
            <blockquote className="text-2xl font-display italic mb-6">
              "The UX Realm team changed everything. Our product finally feels intuitive and our customers love it."
            </blockquote>
            <p className="font-bold">Sara J.</p>
            <p className="text-realm-darkgray">CEO, Tech Startup</p>
          </div>
        </section>
        
        {/* Final CTA */}
        <section id="uiux-contact-section" className="py-16 border-t border-realm-lightgray text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Your Idea Deserves a Beautiful, Functional Experience.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="realm-button flex items-center gap-2">
              Start My Project <ArrowRight size={16} />
            </Button>
            <Button variant="outline" className="realm-button bg-transparent border-realm-black text-realm-black hover:bg-realm-black hover:text-white flex items-center gap-2">
              Talk to Our Design Team
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UIUXDesignService;
