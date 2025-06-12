
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
                  <BreadcrumbPage>Terms & Conditions</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Terms That Build Trust</h1>
              <div className="w-24 h-1 bg-realm-black mx-auto mb-6"></div>
              <p className="text-realm-darkgray text-lg">Last Updated: {formattedDate}</p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-8 text-center text-realm-darkgray">Welcome to Realm by Rook. By accessing our website or engaging with our services, you agree to the terms outlined below.</p>

                <div className="space-y-10">
                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">1. Introduction</h2>
                    <p className="text-realm-darkgray leading-relaxed">These Terms and Conditions govern your use of the Realm by Rook website and services. By using our services, you confirm that you accept these terms.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">2. Services We Offer</h2>
                    <p className="text-realm-darkgray leading-relaxed mb-4">Realm by Rook provides:</p>
                    <ul className="list-disc pl-6 space-y-3 text-realm-darkgray">
                      <li>Branding and identity design</li>
                      <li>UI/UX design for digital platforms</li>
                      <li>Web and mobile app development</li>
                      <li>Search Engine Optimization (SEO)</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">3. Client Responsibilities</h2>
                    <p className="text-realm-darkgray leading-relaxed">Clients agree to provide timely feedback, assets, and payments. Collaboration is key to successful delivery.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">4. Intellectual Property</h2>
                    <p className="text-realm-darkgray leading-relaxed">All custom designs are owned by the client upon full payment. Realm retains rights to internal systems, codebases, and proprietary frameworks unless otherwise agreed.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">5. Payment Terms</h2>
                    <p className="text-realm-darkgray leading-relaxed">Projects are billed in phases/milestones. Delayed payments may result in halted progress. Payment methods will be outlined in the proposal.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">6. Project Timeline</h2>
                    <p className="text-realm-darkgray leading-relaxed">Timelines are estimates. Delays caused by client inaction may extend deadlines. We strive for prompt, high-quality delivery.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">7. Termination</h2>
                    <p className="text-realm-darkgray leading-relaxed">Either party may terminate the project with written notice. Work completed until date of termination will be billed accordingly.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">8. Limitation of Liability</h2>
                    <p className="text-realm-darkgray leading-relaxed">We're not liable for indirect damages, third-party platform issues, or force majeure events.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">9. Changes to These Terms</h2>
                    <p className="text-realm-darkgray leading-relaxed">We reserve the right to update terms. Continued use after updates implies acceptance.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">10. Governing Law</h2>
                    <p className="text-realm-darkgray leading-relaxed">These terms are governed by the laws of India.</p>
                  </section>
                </div>

                <div className="mt-16 p-8 bg-realm-lightgray rounded-lg">
                  <h3 className="text-2xl font-display font-bold mb-4 text-realm-black">Questions?</h3>
                  <p className="text-realm-darkgray">Email us at <a href="mailto:hlo@realmrook.com" className="text-realm-black hover:underline font-medium">hlo@realmrook.com</a></p>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-20 py-16 border-t border-realm-lightgray text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-3xl font-display font-bold mb-6 text-realm-black">Need More Information?</h3>
                  <p className="mb-8 text-realm-darkgray text-lg">Our team is ready to answer any questions you might have about working with Realm by Rook.</p>
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

export default TermsConditions;
