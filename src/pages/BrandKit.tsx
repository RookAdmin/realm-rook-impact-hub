
import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import ColorTypography from '@/components/brand-kit/ColorTypography';
import BrandAssets from '@/components/brand-kit/BrandAssets';
import DosDonts from '@/components/brand-kit/DosDonts';
import Permissions from '@/components/brand-kit/Permissions';
import CtaSection from '@/components/CtaSection';

const BrandKit = () => {
  return (
    <main>
      <PageHeader 
        title="Use Our Brand with Precision. Build Trust with Every Pixel." 
        isLarge={true}
      />
      
      <section className="realm-section border-b border-realm-lightgray">
        <div className="realm-container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display font-bold mb-6">Brand Kit Overview</h2>
            <p className="text-lg mb-6">
              Welcome to the official Realm by Rook brand kit. We've created this resource to
              ensure our brand is represented consistently across all platforms and media.
            </p>
            <p className="text-lg mb-6">
              Whether you're a partner, media outlet, or collaborator, this guide provides everything
              you need to use our brand assets correctly.
            </p>
            <p className="text-lg">
              By following these guidelines, you help us maintain the strength and integrity of
              our brand identity while creating a cohesive experience for our audience.
            </p>
          </div>
        </div>
      </section>
      
      <ColorTypography />
      <BrandAssets />
      <DosDonts />
      <Permissions />
      
      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container text-center">
          <h2 className="text-2xl font-display font-bold mb-6">Need Something Else?</h2>
          <p className="text-lg mb-8">
            If you require additional assets or have specific questions about our brand usage,
            don't hesitate to reach out.
          </p>
          <a 
            href="mailto:hlo@realmrook.com" 
            className="realm-button inline-flex items-center"
          >
            Contact Us
          </a>
        </div>
      </section>

      <CtaSection />
    </main>
  );
};

export default BrandKit;
