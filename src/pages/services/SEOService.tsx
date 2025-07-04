import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

const SEOService = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Scroll to contact section handler
  const scrollToContact = () => {
    const contactSection = document.getElementById("seo-contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // SEO services
  const seoServices = [
    {
      name: "Keyword Research + Competitive Analysis",
      description:
        "Finding the right terms your customers actually use to find you.",
    },
    {
      name: "Data-Driven On-page SEO",
      description:
        "Optimizing every page element for maximum search visibility.",
    },
    {
      name: "Technical SEO & Site Health",
      description: "Fixing the backend issues that can tank your rankings.",
    },
    {
      name: "High-Authority Link Building",
      description:
        "Earning quality backlinks through strategic outreach and content.",
    },
    {
      name: "SEO Content that Converts",
      description: "Creating valuable content that ranks and drives action.",
    },
    {
      name: "Analytics + Reporting Dashboards",
      description: "Transparent tracking of all key performance metrics.",
    },
  ];

  // SEO process
  const seoProcess = [
    {
      name: "Site Audit",
      description:
        "Comprehensive analysis of current SEO performance and issues.",
    },
    {
      name: "Strategy Blueprint",
      description:
        "Custom roadmap based on your goals, industry, and competitors.",
    },
    {
      name: "Content Plan",
      description:
        "Keyword-focused content calendar aligned with search intent.",
    },
    {
      name: "On-page Fixes",
      description: "Implementation of technical and content optimizations.",
    },
    {
      name: "Off-page Strategy",
      description: "Authority building through quality link acquisition.",
    },
    {
      name: "Monitoring & Reporting",
      description: "Ongoing analysis and strategy refinement.",
    },
  ];

  // Tools
  const seoTools = [
    {
      name: "SEMrush",
      image: "/services/seo-tools/semrush.png",
    },
    {
      name: "Ahrefs",
      image: "/services/seo-tools/aher.png",
    },
    {
      name: "Google Search Console",
      image: "/services/seo-tools/gsearch.webp",
    },
    {
      name: "Surfer SEO",
      image: "/services/seo-tools/surfer.png",
    },
    {
      name: "Screaming Frog",
      image: "/services/seo-tools/Screaming Frog.jpeg",
    },
    {
      name: "ChatGPT for SEO Content",
      image: "/services/seo-tools/chatgpt.png",
    },
    {
      name: "Google Data Studio",
      image: "/services/seo-tools/datastudio.png",
    },
  ];

  // Performance snapshots
  const performanceStats = [
    { result: "+300% organic traffic in 90 days", client: "SaaS Company" },
    { result: "From page 5 to top 3 in 2 months", client: "E-commerce Site" },
    { result: "50+ high DA backlinks in 3 weeks", client: "Tech Startup" },
  ];

  return (
    <>
      <Helmet>
        <title>SEO Services | Realm by Rook - Outrank and Outperform</title>
        <meta
          name="description"
          content="Boost your search rankings with data-driven SEO strategies. Keyword research, technical fixes, and high-authority link building."
        />
        <meta
          name="keywords"
          content="SEO services, keyword research, technical SEO, link building, search rankings"
        />
      </Helmet>
      <main className="min-h-screen pt-32 pb-16">
        <div className="realm-container">
          <ServiceBreadcrumb serviceName="SEO" serviceUrl="/services/seo" />

          {/* Hero Section */}
          <section className="py-16 md:py-24">
            <div className="max-w-4xl">
              <h1 className="realm-headline mb-6">
                Outrank. Outperform. Own Search.
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-realm-darkgray">
                We don't guess SEO. We engineer it with data, content, and
                strategy.
              </p>
              <Button
                onClick={() => setIsContactOpen(true)}
                className="realm-button flex items-center gap-2"
              >
                Boost My Rankings <ArrowRight size={16} />
              </Button>
            </div>
          </section>

          <div className="w-full my-12">
            <img
              src="/services/seo2.png"
              alt="Web and App Development Illustration"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>


          {/* Why SEO with Realm */}
          <section className="py-16 border-t border-realm-lightgray">
            <h2 className="text-3xl font-display font-bold mb-12">
              Why SEO with Realm?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seoServices.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 bg-realm-black text-white rounded-full flex items-center justify-center">
                    <Check size={16} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-realm-darkgray">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our SEO Process */}
          <section className="py-16 border-t border-realm-lightgray">
            <h2 className="text-3xl font-display font-bold mb-12">
              Our SEO Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {seoProcess.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 bg-realm-black text-white flex items-center justify-center font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.name}</h3>
                    <p className="text-realm-darkgray">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tools We Use */}
          <section className="py-16 border-t border-realm-lightgray">
            <h2 className="text-3xl font-display font-bold mb-12">
              Tools We Use
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
              {seoTools.map((tool, index) => (
              <div
                key={index}
                className="border border-realm-lightgray p-4 hover:border-realm-black transition-all duration-300 flex flex-col items-center justify-center h-24"
              >
                <img
                src={tool.image}
                alt={`${tool.name} logo`}
                className="w-8 h-8 mb-2 object-contain"
                loading="lazy"
                />
                <h3 className="font-bold text-center">{tool.name}</h3>
              </div>
              ))}
            </div>
          </section>

          {/* AI in SEO */}
          <section className="py-16 border-t border-realm-lightgray">
            <h2 className="text-3xl font-display font-bold mb-8">AI in SEO</h2>
            <div className="bg-realm-lightgray p-8">
              <p className="text-lg mb-0">
                We use LLMs to generate optimized content drafts, structured
                snippets, meta descriptions, and run content gap analysis faster
                than manual teams.
              </p>
            </div>
          </section>

          {/* Performance Snapshots */}
          <section className="py-16 border-t border-realm-lightgray">
            <h2 className="text-3xl font-display font-bold mb-12">
              Performance Snapshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {performanceStats.map((stat, index) => (
                <div
                  key={index}
                  className="border border-realm-lightgray p-6 hover:border-realm-black transition-all duration-300"
                >
                  <p className="text-2xl font-bold mb-2">"{stat.result}"</p>
                  <p className="text-realm-darkgray">{stat.client}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SEO Packages */}
          <section className="py-16 border-t border-realm-lightgray">
            <h2 className="text-3xl font-display font-bold mb-12">
              SEO Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Starter", "Growth", "Dominate"].map((pkg, index) => (
                <div
                  key={index}
                  className="border border-realm-lightgray p-8 hover:border-realm-black transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4">{pkg}</h3>
                  <p className="text-realm-darkgray mb-6">
                    Custom SEO solution for{" "}
                    {index === 0
                      ? "small businesses"
                      : index === 1
                      ? "growing companies"
                      : "market leaders"}
                    .
                  </p>
                  <Button
                  onClick={() => setIsContactOpen(true)}
                    variant={index === 2 ? "default" : "outline"}
                    className={`${
                      index === 2
                        ? "realm-button"
                        : "bg-transparent border-realm-black text-realm-black hover:bg-realm-black hover:text-white"
                    } w-full`}
                  >
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section
            id="seo-contact-section"
            className="py-16 border-t border-realm-lightgray text-center"
          >
            <h2 className="text-3xl font-display font-bold mb-6">
              Your Competitors Are Ranking Higher. Let's Change That.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                onClick={() => setIsContactOpen(true)}
                className="realm-button flex items-center gap-2"
              >
                Schedule SEO Audit <ArrowRight size={16} />
              </Button>
              {/* <Button variant="outline" className="realm-button bg-transparent border-realm-black text-realm-black hover:bg-realm-black hover:text-white flex items-center gap-2">
                Talk to SEO Strategist
              </Button> */}
            </div>
          </section>
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
      </main>
    </>
  );
};

export default SEOService;
