
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
import Icm from '@/components/assets/impact-studies/icm.png';
import IcmLogo from '@/components/assets/impact-studies/icm-logo.png';
import ChefavrLogo from '@/components/assets/impact-studies/chefavr-logo.jpg';
import Chefavr from '@/components/assets/impact-studies/chefavr.png';
import Light from '@/components/assets/impact-studies/light.png';
import LightLogo from '@/components/assets/impact-studies/light-logo.png';
import Mpb from '@/components/assets/impact-studies/mpb.png';
import MpbLogo from '@/components/assets/impact-studies/mpb-logo.png';

const ClientSpotlight = () => {
  const caseStudies = [
    {
      id: "case4",
      client: "MyProBuddy",
      logo: MpbLogo,
      transformation: "MyProBuddy.com: Accelerating Startup Funding Through AI, Investor Networks & Expert Advisory",
      image: Mpb,
      slug: "myprobuddy-com-accelerating-startup-funding-through-ai-investor-networks-and-expert-advisory"
    },
    {
      id: "case3",
      client: "ICM Study Abroad",
      logo: IcmLogo,
      transformation: "icmstudyabroad.com: A 360° Digital Hub for Study Abroad, Placement, Courses, CRM, and Startup Empowerment",
      image: Icm,
      slug: "icmstudyabroad-com-a-360-digital-hub-for-study-abroad-placement-courses-crm-and-startup"
    },
    {
      id: "case2",
      client: "Lightspire Media",
      logo: LightLogo,
      transformation: "Animating a Digital Hub: Lightspire Media’s Web Presence & Creative Outreach",
      image: Light,
      slug: "animating-a-digital-hub-lightspire-media-s-web-presence-and-creative-outreach"
    },
    
    {
      id: "case4",
      client: "MyProBuddy",
      logo: MpbLogo,
      transformation: "MyProBuddy.com: Accelerating Startup Funding Through AI, Investor Networks & Expert Advisory",
      image: Mpb,
      slug: "myprobuddy-com-accelerating-startup-funding-through-ai-investor-networks-and-expert-advisory"
    },
    {
      id: "case1",
      client: "ChefAVR",
      logo: ChefavrLogo,
      transformation: "Building chefavr.com: Digital Portfolio of Chef AVR – Culinary Leader & Food Business Advisor",
      image: Chefavr,
      slug: "building-chefavr-com-digital-portfolio-of-chefavr-culinary-leader-and-food-business-advisor"
    },
  ];

  return (
    <section className="realm-section text-black">
      <div className="realm-container">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">Client Impact</h2>
          <div className="w-16 h-1 bg-black"></div>
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
                <Link to={`/case-studies/${study.slug}`} className="block group">
                  <div className="border border-black/20 hover:border-white transition-all duration-300 p-0 overflow-hidden">
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
                      
                      <p className="text-xl font-display font-bold mb-4 line-clamp-2">
                        {study.transformation}
                      </p>
                      
                      <div className="inline-flex items-center font-medium text-sm text-black/80 group-hover:text-black transition-colors">
                        <span>View Case Study</span>
                        <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-4 hidden md:flex" />
          <CarouselNext className="mr-4 hidden md:flex" />
        </Carousel>
        
        <div className="mt-12 text-center">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-black border-b border-black/40 hover:border-white pb-1 transition-colors"
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
