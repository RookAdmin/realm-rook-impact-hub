import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle,
  Clock,
  Banknote,
  Rocket,
  TrendingUp,
  Mail,
  Handshake,
  Settings,
  Brain,
  FileText,
  BarChart,
  Filter,
  Users,
  Video,
  FileSpreadsheet,
  Workflow,
  Cpu,
  Target,
  Zap,
  Cloud,
  Code,
  Terminal,
  Paintbrush,
  BookOpen,
  Palette,
  Sparkles,
  MousePointer,
  MessageSquare,
  Heart,
  Bolt,
  Repeat,
  BarChart2,
  HeadingIcon,
  Wand2,
  Wrench,
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

const AIAgentsAutomationService = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Impact metrics
  const impactMetrics = [
    {
      icon: <TrendingUp size={24} />,
      value: "+560%",
      label: "Efficiency Boost",
    },
    {
      icon: <Clock size={24} />,
      value: "24/7",
      label: "Agent Availability",
    },
    {
      icon: <Target size={24} />,
      value: "90%",
      label: "Accuracy in AI Qualification",
    },
    {
      icon: <Banknote size={24} />,
      value: "$72,000+",
      label: "Saved in Ops in 3 Months",
    },
    {
      icon: <Rocket size={24} />,
      value: "7.2×",
      label: "Faster Lead Conversions",
    },
    {
      icon: <Users size={24} />,
      value: "80+",
      label: "Hours Saved per Team/Month",
    },
  ];

  // AI Tools with icons
  const aiTools = [
    {
      name: "OpenAI",
      icon: (
        <img
          src="/ai/openai.png"
          alt="OpenAI"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      name: "n8n",
      icon: (
        <img src="/ai/n8n.png" alt="n8n" style={{ width: 24, height: 24 }} />
      ),
    },
    {
      name: "Google AI Studio",
      icon: (
        <img
          src="/ai/gai.png"
          alt="Google AI Studio"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      name: "Stability AI",
      icon: (
        <img
          src="/ai/sai.jpeg"
          alt="Stability AI"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      name: "NotebookLM",
      icon: (
        <img
          src="/ai/notebooklm.png"
          alt="NotebookLM"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      name: "ComfyUI",
      icon: (
        <img
          src="/ai/comp.png"
          alt="ComfyUI"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      name: "Microsoft Copilot",
      icon: (
        <img
          src="/ai/copilot.png"
          alt="Microsoft Copilot"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      name: "Cursor",
      icon: (
        <img
          src="/ai/cursor.png"
          alt="Cursor"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      name: "Claude",
      icon: (
        <img
          src="/ai/claude.png"
          alt="Claude"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      name: "Lovable",
      icon: (
        <img
          src="/ai/lovable.ico"
          alt="Lovable"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      name: "Bolt",
      icon: (
        <img src="/ai/bolt.jpg" alt="Bolt" style={{ width: 24, height: 24 }} />
      ),
    },
    {
      name: "Replit",
      icon: (
        <img
          src="/ai/replit.png"
          alt="Replit"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      name: "Madgicx",
      icon: (
        <img
          src="/ai/Madgicx.jpeg"
          alt="Madgicx"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      name: "Head AI",
      icon: (
        <img
          src="/ai/headai.png"
          alt="Head AI"
          style={{ width: 24, height: 24 }}
        />
      ),
    },
    {
      name: "Zapier",
      icon: (
        <img
          src="/ai/zapier.png"
          alt="Zapier"
          style={{ width: 45, height: 24 }}
        />
      ),
    },
    {
      name: "Make",
      icon: (
        <img src="/ai/make.jpeg" alt="Make" style={{ width: 24, height: 24 }} />
      ),
    },
  ];

  // What we automate
  const automationCapabilities = [
    {
      icon: <Bot size={24} />,
      title: "Lead Capture + CRM Sync",
      description: "Connect forms, chat, and calendars into one lead loop.",
    },
    {
      icon: <Handshake size={24} />,
      title: "Client Onboarding Flows",
      description: "From welcome mail to follow-up and doc signing—automated.",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Marketing Flows (AI-Optimized)",
      description: "Let AI write, test, and optimize every CTA in real-time.",
    },
    {
      icon: <FileText size={24} />,
      title: "Proposal & Contract Generation",
      description: "Documents built in seconds using GPT Agents.",
    },
    {
      icon: <BarChart size={24} />,
      title: "Dashboards That Think",
      description: "Smart dashboards that analyze and trigger actions.",
    },
    {
      icon: <Brain size={24} />,
      title: "Decision Trees for Sales",
      description: "LLM-powered logic trees that respond intelligently.",
    },
  ];

  // AI automation categories
  const automationCategories = [
    {
      icon: <Brain size={32} />,
      title: "Prompt Engineering",
      description: "Custom-tuned GPT prompts tailored to your brand.",
    },
    {
      icon: <Video size={32} />,
      title: "Create Videos & Images using AI",
      description: "Auto-generate content for marketing or internal use.",
    },
    {
      icon: <FileSpreadsheet size={32} />,
      title: "Excel & Presentations using AI",
      description: "Let AI generate investor decks, reports, and charts.",
    },
    {
      icon: <Workflow size={32} />,
      title: "Automating Workflows",
      description: "From Gmail to Slack, let tasks trigger themselves.",
    },
    {
      icon: <Cpu size={32} />,
      title: "Developing AI Agents",
      description: "Autonomous agents that act across your toolstack.",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "AI onboarding reduced tickets by 60% in 45 days.",
      client: "Finequs",
    },
    {
      quote: "AI agent handled 4,300+ leads solo, zero missed follow-ups.",
      client: "ZGuard",
    },
    {
      quote: "End-to-end journey automated, from signup to certification.",
      client: "ICM",
    },
    {
      quote: "400+ contracts built by AI agent. No errors. No edits.",
      client: "Hlo Enterprise Legal+",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Agent Automation Services | Intelligent Workflows & Business Process Automation</title>
        <meta
          name="description"
          content="Scale your business with AI-powered automation. Custom AI agents for lead generation, customer service, workflow automation, and operations. Integrate ChatGPT, Claude, and 20+ AI tools to save time and reduce costs."
        />
        <meta
          name="keywords"
          content="AI automation services, AI agents development, workflow automation, business process automation, GPT agents, AI chatbots, RPA automation, intelligent automation, AI integration, CRM automation, customer service automation"
        />
        <meta property="og:title" content="AI Agent Automation | Build Intelligent Systems That Scale Your Business" />
        <meta property="og:description" content="Deploy AI agents that automate workflows, qualify leads, and handle customer interactions. Boost efficiency by 10x with intelligent automation solutions." />
      </Helmet>
      <main className="min-h-screen pt-20">
        {/* <div className="bg-black text-white">
          <div className="container max-w-12xl mx-auto px-1 sm:px-4 lg:px-4">
            <ServiceBreadcrumb
              serviceName="AI Agents Automation"
              serviceUrl="/services/ai-agents-automation"
            />
          </div>
        </div> */}

        {/* Hero Section */}
        <section className="bg-realm-black  text-white  md:py-16">
          <div className="realm-container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto"
            >
              {/* Left Side: Content */}
              <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 md:pr-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Your Business, <br /> on Autopilot. Powered by <br /> AI Agents.
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                 
                  We build AI agents that save time, cut costs, and think like
                  your best human rep.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mb-16">
                  <Button
                    onClick={() => setIsContactOpen(true)}
                    className="bg-white text-realm-black hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-full"
                  >
                    Get Free AI Audit
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                  <Button
                    onClick={() => scrollToSection("case-studies")}
                    variant="outline"
                    className="border-white text-black hover:bg-white hover:text-realm-black px-8 py-4 text-lg font-medium rounded-full"
                  >
                    See Real Results
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </div>
              </div>
              {/* Right Side: Spline Model (hidden on mobile) */}
              <div className="hidden md:flex w-full md:w-1/2 justify-center items-center md:ml-8">
                <div className="w-full max-w-md h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://my.spline.design/genkubgreetingrobot-YluAUBFogx35JJDuy1lyDMFX/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    allow="autoplay; fullscreen"
                    title="AI Agent Spline Model"
                    style={{
                      minHeight: 400,
                      border: "none",
                      background: "transparent",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Dialog */}
        <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <div className="py-2 pr-2">
              <h2 className="text-2xl font-bold mb-6">
                Get Your Free AI Audit
              </h2>
              <ContactForm onSuccess={() => setIsContactOpen(false)} />
            </div>
          </DialogContent>
        </Dialog>

        {/* Powered by 20+ AI Tools */}
        <section className="py-20 bg-gray-50">
          <div className="realm-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powered by 20+ AI Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We integrate your stack with the world's best AI infrastructure.
                <br />
                Trusted tools. Custom workflows. Seamless results.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow aspect-square flex flex-col items-center justify-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-realm-black">{tool.icon}</div>
                  <span className="text-xs font-medium text-center text-gray-700">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results That Speak Revenue */}
        <section className="py-20">
          <div className="realm-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Results That Speak Revenue
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4 text-realm-black">
                    {metric.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-realm-black">
                    {metric.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Automate */}
        <section className="py-20 bg-gray-50">
          <div className="realm-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We Automate
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4 text-realm-black">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-realm-black">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Automation Categories */}
        <section className="py-20">
          <div className="realm-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                AI Automation Categories
              </h2>
            </motion.div>

            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-6 w-max md:grid md:grid-cols-5 md:gap-6 md:w-full">
                {automationCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 min-w-[280px] md:min-w-0"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-center mb-4 text-realm-black">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-center text-realm-black">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {category.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Realm */}
        <section className="py-20 bg-realm-black text-white">
          <div className="realm-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    We Don't Just Automate. We Architect.
                  </h2>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Other firms plug in tools. We build adaptive ecosystems.
                    <br />
                    Custom-coded logic, real-time learning loops, and
                    human-level AI tone.
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 border-2 border-white/20 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-sm mb-2 opacity-75">
                          Automated Flywheel
                        </div>
                        <div className="text-xs opacity-60">
                          Inputs → AI Processing → Output → Learn → Optimize
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="absolute inset-0 w-64 h-64 border-2 border-white/30 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-white w-2 h-2 rounded-full" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section id="case-studies" className="py-20">
          <div className="realm-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Client Testimonials
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mb-6">
                    <div className="text-4xl text-gray-300 mb-2">"</div>
                    <p className="text-lg text-gray-700 italic leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="text-sm font-semibold text-realm-black">
                    — {testimonial.client}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-realm-black text-white">
          <div className="realm-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Time Saved is Revenue Earned.
                <br />
                Let AI start working for you.
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Book a custom automation audit. We'll show you how much time,
                money, and sanity AI can save your business in 7 days or less.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  onClick={() => setIsContactOpen(true)}
                  className="bg-white text-realm-black hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-full"
                >
                  Book My Free Audit
                  <ArrowRight size={20} className="ml-2" />
                </Button>
                {/* <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-realm-black px-8 py-4 text-lg font-medium rounded-xl"
                >
                  Watch How It Works
                  <ArrowRight size={20} className="ml-2" />
                </Button> */}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AIAgentsAutomationService;
