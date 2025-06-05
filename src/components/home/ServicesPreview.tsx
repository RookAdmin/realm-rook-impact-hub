
import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, LayoutDashboard, Code, Search, ArrowRight, MessageSquare, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesPreview = () => {
  const services = [
    {
      id: "automation",
      title: "AI & Business Automation",
      description: "Intelligent AI agents that automate workflows and scale your business.",
      icon: <Bot size={24} />,
      link: "/services/ai-business-automation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      id: "branding",
      title: "Branding",
      description: "Identity systems that captivate and resonate with your ideal audience.",
      icon: <Palette size={24} />,
      link: "/services/branding",
      image: "https://images.unsplash.com/photo-1545665277-5937489579f2?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      description: "Intuitive interfaces that convert visitors into customers.",
      icon: <LayoutDashboard size={24} />,
      link: "/services/ui-ux-design",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      id: "development",
      title: "Web & App Development",
      description: "Fast, responsive platforms built for speed and conversion.",
      icon: <Code size={24} />,
      link: "/services/web-app-development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      id: "seo",
      title: "SEO",
      description: "Data-driven strategies that boost visibility and drive traffic.",
      icon: <Search size={24} />,
      link: "/services/seo",
      image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      id: "social",
      title: "Social Media Marketing",
      description: "Strategic storytelling that multiplies your brand's impact.",
      icon: <MessageSquare size={24} />,
      link: "/services/social-media-marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500"
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
