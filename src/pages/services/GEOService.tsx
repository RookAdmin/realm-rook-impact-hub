import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Search,
  Pencil,
  Bot,
  ChevronDown,
  Sparkles,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GEOService = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // AI Platforms
  const aiPlatforms = [
    { name: "ChatGPT", logo: "/ai/openai.png" },
    { name: "Claude", logo: "/ai/claude.png" },
    { name: "Gemini AI", logo: "/ai/gai.png" },
    { name: "Perplexity", logo: "/ai/perplexity.png" },
    { name: "Microsoft Copilot", logo: "/ai/copilot.png" },
    { name: "NotebookLM", logo: "/ai/notebooklm.png" },
  ];

  // Stats
  const stats = [
    {
      value: "65%",
      label: "of buyers now start with an AI question",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      value: "3x",
      label: "more AI-driven leads for top brands",
      icon: <Target className="w-6 h-6" />,
    },
    {
      value: "220%",
      label: "average increase in customer acquisition",
      icon: <Sparkles className="w-6 h-6" />,
    },
  ];

  // Three-step process
  const process = [
    {
      step: 1,
      title: "Question Intelligence",
      description:
        "Identify and monitor high-intent user questions and AI conversations in your market",
      icon: <Search className="w-8 h-8" />,
      details: [
        "AI conversation monitoring across major platforms",
        "High-intent question identification",
        "Market trend analysis",
        "Competitor citation tracking",
      ],
    },
    {
      step: 2,
      title: "AI-Optimized Content Creation",
      description:
        "We create structured, authoritative content designed for LLM training and citation",
      icon: <Pencil className="w-8 h-8" />,
      details: [
        "LLM-friendly content structure",
        "Authoritative voice optimization",
        "Citation-ready formatting",
        "Multi-platform content variants",
      ],
    },
    {
      step: 3,
      title: "AI-Friendly Page Routing",
      description:
        "Lightning-fast, markdown-optimized landing pages with enhanced metadata for AI bots",
      icon: <Bot className="w-8 h-8" />,
      details: [
        "Optimized page architecture",
        "Enhanced metadata schemas",
        "AI bot-friendly routing",
        "Lightning-fast load times",
      ],
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      brand: "XYZ SaaS",
      result: "220% increase in customer acquisition",
      citations: "Featured in ChatGPT answers",
      industry: "B2B SaaS",
      image: "/ai/openai.png",
    },
    {
      brand: "TechCorp",
      result: "3x more qualified leads",
      citations: "Cited by Gemini AI",
      industry: "Enterprise Software",
      image: "/ai/gai.png",
    },
    {
      brand: "InnovateCo",
      result: "65% faster sales cycle",
      citations: "Recommended by Claude",
      industry: "AI Solutions",
      image: "/ai/claude.png",
    },
  ];

  // What You Get
  const benefits = [
    {
      icon: <Check className="w-6 h-6" />,
      title: "Direct AI Citations",
      description:
        "Your brand recommended by leading AI systems when users ask relevant questions",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Multi-Platform Visibility",
      description:
        "Featured across ChatGPT, Gemini, Perplexity, Claude, and emerging AI platforms",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast, AI-Optimized Landing Pages",
      description:
        "Lightning-fast, markdown-optimized pages designed for AI bot crawling",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "SEO Synergy",
      description:
        "Works seamlessly with your existing SEO efforts for maximum impact",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Trackable Brand Metrics",
      description:
        "Comprehensive dashboards showing AI citations, visibility, and conversions",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "White-Glove Support",
      description:
        "Dedicated onboarding, strategy sessions, and ongoing optimization",
    },
  ];

  // Pricing Tiers
  const pricingTiers = [
    {
      name: "Recommendation",
      subtitle: "Perfect for Growing Brands",
      features: [
        "AI conversation monitoring",
        "Content optimization for 2 AI platforms",
        "3 AI-optimized landing pages",
        "Monthly performance reports",
        "Email support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Enterprise",
      subtitle: "For Market Leaders",
      features: [
        "Comprehensive multi-platform coverage",
        "Unlimited AI-optimized content",
        "Custom AI citation strategy",
        "Real-time analytics dashboard",
        "Dedicated GEO strategist",
        "Priority support & consulting",
      ],
      cta: "Contact Us",
      highlighted: true,
    },
  ];

  // FAQ Data
  const faqs = [
    {
      question: "Does GEO work with my existing SEO strategy?",
      answer:
        "Absolutely! GEO is designed to complement and enhance your existing SEO efforts. While traditional SEO focuses on search engine rankings, GEO optimizes your brand for AI-powered recommendations. Together, they create a comprehensive visibility strategy that captures both traditional search traffic and AI-driven discovery.",
      icon: <Search className="w-5 h-5" />,
    },
    {
      question: "Is GEO effective for new brands?",
      answer:
        "Yes! In fact, new brands often see faster results with GEO because AI systems evaluate content quality and authority differently than traditional search engines. By creating authoritative, well-structured content from the start, new brands can establish themselves as trusted sources in AI recommendations without waiting years to build domain authority.",
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      question: "What's the timeline for measurable results?",
      answer:
        "Most clients see initial AI citations within 4-8 weeks and measurable increases in AI-driven traffic within 2-3 months. However, GEO is an ongoing strategy that compounds over time. The more authoritative, citation-worthy content you have, the more frequently AI systems will recommend your brand.",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      question: "How do you ensure security and data integrity?",
      answer:
        "We prioritize data security at every step. All content strategies are developed with your brand guidelines and compliance requirements in mind. We never share proprietary information, and all analytics are securely stored. Our AI optimization techniques focus on public-facing content that you control and approve.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      question: "Which AI platforms do you optimize for?",
      answer:
        "We optimize for all major AI platforms including ChatGPT, Claude, Gemini, Perplexity, Microsoft Copilot, and NotebookLM. Our strategies are platform-agnostic, focusing on creating content that performs well across current and emerging AI systems.",
      icon: <Bot className="w-5 h-5" />,
    },
    {
      question: "How do you measure GEO success?",
      answer:
        "We track multiple metrics including AI citation frequency, AI-driven website traffic, brand mention sentiment in AI responses, conversion rates from AI referrals, and competitive citation share. You'll receive detailed reports with actionable insights and recommendations.",
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GEO Service by Realm by Rook | Get Your Brand Cited by AI Systems
        </title>
        <meta
          name="description"
          content="Boost brand visibility on ChatGPT, Gemini, Claude and more. Next-gen AI citation optimization service for market leaders. Get seen, cited, and trusted in the Age of AI."
        />
        <meta
          name="keywords"
          content="AI citation optimization, Generative Engine Optimization, GEO, AI chat visibility, ChatGPT optimization, brand AI visibility, LLM optimization"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "GEO Service - Generative Engine Optimization",
            provider: {
              "@type": "Organization",
              name: "Realm by Rook",
            },
            description:
              "Get Your Brand Seen, Cited, and Trusted in the Age of AI. Next-gen digital optimization designed for leading AI systems.",
            areaServed: "Worldwide",
            serviceType: "AI Citation Optimization",
          })}
        </script>
      </Helmet>
      <main className="min-h-screen pt-32 pb-16">
        <div className="realm-container">
          <ServiceBreadcrumb serviceName="GEO" serviceUrl="/services/geo" />

          {/* Hero Section */}
          <section className="mb-20">
            <div className="flex flex-col items-center text-center">
              <div className="max-w-4xl">
                <h1 className="realm-headline mb-6 animate-fade-in">
                  Unlock Top AI Visibility.{" "}
                  <span className="text-realm-darkgray">
                    Make Your Brand a Trusted Answer.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-realm-darkgray max-w-3xl mx-auto">
                  GEO is next-gen digital optimization, designed for the world's
                  leading AI systems.
                </p>
                <Button
                  onClick={() => setIsContactOpen(true)}
                  className="realm-button flex items-center gap-2 mx-auto mb-12"
                  size="lg"
                >
                  Boost My Brand in AI Results <ArrowRight size={20} />
                </Button>

                {/* AI Platform Logos */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-12">
                  {aiPlatforms.map((platform, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-4 border border-realm-lightgray hover:border-realm-black transition-all duration-300"
                    >
                      <img
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        className="w-12 h-12 object-contain mb-2"
                        loading="lazy"
                      />
                      <span className="text-xs font-medium">
                        {platform.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why GEO? */}
          <section className="py-16 border-t border-realm-lightgray">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-10 h-10 text-realm-black" />
                  <h2 className="text-3xl font-display font-bold">Why GEO?</h2>
                </div>
                <p className="text-lg text-realm-darkgray mb-6">
                  Search is changing. Customers now ask AI what to buy, not
                  Google what to search.
                </p>
                <p className="text-lg text-realm-darkgray mb-8">
                  Traditional SEO isn't enough—your brand needs to be{" "}
                  <strong>cited, referenced, and recommended</strong> by AI
                  chatbots everywhere.
                </p>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-1 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="border border-realm-lightgray p-6 hover:border-realm-black transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-realm-black">{stat.icon}</div>
                        <div>
                          <div className="text-4xl font-bold mb-2">
                            {stat.value}
                          </div>
                          <p className="text-realm-darkgray">{stat.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* How GEO Works */}
          <section className="py-16 border-t border-realm-lightgray">
            <h2 className="text-3xl font-display font-bold mb-12 text-center">
              How GEO Works: Our Proven 3-Step Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="border border-realm-lightgray p-8 hover:border-realm-black transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-realm-black text-white flex items-center justify-center text-2xl font-bold group-hover:bg-realm-darkgray transition-colors">
                      {item.step}
                    </div>
                    <div className="text-realm-black group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-realm-darkgray mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={16} className="mt-1 flex-shrink-0" />
                        <span className="text-sm text-realm-darkgray">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Case Studies */}
          <section className="py-16 border-t border-realm-lightgray">
            <h2 className="text-3xl font-display font-bold mb-12">
              Case Studies: Real Results, Real Citations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="border border-realm-lightgray p-6 hover:border-realm-black transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={study.image}
                      alt={study.citations}
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-sm font-medium text-realm-darkgray">
                      {study.citations}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{study.brand}</h3>
                  <p className="text-lg text-realm-darkgray mb-2">
                    {study.result}
                  </p>
                  <p className="text-sm text-realm-darkgray">{study.industry}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/case-studies"
                className="text-realm-black hover:underline inline-flex items-center gap-2"
              >
                View All Case Studies <ArrowRight size={16} />
              </Link>
            </div>
          </section>

          {/* What You Get */}
          <section className="py-16 border-t border-realm-lightgray">
            <h2 className="text-3xl font-display font-bold mb-12">
              What You Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="border border-realm-lightgray p-6 hover:border-realm-black transition-all duration-300"
                >
                  <div className="text-realm-black mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-realm-darkgray">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Integration with Realm by Rook */}
          <section className="py-16 border-t border-realm-lightgray">
            <div className="bg-realm-lightgray p-8 md:p-12">
              <h2 className="text-3xl font-display font-bold mb-6">
                Seamlessly Integrated into Your Digital Strategy
              </h2>
              <p className="text-lg text-realm-darkgray mb-4">
                GEO Service is now seamlessly available via{" "}
                <strong>'What We Do?'</strong> in the top navigation and the
                footer, making it simple for every client to access.
              </p>
              <p className="text-lg text-realm-darkgray">
                Whether you're optimizing for traditional search engines or
                AI-powered recommendations, Realm by Rook provides a unified
                approach to digital visibility.
              </p>
            </div>
          </section>

          {/* Pricing & Plans */}
          <section className="py-16 border-t border-realm-lightgray">
            <h2 className="text-3xl font-display font-bold mb-12 text-center">
              Pricing & Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`border p-8 transition-all duration-300 ${
                    tier.highlighted
                      ? "border-realm-black bg-realm-black text-white scale-105"
                      : "border-realm-lightgray hover:border-realm-black"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p
                    className={`mb-6 ${
                      tier.highlighted ? "text-gray-300" : "text-realm-darkgray"
                    }`}
                  >
                    {tier.subtitle}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check
                          size={20}
                          className={`mt-0.5 flex-shrink-0 ${
                            tier.highlighted ? "text-white" : "text-realm-black"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setIsContactOpen(true)}
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-white text-realm-black hover:bg-gray-200"
                        : "realm-button"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button
                onClick={() => setIsContactOpen(true)}
                variant="outline"
                className="bg-transparent border-realm-black text-realm-black hover:bg-realm-black hover:text-white"
              >
                Get a Custom AI Discovery Audit
              </Button>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 border-t border-realm-lightgray">
            <h2 className="text-3xl font-display font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <div className="text-realm-black">{faq.icon}</div>
                        <span className="font-medium">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-realm-darkgray pl-11">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-16 border-t border-realm-lightgray text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 max-w-3xl mx-auto">
              Ready to be the Answer AI Gives Your Future Customers?
            </h2>
            <p className="text-xl text-realm-darkgray mb-8 max-w-2xl mx-auto">
              Join leading brands that are already dominating AI conversations
              and capturing the next generation of customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsContactOpen(true)}
                className="realm-button flex items-center gap-2"
                size="lg"
              >
                Book Your GEO Demo <ArrowRight size={20} />
              </Button>
              <Button
                onClick={() => setIsContactOpen(true)}
                variant="outline"
                className="bg-transparent border-realm-black text-realm-black hover:bg-realm-black hover:text-white"
                size="lg"
              >
                Contact Our GEO Experts
              </Button>
            </div>
          </section>
        </div>

        {/* Contact Form Dialog */}
        <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <div className="py-2">
              <h2 className="text-2xl font-display font-bold mb-6">
                Get Your GEO Strategy
              </h2>
              <ContactForm onSuccess={() => setIsContactOpen(false)} />
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </>
  );
};

export default GEOService;

