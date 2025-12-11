"use client";
import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "/logo-white.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Artificial Intelligence",
      titleLink: "/services",
      links: [
        { name: "GEO", path: "/services/geo" },
        { name: "Agentica", path: "/services/agentica" },
        { name: "AI Agents Automation", path: "/services/ai-agents-automation" },
      ],
    },
    {
      title: "Digital",
      titleLink: "/services",
      links: [
        { name: "Web/App Development", path: "/services/web-app-development" },
        { name: "UI/UX Design", path: "/services/ui-ux-design" },
        { name: "Branding", path: "/services/branding" },
      ],
    },
    {
      title: "Growth",
      titleLink: "/services",
      links: [
        { name: "Social Media Marketing", path: "/services/social-media-marketing" },
        { name: "SEO", path: "/services/seo" },
        { name: "Domain Name Consultation", path: "/services/domain-name-consultation" },
        { name: "Enterprise Domain Management", path: "/services/enterprise-domain-management" },
      ],
    },
    {
      title: "Discover",
      links: [
        { name: "D2C Startups", path: "/discover/d2c-startups" },
        { name: "SaaS Startups", path: "/discover/saas-startups" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Impact Studies", path: "/case-studies" },
        { name: "Profit Pledge", path: "/profit-pledge" },
        { name: "Who We Partner With?", path: "/partners" },
        { name: "Careers", path: "/careers" },
        { name: "Brand Kit", path: "/brand-kit" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Insights", path: "/resources/insights" },
        { name: "Press Releases", path: "/resources/press-releases" },
        { name: "Podcasts", path: "/podcasts" },
        { name: "Utilities", path: "/utilities" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms & Conditions", path: "/terms-and-conditions" },
        { name: "Refunds Policy", path: "/refunds-policy" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/realmrook?igsh=NzFkM2g3NmZzcHp0",
    },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/realmco/" },
  ];

  return (
    <footer className="bg-realm-black text-white pt-16 pb-8">
      <div className="realm-container">
        {/* Main Footer Content - Optimized Layout */}
        <div className="pb-12">
          {/* Single Row: Logo + All Link Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-6 lg:gap-4">
            {/* Logo Column - Spans 2 columns */}
            <div className="lg:col-span-2">
              <img src={LogoImage} alt="Realm by Rook" className="mb-4 w-32" />
              <p className="mb-6 text-gray-300 max-w-sm text-sm leading-relaxed">
                We blend creativity and technology to build experiences that inspire action.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Artificial Intelligence */}
            <div>
              <h3 className="font-medium mb-4 text-sm text-gray-400 uppercase tracking-wide">
                <Link to={footerLinks[0].titleLink} className="hover:text-white transition-colors">
                  {footerLinks[0].title}
                </Link>
              </h3>
              <ul className="space-y-2.5">
                {footerLinks[0].links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Digital */}
            <div>
              <h3 className="font-medium mb-4 text-sm text-gray-400 uppercase tracking-wide">
                <Link to={footerLinks[1].titleLink} className="hover:text-white transition-colors">
                  {footerLinks[1].title}
                </Link>
              </h3>
              <ul className="space-y-2.5">
                {footerLinks[1].links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Growth */}
            <div>
              <h3 className="font-medium mb-4 text-sm text-gray-400 uppercase tracking-wide">
                <Link to={footerLinks[2].titleLink} className="hover:text-white transition-colors">
                  {footerLinks[2].title}
                </Link>
              </h3>
              <ul className="space-y-2.5">
                {footerLinks[2].links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Discover */}
            <div>
              <h3 className="font-medium mb-4 text-sm text-gray-400 uppercase tracking-wide">
                {footerLinks[3].title}
              </h3>
              <ul className="space-y-2.5">
                {footerLinks[3].links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-medium mb-4 text-sm text-gray-400 uppercase tracking-wide">
                {footerLinks[4].title}
              </h3>
              <ul className="space-y-2.5">
                {footerLinks[4].links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-medium mb-4 text-sm text-gray-400 uppercase tracking-wide">
                {footerLinks[5].title}
              </h3>
              <ul className="space-y-2.5">
                {footerLinks[5].links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-medium mb-4 text-sm text-gray-400 uppercase tracking-wide">
                {footerLinks[6].title}
              </h3>
              <ul className="space-y-2.5">
                {footerLinks[6].links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright and address */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-sm text-gray-500">
              © 2020 - {currentYear} Rook Ecom Private Limited |{" "}
              <a 
                href="https://rookhq.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                A Rook Venture
              </a>{" "}
              | All Rights Reserved.
            </p>
            <p className="text-xs text-gray-600 mt-1">We Grow Together</p>
          </div>
          <div className="text-sm text-gray-500">
            <p>UK • UAE • India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
