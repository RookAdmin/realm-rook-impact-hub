
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

const RefundsPolicy = () => {
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
              <BreadcrumbPage>Refunds & Cancellation Policy</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold">Our Policies. Your Peace of Mind.</h1>
          <div className="w-16 h-1 bg-realm-black mt-4 mb-6"></div>
          <p className="text-realm-darkgray">Last Updated: {formattedDate}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-3xl">
          <p className="text-lg">We are committed to your satisfaction. Here's how our refunds and cancellation process works.</p>

          <h2 className="text-2xl font-display font-bold mt-10 mb-4">1. Project Nature</h2>
          <p>All services are project-based and tailored. We do not offer recurring subscriptions.</p>

          <h2 className="text-2xl font-display font-bold mt-10 mb-4">2. Refund Eligibility</h2>
          <p>Partial refunds are available if a project is cancelled before meaningful work has begun. Refunds are not provided for completed milestones.</p>

          <h2 className="text-2xl font-display font-bold mt-10 mb-4">3. Cancellation Policy</h2>
          <p>Either party may cancel via written notice. Work completed until date of cancellation will be billed, and deliverables will be handed over accordingly.</p>

          <h2 className="text-2xl font-display font-bold mt-10 mb-4">4. Exceptions & Dispute Resolution</h2>
          <p>If a client is unsatisfied despite fair effort and the project hasn't met the defined scope, we offer a review meeting. Possible outcomes: refinement, additional revisions, or partial refund.</p>

          <h2 className="text-2xl font-display font-bold mt-10 mb-4">5. Refund Timeline</h2>
          <p>Refunds, if approved, will be processed within 7–10 business days to the original payment method.</p>
          
          <div className="mt-12 border-t border-realm-lightgray pt-8">
            <h3 className="text-xl font-display font-bold">Need assistance or clarity?</h3>
            <p>Reach us directly at <a href="mailto:hlo@realmrook.com" className="text-realm-black hover:underline">hlo@realmrook.com</a></p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 py-12 border-t border-realm-lightgray">
          <div className="max-w-lg">
            <h3 className="text-2xl font-display font-bold mb-4">Questions About Our Process?</h3>
            <p className="mb-6 text-realm-darkgray">We're transparent about how we work. Contact us if you have any questions about our policies.</p>
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

export default RefundsPolicy;
