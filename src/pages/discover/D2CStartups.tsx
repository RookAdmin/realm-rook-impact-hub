import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { BriefcaseIcon, MonitorIcon, CodeIcon, BarChart3Icon, Share2Icon, CpuIcon, CheckIcon, ArrowRight } from "lucide-react";
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

const D2CStartups = () => {
  // Services list
  const services = [
    {
      title: "Strategic Brand Architecture",
      description: "Architectures that command attention, build loyalty, and drive exponential growth.",
      icon: BriefcaseIcon,
    },
    {
      title: "Conversion-Optimized UI/UX",
      description: "Designs engineered to captivate and convert every visitor into a loyal customer.",
      icon: MonitorIcon,
    },
    {
      title: "Robust, Scalable Development",
      description: "Enterprise-grade technology stacks that support rapid expansion without compromise.",
      icon: CodeIcon,
    },
    {
      title: "Data-Driven SEO Excellence",
      description: "Positioned for maximum visibility with proven strategies that generate sustainable traffic.",
      icon: BarChart3Icon,
    },
    {
      title: "Dynamic Social Media Influence",
      description: "Amplify your brand presence with campaigns tailored to engage and convert at scale.",
      icon: Share2Icon,
    },
    {
      title: "AI-Enabled Business Automation",
      description: "Implement intelligent systems that streamline operations, reduce overhead, and unlock growth potential.",
      icon: CpuIcon,
    }
  ];

  // Growth process steps
  const growthSteps = [
    {
      number: 1,
      title: "Precision Brand Strategy",
      description: "Crafted to resonate deeply with target audiences and create lasting differentiation."
    },
    {
      number: 2,
      title: "Seamless Digital Engineering",
      description: "From concept to launch, delivering flawless, scalable platforms."
    },
    {
      number: 3,
      title: "Impactful Search & Social Growth",
      description: "Accelerating discovery and engagement through data-backed methodologies."
    },
    {
      number: 4,
      title: "Intelligent Automation Integration",
      description: "Transforming complex workflows into effortless, efficient operations."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Partnering with Realm revolutionized our customer acquisition and operational efficiency. Their approach delivers measurable impact.",
      author: "Leading D2C Founder"
    },
    {
      quote: "The automation solutions enabled us to scale rapidly while maintaining impeccable brand experience.",
      author: "CEO, Emerging Consumer Brand"
    }
  ];

  // FAQ items
  const faqs = [
    {
      question: "What distinguishes your services from typical agencies?",
      answer: "We deliver enterprise-caliber solutions tailored for aggressive growth and long-term brand leadership."
    },
    {
      question: "How do you ensure alignment with our unique brand vision?",
      answer: "Through collaborative strategy development and transparent execution at every step."
    }
  ];

  // Client logos
  const clientLogos = [
    { name: 'Zephyr Skincare', logo: '/placeholder.svg', tooltip: 'Growth in MRR by 2.3x in 5 months' },
    { name: 'Finovo', logo: '/placeholder.svg', tooltip: 'Increased conversion rate from 2% to 8.5%' },
    { name: 'Elevate Tech', logo: '/placeholder.svg', tooltip: 'Reduced load time from 5s to 1.2s' },
    { name: 'GreenPath', logo: '/placeholder.svg', tooltip: '400% increase in organic traffic' },
  ];
  
  // Transformation stories
  const transformationStories = [
    { 
      before: "Limited brand recognition with inconsistent visual identity", 
      after: "Cohesive brand system driving 320% increase in visibility" 
    },
    { 
      before: "Inefficient user flows with 70% bounce rate", 
      after: "Streamlined UX with 61% longer session duration" 
    },
    { 
      before: "Expensive manual processes draining resources", 
      after: "AI-powered automation reducing overhead by 25%" 
    }
  ];

  return (
    <main className="min-h-screen">
      <ServiceBreadcrumb 
        serviceName="D2C Startups" 
        serviceUrl="/discover/d2c-startups" 
      />
      
      {/* Hero Section */}
      <section className="bg-realm-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80" 
            alt="Professional team collaboration" 
            className="object-cover w-full h-full grayscale"
          />
          <div className="absolute inset-0 bg-realm-black bg-opacity-60"></div>
        </div>
        
        <div className="realm-container relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Elevate Your D2C Brand to Industry-Leading Excellence
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-10"
            >
              Comprehensive Solutions in Branding, UI/UX, Development, SEO, Social Media, and AI Automation — Engineered for Scalable Success
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/contact">
                <Button className="realm-button bg-white text-realm-black hover:bg-realm-lightgray">
                  Request Your Strategic Consultation
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
              Defining Market Leadership for D2C Brands
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
              How Industry Leaders Grow with Realm
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
              <Link to="/impact-studies" className="realm-link inline-flex items-center text-realm-black font-medium">
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
                  Book a Strategy Call
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
              Proven Outcomes from Ambitious Brands
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
              Accelerate Your Brand's Growth Trajectory
            </h2>
            
            <p className="text-xl mb-12">
              Complex challenges demand sophisticated solutions. Access the expertise that empowers top-tier D2C brands to dominate their markets.
            </p>
            
            <Link to="/contact">
              <Button className="realm-button bg-white text-realm-black hover:bg-realm-lightgray">
                Secure Your Strategic Session
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

export default D2CStartups;
