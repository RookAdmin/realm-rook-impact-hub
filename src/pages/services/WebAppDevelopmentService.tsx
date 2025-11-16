import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Database,
  Zap,
  Check,
  Monitor,
  Smartphone,
  Layout as LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import PageHeader from "@/components/common/PageHeader";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import { RetroGrid } from "@/components/magicui/retro-grid";

import HloFavi from "@/components/assets/impact-studies/hlo-favicon.png";
import NamsushiLogo from "@/components/assets/impact-studies/namsushi-logo.jpg";
import CoventryLogo from "@/components/assets/impact-studies/coventry-logo.png";
const WebAppDevelopmentService = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>Custom Web & App Development | Scalable, Secure Solutions with Modern Tech Stack</title>
        <meta
          name="description"
          content="Build high-performance web applications and mobile apps with cutting-edge technology. Scalable, secure, and user-friendly digital solutions for startups to enterprises. React, Node.js, cloud-native development."
        />
        <meta
          name="keywords"
          content="web development services, app development, custom web applications, mobile app development, React development, full stack development, SaaS development, cloud-native apps, progressive web apps, API development"
        />
        <meta property="og:title" content="Custom Web & Mobile App Development Services | Realm by Rook" />
        <meta property="og:description" content="Transform your ideas into powerful digital products. Expert development with React, Node.js, and modern frameworks for scalable, secure solutions." />
      </Helmet>
      <main className="min-h-screen">
        <div className="pt-32">
          {/* Breadcrumb */}
          {/* <div className="realm-container">
            <ServiceBreadcrumb
              serviceName="Web/App Development"
              serviceUrl="/services/web-app-development"
            />
          </div> */}

          {/* Hero Section */}
          <section className="py-16 md:py-24 relative overflow-hidden">
            {/* RetroGrid background */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
              <RetroGrid />
            </div>
            <div className="realm-container text-center relative z-10">
              <h1 className="realm-headline mb-6">
                Websites That Scale. Apps That Convert.
              </h1>
              <p className="text-xl md:text-2xl text-realm-darkgray max-w-3xl mx-auto mb-12">
                We build experiences that perform fast, scalable, and ready for
                growth.
              </p>
              <Button
                onClick={() => setIsContactOpen(true)}
                className="realm-button rounded-full bg-realm-black text-white hover:bg-realm-darkgray inline-flex items-center gap-2"
              >
                Build With Realm <ArrowRight size={16} />
              </Button>
            </div>
          </section>

          <div className="flex justify-center my-12">
            <img
              src="/services/website.png"
              alt="Web and App Development Illustration"
              className="max-w-full h-auto object-contain mx-auto"
              loading="lazy"
              style={{ maxWidth: "1200px", width: "100%" }}
            />
          </div>

          {/* Contact  Form Dialog */}
          <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
            <DialogContent className="sm:max-w-[500px]">
              <div className="py-2 pr-2">
                <h2 className="text-2xl font-display font-bold mb-6">
                  Build With Realm
                </h2>
                <ContactForm onSuccess={() => setIsContactOpen(false)} />
              </div>
            </DialogContent>
          </Dialog>

          {/* Why Realm for Development */}
          <section className="py-16 bg-white">
            <div className="realm-container">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Why Realm for Development?
                </h2>
                <p className="text-lg text-realm-darkgray">
                  We combine design thinking, powerful development, and AI
                  intelligence — faster than most teams can finish their briefs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="flex items-start gap-4">
                  <Check className="text-realm-black min-w-6" size={24} />
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      90+ Lighthouse Performance
                    </h3>
                    <p className="text-realm-darkgray">
                      Blazing fast applications built with performance as a
                      priority.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="text-realm-black min-w-6" size={24} />
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      Custom Scalable Architecture
                    </h3>
                    <p className="text-realm-darkgray">
                      Built for growth from day one with best-in-class
                      architecture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="text-realm-black min-w-6" size={24} />
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      AI-Enabled Experiences
                    </h3>
                    <p className="text-realm-darkgray">
                      Intelligent interfaces that adapt and learn with your
                      users.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="text-realm-black min-w-6" size={24} />
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      10x Faster with RAD
                    </h3>
                    <p className="text-realm-darkgray">
                      Rapid Application Development methodology for quick
                      deployment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="text-realm-black min-w-6" size={24} />
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      Web, App, and Dashboard ready
                    </h3>
                    <p className="text-realm-darkgray">
                      Complete ecosystem of digital touchpoints from Day 1.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RAD Method */}
          <section className="bg-white py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-black text-center mb-8">
                Why Wait Months? Build in Days.
              </h2>
              <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
                Realm by Rook follows the RAD (Rapid Application Development)
                process — combining proven components, lean sprints, and
                AI-accelerated scaffolding. You get to market 90% faster.
              </p>

              <div className="relative">
                {/* Vertical line */}
                <div className="hidden md:block absolute left-1/2 w-px h-full bg-gray-200 transform -translate-x-1/2"></div>

                {/* Timeline items */}
                <div className="space-y-12">
                  {/* Item 01 - Right side */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 order-1 md:order-1">
                      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-sm font-medium text-gray-400">
                          01
                        </span>
                        <h3 className="text-xl font-semibold text-black mt-2 mb-3">
                          Discovery Call
                        </h3>
                        <p className="text-gray-600 mb-3">
                          Quick exploration of your needs, goals, and vision.
                        </p>
                        <div className="text-sm font-medium text-gray-400">
                          1–2 Days
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2 order-2 relative">
                      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-black border-2 border-white"></div>
                    </div>
                  </div>

                  {/* Item 02 - Left side */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="hidden md:block md:w-1/2 order-1 relative">
                      <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-black border-2 border-white"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-2 md:order-2">
                      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-sm font-medium text-gray-400">
                          02
                        </span>
                        <h3 className="text-xl font-semibold text-black mt-2 mb-3">
                          UI/UX in Parallel
                        </h3>
                        <p className="text-gray-600 mb-3">
                          Design interfaces while planning architecture for
                          maximum efficiency.
                        </p>
                        <div className="text-sm font-medium text-gray-400">
                          2–4 Days
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 03 - Right side */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 order-1 md:order-1">
                      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-sm font-medium text-gray-400">
                          03
                        </span>
                        <h3 className="text-xl font-semibold text-black mt-2 mb-3">
                          Reusable Tech Blocks
                        </h3>
                        <p className="text-gray-600 mb-3">
                          Assemble proven code modules tailored to your specific
                          needs.
                        </p>
                        <div className="text-sm font-medium text-gray-400">
                          3–5 Days
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2 order-2 relative">
                      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-black border-2 border-white"></div>
                    </div>
                  </div>

                  {/* Item 04 - Left side */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="hidden md:block md:w-1/2 order-1 relative">
                      <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-black border-2 border-white"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-2 md:order-2">
                      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-sm font-medium text-gray-400">
                          04
                        </span>
                        <h3 className="text-xl font-semibold text-black mt-2 mb-3">
                          AI-Powered Dev
                        </h3>
                        <p className="text-gray-600 mb-3">
                          Accelerate development with our AI toolchain and
                          automation.
                        </p>
                        <div className="text-sm font-medium text-gray-400">
                          4–7 Days
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 05 - Right side */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 order-1 md:order-1">
                      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-sm font-medium text-gray-400">
                          05
                        </span>
                        <h3 className="text-xl font-semibold text-black mt-2 mb-3">
                          Launch + Support
                        </h3>
                        <p className="text-gray-600 mb-3">
                          Deploy with confidence and continuous improvement.
                        </p>
                        <div className="text-sm font-medium text-gray-400">
                          Ongoing
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2 order-2 relative">
                      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-black border-2 border-white"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                  You save time, budget, and mindspace — and start scaling weeks
                  ahead of your competitors.
                </p>
                <p className="text-xl font-semibold text-black">
                  Custom doesn't have to be slow.
                </p>
              </div>
            </div>
          </section>

          {/* What We Build */}
          <section className="py-16">
            <div className="realm-container">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
                What We Build
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard
                  icon={<Monitor size={24} />}
                  title="Business & Personal Websites"
                  description="Fast, responsive, and conversion-focused sites that represent your brand perfectly."
                />
                <ServiceCard
                  icon={<Code size={24} />}
                  title="Custom Web Apps"
                  description="Tailored applications built with modern frameworks for optimal performance."
                />
                <ServiceCard
                  icon={<Database size={24} />}
                  title="E-commerce Portals"
                  description="Seamless shopping experiences designed to convert and scale with your business."
                />
                <ServiceCard
                  icon={<LayoutDashboard size={24} />}
                  title="Admin Dashboards & CRMs"
                  description="Powerful tools to manage your business with clarity and efficiency."
                />
                <ServiceCard
                  icon={<Smartphone size={24} />}
                  title="Native & Hybrid Mobile Apps"
                  description="Cross-platform applications that feel native and perform beautifully."
                />
                <ServiceCard
                  icon={<Zap size={24} />}
                  title="AI Tools & GPT Interfaces"
                  description="Next-gen intelligent applications leveraging the latest in AI technology."
                />
                <ServiceCard
                  icon={<Database size={24} />}
                  title="Booking & Marketplace Platforms"
                  description="Robust platforms connecting providers and customers with ease."
                />
                <ServiceCard
                  icon={<Monitor size={24} />}
                  title="Portfolio / Founder Sites"
                  description="Compelling personal brand platforms built to impress and convert."
                />
              </div>
            </div>
          </section>

          {/* Tech Stack & Capabilities */}
          <section className="py-16 bg-realm-lightgray">
            <div className="realm-container">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Our Tech Arsenal
                </h2>
                <p className="text-lg text-realm-darkgray">
                  From frontend finesse to backend power.
                </p>
              </div>

              <div className="space-y-12 max-w-4xl mx-auto">
                <TechCategory
                  title="Frontend"
                  techs={[
                    "React",
                    "Next.js",
                    "Vue",
                    "Tailwind",
                    "HTML5",
                    "TypeScript",
                  ]}
                />
                <TechCategory
                  title="Backend"
                  techs={[
                    "Node.js",
                    "Django",
                    "FastAPI",
                    "MongoDB",
                    "PostgreSQL",
                    "Firebase",
                  ]}
                />
                <TechCategory
                  title="DevOps"
                  techs={["Docker", "GitHub", "Vercel", "AWS", "Netlify"]}
                />
                <TechCategory
                  title="Mobile"
                  techs={["React Native", "Flutter", "PWA"]}
                />
                <TechCategory
                  title="AI/ML"
                  techs={["OpenAI", "LangChain", "Whisper", "GPT APIs"]}
                />
                <TechCategory
                  title="CMS"
                  techs={["Webflow", "Sanity", "Shopify", "Strapi"]}
                />
              </div>
            </div>
          </section>

          {/* AI-Powered Development */}
          <section className="py-16">
            <div className="realm-container">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Smarter. Faster. AI-Native.
                </h2>
                <p className="text-lg text-realm-darkgray">
                  We leverage artificial intelligence throughout our development
                  process.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="border border-realm-lightgray p-8 hover:border-realm-black transition-all duration-300">
                  <h3 className="font-medium text-lg mb-4">
                    Scaffold interfaces instantly
                  </h3>
                  <p className="text-realm-darkgray">
                    Generate UI components and layouts in minutes instead of
                    hours.
                  </p>
                </div>
                <div className="border border-realm-lightgray p-8 hover:border-realm-black transition-all duration-300">
                  <h3 className="font-medium text-lg mb-4">
                    Create smart content modules
                  </h3>
                  <p className="text-realm-darkgray">
                    Intelligent content blocks that adapt to user behavior and
                    preferences.
                  </p>
                </div>
                <div className="border border-realm-lightgray p-8 hover:border-realm-black transition-all duration-300">
                  <h3 className="font-medium text-lg mb-4">
                    Automate data validation
                  </h3>
                  <p className="text-realm-darkgray">
                    AI-powered data processing that ensures accuracy and
                    consistency.
                  </p>
                </div>
                <div className="border border-realm-lightgray p-8 hover:border-realm-black transition-all duration-300">
                  <h3 className="font-medium text-lg mb-4">
                    Build GPT-driven dashboards
                  </h3>
                  <p className="text-realm-darkgray">
                    Interactive insights powered by the latest language models.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-lg font-medium">
                  Your platform isn't just modern. It's intelligent.
                </p>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="py-16 bg-realm-lightgray">
            <div className="realm-container">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  How We Work With You
                </h2>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start max-w-5xl mx-auto">
                <ProcessStep
                  number="01"
                  title="Free Discovery Call"
                  description="We listen to your vision and needs."
                />
                <ProcessStep
                  number="02"
                  title="Project Planning + Sprint Setup"
                  description="Clear roadmap with milestones."
                />
                <ProcessStep
                  number="03"
                  title="UI/UX + Dev in Parallel"
                  description="Efficient progress on all fronts."
                />
                <ProcessStep
                  number="04"
                  title="Review Cycles"
                  description="Real demos, not just mockups."
                />
                <ProcessStep
                  number="05"
                  title="Launch + Iteration"
                  description="Going live with confidence."
                />
              </div>

              <div className="text-center mt-12">
                <p className="text-lg font-medium">
                  Always collaborative. Always accountable.
                </p>
              </div>
            </div>
          </section>

          {/* Impact Snapshots */}
          <section className="py-16">
            <div className="realm-container">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
                Impact Snapshots
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="border border-realm-lightgray p-8 hover:border-realm-black transition-all duration-300">
                  <a href="/case-studies/building-hloapp-com-the-digital-hub-for-ip-legal-trademark-patent-and-brand-safeguarding">
                  <img
                    src={HloFavi}
                    alt="Client logo"
                    className="w-12 h-12 mb-4"
                  />
                  <h3 className="font-medium text-lg mb-2">Hlo</h3>
                  <p className="text-realm-darkgray mb-4">
                    The Digital Hub for IP Legal+, Trademark, Patent, and Brand Safeguarding
                  </p>
                  <div className="font-bold">
                    Global enterprise and startup adoption for IP management
                  </div>
                  </a>
                </div>
                <div className="border border-realm-lightgray p-8 hover:border-realm-black transition-all duration-300">
                  <a href="/case-studies/coventryroaddental-co-uk-elevating-patient-experience-and-premium-dental-care-online">
                  <img
                    src={CoventryLogo}
                    alt="Client logo"
                    className="w-12 h-12 mb-4"
                  />
                  <h3 className="font-medium text-lg mb-2">Coventry Road Dental Care</h3>
                  <p className="text-realm-darkgray mb-4">
                    Elevating Patient Experience and Premium Dental Care Online
                  </p>
                  <div className="font-bold">
                    Surge in online appointment bookings and inquiries
                  </div>
                  </a>
                </div>
                <div className="border border-realm-lightgray p-8 hover:border-realm-black transition-all duration-300">
                  <a href="/case-studies/building-nam-sushi-s-digital-experience-and-seo-success">
                  <img
                    src={NamsushiLogo}
                    alt="Client logo"
                    className="w-12 h-12 mb-4"
                  />
                  <h3 className="font-medium text-lg mb-2">
                    Nam Sushi
                  </h3>
                  <p className="text-realm-darkgray mb-4">
                    Building Nam Sushi’s Digital Experience & SEO Success.
                  </p>
                  <div className="font-bold">
                    Grew conversion rates +30% 
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Client Quotes / Trust Signals */}
          <section className="py-16 bg-realm-lightgray">
            <div className="realm-container">
              <div className="max-w-3xl mx-auto text-center">
                <blockquote className="text-2xl md:text-3xl font-display italic mb-8">
                  "We couldn't believe the speed and quality."
                </blockquote>

                <blockquote className="text-2xl md:text-3xl font-display italic mb-12">
                  "Realm is our tech team now."
                </blockquote>

                <div className="flex justify-center space-x-16 mb-8">
                  <img
                    src="/PartnerLogos/CoventryRoadDentalCare.png"
                    alt="Client logo"
                    className="w-40 h-auto object-contain"
                  />
                  <img
                    src="/PartnerLogos/light.png"
                    alt="Client logo"
                    className="w-40 h-auto object-contain"
                  />
                  <img
                    src="/PartnerLogos/dspgroups.png"
                    alt="Client logo"
                    className="w-40 h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why Us */}
          <section className="py-16 bg-realm-black text-white">
            <div className="realm-container">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
                Why Tech-Led Brands Choose Realm
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="flex items-start gap-4">
                  <Check className="text-white min-w-6" size={24} />
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      Full-Stack Dev + Design Integration
                    </h3>
                    <p className="text-white/80">
                      Cohesive solutions from concept to code.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="text-white min-w-6" size={24} />
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      AI + Automation Ready
                    </h3>
                    <p className="text-white/80">
                      Forward-thinking technologies built in.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="text-white min-w-6" size={24} />
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      Fast, Transparent, Accountable
                    </h3>
                    <p className="text-white/80">No surprises, just results.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="text-white min-w-6" size={24} />
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      Maintenance + Long-term Support
                    </h3>
                    <p className="text-white/80">
                      We're with you for the journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="text-white min-w-6" size={24} />
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      Deep Experience in B2B & SaaS
                    </h3>
                    <p className="text-white/80">
                      We understand complex business models.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section id="contact" className="py-16 md:py-24">
            <div className="realm-container">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Let's Build Something Worth Clicking.
                </h2>
                <p className="text-lg text-realm-darkgray mb-8">
                  Talk to us about your idea, we'll show you how fast and
                  powerful it can be.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    onClick={() => setIsContactOpen(true)}
                    className="realm-button rounded-full bg-realm-black text-white hover:bg-realm-darkgray inline-flex items-center gap-2 justify-center"
                  >
                    Start a Project <ArrowRight size={16} />
                  </Button>
                  {/* <a href="mailto:hlo@realmrook.com" className="realm-button bg-transparent border border-realm-black text-realm-black hover:bg-realm-black hover:text-white inline-flex items-center gap-2 justify-center">
                    Write to us: hlo@realmrook.com
                  </a> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

// Timeline Step Component
const TimelineStep = ({
  number,
  title,
  days,
  description,
  isLeft,
}: {
  number: string;
  title: string;
  days: string;
  description: string;
  isLeft: boolean;
}) => {
  return (
    <div
      className={`flex items-start ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      <div className="md:w-1/2 p-4 flex md:justify-end md:items-end md:text-right items-start text-left">
        {isLeft ? (
          <div className="md:pr-8">
            <div className="font-bold text-lg">{number}</div>
            <h3 className="font-medium text-xl mb-1">{title}</h3>
            <div className="text-sm font-bold mb-2 text-realm-darkgray">
              {days}
            </div>
            <p className="text-realm-darkgray">{description}</p>
          </div>
        ) : (
          <div className="md:invisible">
            <div className="font-bold text-lg">{number}</div>
            <h3 className="font-medium text-xl mb-1">{title}</h3>
            <div className="text-sm font-bold mb-2 text-realm-darkgray">
              {days}
            </div>
            <p className="text-realm-darkgray">{description}</p>
          </div>
        )}
      </div>
      <div className="relative flex justify-center items-center z-10">
        <div className="w-4 h-4 rounded-full bg-realm-black absolute md:static"></div>
      </div>
      <div className="md:w-1/2 p-4">
        {!isLeft ? (
          <div className="md:pl-8">
            <div className="font-bold text-lg">{number}</div>
            <h3 className="font-medium text-xl mb-1">{title}</h3>
            <div className="text-sm font-bold mb-2 text-realm-darkgray">
              {days}
            </div>
            <p className="text-realm-darkgray">{description}</p>
          </div>
        ) : (
          <div className="md:invisible">
            <div className="font-bold text-lg">{number}</div>
            <h3 className="font-medium text-xl mb-1">{title}</h3>
            <div className="text-sm font-bold mb-2 text-realm-darkgray">
              {days}
            </div>
            <p className="text-realm-darkgray">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="border border-realm-lightgray p-6 hover:border-realm-black transition-all duration-300 h-full">
      <div className="mb-4 text-realm-black">{icon}</div>
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p className="text-realm-darkgray">{description}</p>
    </div>
  );
};

// Tech Category Component
const TechCategory = ({ title, techs }: { title: string; techs: string[] }) => {
  return (
    <div>
      <h3 className="font-bold text-xl mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {techs.map((tech) => (
          <span
            key={tech}
            className="border border-realm-black px-4 py-2 hover:bg-realm-black hover:text-white transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

// Process Step Component
const ProcessStep = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center mb-8 md:mb-0 md:max-w-[18%]">
      <div className="w-12 h-12 rounded-full bg-realm-black text-white flex items-center justify-center mx-auto mb-4">
        {number}
      </div>
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p className="text-realm-darkgray">{description}</p>
    </div>
  );
};

export default WebAppDevelopmentService;
