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

const BrandingService = () => {
  return (
    <>
      <Helmet>
        <title>
          Branding Services | Realm by Rook - Build Your Brand Identity
        </title>
        <meta
          name="description"
          content="Create a powerful brand identity with strategic branding services. From logo design to brand messaging, we craft impactful brands."
        />
        <meta
          name="keywords"
          content="branding services, brand identity, logo design, brand messaging, impactful brands"
        />
      </Helmet>
      <main className="min-h-screen pt-20">
        <div className="realm-container mb-6 pt-20">
          <ServiceBreadcrumb
            serviceName="Branding"
            serviceUrl="/services/branding"
          />
        </div>

        <div>
          <BrandingHero />
          <BrandingCapabilities />
          <BrandingProcess />
          <BrandingImpact />
          <BrandingDifferentiators />
          <BrandingTestimonials />
          {/* <BrandingContactForm /> */}
        </div>

        <div className="py-16 pl-12 text-center">
          <Link to="/">
            <Button
              variant="outline"
              className="realm-button bg-transparent border-realm-black text-realm-black hover:bg-realm-black hover:text-white flex items-center gap-2"
            >
              <ArrowLeft size={16} /> Back to Homepage
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default BrandingService;
