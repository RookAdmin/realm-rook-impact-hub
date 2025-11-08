import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Check,
  Smartphone,
  Layout,
  Framer,
  ActivitySquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

import Bob from "@/components/assets/client/bob.jpg"

const UIUXDesignService = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const benefits = [
    {
      icon: <ActivitySquare size={24} />,
      title: "Research-Led, User-First",
      description:
        "Every design decision is backed by thorough research and user insights.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile-Optimized, Web-Responsive",
      description:
        "Designs that look and work flawlessly across all device types and screen sizes.",
    },
    {
      icon: <Layout size={24} />,
      title: "Built for Conversions",
      description:
        "Strategic UX patterns that guide users toward desired business outcomes.",
    },
    {
      icon: <Check size={24} />,
      title: "Accessibility + Inclusivity",
      description:
        "WCAG-compliant interfaces that work for everyone, everywhere.",
    },
    {
      icon: <Framer size={24} />,
      title: "Motion & Micro-interactions",
      description:
        "Subtle animations that delight users and enhance engagement without sacrificing performance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>UI/UX Design Services | User-Centered Design That Converts & Delights Users</title>
        <meta
          name="description"
          content="Create intuitive, conversion-focused user experiences with expert UI/UX design. Mobile-optimized, research-driven designs for web apps, SaaS platforms, and digital products that users love."
        />
        <meta
          name="keywords"
          content="UI UX design services, user interface design, user experience design, UX research, UI design agency, mobile app design, web design, SaaS design, product design, UX audit, wireframing, prototyping"
        />
        <meta property="og:title" content="Expert UI/UX Design Services | Research-Driven, Conversion-Focused Design" />
        <meta property="og:description" content="Transform your digital product with world-class UI/UX design. Create experiences that delight users and drive business results." />
      </Helmet>
      <main className="min-h-screen pt-32">
        {/* <div className="realm-container mb-6">
          <ServiceBreadcrumb
            serviceName="UI/UX Design"
            serviceUrl="/services/ui-ux-design"
          />
        </div> */}

        {/* Hero Section with Visual */}
        <section className="pb-16 relative">
          <div className="realm-container">
            <div className="flex flex-col md:flex-row items-center ">
              {/* Left: Hero Content */}
              <div className="flex-1 max-w-xl">
                <h1 className="realm-headline mb-6">
                  Designs That Don't Just Look Good. They Work.
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-realm-darkgray">
                  We craft human-first, experience-driven digital interfaces.
                </p>
                <Button
                  onClick={() => setIsContactOpen(true)}
                  className="realm-button rounded-full flex items-center gap-2"
                >
                  Let's Design Together <ArrowRight size={16} />
                </Button>
              </div>
              {/* Right: Spline Model */}
              <div className="flex-1 w-full h-[400px] md:h-[500px] lg:h-[600px]">
                <iframe
                  src="https://my.spline.design/designelementsuikit-FfdKKBMxOVtaF6cAJ9qy4ZEy/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  className=""
                  title="Spline 3D Model"
                  allow="autoplay; fullscreen"
                ></iframe>
              </div>
            </div>

            {/* Contact Form Dialog */}
            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogContent className="sm:max-w-[500px]">
                <div className="py-2 pr-2">
                  <h2 className="text-2xl font-display font-bold mb-6">
                    Let's Design Together
                  </h2>
                  <ContactForm onSuccess={() => setIsContactOpen(false)} />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Why Realm for UI/UX Section */}
        <section className="py-16 md:py-24 bg-realm-lightgray">
          <div className="realm-container">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Why Realm for UI/UX?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-8 border border-realm-black"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-realm-darkgray">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process with Visual Flowchart */}
        <section className="py-16 md:py-24">
          <div className="realm-container">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              Our Process
            </h2>
            <p className="text-center text-realm-darkgray mb-16 max-w-2xl mx-auto">
              A strategic, proven approach to creating interfaces that users
              love.
            </p>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  "Discovery Workshop",
                  "User Personas & Journey Mapping",
                  "Wireframes & Interaction Plans",
                ].map((step, index) => (
                  <div
                    key={index}
                    className="border border-realm-black p-6 text-center flex flex-col items-center"
                  >
                    <div className="w-12 h-12 flex items-center justify-center border border-realm-black rounded-full mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-bold">{step}</h3>
                  </div>
                ))}
              </div>

              <div className="flex justify-center my-4">
                {/* Replace ArrowIndicator with a simple arrow div */}
                <div className="flex items-center justify-center">
                  <ArrowDown size={24} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Hi-Fi UI Design (Web & Mobile)",
                  "Clickable Prototypes",
                  "Dev Handoff & QA",
                ].map((step, index) => (
                  <div
                    key={index}
                    className="border border-realm-black p-6 text-center flex flex-col items-center"
                  >
                    <div className="w-12 h-12 flex items-center justify-center border border-realm-black rounded-full mb-4">
                      {index + 4}
                    </div>
                    <h3 className="font-bold">{step}</h3>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <img
                  src="/services/uxui-phon.png"
                  alt="UI/UX Design Process"
                  className="realm-image-greyscale max-w-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tools We Use */}
        <section className="py-16 md:py-24 bg-realm-black text-white">
          <div className="realm-container">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Tools We Use
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { name: "Figma", image: "/services/UI UX tools/Figma.png" },
                {
                  name: "Adobe XD",
                  image: "/services/UI UX tools/Adobe XD.png",
                },
                {
                  name: "Framer",
                  image: "/services/UI UX tools/Framer logo.png",
                },
                { name: "Miro", image: "/services/UI UX tools/miro.webp" },
                { name: "UXPin", image: "/services/UI UX tools/uxpin.png" },
                {
                  name: "Whimsical",
                  image: "/services/UI UX tools/whimsical logo.png",
                },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="border border-white p-8 flex flex-col items-center"
                >
                  <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-white">
                    <img
                      src={tool.image}
                      alt={`${tool.name} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-center">{tool.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialty Design Areas */}
        <section className="py-16 md:py-24">
          <div className="realm-container">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              Specialty Design Areas
            </h2>
            <p className="text-center text-realm-darkgray mb-16 max-w-2xl mx-auto">
              Our team specializes in creating exceptional designs for these
              specific areas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "SaaS Dashboards",
                  image: "/services/SaaS Dashboard.png",
                },
                { name: "Portfolio Sites", image: "/services/uxui-port.png" },

                { name: "E-commerce UX", image: "/services/E commerce ux.png" },
                {
                  name: "Product Landing Pages",
                  image: "/services/uxui2.png",
                },
                {
                  name: "App Interfaces",
                  image: "/services/App interface.jpg",
                },
                {
                  name: "Marketing Materials",
                  image: "/services/marketing.png",
                },
              ].map((specialty, index) => (
                <div
                  key={index}
                  className="border border-realm-lightgray hover:border-realm-black transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={specialty.image}
                      alt={specialty.name}
                      className="realm-image hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{specialty.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof of Work */}
        <section className="py-16 md:py-24 bg-realm-lightgray">
          <div className="realm-container">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              Proof of Work
            </h2>
            <p className="text-center text-realm-darkgray mb-16 max-w-2xl mx-auto">
              From our Impact Studies - real results from real clients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  stat: "50%",
                  desc: "bounce rate drop after UI redesign",
                  image: "/services/uxui32.png",
                },
                {
                  stat: "40%",
                  desc: "user retention rate increase",
                  image: "/services/uxui31.png",
                },
                {
                  stat: "3X",
                  desc: "app downloads grew in 2 months post-redesign",
                  image: "/services/uxui33.png",
                },
              ].map((proof, index) => (
                <div
                  key={index}
                  className="bg-white border border-realm-black p-8"
                >
                  <div className="aspect-video overflow-hidden mb-6">
                    <img
                      src={proof.image}
                      alt={`Impact proof ${index + 1}`}
                      className="realm-image realm-image-greyscale"
                    />
                  </div>
                  <div className="text-3xl font-bold mb-2">{proof.stat}</div>
                  <p>{proof.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="realm-container">
            <div className="border border-realm-black p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-italic mb-8">
                "The UX Realm team changed everything about how our users
                experience our product."
              </h2>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={Bob}
                    alt="Client portrait"
                    className="realm-image"
                  />
                </div>
                <div className="text-left">
                  <p className="font-bold">Bob Deol</p>
                  <p className="text-realm-darkgray">Founder, V5 Digital</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="contact-section"
          className="py-16 md:py-24 bg-realm-black text-white"
        >
          <div className="realm-container text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Your Idea Deserves a Beautiful, Functional Experience.
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
              {/* <Button  className="realm-button bg-white text-realm-black hover:bg-realm-lightgray">
                Start My Project
              </Button> */}
              <Button
                onClick={() => setIsContactOpen(true)}
                variant="outline"
                className="text-black border-white rounded-full"
              >
                Talk to Our Design Team
              </Button>
            </div>
          </div>
        </section>

        {/* <div className="py-16 pl-12 text-center">
          <Link to="/">
            <Button
              variant="outline"
              className="realm-button bg-transparent border-realm-black text-realm-black hover:bg-realm-black hover:text-white flex items-center gap-2"
            >
              <ArrowLeft size={16} /> Back to Homepage
            </Button>
          </Link>
        </div> */}
      </main>
    </>
  );
};

export default UIUXDesignService;
