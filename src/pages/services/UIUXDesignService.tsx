import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowDown, Check, Smartphone, Layout, Framer, ActivitySquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceBreadcrumb from '@/components/services/ServiceBreadcrumb';

// Remove the imports for components that don't exist
// import UIUXHero from '@/components/services/uiux/UIUXHero';
// import UIUXProcess from '@/components/services/uiux/UIUXProcess';
// import UIUXTools from '@/components/services/uiux/UIUXTools';
// import UIUXSpecialties from '@/components/services/uiux/UIUXSpecialties';
// import UIUXImpact from '@/components/services/uiux/UIUXImpact';
// import UIUXTestimonials from '@/components/services/uiux/UIUXTestimonials';
// import UIUXContactForm from '@/components/services/uiux/UIUXContactForm';

const UIUXDesignService = () => {
  const benefits = [
    {
      icon: <ActivitySquare size={24} />,
      title: "Research-Led, User-First",
      description: "Every design decision is backed by thorough research and user insights."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile-Optimized, Web-Responsive",
      description: "Designs that look and work flawlessly across all device types and screen sizes."
    },
    {
      icon: <Layout size={24} />,
      title: "Built for Conversions",
      description: "Strategic UX patterns that guide users toward desired business outcomes."
    },
    {
      icon: <Check size={24} />,
      title: "Accessibility + Inclusivity",
      description: "WCAG-compliant interfaces that work for everyone, everywhere."
    },
    {
      icon: <Framer size={24} />,
      title: "Motion & Micro-interactions",
      description: "Subtle animations that delight users and enhance engagement without sacrificing performance."
    }
  ];

  return (
    <main className="min-h-screen pt-32">
      <div className="realm-container mb-6">
        <ServiceBreadcrumb serviceName="UI/UX Design" serviceUrl="/services/ui-ux-design" />
      </div>

      {/* Hero Section with Visual */}
      <section className="pt-16 md:pt-24 pb-16 relative">
        <div className="realm-container">
          <div className="max-w-4xl">
            <h1 className="realm-headline mb-6">
              Designs That Don't Just Look Good. They Work.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-realm-darkgray">
              We craft human-first, experience-driven digital interfaces.
            </p>
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })} className="realm-button flex items-center gap-2">
              Let's Design Together <ArrowRight size={16} />
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-realm-lightgray p-6">
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80" 
                alt="UI/UX Design Wireframe" 
                className="realm-image realm-image-greyscale" 
              />
            </div>
            <div className="border border-realm-lightgray p-6">
              <img 
                src="https://images.unsplash.com/photo-1586717791821-3f44a563fa24?auto=format&fit=crop&q=80" 
                alt="UI/UX Design Mockup" 
                className="realm-image realm-image-greyscale" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Realm for UI/UX Section */}
      <section className="py-16 md:py-24 bg-realm-lightgray">
        <div className="realm-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Why Realm for UI/UX?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 border border-realm-black">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-realm-darkgray">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process with Visual Flowchart */}
      <section className="py-16 md:py-24">
        <div className="realm-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
            Our Process
          </h2>
          <p className="text-center text-realm-darkgray mb-16 max-w-2xl mx-auto">
            A strategic, proven approach to creating interfaces that users love.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {['Discovery Workshop', 'User Personas & Journey Mapping', 'Wireframes & Interaction Plans'].map((step, index) => (
                <div key={index} className="border border-realm-black p-6 text-center flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center border border-realm-black rounded-full mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-bold">{step}</h3>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center my-4">
              {/* Replace ArrowIndicator with a simple arrow div */}
              <div className="flex items-center justify-center">
                <ArrowDown size={24} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Hi-Fi UI Design (Web & Mobile)', 'Clickable Prototypes', 'Dev Handoff & QA'].map((step, index) => (
                <div key={index} className="border border-realm-black p-6 text-center flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center border border-realm-black rounded-full mb-4">
                    {index + 4}
                  </div>
                  <h3 className="font-bold">{step}</h3>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800" 
                alt="UI/UX Design Process" 
                className="realm-image-greyscale max-w-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-16 md:py-24 bg-realm-black text-white">
        <div className="realm-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Tools We Use
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['Figma', 'Adobe XD', 'Framer', 'Miro', 'FigJam', 'Whimsical'].map((tool, index) => (
              <div key={index} className="border border-white p-8 flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-white">
                  <img 
                    src={`https://via.placeholder.com/50x50?text=${tool[0]}`} 
                    alt={`${tool} logo`} 
                    className="w-10 h-10 object-contain" 
                  />
                </div>
                <h3 className="text-center">{tool}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Design Areas */}
      <section className="py-16 md:py-24">
        <div className="realm-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
            Specialty Design Areas
          </h2>
          <p className="text-center text-realm-darkgray mb-16 max-w-2xl mx-auto">
            Our team specializes in creating exceptional designs for these specific areas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'SaaS Dashboards', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
              { name: 'Portfolio Sites', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400' },
              { name: 'Product Landing Pages', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
              { name: 'E-commerce UX', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400' },
              { name: 'App Interfaces', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400' },
              { name: 'Dev Hand-off Kits', image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80&w=400' }
            ].map((specialty, index) => (
              <div key={index} className="border border-realm-lightgray hover:border-realm-black transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={specialty.image} 
                    alt={specialty.name} 
                    className="realm-image realm-image-greyscale hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{specialty.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of Work */}
      <section className="py-16 md:py-24 bg-realm-lightgray">
        <div className="realm-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
            Proof of Work
          </h2>
          <p className="text-center text-realm-darkgray mb-16 max-w-2xl mx-auto">
            From our Impact Studies - real results from real clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '50%', desc: 'bounce rate drop after UI redesign', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
              { stat: '40%', desc: 'user task time decreased', image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=400' },
              { stat: '3X', desc: 'app downloads grew in 2 months post-redesign', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=400' }
            ].map((proof, index) => (
              <div key={index} className="bg-white border border-realm-black p-8">
                <div className="aspect-video overflow-hidden mb-6">
                  <img 
                    src={proof.image} 
                    alt={`Impact proof ${index + 1}`} 
                    className="realm-image realm-image-greyscale"
                  />
                </div>
                <div className="text-3xl font-bold mb-2">{proof.stat}</div>
                <p>{proof.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="realm-container">
          <div className="border border-realm-black p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-italic mb-8">
              "The UX Realm team changed everything about how our users experience our product."
            </h2>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
                  alt="Client portrait" 
                  className="realm-image"
                />
              </div>
              <div className="text-left">
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-realm-darkgray">CPO, TechVision Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact-section" className="py-16 md:py-24 bg-realm-black text-white">
        <div className="realm-container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Your Idea Deserves a Beautiful, Functional Experience.
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <Button className="realm-button bg-white text-realm-black hover:bg-realm-lightgray">
              Start My Project
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-realm-black">
              Talk to Our Design Team
            </Button>
          </div>
        </div>
      </section>

      <div className="py-16 text-center">
        <Link to="/">
          <Button variant="outline" className="realm-button bg-transparent border-realm-black text-realm-black hover:bg-realm-black hover:text-white flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Homepage
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default UIUXDesignService;
