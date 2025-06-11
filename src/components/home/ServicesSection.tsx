
import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { Palette, LayoutDashboard, Code, Search, MessageSquare, Bot, Globe, Database, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Branding",
      description: "Identity systems that captivate and resonate with your ideal audience.",
      icon: <Palette size={24} />,
      link: "/services/branding",
    },
    {
      title: "UI/UX Design",
      description: "Intuitive interfaces that convert visitors into customers.",
      icon: <LayoutDashboard size={24} />,
      link: "/services/ui-ux-design",
    },
    {
      title: "Web & App Development",
      description: "Fast, responsive platforms built for speed and conversion.",
      icon: <Code size={24} />,
      link: "/services/web-app-development",
    },
    {
      title: "SEO",
      description: "Data-driven strategies that boost visibility and drive traffic.",
      icon: <Search size={24} />,
      link: "/services/seo",
    },
    {
      title: "Social Media Marketing",
      description: "Strategic storytelling that multiplies your brand's impact.",
      icon: <MessageSquare size={24} />,
      link: "/services/social-media-marketing",
    },
    {
      title: "AI & Business Automation",
      description: "Intelligent systems and AI agents to automate workflows and scale your business.",
      icon: <Bot size={24} />,
      link: "/services/ai-agents-automation",
    },
    {
      title: "Domain Name Consultation",
      description: "Strategic domain acquisition that builds a solid foundation for your brand.",
      icon: <Globe size={24} />,
      link: "/services/domain-name-consultation",
    },
    {
      title: "Enterprise Domain Management",
      description: "Secure solutions for managing and protecting large-scale domain portfolios.",
      icon: <Shield size={24} />,
      link: "/enterprise-domains",
    }
  ];

  return (
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
  );
};

export default ServicesSection;
