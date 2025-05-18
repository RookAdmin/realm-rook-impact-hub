
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Partners = () => {
  // Partner logo data organized by category
  const partnerCategories = [
    {
      title: "Technology Partners",
      partners: [
        { name: "AWS", logo: "/placeholder.svg", url: "https://aws.amazon.com" },
        { name: "Stripe", logo: "/placeholder.svg", url: "https://stripe.com" },
        { name: "Figma", logo: "/placeholder.svg", url: "https://figma.com" },
        { name: "Vercel", logo: "/placeholder.svg", url: "https://vercel.com" },
      ]
    },
    {
      title: "Strategic Collaborators",
      partners: [
        { name: "ProductHunt", logo: "/placeholder.svg", url: "https://producthunt.com" },
        { name: "YCombinator", logo: "/placeholder.svg", url: "https://ycombinator.com" },
        { name: "TechStars", logo: "/placeholder.svg", url: "https://techstars.com" },
        { name: "Adobe", logo: "/placeholder.svg", url: "https://adobe.com" },
      ]
    },
    {
      title: "Affiliate Networks",
      partners: [
        { name: "ReferralCandy", logo: "/placeholder.svg", url: "https://referralcandy.com" },
        { name: "ShareASale", logo: "/placeholder.svg", url: "https://shareasale.com" },
        { name: "Impact", logo: "/placeholder.svg", url: "https://impact.com" },
        { name: "PartnerStack", logo: "/placeholder.svg", url: "https://partnerstack.com" },
      ]
    },
    {
      title: "Platform Integrations",
      partners: [
        { name: "Shopify", logo: "/placeholder.svg", url: "https://shopify.com" },
        { name: "Salesforce", logo: "/placeholder.svg", url: "https://salesforce.com" },
        { name: "HubSpot", logo: "/placeholder.svg", url: "https://hubspot.com" },
        { name: "Slack", logo: "/placeholder.svg", url: "https://slack.com" },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="realm-section bg-background">
        <div className="realm-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="realm-headline mb-4">Built with Trusted Collaborations</h1>
            <p className="realm-subheadline">
              We partner with industry leaders, innovative platforms, and strategic affiliates to deliver exponential value to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="realm-section bg-muted">
        <div className="realm-container">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider text-center text-realm-gray font-medium mb-16">Trusted by Ecosystem Leaders</p>
          </div>
          
          {partnerCategories.map((category) => (
            <div key={category.title} className="mb-16">
              <h2 className="text-2xl font-display font-medium mb-8">{category.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {category.partners.map((partner) => (
                  <a 
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center p-6 bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-full h-16 flex items-center justify-center mb-4">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="h-12 w-auto max-w-full realm-client-logo transition-all duration-300"
                      />
                    </div>
                    <p className="text-realm-gray text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Official Partner
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Affiliate Program Section */}
      <section className="realm-section bg-realm-black text-white">
        <div className="realm-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Want to Partner with Realm?</h2>
            <p className="text-lg mb-8">
              Join our affiliate or technology partnership program to grow with us.
            </p>
            <Button asChild variant="secondary" size="lg" className="font-medium">
              <Link to="/contact">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
