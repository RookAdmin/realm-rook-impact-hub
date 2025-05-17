
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Building, Shield, Globe } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import ImpactStudyCard from '@/components/impact-studies/ImpactStudyCard';
import { impactStudies } from '@/data/impactStudiesData';

const WhoWePartnerWith = () => {
  // Featured case studies (using the first 3 impact studies)
  const featuredStudies = impactStudies.slice(0, 3);

  // Partner logos (placeholders for now)
  const partners = [
    { name: 'Startup India', logo: '/placeholder.svg' },
    { name: 'WIAWIS Archery', logo: '/placeholder.svg' },
    { name: 'Lawtech Partners', logo: '/placeholder.svg' },
    { name: 'FinTech Horizon', logo: '/placeholder.svg' },
    { name: 'EduNext AI', logo: '/placeholder.svg' },
    { name: 'Smart India Hackathon', logo: '/placeholder.svg' }
  ];

  // Industries we serve
  const industries = [
    { name: 'Tech & SaaS', icon: <Building size={24} /> },
    { name: 'LegalTech', icon: <Shield size={24} /> },
    { name: 'E-commerce', icon: <Briefcase size={24} /> },
    { name: 'EdTech', icon: <Building size={24} /> },
    { name: 'Sports & Fitness', icon: <Briefcase size={24} /> },
    { name: 'GovTech', icon: <Globe size={24} /> },
    { name: 'Branding Agencies', icon: <Building size={24} /> }
  ];

  // Partner testimonials
  const testimonials = [
    {
      quote: "Realm by Rook has been our digital backbone. Their clarity and execution is unmatched.",
      author: "CEO, Lawtech India",
      company: "Lawtech India"
    },
    {
      quote: "Working with Realm transformed our entire digital strategy. They deliver both speed and quality.",
      author: "Marketing Director, EduNext AI",
      company: "EduNext AI"
    }
  ];

  // Partnership strengths
  const strengths = [
    {
      title: "Clarity Over Chaos",
      description: "We bring structure and transparency to every project."
    },
    {
      title: "Speed + Quality",
      description: "With our RAD model, we move 10x faster without compromise."
    },
    {
      title: "Built for Growth",
      description: "Our systems scale with your ambition."
    }
  ];

  return (
    <main className="min-h-screen">
      <PageHeader 
        title="We Partner With Visionaries Who Build the Future."
        subtitle="From high-growth startups to legacy brands, our partners trust us to craft digital solutions that scale."
        isLarge={true}
      />
      
      {/* Trusted By Section */}
      <section className="realm-section border-b border-realm-lightgray">
        <div className="realm-container">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-h-12 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What Makes Our Partnerships Work */}
      <section className="realm-section border-b border-realm-lightgray bg-realm-lightgray">
        <div className="realm-container">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">What Makes Our Partnerships Work?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-white p-8 border border-realm-black">
                <h3 className="text-xl font-bold mb-4">{strength.title}</h3>
                <p className="text-realm-darkgray">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industries We Serve */}
      <section className="realm-section border-b border-realm-lightgray">
        <div className="realm-container">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="border border-realm-lightgray p-6 flex flex-col items-center justify-center text-center hover:border-realm-black transition-all duration-300">
                <div className="mb-3">{industry.icon}</div>
                <h3 className="font-bold">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Words from Our Partners */}
      <section className="realm-section border-b border-realm-lightgray bg-realm-black text-white">
        <div className="realm-container">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Words from Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border border-gray-700 p-8">
                <p className="text-xl mb-6 italic">"{testimonial.quote}"</p>
                <p className="font-bold">– {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Block */}
      <section className="realm-section border-b border-realm-lightgray">
        <div className="realm-container">
          <h2 className="text-3xl font-display font-bold mb-6 text-center">Partner Success Stories</h2>
          <p className="text-center mb-12 text-realm-darkgray max-w-2xl mx-auto">
            See how we've helped our partners achieve remarkable results through strategic digital solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStudies.map((study) => (
              <ImpactStudyCard key={study.id} study={study} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/impact-studies" className="realm-button inline-flex items-center">
              View All Case Studies <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Footer */}
      <section className="realm-section">
        <div className="realm-container text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Looking to Build Something Together?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="realm-button flex items-center gap-2">
              Partner With Us <ArrowRight size={16} />
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-realm-black text-realm-black hover:bg-realm-black hover:text-white flex items-center gap-2">
                Talk to Strategy Lead
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhoWePartnerWith;
