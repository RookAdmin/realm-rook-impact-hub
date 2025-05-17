
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const ClientSpotlight = () => {
  const caseStudies = [
    {
      id: "case1",
      client: "Zephyr Skincare",
      logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100",
      transformation: "2X conversions in 4 weeks",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800&h=500",
      slug: "zephyr-skincare-brand-transformation"
    },
    {
      id: "case2",
      client: "Finovo",
      logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100",
      transformation: "10X user engagement through UX redesign",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800&h=500",
      slug: "finovo-ux-redesign-engagement"
    },
    {
      id: "case3",
      client: "Elevate Tech",
      logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100",
      transformation: "3s to 0.5s page load speed improvement",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
      slug: "elevate-tech-performance-optimization"
    },
    {
      id: "case4",
      client: "Atlas Travel",
      logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80&w=200&h=100",
      transformation: "400% increase in organic traffic",
      image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?auto=format&fit=crop&q=80&w=800&h=500",
      slug: "atlas-travel-seo-success"
    }
  ];

  return (
    <section className="realm-section bg-realm-black text-white">
      <div className="realm-container">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Client Impact</h2>
          <div className="w-16 h-1 bg-white"></div>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full"
        >
          <CarouselContent>
            {caseStudies.map((study) => (
              <CarouselItem key={study.id} className="md:basis-1/2 lg:basis-1/3">
                <Link to={`/impact-studies/${study.slug}`} className="block group">
                  <div className="border border-white/20 hover:border-white transition-all duration-300 p-0 overflow-hidden">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.client} 
                        className="w-full h-full object-cover realm-image-greyscale group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <img 
                          src={study.logo} 
                          alt={`${study.client} logo`} 
                          className="w-10 h-10 object-contain mr-3"
                        />
                        <h3 className="text-lg font-display font-medium">{study.client}</h3>
                      </div>
                      
                      <p className="text-xl font-display font-bold mb-4">
                        {study.transformation}
                      </p>
                      
                      <div className="inline-flex items-center font-medium text-sm text-white/80 group-hover:text-white transition-colors">
                        <span>View Case Study</span>
                        <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        
        <div className="mt-12 text-center">
          <Link 
            to="/impact-studies" 
            className="inline-flex items-center text-white border-b border-white/40 hover:border-white pb-1 transition-colors"
          >
            <span>See All Impact Studies</span>
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientSpotlight;
