
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'What We Do?',
      links: [
        { name: 'Branding', path: '/services/branding' },
        { name: 'UI/UX Design', path: '/services/ui-ux-design' },
        { name: 'Web/App Development', path: '/services/web-app-development' },
        { name: 'SEO', path: '/services/seo' },
        { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
        { name: 'AI Business Automation', path: '/services/ai-business-automation' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Impact Studies', path: '/case-studies' },
        { name: 'Who We Partner With', path: '/who-we-partner-with' },
        { name: 'Brand Kit', path: '/brand-kit' },
        { name: 'Partners & Affiliates', path: '/partners' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Insights', path: '/resources/insights' },
        { name: 'Press Releases', path: '/resources/press-releases' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms & Conditions', path: '/terms-and-conditions' },
        { name: 'Refunds Policy', path: '/refunds-policy' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Behance', url: 'https://behance.net' },
  ];

  return (
    <footer className="bg-realm-black text-white pt-16 pb-8">
      <div className="realm-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          {/* Realm by Rook column */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-display font-bold tracking-tight mb-4">REALM<span className="font-normal">by</span>ROOK</h2>
            <p className="mb-6 text-gray-300 max-w-sm">
              We blend creativity and technology to build experiences that inspire action.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-medium mb-4 text-sm text-gray-400">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="hover:text-gray-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and address */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <p className="text-sm text-gray-500">
              © {currentYear} Realm by Rook. All rights reserved.
            </p>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p>Melbourne • Sydney • New York</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
