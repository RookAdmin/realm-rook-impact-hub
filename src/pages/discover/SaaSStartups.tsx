import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Target, Monitor, Server, Search, Share2, Brain, CheckCircle, ArrowRight } from "lucide-react";
import PageHeader from '@/components/common/PageHeader';
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import { impactStudies } from '@/data/impactStudiesData';
import ImpactStudyCard from '@/components/impact-studies/ImpactStudyCard';
import BeforeAfterVisuals from '@/components/home/BeforeAfterVisuals';
import TransformationStories from '@/components/home/TransformationStories';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const SaaSStartups = () => {
  // Services list
  const services = [
    {
      title: "Brand Positioning That Resonates",
      description: "Craft a brand identity that stands out in competitive SaaS landscapes.",
      icon: Target,
    },
    {
      title: "User-Centric UI/UX Design",
      description: "Deliver intuitive experiences that maximize user adoption and retention.",
      icon: Monitor,
    },
    {
      title: "Robust & Scalable Development",
      description: "Build architecture designed for seamless growth and high availability.",
      icon: Server,
    },
    {
      title: "Search Engine & Content Strategy",
      description: "Drive qualified organic traffic with data-driven SEO and content marketing.",
      icon: Search,
    },
    {
      title: "Growth-Focused Social Engagement",
      description: "Fuel user acquisition and community building with targeted campaigns.",
      icon: Share2,
    },
    {
      title: "AI-Powered Workflow Automation",
      description: "Streamline processes to reduce churn, optimize operations, and enhance customer satisfaction.",
      icon: Brain,
    }
  ];

  // Growth process steps
  const growthSteps = [
    {
      number: 1,
      title: "Strategic Brand Development",
      description: "Design a SaaS brand narrative that inspires trust and loyalty."
    },
    {
      number: 2,
      title: "Cutting-Edge Product Experience",
      description: "Deliver fast, reliable, and user-friendly SaaS platforms."
    },
    {
      number: 3,
      title: "Optimized Growth Channels",
      description: "Implement multi-channel strategies to accelerate customer acquisition."
    },
    {
      number: 4,
      title: "Intelligent Automation & Analytics",
      description: "Leverage AI for predictive insights, personalized marketing, and automated support."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Realm's solutions scaled our SaaS platform globally, improving engagement by 40% within 6 months.",
      author: "CTO, Fast-Growing SaaS Company"
    },
    {
      quote: "Their AI-driven automation cut operational costs by 25%, enabling us to focus on innovation.",
      author: "Head of Growth, SaaS Startup"
    }
  ];

  // FAQ items
  const faqs = [
    {
      question: "Can you customize solutions for complex SaaS products?",
      answer: "Absolutely. Our approach is tailored to your product's unique architecture and market."
    },
    {
      question: "How do you measure success?",
      answer: "Through actionable KPIs like user retention, conversion rates, and operational efficiency."
    }
  ];
  
  // Client logos
  const clientLogos = [
    { name: 'TechFlow', logo: '/placeholder.svg', tooltip: 'Increased user retention by 40% in 6 months' },
    { name: 'DataSphere', logo: '/placeholder.svg', tooltip: 'Reduced operational costs by 25%' },
    { name: 'CloudSync', logo: '/placeholder.svg', tooltip: '3.7x conversion growth in 90 days' },
    { name: 'PlatformX', logo: '/placeholder.svg', tooltip: 'Scaled to 6 countries in 12 months' },
  ];
  
  // Transformation stories
  const transformationStories = [
    { 
      before: "Confusing UX leading to high churn rates", 
      after: "Intuitive interface reducing churn by 35%" 
    },
    { 
      before: "Slow, error-prone deployment process", 
      after: "Automated CI/CD pipeline with 99.9% uptime" 
    },
    { 
      before: "Limited organic traffic and high CAC", 
      after: "SEO-optimized content driving 62% of new leads" 
    }
  ];

  return (
    <main className="min-h-screen">
      <ServiceBreadcrumb 
        serviceName="SaaS Startups" 
        serviceUrl="/discover/saas-startups" 
      />
      
      {/* Hero Section - Updated with solid black background */}
      <section className="bg-realm-black text-white py-20">
        <div className="realm-container relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Accelerate Your SaaS Growth with Scalable, Intelligent Solutions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-10"
            >
              Expertise in Branding, UI/UX, Development, SEO, Social Media, and AI Automation Tailored for SaaS Success
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/contact">
                <Button className="realm-button bg-white text-realm-black hover:bg-realm-lightgray">
                  Book Your Growth Strategy Session
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Engineered for SaaS Market Leadership
            </h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="service-card"
              >
                <div className="realm-icon-container">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-realm-darkgray">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Growth Process Section */}
      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              SaaS Success Framework
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {growthSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center border border-realm-black bg-white">
                  <span className="text-xl font-medium">{step.number}</span>
                </div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-realm-darkgray">{step.description}</p>
                
                {index < growthSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-realm-black opacity-20 -ml-4 -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Proof & Impact Section */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Real Transformations. Real Impact.
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Trusted by Visionaries, Proven by Outcomes
            </p>
          </motion.div>
          
          {/* Client Logos Strip */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-20"
          >
            <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
              {clientLogos.map((client, index) => (
                <div 
                  key={index} 
                  className="group relative cursor-pointer"
                >
                  <div className="realm-client-logo h-12 w-32 bg-gray-200 flex items-center justify-center">
                    {client.name}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-realm-black text-white px-4 py-2 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {client.tooltip}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Transformation Stories */}
          <TransformationStories stories={transformationStories} />
          
          {/* Before/After Visuals */}
          <BeforeAfterVisuals />
          
          {/* Impact Study Callout */}
          <div className="mt-20 max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center">
                See Our Impact in Action
              </h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactStudies.slice(0, 3).map((study) => (
                <ImpactStudyCard key={study.id} study={study} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/case-studies" className="realm-link inline-flex items-center text-realm-black font-medium">
                View All Impact Studies
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              You've seen what's possible. Let's make it real for your brand.
            </h2>
            
            <div className="mt-8">
              <Link to="/contact">
                <Button className="realm-button bg-realm-black text-white hover:bg-realm-darkgray">
                  Let's Build Your Case Study
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Transformative Impact from Our SaaS Partners
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-realm-lightgray p-8 border border-transparent hover:border-realm-black transition-all duration-300"
              >
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <p className="font-medium">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Logos Section */}
      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Trusted By Leading SaaS Companies
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
              <div className="realm-client-logo h-12 w-32 bg-gray-200 flex items-center justify-center">Client 1</div>
              <div className="realm-client-logo h-12 w-32 bg-gray-200 flex items-center justify-center">Client 2</div>
              <div className="realm-client-logo h-12 w-32 bg-gray-200 flex items-center justify-center">Client 3</div>
              <div className="realm-client-logo h-12 w-32 bg-gray-200 flex items-center justify-center">Client 4</div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA Section (original) */}
      <section className="realm-section bg-realm-black text-white">
        <div className="realm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Unlock Your SaaS Potential Today
            </h2>
            
            <p className="text-xl mb-12">
              Sophisticated challenges require expert execution. Harness Realm's proven capabilities to lead your market with confidence.
            </p>
            
            <Link to="/contact">
              <Button className="realm-button bg-white text-realm-black hover:bg-realm-lightgray">
                Schedule Your Strategy Call
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-realm-lightgray pb-6"
              >
                <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                <p className="text-realm-darkgray">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SaaSStartups;
