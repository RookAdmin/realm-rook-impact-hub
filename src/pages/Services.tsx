
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: 'Branding',
      description: 'Crafting unique identities that resonate with your audience and stand the test of time.',
      link: '/services/branding'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing user-friendly experiences that delight users and achieve business goals.',
      link: '/services/ui-ux-design'
    },
    {
      title: 'Web/App Development',
      description: 'Building responsive, scalable digital homes that perform flawlessly across all devices.',
      link: '/services/web-app-development'
    },
    {
      title: 'SEO',
      description: 'Boosting online visibility through data-driven strategies that deliver measurable results.',
      link: '/services/seo'
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="realm-container">
        <h1 className="realm-headline">What We Do?</h1>
        <p className="realm-subheadline">
          We offer premium branding, UI/UX, development, and SEO services to help businesses achieve their goals.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="service-card">
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
