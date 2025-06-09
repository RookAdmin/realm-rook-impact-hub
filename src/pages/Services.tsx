
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Smartphone, Code, Search, MessageSquare, Bot, Globe, Database, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: 'AI Agents Automation',
      description: 'Building intelligent systems and AI agents to automate workflows and scale your business.',
      link: '/services/ai-business-automation',
      icon: <Bot size={32} />,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Branding',
      description: 'Crafting unique identities that resonate with your audience and stand the test of time.',
      link: '/services/branding',
      icon: <Palette size={32} />,
      image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing user-friendly experiences that delight users and achieve business goals.',
      link: '/services/ui-ux-design',
      icon: <Smartphone size={32} />,
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Web/App Development',
      description: 'Building responsive, scalable digital homes that perform flawlessly across all devices.',
      link: '/services/web-app-development',
      icon: <Code size={32} />,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'SEO',
      description: 'Boosting online visibility through data-driven strategies that deliver measurable results.',
      link: '/services/seo',
      icon: <Search size={32} />,
      image: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Social Media Marketing',
      description: 'Multiplying brand impact through strategic storytelling and AI-powered social media management.',
      link: '/services/social-media-marketing',
      icon: <MessageSquare size={32} />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400'
    },
    
    {
      title: 'Domain Name Consultation',
      description: 'Expert guidance on strategic domain acquisition to build a solid foundation for your brand.',
      link: '/services/domain-name-consultation',
      icon: <Globe size={32} />,
      image: 'https://images.unsplash.com/photo-1560472355-a3b4bcfe790d?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Enterprise Domain Management',
      description: 'Comprehensive solutions for managing large-scale enterprise domain portfolios securely.',
      link: '/enterprise-domains',
      icon: <Shield size={32} />,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="realm-container">
        <h1 className="realm-headline">What We Do?</h1>
        <p className="realm-subheadline">
          We offer premium branding, UI/UX, development, SEO, social media services, and AI business automation to help businesses achieve their goals.
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
  );
};

export default Services;
