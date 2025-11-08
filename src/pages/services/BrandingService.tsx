import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceBreadcrumb from "@/components/services/ServiceBreadcrumb";
import BrandingHero from "@/components/services/branding/BrandingHero";
import BrandingCapabilities from "@/components/services/branding/BrandingCapabilities";
import BrandingProcess from "@/components/services/branding/BrandingProcess";
import BrandingImpact from "@/components/services/branding/BrandingImpact";
import BrandingDifferentiators from "@/components/services/branding/BrandingDifferentiators";
import BrandingTestimonials from "@/components/services/branding/BrandingTestimonials";
import BrandingContactForm from "@/components/services/branding/BrandingContactForm";
import { Helmet } from "react-helmet-async";
import FinalCta from '@/components/home/FinalCta';

const BrandingService = () => {
  return (
    <>
      <Helmet>
        <title>Strategic Branding Services | Brand Identity Design, Logo & Messaging by Experts</title>
        <meta
          name="description"
          content="Build a memorable brand identity that drives business growth. Expert brand strategy, logo design, visual identity, and messaging that resonates with your audience and stands out in the market."
        />
        <meta
          name="keywords"
          content="branding services, brand identity design, logo design agency, brand strategy, brand messaging, visual identity, brand guidelines, rebranding services, corporate branding, startup branding"
        />
        <meta property="og:title" content="Strategic Branding & Brand Identity Design Services | Realm by Rook" />
        <meta property="og:description" content="Create a powerful brand identity with expert strategy, design, and messaging. Stand out from competitors and connect with your audience." />
      </Helmet>
      <main className="min-h-screen pt-20">
        <div className="realm-container mb-6 pt-20">
          {/* <ServiceBreadcrumb
            serviceName="Branding"
            serviceUrl="/services/branding"
          /> */}
        </div>

        <div>
          <BrandingHero />
          <BrandingCapabilities />
          <BrandingProcess />
          <BrandingImpact />
          <BrandingDifferentiators />
          <BrandingTestimonials />
          {/* <BrandingContactForm /> */}
           {/* Final CTA Section */}
          <FinalCta />
        </div>

        {/* <div className="py-16 pl-12 text-center">
          <Link to="/">
            <Button
              variant="outline"
              className="realm-button bg-transparent border-realm-black text-realm-black hover:bg-realm-black hover:text-white flex items-center gap-2"
            >
              <ArrowLeft size={16} /> Back to Homepage
            </Button>
          </Link>
        </div> */}
      </main>
    </>
  );
};

export default BrandingService;
