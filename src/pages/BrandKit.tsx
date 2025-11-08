import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/common/PageHeaderBrand';
import ColorTypography from '@/components/brand-kit/ColorTypography';
import BrandAssets from '@/components/brand-kit/BrandAssets';
import DosDonts from '@/components/brand-kit/DosDonts';
import Permissions from '@/components/brand-kit/Permissions';
import CtaSection from '@/components/CtaSection';

const BrandKit = () => {
  return (
    <>
      <Helmet>
        <title>Brand Kit & Guidelines | Download Official Logos, Colors, Typography & Assets</title>
        <meta name="description" content="Official Realm by Rook brand kit. Download high-resolution logos, color palettes, typography guidelines, and brand assets. Ensure consistent, professional brand representation in all communications." />
        <meta name="keywords" content="brand kit download, brand guidelines, logo download, brand assets, brand identity guidelines, typography guide, color palette, brand standards, press kit, media kit" />
        <meta property="og:title" content="Realm by Rook Brand Kit | Official Brand Assets & Guidelines" />
        <meta property="og:description" content="Download official brand assets, logos, and guidelines. Ensure consistent brand representation with our comprehensive brand kit." />
      </Helmet>
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
        
        

        <CtaSection />
      </main>
    </>
  );
};

export default BrandKit;
