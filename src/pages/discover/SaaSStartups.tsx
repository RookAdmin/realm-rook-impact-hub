import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  Target,
  Monitor,
  Server,
  Search,
  Share2,
  Brain,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";

import ImpactStudyCard from "@/components/impact-studies/ImpactStudyCard";
import TransformationStories from "@/components/home/TransformationStories";

import Rlinks from "@/components/assets/impact-studies/rlinks-logo.png"
import Mpb from "/partner-logo/mypro.avif"
import Paym from "@/components/assets/impact-studies/paym-logo.png"
import Hlo from "/partner-logo/hlo.png"
import Rook from "/partner-logo/rook.png"

import RookFavi from "@/components/assets/impact-studies/rook-favicon.png"
import MpbFavi from "@/components/assets/impact-studies/mpb-favicon.png"

import MpbImpact from "@/components/assets/impact-studies/mpb.png"
import RlinkImpact from "@/components/assets/impact-studies/rlinks.png"
import PaymImpact from "@/components/assets/impact-studies/paym.png"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const SaaSStartups = () => {
  // Services list
  const services = [
    {
      title: "Brand Positioning That Resonates",
      description:
        "Craft a brand identity that stands out in competitive SaaS landscapes.",
      icon: Target,
    },
    {
      title: "User-Centric UI/UX Design",
      description:
        "Deliver intuitive experiences that maximize user adoption and retention.",
      icon: Monitor,
    },
    {
      title: "Robust & Scalable Development",
      description:
        "Build architecture designed for seamless growth and high availability.",
      icon: Server,
    },
    {
      title: "Search Engine & Content Strategy",
      description:
        "Drive qualified organic traffic with data-driven SEO and content marketing.",
      icon: Search,
    },
    {
      title: "Growth-Focused Social Engagement",
      description:
        "Fuel user acquisition and community building with targeted campaigns.",
      icon: Share2,
    },
    {
      title: "AI-Powered Workflow Automation",
      description:
        "Streamline processes to reduce churn, optimize operations, and enhance customer satisfaction.",
      icon: Brain,
    },
  ];

  // Growth process steps
  const growthSteps = [
    {
      number: 1,
      title: "Strategic Brand Development",
      description:
        "Design a SaaS brand narrative that inspires trust and loyalty.",
    },
    {
      number: 2,
      title: "Cutting-Edge Product Experience",
      description: "Deliver fast, reliable, and user-friendly SaaS platforms.",
    },
    {
      number: 3,
      title: "Optimized Growth Channels",
      description:
        "Implement multi-channel strategies to accelerate customer acquisition.",
    },
    {
      number: 4,
      title: "Intelligent Automation & Analytics",
      description:
        "Leverage AI for predictive insights, personalized marketing, and automated support.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote:
        "Realm's solutions scaled our SaaS platform globally, improving engagement by 40% within 6 months.",
      author: "CTO, Fast-Growing SaaS Company",
    },
    {
      quote:
        "Their AI-driven automation cut operational costs by 25%, enabling us to focus on innovation.",
      author: "Head of Growth, SaaS Startup",
    },
  ];

  const impactStudies = [
    {
      id:1,
      company: "Rook Links",
      companyLogo: RookFavi,
      title: "Building Rook Links: Enterprise-Grade, In-House SaaS for Visual Link Management",
      featuredImage: RlinkImpact,
      tags: ["Web/App Development", "UX/UI"],
      slug: "building-rook-links-enterprise-grade-in-house-saas-for-visual-link-management"
    },
    {
      id:2,
      company: "MyProBuddy",
      companyLogo: MpbFavi,
      title: "Accelerating Startup Funding Through AI, Investor Networks & Expert Advisory",
      featuredImage: MpbImpact,
      tags: ["Web/App Development", "UI/UX"],
      slug: ""
    },
    {
      id:3,
      company: "Paym.me",
      companyLogo: RookFavi,
      title: "Direct, Secure Payment Links for Individuals & Businesses",
      featuredImage:PaymImpact, 
      tags: ["Web/App Development", "UI/UX"],
      slug: ""
    },
  ];

  // FAQ items
  const faqs = [
    {
      question: "Can you customize solutions for complex SaaS products?",
      answer:
        "Absolutely. Our approach is tailored to your product's unique architecture and market.",
    },
    {
      question: "How do you measure success?",
      answer:
        "Through actionable KPIs like user retention, conversion rates, and operational efficiency.",
    },
  ];

  // Client logos
  const clientLogos = [
    {
      name: "Rook Links",
      logo: Rlinks,
      tooltip: "Increased user retention by 40% in 6 months",
    },
    {
      name: "MyProBuddy",
      logo: Mpb,
      tooltip: "Reduced operational costs by 25%",
    },
    {
      name: "Paym.me",
      logo: Paym,
      tooltip: "Reduced operational costs by 25%",
    },
    
  ];

  // Transformation stories
  const transformationStories = [
    {
      before: "Confusing UX leading to high churn rates",
      after: "Intuitive interface reducing churn by 35%",
    },
    {
      before: "Slow, error-prone deployment process",
      after: "Automated CI/CD pipeline with 99.9% uptime",
    },
    {
      before: "Limited organic traffic and high CAC",
      after: "SEO-optimized content driving 62% of new leads",
    },
  ];

  return (
    <>
      <Helmet>
        <title>SaaS Startups | Realm by Rook - Scalable SaaS Solutions</title>
        <meta
          name="description"
          content="Accelerate your SaaS growth with scalable, intelligent solutions tailored for success."
        />
        <meta
          name="keywords"
          content="SaaS growth, branding, UI/UX, development, SEO, AI automation, SaaS solutions"
        />
      </Helmet>
      <main className="min-h-screen">
        <ServiceBreadcrumb
          serviceName="SaaS Startups"
          serviceUrl="/discover/saas-startups"
        />

        {/* Hero Section - Updated with solid black background */}
        <section className="bg-realm-black text-white py-20">
          <div className="realm-container relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
                >
                  Accelerate Your SaaS! 
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl mb-10"
                >
                  Expertise in Branding, UI/UX, Development, SEO, Social Media,
                  and AI Automation Tailored for SaaS Success
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
              <div className="w-full h-full min-h-[500px]">
                <iframe
                  src="https://my.spline.design/rubik39scube-8dqnRh6XuCm4PAWuRyunPqnH/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
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

        {/* Conversational Commerce with Agentica Section */}
        <section className="realm-section bg-white border-t border-gray-200">
          <div className="realm-container">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-3 py-1 bg-black text-white text-xs font-medium rounded-full mb-6">
                  NEXT-GEN SAAS
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
                  Conversational Commerce with <span className="font-bold">Agentica</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Deploy your SaaS as a conversational service. Power booking, onboarding, and payments entirely in chat or voice—no screens, just conversation.
                </p>
                <Link to="/services/agentica">
                  <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-base rounded-lg font-medium inline-flex items-center gap-2">
                    Explore Agentica
                    <ArrowRight size={20} />
                  </Button>
                </Link>
              </motion.div>

              {/* Right Thumbnail - Chat Interface */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">
                  {/* Chat Interface Mockup */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
                      <div>
                        <p className="font-semibold text-sm">SaaS Assistant</p>
                        <p className="text-xs text-gray-500">Powered by Agentica</p>
                      </div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <div className="flex-1 bg-gray-100 rounded-2xl rounded-tl-sm p-4">
                          <p className="text-sm text-gray-800">I'd like to book a demo for the Pro plan</p>
                        </div>
                      </div>
                      <div className="flex gap-2 justify-end">
                        <div className="flex-1 bg-black text-white rounded-2xl rounded-tr-sm p-4">
                          <p className="text-sm">Perfect! I've scheduled your demo for tomorrow at 3 PM. You'll receive a calendar invite shortly.</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-gray-100 rounded-2xl rounded-tl-sm p-4">
                          <p className="text-sm text-gray-800">Can I upgrade my subscription now?</p>
                        </div>
                      </div>
                      <div className="flex gap-2 justify-end">
                        <div className="flex-1 bg-black text-white rounded-2xl rounded-tr-sm p-4">
                          <p className="text-sm">Absolutely! Upgrading you to Pro now. Payment processed. ✓</p>
                        </div>
                      </div>
                    </div>

                    {/* Input */}
                    <div className="flex items-center gap-2 pt-2">
                      <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                        <p className="text-sm text-gray-400">Type a message...</p>
                      </div>
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                        <ArrowRight size={18} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg">
                  Live Chat Commerce
                </div>
              </motion.div>
            </div>
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
                Crafting Products. Creating Impact.
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
                  <div key={index} className="group relative cursor-pointer">
                    <div className="realm-client-logo h-12 w-48  flex items-center justify-center">
                      <img src={client.logo} />
                    </div>

                    {/* Tooltip */}
                    {/* <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-realm-black text-white px-4 py-2 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {client.tooltip}
                    </div> */}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Transformation Stories */}
            <TransformationStories stories={transformationStories} />

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
                <Link
                  to="/case-studies"
                  className="realm-link inline-flex items-center text-realm-black font-medium"
                >
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
                <div className="realm-client-logo h-12 w-36  flex items-center justify-center">
                      <img src={Rook} />
                    </div>
                <div className="realm-client-logo h-12 w-36  flex items-center justify-center">
                      <img src={Hlo} />
                    </div>
                <div className="realm-client-logo h-12 w-36  flex items-center justify-center">
                      <img src={Mpb} />
                    </div>
                
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
                Sophisticated challenges require expert execution. Harness
                Realm's proven capabilities to lead your market with confidence.
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
    </>
  );
};

export default SaaSStartups;
