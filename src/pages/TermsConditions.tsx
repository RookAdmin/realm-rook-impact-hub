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

const TermsConditions = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Realm by Rook - Service Agreement</title>
        <meta name="description" content="Read Realm by Rook's terms and conditions. Understand our service agreements, client responsibilities, and business terms for working together." />
        <meta name="keywords" content="terms and conditions, service agreement, business terms, client agreement, legal terms" />
      </Helmet>
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
                <BreadcrumbPage>Terms & Conditions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold">Terms That Build Trust</h1>
            <div className="w-16 h-1 bg-realm-black mt-4 mb-6"></div>
            <p className="text-realm-darkgray">Last Updated: {formattedDate}</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-3xl">
            <p className="text-lg">Welcome to Realm by Rook. By accessing our website or engaging with our services, you agree to the terms outlined below.</p>

            <h2 className="text-2xl font-display font-bold mt-10 mb-4">1. Introduction</h2>
            <p>These Terms and Conditions govern your use of the Realm by Rook website and services. By using our services, you confirm that you accept these terms.</p>

            <h2 className="text-2xl font-display font-bold mt-10 mb-4">2. Services We Offer</h2>
            <p>Realm by Rook provides:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Branding and identity design</li>
              <li>UI/UX design for digital platforms</li>
              <li>Web and mobile app development</li>
              <li>Search Engine Optimization (SEO)</li>
            </ul>

            <h2 className="text-2xl font-display font-bold mt-10 mb-4">3. Client Responsibilities</h2>
            <p>Clients agree to provide timely feedback, assets, and payments. Collaboration is key to successful delivery.</p>

            <h2 className="text-2xl font-display font-bold mt-10 mb-4">4. Intellectual Property</h2>
            <p>All custom designs are owned by the client upon full payment. Realm retains rights to internal systems, codebases, and proprietary frameworks unless otherwise agreed.</p>

            <h2 className="text-2xl font-display font-bold mt-10 mb-4">5. Payment Terms</h2>
            <p>Projects are billed in phases/milestones. Delayed payments may result in halted progress. Payment methods will be outlined in the proposal.</p>

            <h2 className="text-2xl font-display font-bold mt-10 mb-4">6. Project Timeline</h2>
            <p>Timelines are estimates. Delays caused by client inaction may extend deadlines. We strive for prompt, high-quality delivery.</p>

            <h2 className="text-2xl font-display font-bold mt-10 mb-4">7. Termination</h2>
            <p>Either party may terminate the project with written notice. Work completed until date of termination will be billed accordingly.</p>

            <h2 className="text-2xl font-display font-bold mt-10 mb-4">8. Limitation of Liability</h2>
            <p>We're not liable for indirect damages, third-party platform issues, or force majeure events.</p>

            <h2 className="text-2xl font-display font-bold mt-10 mb-4">9. Changes to These Terms</h2>
            <p>We reserve the right to update terms. Continued use after updates implies acceptance.</p>

            <h2 className="text-2xl font-display font-bold mt-10 mb-4">10. Governing Law</h2>
            <p>These terms are governed by the laws of India.</p>

            <div className="mt-12 border-t border-realm-lightgray pt-8">
              <h3 className="text-xl font-display font-bold">Questions?</h3>
              <p>Email us at <a href="mailto:hlo@realmrook.com" className="text-realm-black hover:underline">hlo@realmrook.com</a></p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 py-12 border-t border-realm-lightgray">
            <div className="max-w-lg">
              <h3 className="text-2xl font-display font-bold mb-4">Need More Information?</h3>
              <p className="mb-6 text-realm-darkgray">Our team is ready to answer any questions you might have about working with Realm by Rook.</p>
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
    </>
  );
};

export default TermsConditions;
