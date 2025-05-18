
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './public/logo-white.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'What We Do?',
      titleLink: '/services',
      links: [
        { name: 'Branding', path: '/services/branding' },
        { name: 'UI/UX Design', path: '/services/ui-ux-design' },
        { name: 'Web/App Development', path: '/services/web-app-development' },
        { name: 'SEO', path: '/services/seo' },
        { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
        { name: 'AI Business Automation', path: '/services/ai-business-automation' },
        { name: 'Domain Name Consultation', path: '/services/domain-name-consultation' },
        { name: 'Enterprise Domain Management', path: '/services/enterprise-domain-management' },
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
    { name: 'Instagram', url: 'https://www.instagram.com/realmrook?igsh=NzFkM2g3NmZzcHp0' },
    // { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/realmco/' },
    // { name: 'Behance', url: 'https://behance.net' },
  ];

  return (
    <footer className="bg-realm-black text-white pt-16 pb-8">
      <div className="realm-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          {/* Realm by Rook column */}
          <div className="lg:col-span-2">
            <Logo variant="light" className="mb-4 w-32" />
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

          {/* What We Do? column */}
          <div>
            <h3 className="font-medium mb-4 text-sm text-gray-400">
              <Link to="/services" className="hover:text-white transition-colors">
                What We Do?
              </Link>
            </h3>
            <ul className="space-y-3">
              {footerLinks[0].links.map((link) => (
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

          {/* Company column */}
          <div>
            <h3 className="font-medium mb-4 text-sm text-gray-400">
              {footerLinks[1].title}
            </h3>
            <ul className="space-y-3">
              {footerLinks[1].links.map((link) => (
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

          {/* Resources and Legal columns */}
          <div>
            {/* Resources section */}
            <div className="mb-8">
              <h3 className="font-medium mb-4 text-sm text-gray-400">
                {footerLinks[2].title}
              </h3>
              <ul className="space-y-3">
                {footerLinks[2].links.map((link) => (
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

            {/* Legal section */}
            <div>
              <h3 className="font-medium mb-4 text-sm text-gray-400">
                {footerLinks[3].title}
              </h3>
              <ul className="space-y-3">
                {footerLinks[3].links.map((link) => (
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
          </div>
        </div>

        {/* Copyright and address */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <p className="text-sm text-gray-500">
              © {currentYear} Realm by Rook. All rights reserved.
            </p>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p>UK • UAE • India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
