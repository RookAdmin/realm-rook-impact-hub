import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Smartphone, Code, Search, MessageSquare, Bot, Globe, Database, Shield, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: 'AI Agents Automation',
      description: 'Building intelligent systems and AI agents to automate workflows and scale your business.',
      link: '/services/ai-agents-automation',
      icon: <Bot size={32} />,
      image: '/services/aiagent.png'
    },
    {
      title: 'GEO Service',
      description: 'Get your brand seen, cited, and trusted by AI systems. Next-gen optimization for ChatGPT, Gemini, Claude, and more.',
      link: '/services/geo',
      icon: <Sparkles size={32} />,
      image: '/ai/comp.png'
    },
    {
      title: 'Web/App Development',
      description: 'Building responsive, scalable digital homes that perform flawlessly across all devices.',
      link: '/services/web-app-development',
      icon: <Code size={32} />,
      image: '/services/website1.png'
    },
     {
      title: 'Social Media Marketing',
      description: 'Multiplying brand impact through strategic storytelling and AI-powered social media management.',
      link: '/services/social-media-marketing',
      icon: <MessageSquare size={32} />,
      image: '/services/smmt.png'
    },
    {
      title: 'Branding',
      description: 'Crafting unique identities that resonate with your audience and stand the test of time.',
      link: '/services/branding',
      icon: <Palette size={32} />,
      image: '/services/brandingt.png'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing user-friendly experiences that delight users and achieve business goals.',
      link: '/services/ui-ux-design',
      icon: <Smartphone size={32} />,
      image: '/services/uxuit.png'
    },
    
    {
      title: 'SEO',
      description: 'Boosting online visibility through data-driven strategies that deliver measurable results.',
      link: '/services/seo',
      icon: <Search size={32} />,
      image: '/services/seo1.png'
    },
      
    {
      title: 'Domain Name Consultation',
      description: 'Expert guidance on strategic domain acquisition to build a solid foundation for your brand.',
      link: '/services/domain-name-consultation',
      icon: <Globe size={32} />,
      image: '/services/domainname.png'
    },
    {
      title: 'Enterprise Domain Management',
      description: 'Comprehensive solutions for managing large-scale enterprise domain portfolios securely.',
      link: '/enterprise-domains',
      icon: <Shield size={32} />,
      image: '/services/enterprisedomain.png'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | Realm by Rook - Branding, UI/UX, Development, SEO, GEO & AI Automation</title>
        <meta name="description" content="Comprehensive digital services including branding, UI/UX design, web/app development, SEO, GEO (AI citation optimization), social media marketing, and AI automation. Premium solutions for scaling businesses." />
        <meta name="keywords" content="branding services, UI/UX design, web development, app development, SEO services, GEO service, AI citation optimization, social media marketing, AI automation, digital marketing" />
      </Helmet>
      <main className="min-h-screen pt-32 pb-16">
        <div className="realm-container">
          <h1 className="realm-headline">What We Do?</h1>
          <p className="realm-subheadline">
            We offer premium branding, UI/UX, development, SEO, GEO (AI citation optimization), social media services, and AI business automation to help businesses achieve their goals.
          </p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="mb-6 aspect-video overflow-hidden">
                  <img 
                    src={service.image}
                    alt={`${service.title} service`}
                    className="realm-image realm-image-greyscale hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="realm-icon-container">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-realm-darkgray mb-6">{service.description}</p>
                <Link to={service.link} className="realm-link flex items-center space-x-2">
                  <span>Learn more</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button className="realm-button flex items-center space-x-2">
                <span>Book a Free Strategy Call</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
