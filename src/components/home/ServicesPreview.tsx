
import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, LayoutDashboard, Code, Search, ArrowRight, MessageSquare, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesPreview = () => {
  const services = [
    {
      id: "automation",
      title: "AI Agents Automation",
      description: "Intelligent AI agents that automate workflows and scale your business.",
      icon: <Bot size={24} />,
      link: "/services/ai-agents-automation",
      image: "services/aiagent.png"
    },
    {
      id: "branding",
      title: "Branding",
      description: "Identity systems that captivate and resonate with your ideal audience.",
      icon: <Palette size={24} />,
      link: "/services/branding",
      image: "/home/Branding.png"
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      description: "Intuitive interfaces that convert visitors into customers.",
      icon: <LayoutDashboard size={24} />,
      link: "/services/ui-ux-design",
      image: "services/uxuit.png"
    },
    {
      id: "development",
      title: "Web & App Development",
      description: "Fast, responsive platforms built for speed and conversion.",
      icon: <Code size={24} />,
      link: "/services/web-app-development",
      image: "/services/website1.png"
    },
    {
      id: "seo",
      title: "SEO",
      description: "Data-driven strategies that boost visibility and drive traffic.",
      icon: <Search size={24} />,
      link: "/services/seo",
      image: "/services/seo1.png"
    },
    {
      id: "social",
      title: "Social Media Marketing",
      description: "Strategic storytelling that multiplies your brand's impact.",
      icon: <MessageSquare size={24} />,
      link: "/services/social-media-marketing",
      image: "/services/smmt.png"
    }
  ];

  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services-section" className="realm-section bg-white">
      <div className="realm-container">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What We Do ?</h2>
          <div className="w-16 h-1 bg-realm-black"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card group overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={serviceVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-video mb-6 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="realm-image realm-image-greyscale w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-12 w-12 mb-6 text-realm-black flex items-center justify-center border border-realm-lightgray group-hover:bg-realm-black group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-display font-medium mb-4">{service.title}</h3>
              
              <p className="text-realm-darkgray mb-6">
                {service.description}
              </p>
              
              <Link 
                to={service.link} 
                className="inline-flex items-center space-x-2 font-medium group-hover:text-realm-black transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
