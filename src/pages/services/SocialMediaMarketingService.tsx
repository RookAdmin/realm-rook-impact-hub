import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  TrendingUp,
  Instagram,
  Linkedin,
  MessageSquare,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import { Helmet } from "react-helmet-async";
import { IconCloudDemo } from "@/components/magicui/IconCloudDemo";

import Finequs from "@/components/assets/impact-studies/finequs-logo.webp"
import Avr from "@/components/assets/impact-studies/avr-favicon.png"
import Coventry from "@/components/assets/impact-studies/coventry-logo.png"

// Hero section with animated metrics
const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="bg-realm-black text-white py-20 md:py-24 relative overflow-hidden">
      <div className="realm-container relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left side: Text and buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl flex-1"
          >
            <h1 className="realm-headline text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 mt-12">
              We Multiply Your Brand's Impact.
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-realm-lightgray">
              Social media isn't about being everywhere. It's about showing up
              where it matters with strategy, storytelling, and systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setIsContactOpen(true)}
                className="realm-button bg-white text-realm-black hover:bg-realm-lightgray transition-colors text-base"
              >
                Get My Custom Strategy
              </Button>

              <Link
                to="/case-studies"
                className="text-white flex items-center gap-2 realm-link hover:text-realm-lightgray"
              >
                <span>See Impact Studies</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Right side: Icon Cloud */}
          <div className="hidden md:flex flex-1 justify-center items-center w-full md:w-auto">
            <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] -mt-12">
              <IconCloudDemo />
            </div>
          </div>
        </div>

        {/* Animated metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <Instagram size={24} />
            <div>
              <div className="text-3xl font-bold">+560%</div>
              <div className="text-sm text-realm-lightgray">Engagement</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <Linkedin size={24} />
            <div>
              <div className="text-3xl font-bold">+230%</div>
              <div className="text-sm text-realm-lightgray">
                Lead Generation
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <TrendingUp size={24} />
            <div>
              <div className="text-3xl font-bold">+340%</div>
              <div className="text-sm text-realm-lightgray">ROI</div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Contact  Form Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <div className="py-2">
            <h2 className="text-2xl font-display font-bold mb-6">
              Get My Custom Strategy
            </h2>
            <ContactForm onSuccess={() => setIsContactOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

// The Problem We Solve section
const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="realm-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Posting isn't a strategy. Performance is.
          </h2>

          <p className="text-lg md:text-xl text-realm-darkgray">
            Most brands fall into the trap of random posting. No narrative. No
            consistency. No conversion.
            <br />
            We fix that with intentional content, platform-specific playbooks,
            and data-fed creativity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Animated counter component
const AnimatedCounter = ({ value, label, icon: Icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.toString().replace(/[^0-9]/g, ""));
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 16));

      // Don't run if we have decimal values or non-numeric content
      if (isNaN(end)) return;

      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="bg-realm-black text-white p-8 border border-realm-darkgray"
    >
      <div className="flex items-center gap-4 mb-4">
        {Icon && <Icon size={32} className="text-realm-lightgray" />}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold mb-2">
        {isInView ? (
          <span className="inline-block">
            {typeof value === "string" && value.includes("x")
              ? `${count}x`
              : count}
          </span>
        ) : (
          <span className="inline-block">0</span>
        )}
        {typeof value === "string" &&
        !value.includes("x") &&
        !isNaN(parseInt(value.replace(/[^0-9]/g, "")))
          ? value.replace(/[0-9]/g, "")
          : ""}
      </h3>
      <p className="text-realm-lightgray">{label}</p>
    </div>
  );
};

// Proof of Performance section
const ProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const caseStudies = [
    
    {
      id: 1,
      logo: Avr,
      stat: "69,128+ Impressions Organically",
      quote:
        "Social Media Acceleration: Aravindh Ravichandran's Personal Brand on Instagram & LinkedIn",
      link: "/case-studies/social-media-acceleration-aravindh-ravichandran-personal-brand-on-instagram-and-linkedin",
    },
    {
      id: 2,
      logo: Finequs,
      stat: "93,502+ High Quality Leads ",
      quote:
        "Transforming Lead Generation & Brand Growth for Finequs: Meta Ads, AI, and WhatsApp Automation",
      link: "/case-studies/transforming-lead-generation-and-brand-growth-for-finequs-meta-ads-ai-and-whatsapp-automation",
    },
    {
      id: 3,
      logo: Coventry,
      stat: "62,454+ Impressions Organically",
      quote:
        "Transforming Coventry Road Dentalcare’s Social Media Presence & ROI",
      link: "/case-studies/transforming-coventry-road-dentalcare-s-social-media-presence-and-roi",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-realm-lightgray">
      <div className="realm-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
            We Let Results Do the Talking.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatedCounter
            value="5.2x"
            label="average ROI across all social campaigns"
            icon={TrendingUp}
          />
          <AnimatedCounter
            value="230%"
            label="increase in engagement within 90 days (B2B client)"
            icon={MessageSquare}
          />
          <AnimatedCounter
            value="40%"
            label="content reuse through AI repurposing"
            icon={Zap}
          />
          <AnimatedCounter
            value="8.4M+"
            label="combined impressions delivered for clients last quarter"
            icon={Users}
          />
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6 text-center">
            Impact Studies
          </h3>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white p-6 min-w-[300px] shadow-sm rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-16 h-8 mb-4">
                    <img
                      src={study.logo}
                      alt="Company Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xl font-bold mb-2">{study.stat}</p>
                  <p className="text-sm text-realm-darkgray mb-4">"{study.quote}"</p>
                  <Link
                    to={study.link}
                    className="realm-link text-sm flex items-center gap-1 font-medium text-realm-black hover:text-realm-primary transition-colors"
                  >
                    <span>View Impact Studies</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// What's Included section
const ServicesIncluded = () => {
  const services = [
    {
      title: "Full-Funnel Social Strategy",
      description:
        "Custom audience mapping, platform selection, and funnel optimization for maximum conversion.",
    },
    {
      title: "AI-Driven Content Creation",
      description:
        "Blending human creativity with AI efficiency to produce scroll-stopping content that converts.",
    },
    {
      title: "Comment Handling by Custom AI Agents",
      description:
        "Never miss an opportunity to engage with intelligent, brand-aligned responses.",
    },
    {
      title: "Performance Timing & Scheduling",
      description:
        "Data-backed posting schedule optimized for your audience's peak engagement times.",
    },
    {
      title: "Weekly KPI Reports with Human + AI Analysis",
      description:
        "Clear insights on what's working and actionable recommendations for improvement.",
    },
    {
      title: "A/B Testing for Post Styles & CTA Language",
      description:
        "Continuous optimization through split testing to maximize engagement and conversion.",
    },
    {
      title: "Reels & Short-Form Storyboarding",
      description:
        "Strategic planning and creation of attention-grabbing short-form video content.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="realm-container">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          What You Get
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="p-6 border border-realm-lightgray hover:border-realm-black transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Check size={20} className="text-realm-black" />
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <p className="text-realm-darkgray">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// AI-Age Upgrade section
const AIUpgrade = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const aiCapabilities = [
    "Instant community replies",
    "Trend prediction before it peaks",
    "Real-time mood + sentiment analysis",
    "Auto-personalization of content (based on audience behavior)",
  ];

  return (
    <section ref={ref} className="py-20 bg-realm-black text-white">
      <div className="realm-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            You're Not Just Hiring a Team. You're Hiring Intelligence.
          </h2>
          <p className="text-xl text-realm-lightgray">
            We deploy custom-built AI agents for:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {aiCapabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-6 border border-realm-lightgray/30"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-realm-lightgray/10 flex items-center justify-center">
                <Zap size={20} />
              </div>
              <p className="text-lg">{capability}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative h-20 md:h-24">
            <div className="absolute inset-x-0 flex justify-between items-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-realm-lightgray/50 flex items-center justify-center mb-2">
                  <span className="text-sm">1</span>
                </div>
                <span className="text-xs text-realm-lightgray">Brand</span>
              </div>
              <div className="border-t border-dashed border-realm-lightgray/30 flex-grow mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-realm-lightgray/50 flex items-center justify-center mb-2">
                  <span className="text-sm">2</span>
                </div>
                <span className="text-xs text-realm-lightgray">
                  AI Strategy
                </span>
              </div>
              <div className="border-t border-dashed border-realm-lightgray/30 flex-grow mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-realm-lightgray/50 flex items-center justify-center mb-2">
                  <span className="text-sm">3</span>
                </div>
                <span className="text-xs text-realm-lightgray">
                  Content Creation
                </span>
              </div>
              <div className="border-t border-dashed border-realm-lightgray/30 flex-grow mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-realm-lightgray/50 flex items-center justify-center mb-2">
                  <span className="text-sm">4</span>
                </div>
                <span className="text-xs text-realm-lightgray">
                  Human Review
                </span>
              </div>
              <div className="border-t border-dashed border-realm-lightgray/30 flex-grow mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-realm-lightgray/50 flex items-center justify-center mb-2">
                  <span className="text-sm">5</span>
                </div>
                <span className="text-xs text-realm-lightgray">Launch</span>
              </div>
              <div className="border-t border-dashed border-realm-lightgray/30 flex-grow mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-realm-lightgray/50 flex items-center justify-center mb-2">
                  <span className="text-sm">6</span>
                </div>
                <span className="text-xs text-realm-lightgray">
                  Live Metrics
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Social Proof section
const SocialProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      quote:
        "Realm didn't just increase our following. They created movement. We're now a thought leader in our space—and our inbound leads prove it.",
      author: "Head of Marketing, Tech Startup (B2B)",
    },
    {
      quote: "We used to chase likes. Now we get DMs asking to collaborate.",
      author: "Founder, Direct-to-Consumer Fashion Brand",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-realm-lightgray">
      <div className="realm-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-4xl font-serif mb-4">"</div>
              <p className="text-xl mb-6">{testimonial.quote}</p>
              <p className="text-sm font-medium">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Impact Studies Preview section
// const ImpactStudies = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   const caseStudies = [
//     {
//       title: "D2C Fashion Brand",
//       result: "220% engagement jump in 6 weeks",
//     },
//     {
//       title: "HealthTech Startup",
//       result: "3x social-driven inbound leads",
//     },
//     {
//       title: "Fitness Coach",
//       result: "Reels views from 200 → 28,000 avg in 30 days",
//     },
//     {
//       title: "B2B SaaS",
//       result: "LinkedIn leads up 530% using AI content repurposing",
//     },
//   ];

//   return (
//     <section ref={ref} className="py-20 bg-white">
//       <div className="realm-container">
//         <motion.h2
//           className="text-3xl md:text-4xl font-display font-bold mb-8 text-center"
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Impact Studies
//         </motion.h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {caseStudies.map((study, index) => (
//             <motion.div
//               key={index}
//               className="border border-realm-lightgray p-6 hover:border-realm-black transition-all duration-300"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//             >
//               <div className="text-lg font-bold mb-2">✨ {study.title}</div>
//               <p className="text-realm-darkgray mb-0">{study.result}</p>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <Link
//             to="/case-studies"
//             className="realm-link text-lg font-medium flex items-center justify-center gap-2"
//           >
//             <span>See More Wins</span>
//             <ArrowRight size={18} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// Final CTA section
const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section ref={ref} className="py-20 bg-realm-black text-white">
      <div className="realm-container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            We're Opening 2 Social Strategy Slots This Month.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={() => setIsContactOpen(true)}
              className="realm-button bg-white text-realm-black hover:bg-realm-lightgray transition-colors"
            >
              Claim Your Slot Now <ArrowRight size={16} className="ml-2" />
            </Button>

            {/* <Link to="/contact">
              <Button
                variant="outline"
                className="realm-button border-white text-white hover:bg-white/10 transition-colors"
              >
                Book a Free Discovery Call
              </Button>
            </Link> */}
          </div>

          <ul className="text-left max-w-md mx-auto space-y-2 text-realm-lightgray">
            <li className="flex items-center gap-2">
              <ArrowRight size={14} />
              <span>Includes free audit + competitor analysis</span>
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight size={14} />
              <span>Tailored for startups, creators, and growing brands</span>
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight size={14} />
              <span>100% result-first, not fluff</span>
            </li>
          </ul>
        </motion.div>
      </div>
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <div className="py-2">
            <h2 className="text-2xl font-display font-bold mb-6">
              Get My Custom Strategy
            </h2>
            <ContactForm onSuccess={() => setIsContactOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

// Sticky CTA component
const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA once scrolled past ~50% of the page
      const scrollPosition = window.scrollY;
      const pageHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;

      if (scrollPosition > (pageHeight - windowHeight) * 0.3) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-realm-black text-white py-4 z-50 shadow-lg"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="realm-container flex flex-col sm:flex-row items-center justify-between">
        <div className="hidden md:block">
          <p className="font-bold">Ready to transform your social presence?</p>
          <p className="text-sm text-realm-lightgray">
            Only 2 slots left this month
          </p>
        </div>

        <Button
          onClick={() => setIsContactOpen(true)}
          className="realm-button bg-white text-realm-black hover:bg-realm-lightgray transition-colors w-full sm:w-auto"
        >
          Claim Your Strategy Slot <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
      {/* Contact  Form Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <div className="py-2">
            <h2 className="text-2xl font-display font-bold mb-6">
              Get My Custom Strategy
            </h2>
            <ContactForm onSuccess={() => setIsContactOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

// Main service page component
const SocialMediaMarketingService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Social Media Marketing | Realm by Rook - Strategic Brand Growth
        </title>
        <meta
          name="description"
          content="Multiply your brand's impact with strategic social media marketing. Drive engagement, leads, and ROI with tailored strategies."
        />
        <meta
          name="keywords"
          content="social media marketing, brand growth, engagement, lead generation, ROI"
        />
      </Helmet>
      <main className="min-h-screen">
        {/* <div className="bg-black text-white">
          <div className="container max-w-12xl mx-auto px-1 sm:px-4 lg:px-4 pt-20">
            <ServiceBreadcrumb
              serviceName="Social Media Marketing"
              serviceUrl="/services/social-media-marketing"
            />
          </div>
        </div> */}

        <Hero />
        <ProblemSection />
        <ProofSection />
        <ServicesIncluded />
        <AIUpgrade />
        <SocialProof />
        {/* <ImpactStudies /> */}
        <FinalCTA />
        <StickyCTA />
      </main>
    </>
  );
};

export default SocialMediaMarketingService;
