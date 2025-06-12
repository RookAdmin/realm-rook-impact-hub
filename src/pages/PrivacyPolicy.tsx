
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Realm by Rook - Data Protection & Privacy</title>
        <meta name="description" content="Learn how Realm by Rook protects your data and respects your privacy. Our comprehensive privacy policy covers data collection, usage, and protection practices." />
        <meta name="keywords" content="privacy policy, data protection, privacy practices, data security, GDPR compliance" />
      </Helmet>
      <main className="min-h-screen bg-white">
        {/* Add proper spacing from navbar */}
        <div className="pt-24 md:pt-32">
          <div className="realm-container py-8">
            {/* Breadcrumb Navigation */}
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">We Respect Your Data. And Your Inbox.</h1>
              <div className="w-24 h-1 bg-realm-black mx-auto mb-6"></div>
              <p className="text-realm-darkgray text-lg">Last Updated: {formattedDate}</p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-8 text-center text-realm-darkgray">Realm by Rook values your privacy. This policy outlines what we collect, how we use it, and how we protect it.</p>

                <div className="space-y-10">
                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">1. What We Collect</h2>
                    <ul className="list-disc pl-6 space-y-3 text-realm-darkgray">
                      <li>Name, email, and contact details via forms</li>
                      <li>Project-related information</li>
                      <li>Analytics data via cookies</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">2. How We Use It</h2>
                    <ul className="list-disc pl-6 space-y-3 text-realm-darkgray">
                      <li>To communicate and collaborate on projects</li>
                      <li>To improve our website and services</li>
                      <li>To share occasional updates (only if you opt in)</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">3. Sharing of Data</h2>
                    <p className="text-realm-darkgray leading-relaxed">We do not sell your data. We may share necessary data with third-party platforms like analytics tools, CRM, or payment gateways — only to serve you better.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">4. Data Protection</h2>
                    <p className="text-realm-darkgray leading-relaxed">Your data is secured with encrypted systems and limited access. We prioritize digital safety.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">5. Cookies & Analytics</h2>
                    <p className="text-realm-darkgray leading-relaxed">We use basic cookies to track site behavior and performance. You can control cookie permissions via your browser.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">6. Your Rights</h2>
                    <p className="text-realm-darkgray leading-relaxed">You can request access, updates, or deletion of your personal data by writing to <a href="mailto:hlo@realmrook.com" className="text-realm-black hover:underline font-medium">hlo@realmrook.com</a>.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">7. Updates to This Policy</h2>
                    <p className="text-realm-darkgray leading-relaxed">We may revise this policy periodically. The most current version will always be posted here.</p>
                  </section>
                </div>
                
                <div className="mt-16 p-8 bg-realm-lightgray rounded-lg">
                  <h3 className="text-2xl font-display font-bold mb-4 text-realm-black">Questions about your data?</h3>
                  <p className="text-realm-darkgray">Email us at <a href="mailto:hlo@realmrook.com" className="text-realm-black hover:underline font-medium">hlo@realmrook.com</a></p>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-20 py-16 border-t border-realm-lightgray text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-3xl font-display font-bold mb-6 text-realm-black">Have Privacy Concerns?</h3>
                  <p className="mb-8 text-realm-darkgray text-lg">We take your privacy seriously. Reach out to our team if you have any questions.</p>
                  <Link to="/contact">
                    <Button className="realm-button flex items-center space-x-2 mx-auto">
                      <span>Contact Us</span>
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
