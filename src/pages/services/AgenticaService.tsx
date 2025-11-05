import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import {
  MessageSquare,
  CreditCard,
  Mic,
  Shield,
  Plug,
  MessagesSquare,
  Globe,
  Rocket,
  ArrowRight,
} from "lucide-react";

// Partner logos
const partnerLogos = [
  { name: "PayPal", image: "/partner-logo/razorpay.png" },
  { name: "Gemini AI", image: "/ai/gai.png" },
  { name: "Zomato", image: "/ai/zomato.png" },
  { name: "Claude AI", image: "/ai/claude.png" },
  { name: "ChatGPT", image: "/ai/openai.png" },
  { name: "Paypal", image: "/ai/paypal.png"}
];

// Feature cards data
const features = [
  {
    icon: MessageSquare,
    title: "Conversational Integration",
    description: "Chat-first experiences across platforms.",
  },
  {
    icon: CreditCard,
    title: "Universal Payment Ready",
    description: "Direct commerce inside chat.",
  },
  {
    icon: Mic,
    title: "Zero Friction",
    description: "No screens. No typing. Just ask.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Secure, compliant, scalable.",
  },
];

// How it works steps
const steps = [
  {
    icon: Plug,
    title: "Connect Your Product",
    description: "Integrate your service with our conversational platform.",
  },
  {
    icon: MessagesSquare,
    title: "Enable AI Chat Flows",
    description: "Configure intelligent conversation paths for your users.",
  },
  {
    icon: Globe,
    title: "Go Live Across Platforms",
    description: "Deploy across ChatGPT, Claude, Gemini, and more.",
  },
  {
    icon: Rocket,
    title: "Start Generating Revenue",
    description: "Watch conversational commerce transform your business.",
  },
];

// News items
const newsItems = [
  {
    title: "PayPal x Gemini AI",
    description: "PayPal partners with Gemini AI: Pay directly in chat.",
  },
  {
    title: "Zomato x Claude AI",
    description: "Zomato lets you order food right from Claude conversations.",
  },
  {
    title: "ChatGPT Integrations",
    description: "Booking flights and hotels with a message. The future: no user interface, just chat.",
  },
  {
    title: "Your Service Coming Soon",
    description: "Agentica is powering next-gen D2C and SaaS businesses in chat.",
  },
];

const AgenticaService = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Agentica - Conversational Commerce Platform | Realm by Rook</title>
        <meta
          name="description"
          content="Upgrade your apps to conversational commerce. Bring your SaaS or D2C product to any chat platform with Agentica."
        />
        <meta
          name="keywords"
          content="conversational commerce, AI chat, chatbot integration, conversational AI, SaaS chat, D2C chat"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-screen bg-realm-black text-white flex items-center justify-center relative overflow-hidden">
        {/* Subtle animated background elements */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.04)" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="realm-container relative z-10 mb-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <p className="text-lg md:text-xl text-white/70 font-light tracking-wide">
                Empower. Connect. Transact.
              </p>
              <p className="text-lg md:text-xl text-white/70 font-light tracking-wide">
                No Screens, Only Conversation.
              </p>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight"
            >
              Upgrade Your Apps to{" "}
              <span className="font-bold">Conversational Commerce</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Bring your SaaS or D2C product to any chat platform. Voice or text—one message, endless possibilities.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex justify-center items-center"
            >
              <Button 
                onClick={() => setIsContactOpen(true)}
                className="bg-white text-black hover:bg-gray-200 flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </motion.div>

            {/* Glassmorphic device preview placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-20"
            >
              <div className="relative mx-auto max-w-2xl rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10" />
                    <div className="flex-1 bg-white/10 rounded-2xl p-4">
                      <p className="text-white/70 text-sm">Order food from Zomato in Claude AI</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="w-10 h-10 rounded-full bg-white/20" />
                    <div className="flex-1 bg-white/20 rounded-2xl p-4">
                      <p className="text-white text-sm">Pay with PayPal in Gemini chat</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10" />
                    <div className="flex-1 bg-white/10 rounded-2xl p-4">
                      <p className="text-white/70 text-sm">Book a flight in ChatGPT</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Form Dialog */}
        <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <div className="py-2">
              <h2 className="text-2xl font-display font-bold mb-6">Get Started with Agentica</h2>
              <ContactForm onSuccess={() => setIsContactOpen(false)} />
            </div>
          </DialogContent>
        </Dialog>
      </section>

      {/* Social Proof Bar */}
      <section className="py-16 bg-white border-t border-b border-gray-200">
        <div className="realm-container">
          <p className="text-center text-sm text-realm-darkgray mb-8 uppercase tracking-wider">
            Leading companies are adopting Convestional Commerce.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Agentica Section */}
      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Apps Are Dead. <span className="font-bold">Automate with Conversation.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg border border-transparent hover:border-realm-black transition-all duration-300"
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center border border-realm-black rounded-lg">
                  <feature.icon size={24} className="text-realm-black" />
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-realm-darkgray">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Credibility Section */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              The Future is <span className="font-bold">Conversational</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-realm-lightgray p-6 rounded-lg border border-transparent hover:border-realm-black transition-all duration-300"
              >
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-realm-darkgray text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              How <span className="font-bold">Agentica</span> Works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-lg border border-transparent hover:border-realm-black transition-all duration-300">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center border border-realm-black rounded-lg">
                    <step.icon size={24} className="text-realm-black" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                  <p className="text-realm-darkgray">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-realm-black opacity-20 -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For SaaS & D2C Section */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-realm-lightgray p-8 rounded-lg border border-transparent hover:border-realm-black transition-all duration-300"
            >
              <h3 className="text-2xl font-medium mb-4">Bring your SaaS to chat</h3>
              <p className="text-realm-darkgray mb-6">
                Deploy your SaaS as a conversational service with Agentica. Power booking, onboarding, and payments entirely in chat or voice.
              </p>
              <Link to="/discover/saas-startups">
                <Button variant="outline" className="border-realm-black text-realm-black hover:bg-realm-black hover:text-white">
                  See SaaS Chat Solutions
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-realm-lightgray p-8 rounded-lg border border-transparent hover:border-realm-black transition-all duration-300"
            >
              <h3 className="text-2xl font-medium mb-4">Sell and service D2C via chat</h3>
              <p className="text-realm-darkgray mb-6">
                Agentica enables direct sales, support, and payments—all through chat. Elevate your customer journey with zero screens.
              </p>
              <Link to="/discover/d2c-startups">
                <Button variant="outline" className="border-realm-black text-realm-black hover:bg-realm-black hover:text-white">
                  See D2C Chat Commerce
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-realm-black text-white">
        <div className="realm-container">
          <p className="text-center text-lg font-light">
            Rapid deployment. Global scale. Trusted by innovators.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="realm-section bg-white">
        <div className="realm-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Ready to turn <span className="font-bold">conversations into conversions?</span>
            </h2>
            <p className="text-xl text-realm-darkgray mb-8">
              Your app, available wherever people chat.
            </p>
            <Link to="/contact">
              <Button className="realm-button bg-realm-black text-white hover:bg-realm-darkgray px-8 py-6 text-lg">
                Get Started with Agentica
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AgenticaService;
