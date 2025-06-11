
import React from 'react';
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
    <main className="min-h-screen bg-white">
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
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold">We Respect Your Data. And Your Inbox.</h1>
          <div className="w-16 h-1 bg-realm-black mt-4 mb-6"></div>
          <p className="text-realm-darkgray">Last Updated: {formattedDate}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-3xl">
          <p className="text-lg">Realm by Rook values your privacy. This policy outlines what we collect, how we use it, and how we protect it.</p>

          <h2 className="text-2xl font-display font-bold mt-10 mb-4">1. What We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Name, email, and contact details via forms</li>
            <li>Project-related information</li>
            <li>Analytics data via cookies</li>
          </ul>

          <h2 className="text-2xl font-display font-bold mt-10 mb-4">2. How We Use It</h2>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>To communicate and collaborate on projects</li>
            <li>To improve our website and services</li>
            <li>To share occasional updates (only if you opt in)</li>
          </ul>

          <h2 className="text-2xl font-display font-bold mt-10 mb-4">3. Sharing of Data</h2>
          <p>We do not sell your data. We may share necessary data with third-party platforms like analytics tools, CRM, or payment gateways — only to serve you better.</p>

          <h2 className="text-2xl font-display font-bold mt-10 mb-4">4. Data Protection</h2>
          <p>Your data is secured with encrypted systems and limited access. We prioritize digital safety.</p>

          <h2 className="text-2xl font-display font-bold mt-10 mb-4">5. Cookies & Analytics</h2>
          <p>We use basic cookies to track site behavior and performance. You can control cookie permissions via your browser.</p>

          <h2 className="text-2xl font-display font-bold mt-10 mb-4">6. Your Rights</h2>
          <p>You can request access, updates, or deletion of your personal data by writing to <a href="mailto:hlo@realmrook.com" className="text-realm-black hover:underline">hlo@realmrook.com</a>.</p>

          <h2 className="text-2xl font-display font-bold mt-10 mb-4">7. Updates to This Policy</h2>
          <p>We may revise this policy periodically. The most current version will always be posted here.</p>
          
          <div className="mt-12 border-t border-realm-lightgray pt-8">
            <h3 className="text-xl font-display font-bold">Questions about your data?</h3>
            <p>Email us at <a href="mailto:hlo@realmrook.com" className="text-realm-black hover:underline">hlo@realmrook.com</a></p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 py-12 border-t border-realm-lightgray">
          <div className="max-w-lg">
            <h3 className="text-2xl font-display font-bold mb-4">Have Privacy Concerns?</h3>
            <p className="mb-6 text-realm-darkgray">We take your privacy seriously. Reach out to our team if you have any questions.</p>
            <Link to="/contact">
              <Button className="realm-button flex items-center space-x-2">
                <span>Contact Us</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
