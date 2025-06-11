import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle,
  Layers,
  Mail,
  Handshake,
  Settings,
  TrendingUp,
  Brain,
  FileText,
  BarChart,
  Briefcase,
  Rocket,
  TrendingDown,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import { Helmet } from "react-helmet-async";

// Variants for animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AIBusinessAutomationService = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  // Ref for the sticky CTA
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ctaSectionRef.current) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const threshold = windowHeight * 0.25; // Show after 25% scroll

        if (scrollY > threshold) {
          ctaSectionRef.current.classList.add("opacity-100");
          ctaSectionRef.current.classList.remove("opacity-0");
        } else {
          ctaSectionRef.current.classList.add("opacity-0");
          ctaSectionRef.current.classList.remove("opacity-100");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Problem stats
  const problemStats = [
    { label: "Cut costs", icon: <CheckCircle size={20} /> },
    { label: "Eliminate delay", icon: <CheckCircle size={20} /> },
    { label: "Multiply decision velocity", icon: <CheckCircle size={20} /> },
  ];

  // AI agent capabilities
  const aiAgentCapabilities = [
    "Reply to leads instantly (without sounding robotic)",
    "Monitor your funnel, flag bottlenecks, and adapt messaging",
    "Learn behavior patterns to predict customer needs",
    "Trigger automations at exactly the right time",
  ];

  // Core automation capabilities
  const automationCapabilities = [
    { icon: <Mail size={24} />, title: "Lead Capture + CRM Integration" },
    {
      icon: <Handshake size={24} />,
      title: "Client Onboarding & Nurture Sequences",
    },
    {
      icon: <Settings size={24} />,
      title: "Internal Task Routing + Reminders",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Marketing Flows with Real-Time Optimization",
    },
    { icon: <Brain size={24} />, title: "Decision Trees for Sales Agents" },
    {
      icon: <FileText size={24} />,
      title: "Document Generation (Proposals, Contracts, etc.)",
    },
    {
      icon: <BarChart size={24} />,
      title: "Dashboards That Think (powered by GPT agents)",
    },
  ];

  // Impact stats
  const impactStats = [
    {
      icon: <Briefcase size={24} />,
      value: "80+",
      label: "hours/month saved for a legal startup",
    },
    {
      icon: <Rocket size={24} />,
      value: "7.2x",
      label: "faster lead conversion cycle",
    },
    {
      icon: <TrendingDown size={24} />,
      value: "43%",
      label: "reduction in manual task handoffs",
    },
    {
      icon: <Bot size={24} />,
      value: "90%",
      label: "accuracy in AI-led qualification bots",
    },
    {
      icon: <DollarSign size={24} />,
      value: "$72,000+",
      label: "saved in operational costs in 3 months",
    },
  ];

  // Use cases
  const useCases = [
    {
      client: "D2C Wellness Brand",
      quote: "AI onboarding reduced support tickets by 60% in under 45 days.",
    },
    {
      client: "SaaS CRM Tool",
      quote:
        "AI sales rep handled 4,300+ leads solo—without one missed follow-up.",
    },
    {
      client: "Online Educator",
      quote:
        "End-to-end student journey (signup to certification) fully automated.",
    },
    {
      client: "FinTech Client",
      quote: "GPT-powered document agent created 400+ contracts with 0 errors.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote:
        "Realm built us an agent that replies in 17 seconds flat, personalizes each message, and schedules a call. Better than our best human rep.",
      author: "Founder, HealthTech Startup",
    },
    {
      quote: "I onboarded 87 clients in 2 weeks—with zero emails from me.",
      author: "Solopreneur, Service Business",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          AI Business Automation | Realm by Rook - Intelligent Workflow
          Solutions
        </title>
        <meta
          name="description"
          content="Automate your business workflows with AI-powered solutions. Save time, reduce costs, and scale efficiently with intelligent systems."
        />
        <meta
          name="keywords"
          content="AI business automation, workflow automation, intelligent systems, cost reduction, scalability"
        />
      </Helmet>
      <main className="min-h-screen pt-20">
        <ServiceBreadcrumb
          serviceName="AI & Business Automation"
          serviceUrl="/services/ai-agents-automation"
        />
        {/* Hero Section with dark background */}
        <section className="bg-realm-black text-white py-20 md:py-32">
          <div className="realm-container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="realm-headline mb-6">
                Your Business, on Autopilot. Powered by AI Agents.
              </h1>
              <p className="realm-subheadline text-white/90 mb-10">
                We turn workflows into ecosystems. From lead generation to
                client onboarding—our automation strategies scale what humans
                start.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setIsContactOpen(true)}
                  className="realm-button bg-white text-realm-black hover:bg-realm-lightgray min-w-[250px]"
                >
                  Talk to an Automation Strategist
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                <Link to="/case-studies">
                  <Button
                    variant="outline"
                    className="realm-button border-white text-black hover:text-white hover:bg-white/10 min-w-[200px]"
                  >
                    Explore Use Cases
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              {/* Contact  Form Dialog */}
              <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                <DialogContent className="sm:max-w-[500px]">
                  <div className="py-2">
                    <h2 className="text-2xl font-display font-bold mb-6">
                      Get a Proposal
                    </h2>
                    <ContactForm onSuccess={() => setIsContactOpen(false)} />
                  </div>
                </DialogContent>
              </Dialog>

              {/* Animated metric indicators */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="p-4 border border-white/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold mb-2 text-white">
                    +560%
                  </div>
                  <div className="text-white/70">Efficiency Boost</div>
                </motion.div>
                <motion.div
                  className="p-4 border border-white/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold mb-2 text-white">24/7</div>
                  <div className="text-white/70">Agent Availability</div>
                </motion.div>
                <motion.div
                  className="p-4 border border-white/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold mb-2 text-white">98%</div>
                  <div className="text-white/70">Task Accuracy</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Manual Drain (Problem Framing) */}
        <section className="py-16 md:py-24">
          <div className="realm-container">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                You Weren't Meant to Repeat Tasks. Your Systems Were.
              </h2>
              <p className="text-xl mb-10 text-realm-darkgray">
                Most teams lose 30–40% of productive hours to repeatable work.
                <br />
                We design AI + automation frameworks that:
              </p>

              <div className="space-y-4">
                {problemStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <span className="text-realm-black">{stat.icon}</span>
                    <span className="text-lg font-medium">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Are AI Agents? */}
        <section className="py-16 md:py-24 bg-realm-black text-white">
          <div className="realm-container">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="flex flex-col md:flex-row items-center md:space-x-12">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div className="p-6 border border-white/20 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 pulse"></div>
                    <Bot size={120} className="mx-auto mb-6 text-white/80" />

                    {/* Animated flowchart */}
                    <div className="space-y-2">
                      {[
                        "Lead",
                        "AI Welcome",
                        "Qualification",
                        "Personalization",
                        "Conversion",
                        "Feedback loop",
                      ].map((step, index) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.3, duration: 0.5 }}
                          className="flex items-center justify-center"
                        >
                          <div className="px-4 py-2 border border-white/20 text-sm w-full">
                            {step}
                          </div>
                          {index < 5 && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 10 }}
                              transition={{
                                delay: (index + 1) * 0.3,
                                duration: 0.3,
                              }}
                              className="w-0.5 h-2 bg-white/40 my-1"
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                    AI Agents That Think, Act, and Learn—So You Don't Have To
                  </h2>

                  <p className="text-white/90 mb-6">
                    We build and implement AI Agents—intelligent systems that:
                  </p>

                  <ul className="space-y-4">
                    {aiAgentCapabilities.map((capability, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                      >
                        <span className="mt-1 text-white">
                          <CheckCircle size={18} />
                        </span>
                        <span>{capability}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Core Automation Capabilities */}
        <section className="py-16 md:py-24">
          <div className="realm-container">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                What We Automate
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {automationCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className="p-6 border border-realm-lightgray hover:border-realm-black transition-all duration-300"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="realm-icon-container mb-4 mx-auto">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-display font-medium mb-2 text-center">
                    {capability.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Proof of Impact */}
        <section className="py-16 md:py-24 bg-realm-black text-white">
          <div className="realm-container">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">
                Time Saved is Revenue Earned.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {impactStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="p-6 border border-white/20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24">
          <div className="realm-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center">
                Real Clients. Real Results.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    className="p-6 border border-realm-lightgray"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-display font-medium mb-4">
                      {useCase.client}
                    </h3>
                    <p className="text-realm-darkgray italic">
                      "{useCase.quote}"
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Realm's Automation is Different */}
        <section className="py-16 md:py-24 bg-realm-black text-white">
          <div className="realm-container">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
                <div className="md:w-1/2 md:pr-12">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                    We Don't Just Automate. We Architect.
                  </h2>

                  <p className="text-white/90 mb-6">
                    Other firms plug in tools.
                    <br />
                    We create entire ecosystems—built to scale, adapt, and
                    evolve.
                    <br />
                    With custom-coded logic, real-time AI insights, and
                    human-level tone.
                  </p>
                </div>

                <div className="md:w-1/2">
                  <div className="border border-white/20 p-6 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 pulse"></div>

                    {/* Animated Flywheel */}
                    <div className="relative">
                      <Layers size={60} className="mx-auto mb-4 text-white" />
                      <motion.div
                        className="w-24 h-24 rounded-full border-2 border-white/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-white w-2 h-2 rounded-full" />
                      </motion.div>

                      <div className="mt-8 text-center">
                        <div className="text-sm mb-2">Automated Flywheel</div>
                        <div className="text-xs text-white/70">
                          Inputs → Processing → Outputs → Loop
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Block (Social Proof) */}
        <section className="py-16 md:py-24">
          <div className="realm-container">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-realm-lightgray">
                    <CardContent className="p-8">
                      <p className="italic text-lg mb-6">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-sm font-medium">
                        — {testimonial.author}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final Conversion Section */}
        <section className="py-16 md:py-24 bg-realm-black text-white">
          <div className="realm-container">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Let's Build Your Automation Stack.
              </h2>

              <p className="text-white/80 mb-10">
                We only take on 2 automation projects per month to ensure deep
                strategy and long-term success.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  onClick={() => setIsContactOpen(true)}
                  variant="outline"
                  className="realm-button bg-white text-realm-black hover:bg-realm-lightgray min-w-[250px]"
                >
                  Get a Free AI Audit
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AIBusinessAutomationService;
