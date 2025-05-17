
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

  // Partner logos (now using placeholder images)
  const partners = [
    { name: 'Startup India', logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100' },
    { name: 'WIAWIS Archery', logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100' },
    { name: 'Lawtech Partners', logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100' },
    { name: 'FinTech Horizon', logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100' },
    { name: 'EduNext AI', logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100' },
    { name: 'Smart India Hackathon', logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100' }
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
      company: "Lawtech India",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100"
    },
    {
      quote: "Working with Realm transformed our entire digital strategy. They deliver both speed and quality.",
      author: "Marketing Director, EduNext AI",
      company: "EduNext AI",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100"
    }
  ];

  // Partnership strengths
  const strengths = [
    {
      title: "Clarity Over Chaos",
      description: "We bring structure and transparency to every project.",
      image: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Speed + Quality",
      description: "With our RAD model, we move 10x faster without compromise.",
      image: "https://images.unsplash.com/photo-1595079676339-1534801ad6c5?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Built for Growth",
      description: "Our systems scale with your ambition.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=400"
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
              <div key={index} className="bg-white border border-realm-black">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={strength.image} 
                    alt={strength.title}
                    className="w-full h-full object-cover realm-image-greyscale"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">{strength.title}</h3>
                  <p className="text-realm-darkgray">{strength.description}</p>
                </div>
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
              <div key={index} className="border border-gray-700 p-8 flex">
                <div className="mr-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-xl mb-6 italic">"{testimonial.quote}"</p>
                  <p className="font-bold">– {testimonial.author}</p>
                </div>
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
