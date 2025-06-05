
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle,
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
  Clock,
  Filter,
  Banknote,
  Monitor,
  Image,
  FileSpreadsheet,
  Workflow,
  User,
  Zap,
  Video,
  PenTool,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from '@/components/ContactForm';

const AIAgentsAutomationService = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Results data
  const resultsMetrics = [
    {
      icon: <TrendingUp size={24} />,
      value: "+560%",
      label: "Efficiency Boost"
    },
    {
      icon: <Clock size={24} />,
      value: "24/7",
      label: "Agent Availability"
    },
    {
      icon: <CheckCircle size={24} />,
      value: "90%",
      label: "Accuracy in AI Qualification"
    },
    {
      icon: <DollarSign size={24} />,
      value: "$72,000+",
      label: "Saved in Ops in 3 Months"
    },
    {
      icon: <Rocket size={24} />,
      value: "7.2x",
      label: "Faster Lead Conversions"
    },
    {
      icon: <Clock size={24} />,
      value: "80+",
      label: "Hours Saved per Team/Month"
    }
  ];

  // AI Tools - 20+ integrations
  const aiTools = [
    "OpenAI", "n8n", "Google AI Studio", "Stability AI", "NotebookLM", 
    "ComfyUI", "Microsoft Copilot", "Cursor", "Claude", "Lovable", 
    "Bolt", "Repli", "Madgicx", "Head AI", "Anthropic", "Hugging Face",
    "Zapier", "Make", "Retool", "Bubble"
  ];

  // Core automation capabilities
  const automationCapabilities = [
    {
      icon: <Bot size={24} />,
      title: "Lead Capture + CRM Sync",
      description: "Connect forms, chat, and calendars into one lead loop."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Client Onboarding Flows",
      description: "From welcome mail to follow-up and doc signing—automated."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Marketing Flows (AI-Optimized)",
      description: "Let AI write, test, and optimize every CTA in real-time."
    },
    {
      icon: <FileText size={24} />,
      title: "Proposal & Contract Generation",
      description: "Documents built in seconds using GPT Agents."
    },
    {
      icon: <BarChart size={24} />,
      title: "Dashboards That Think",
      description: "Smart dashboards that analyze and trigger actions."
    },
    {
      icon: <Brain size={24} />,
      title: "Decision Trees for Sales",
      description: "LLM-powered logic trees that respond intelligently."
    }
  ];

  // New AI automation categories
  const aiCategories = [
    {
      icon: <PenTool size={24} />,
      title: "Prompt Engineering",
      description: "Custom-tuned GPT prompts tailored to your brand."
    },
    {
      icon: <Video size={24} />,
      title: "Create Videos & Images using AI",
      description: "Auto-generate content for marketing or internal use."
    },
    {
      icon: <FileSpreadsheet size={24} />,
      title: "Excel & Presentations using AI",
      description: "Let AI generate investor decks, reports, and charts."
    },
    {
      icon: <Workflow size={24} />,
      title: "Automating Workflows",
      description: "From Gmail to Slack, let tasks trigger themselves."
    },
    {
      icon: <User size={24} />,
      title: "Developing AI Agents",
      description: "Autonomous agents that act across your toolstack."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "AI onboarding reduced tickets by 60% in 45 days.",
      author: "D2C Brand"
    },
    {
      quote: "AI agent handled 4,300+ leads solo—zero missed follow-ups.",
      author: "SaaS CRM"
    },
    {
      quote: "End-to-end journey automated—from signup to certification.",
      author: "Online Educator"
    },
    {
      quote: "400+ contracts built by AI agent. No errors. No edits.",
      author: "FinTech Founder"
    }
  ];

  return (
    <main className="min-h-screen pt-20 font-sans">
      <ServiceBreadcrumb
        serviceName="AI Agents Automation"
        serviceUrl="/services/ai-agents-automation"
      />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="realm-container max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light text-black mb-8 leading-tight">
              Your Business, on Autopilot.
              <br />
              <span className="font-medium">Powered by AI Agents.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              AI that scales with you, lead capture to client onboarding.
              <br />
              We build AI agents that save time, cut costs, and think like your best human rep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                onClick={() => setIsContactOpen(true)}
                className="px-8 py-4 text-lg bg-black text-white hover:bg-gray-800 rounded-xl"
              >
                Get Free AI Audit
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-4 text-lg border-2 border-black text-black hover:bg-black hover:text-white rounded-xl"
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Real Results
              </Button>
            </div>

            {/* Visual placeholder for AI illustration */}
            <div className="bg-gray-50 rounded-2xl p-12 max-w-4xl mx-auto">
              <div className="flex justify-center items-center h-64">
                <div className="text-center">
                  <Bot size={80} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-500">Clean AI Agent Workflow Illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by 20+ AI Tools */}
      <section className="py-20 bg-gray-50">
        <div className="realm-container max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
            Powered by 20+ AI Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We integrate your stack with the world's best AI infrastructure, so you don't have to.
            <br />
            Trusted tools. Custom workflows. Seamless results.
          </p>

          <div className="grid grid-cols-4 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {aiTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Zap size={24} className="text-gray-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">{tool}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results That Speak Revenue */}
      <section className="py-20 bg-white">
        <div className="realm-container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-black text-center mb-16">
            Results That Speak Revenue
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resultsMetrics.map((metric, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{metric.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">{metric.value}</div>
                  <div className="text-gray-600">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-20 bg-gray-50">
        <div className="realm-container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-black text-center mb-16">
            What We Automate
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationCapabilities.map((capability, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <div className="text-white">{capability.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New: AI Automation Categories */}
      <section className="py-20 bg-white">
        <div className="realm-container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-black text-center mb-16">
            AI Automation Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-black">{category.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Realm? */}
      <section className="py-20 bg-black text-white">
        <div className="realm-container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              We Don't Just Automate. We Architect.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Other firms plug in tools. We build adaptive ecosystems.
              <br />
              Custom-coded logic, real-time learning loops, and human-level AI tone.
            </p>

            {/* Flywheel illustration */}
            <div className="bg-gray-900 rounded-2xl p-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="relative">
                  <div className="w-48 h-48 border-4 border-white rounded-full mx-auto mb-8 flex items-center justify-center">
                    <div className="text-center">
                      <Zap size={40} className="mx-auto mb-2" />
                      <div className="text-sm">AI Processing</div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                    <div className="bg-white text-black px-4 py-2 rounded-lg text-sm">Inputs</div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
                    <div className="bg-white text-black px-4 py-2 rounded-lg text-sm">Output</div>
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8">
                    <div className="bg-white text-black px-4 py-2 rounded-lg text-sm">Learn</div>
                  </div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8">
                    <div className="bg-white text-black px-4 py-2 rounded-lg text-sm">Optimize</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="realm-container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-black text-center mb-16">
            Client Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="text-2xl text-gray-400 mb-4">"</div>
                    <p className="text-lg text-gray-900 italic mb-4">{testimonial.quote}</p>
                    <p className="text-sm font-semibold text-black">— {testimonial.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="realm-container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-8">
            Time Saved is Revenue Earned.
            <br />
            <span className="font-medium">Let AI start working for you.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Book a custom automation audit. We'll show you how much time, money, and sanity AI can save your business in 7 days or less.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-4 text-lg bg-white text-black hover:bg-gray-200 rounded-xl"
            >
              Book My Free Audit
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-black rounded-xl"
            >
              Watch How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <div className="py-2">
            <h2 className="text-2xl font-display font-bold mb-6">Get Your Free AI Audit</h2>
            <ContactForm onSuccess={() => setIsContactOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default AIAgentsAutomationService;
