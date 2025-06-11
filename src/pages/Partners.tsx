import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Partners = () => {
  // Partner logo data organized by category
  const partnerCategories = [
    {
      title: "Technology Partners",
      partners: [
        { name: "Microsoft", logo: "/partner-logo/micro.jpg" },
        { name: "AWS", logo: "/partner-logo/aws.png"},
        { name: "Razorpay", logo: "/partner-logo/razorpay.png" },
        { name: "Google Cloud", logo: "/partner-logo/gcloud.png" },
      ]
    },
    {
      title: "Strategic Collaborators",
      partners: [
        { name: "Hlo", logo: "/partner-logo/hlo.jpg" },
        { name: "Myprobuddy", logo: "/partner-logo/mypro.avif"},
        { name: "Hlo Legal+", logo: "/partner-logo/hlolegal.png"},
        { name: "Rook", logo: "/partner-logo/rook.png" },
      ]
    },
    {
      title: "Affiliate Networks",
      partners: [
        { name: "Zoho", logo: "/partner-logo/zoho.png"},
        { name: "Namecheap", logo: "/partner-logo/namecheap.jpg"},
        { name: "Wati", logo: "/partner-logo/wati.png" },
        { name: "Madgicx", logo: "/partner-logo/madg1.jpg" },
      ]
    },
  ];

  return (
    <>
      <Helmet>
        <title>Partners | Realm by Rook - Technology & Strategic Partnerships</title>
        <meta name="description" content="Discover our technology partners, strategic collaborators, and affiliate networks. We work with industry leaders to deliver exponential value to our clients." />
        <meta name="keywords" content="technology partners, strategic partnerships, affiliate networks, business collaborations, industry partnerships" />
      </Helmet>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="realm-section bg-background">
          <div className="realm-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="realm-headline mb-4">Who We Partner With?</h1>
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
                      // href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center justify-center p-6 bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-full h-16 flex items-center justify-center mb-2">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`} 
                          className="h-20 w-auto max-w-full realm-client-logo transition-all duration-300"
                        />
                      </div>
                      {/* <p className="text-realm-gray text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Official Partner
                      </p> */}
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
    </>
  );
};

export default Partners;
