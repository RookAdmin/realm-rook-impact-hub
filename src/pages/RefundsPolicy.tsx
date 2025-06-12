
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

const RefundsPolicy = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <>
      <Helmet>
        <title>Refunds & Cancellation Policy | Realm by Rook</title>
        <meta name="description" content="Understand Realm by Rook's refund and cancellation policies. Clear guidelines on project cancellation, refund eligibility, and dispute resolution." />
        <meta name="keywords" content="refunds policy, cancellation policy, refund eligibility, project cancellation, dispute resolution" />
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
                  <BreadcrumbPage>Refunds & Cancellation Policy</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Our Policies. Your Peace of Mind.</h1>
              <div className="w-24 h-1 bg-realm-black mx-auto mb-6"></div>
              <p className="text-realm-darkgray text-lg">Last Updated: {formattedDate}</p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-8 text-center text-realm-darkgray">We are committed to your satisfaction. Here's how our refunds and cancellation process works.</p>

                <div className="space-y-10">
                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">1. Project Nature</h2>
                    <p className="text-realm-darkgray leading-relaxed">All services are project-based and tailored. We do not offer recurring subscriptions.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">2. Refund Eligibility</h2>
                    <p className="text-realm-darkgray leading-relaxed">Partial refunds are available if a project is cancelled before meaningful work has begun. Refunds are not provided for completed milestones.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">3. Cancellation Policy</h2>
                    <p className="text-realm-darkgray leading-relaxed">Either party may cancel via written notice. Work completed until date of cancellation will be billed, and deliverables will be handed over accordingly.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">4. Exceptions & Dispute Resolution</h2>
                    <p className="text-realm-darkgray leading-relaxed">If a client is unsatisfied despite fair effort and the project hasn't met the defined scope, we offer a review meeting. Possible outcomes: refinement, additional revisions, or partial refund.</p>
                  </section>

                  <section>
                    <h2 className="text-3xl font-display font-bold mb-6 text-realm-black">5. Refund Timeline</h2>
                    <p className="text-realm-darkgray leading-relaxed">Refunds, if approved, will be processed within 7–10 business days to the original payment method.</p>
                  </section>
                </div>
                
                <div className="mt-16 p-8 bg-realm-lightgray rounded-lg">
                  <h3 className="text-2xl font-display font-bold mb-4 text-realm-black">Need assistance or clarity?</h3>
                  <p className="text-realm-darkgray">Reach us directly at <a href="mailto:hlo@realmrook.com" className="text-realm-black hover:underline font-medium">hlo@realmrook.com</a></p>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-20 py-16 border-t border-realm-lightgray text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-3xl font-display font-bold mb-6 text-realm-black">Questions About Our Process?</h3>
                  <p className="mb-8 text-realm-darkgray text-lg">We're transparent about how we work. Contact us if you have any questions about our policies.</p>
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

export default RefundsPolicy;
