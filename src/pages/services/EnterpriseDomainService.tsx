import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Shield,
  Layers,
  Users,
  BarChart,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import { Helmet } from "react-helmet-async";

// Animation variants
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

const EnterpriseDomainService = () => {
  // Enterprise benefits
  const benefits = [
    {
      title: "Centralized Control",
      description:
        "Manage all your domains from a single, secure dashboard with role-based access controls.",
      icon: <Layers size={24} />,
    },
    {
      title: "Enhanced Security",
      description:
        "Enterprise-grade protection against domain hijacking, DNS attacks, and phishing attempts.",
      icon: <Shield size={24} />,
    },
    {
      title: "Scalable Solutions",
      description:
        "Infrastructure that grows with your business, from dozens to thousands of domains.",
      icon: <BarChart size={24} />,
    },
    {
      title: "Team Collaboration",
      description:
        "Collaborative tools for cross-functional teams to manage domains efficiently.",
      icon: <Users size={24} />,
    },
    {
      title: "Advanced Monitoring",
      description:
        "24/7 monitoring of domain health, expiration dates, and security vulnerabilities.",
      icon: <Globe size={24} />,
    },
    {
      title: "Compliance Assurance",
      description:
        "Stay compliant with industry regulations and internal governance policies.",
      icon: <Lock size={24} />,
    },
  ];

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

  // Enterprise solutions
  const solutions = [
    {
      title: "Portfolio Management",
      description:
        "Comprehensive management of your entire domain portfolio with strategic optimization.",
    },
    {
      title: "Security Services",
      description:
        "Advanced security protocols to protect your valuable domain assets against threats.",
    },
    {
      title: "Global DNS Management",
      description:
        "High-performance, redundant DNS infrastructure for enterprise-level reliability.",
    },
    {
      title: "Acquisition & Divestiture",
      description:
        "Strategic guidance for domain acquisition, sales, and portfolio restructuring.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise Domain Management Services | Secure Portfolio Management at Scale</title>
        <meta
          name="description"
          content="Comprehensive enterprise domain management for large-scale portfolios. Secure DNS infrastructure, domain security, compliance management, and strategic portfolio optimization for global organizations."
        />
        <meta
          name="keywords"
          content="enterprise domain management, domain portfolio management, DNS management, domain security, domain compliance, corporate domain management, multi-domain management, domain governance, ICANN compliance"
        />
        <meta property="og:title" content="Enterprise Domain Management | Secure & Scalable Solutions for Global Brands" />
        <meta property="og:description" content="Manage thousands of domains with confidence. Enterprise-grade security, compliance, and strategic management for your domain portfolio." />
      </Helmet>
      <main className="min-h-screen pt-20">
        {/* <div className="bg-realm-black text-white">
          <div className="container max-w-12xl mx-auto px-1 sm:px-4 lg:px-4">
            <ServiceBreadcrumb
              serviceName="Enterprise Domain Management"
              serviceUrl="/services/enterprise-domain-management"
            />
          </div>
        </div> */}

        {/* Hero Section */}
        <section className="bg-realm-black text-white">
          <div className="realm-container">
            <div className="relative z-20 flex flex-col md:flex-row items-start justify-between gap-12">
              {/* Left side: Main hero content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="flex-1 min-w-0"
              >
                <h1 className="realm-headline mb-6 pt-24">
                  Enterprise Domain Management
                </h1>
                <p className="realm-subheadline text-white/90 mb-10">
                  Secure, scalable, and strategic management for enterprise
                  domain portfolios.
                </p>

                <Link to="/contact">
                  <Button className="realm-button bg-white text-realm-black rounded-full hover:bg-realm-lightgray">
                    Request Enterprise Consultation
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </motion.div>

              {/* Right side: Spline iframe (hidden on mobile) */}
              <div className="flex-1 min-w-0 hidden md:block">
                <div className="w-full max-w-xl aspect-square overflow-hidden shadow-lg">
                  <iframe
                    src="https://my.spline.design/chips-eggOliVzaHMPbldEhNQ8GS21/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    style={{ display: "block" }}
                    title="3D Spline Visual"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Benefits */}
        <section className="py-16 md:py-24">
          <div className="realm-container">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
                Enterprise-Grade Benefits
              </h2>
              <p className="text-center text-realm-darkgray mb-16 max-w-3xl mx-auto">
                Our enterprise domain management solutions provide the security,
                control, and scalability that large organizations require.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 g8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="p-6 border border-realm-lightgray hover:border-realm-black transition-all duration-300"
                    variants={fadeIn}
                    whileHover={{ y: -5 }}
                  >
                    <div className="realm-icon-container mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-display font-medium mb-2 text-center">
                      {benefit.title}
                    </h3>
                    <p className="text-realm-darkgray text-center">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section className="py-16 md:py-24 bg-realm-lightgray">
          <div className="realm-container">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
                Comprehensive Enterprise Solutions
              </h2>
              <p className="text-center text-realm-darkgray mb-16 max-w-3xl mx-auto">
                Tailored solutions designed for the unique challenges of
                enterprise-scale domain management.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solutions.map((solution, index) => (
                  <Card
                    key={index}
                    className="p-8 border border-realm-lightgray hover:border-realm-black transition-all duration-300"
                  >
                    <h3 className="text-2xl font-display font-medium mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-realm-darkgray">
                      {solution.description}
                    </p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Case Study Preview */}
        <section className="py-16 md:py-24">
          <div className="realm-container">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="border border-realm-black p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Enterprise Success Stories
                </h2>
                <p className="text-realm-darkgray mb-8 max-w-2xl mx-auto">
                  See how our enterprise domain management solutions have helped
                  Fortune 500 companies secure their digital assets and
                  streamline operations.
                </p>
                <Link to="/case-studies">
                  <Button className="realm-button rounded-full">
                    View Enterprise Case Studies
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
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
                Ready to optimize your domain portfolio?
              </h2>

              <p className="text-white/80 mb-10">
                Our enterprise domain specialists will create a tailored
                solution for your organization's unique needs.
              </p>

              <Link to="/contact">
                <Button className="realm-button bg-white text-realm-black rounded-full hover:bg-realm-lightgray">
                  Schedule an Enterprise Consultation
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EnterpriseDomainService;
