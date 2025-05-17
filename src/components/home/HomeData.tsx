
import { useEffect, useState } from 'react';
import { LayoutDashboard, Palette, Code, Search } from 'lucide-react';

// Types
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

interface TransformationStory {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

interface RealmMethodStep {
  title: string;
  description: string;
}

interface HomeDataResult {
  services: Service[];
  transformationStories: TransformationStory[];
  testimonials: Testimonial[];
  realmMethodSteps: RealmMethodStep[];
}

// Hook to provide data for the home page components
export const useHomeData = (): HomeDataResult => {
  const [services, setServices] = useState<Service[]>([]);
  const [transformationStories, setTransformationStories] = useState<TransformationStory[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [realmMethodSteps, setRealmMethodSteps] = useState<RealmMethodStep[]>([]);

  useEffect(() => {
    // Services data
    setServices([
      {
        title: 'Branding',
        description: 'We build unique identities that resonate with your audience and stand the test of time.',
        icon: <Palette size={24} />,
        link: '/services/branding',
      },
      {
        title: 'UI/UX Design',
        description: 'We craft user experiences that delight customers and achieve business goals.',
        icon: <LayoutDashboard size={24} />,
        link: '/services/ui-ux-design',
      },
      {
        title: 'Web/App Development',
        description: 'We build digital products that perform flawlessly across all devices.',
        icon: <Code size={24} />,
        link: '/services/web-app-development',
      },
      {
        title: 'SEO',
        description: 'We enhance online visibility through data-driven strategies that deliver measurable results.',
        icon: <Search size={24} />,
        link: '/services/seo',
      },
    ]);

    // Transformation Stories data
    setTransformationStories([
      {
        title: 'How Zephyr Skincare Became a Global Sensation',
        description: 'A complete brand transformation that turned a local boutique into an international success story.',
        imageUrl: '/placeholder.svg',
        link: '/impact-studies/zephyr-skincare-rebranding',
      },
      {
        title: 'Rebuilding an E-Commerce Giant for Speed',
        description: 'How we slashed load times from 5s to 1.2s and reduced bounce rate by 68%.',
        imageUrl: '/placeholder.svg',
        link: '/impact-studies/elevate-tech-ecommerce',
      },
      {
        title: 'Organic Search Revolution for GreenPath',
        description: 'A sustainability startup achieves 400% increase in organic traffic with our SEO strategy.',
        imageUrl: '/placeholder.svg',
        link: '/impact-studies/greenpath-seo-strategy',
      },
    ]);

    // Testimonials data
    setTestimonials([
      {
        quote: "Realm isn't an agency. They're a weapon. They completely transformed how people perceive and interact with our brand, and the numbers speak for themselves.",
        author: 'Rishi B.',
        position: 'Founder',
        company: 'Zephyr Skincare'
      },
      {
        quote: "They understood our product better than we did. The team at Realm didn't just redesign our interface—they transformed how users interact with financial tools completely.",
        author: 'Natasha D.',
        position: 'CEO',
        company: 'Finovo'
      },
      {
        quote: "The ROI speaks for itself. Best decision we made this year. Our customers constantly comment on how fast and easy our site is to use now.",
        author: 'Marcus T.',
        position: 'CMO',
        company: 'Elevate Tech'
      },
    ]);

    // Realm Method Steps
    setRealmMethodSteps([
      {
        title: 'Discovery',
        description: 'We dive deep to understand your business, audience, and objectives through collaborative workshops and research.'
      },
      {
        title: 'Strategy',
        description: 'We develop a comprehensive roadmap tailored to your unique challenges and opportunities.'
      },
      {
        title: 'Creation',
        description: 'Our multidisciplinary team brings ideas to life with meticulous attention to detail and quality.'
      },
      {
        title: 'Optimization',
        description: 'We continuously refine and improve based on performance data and user feedback.'
      },
      {
        title: 'Growth',
        description: 'We scale successful solutions to maximize impact and achieve sustainable business growth.'
      },
    ]);
  }, []);

  return {
    services,
    transformationStories,
    testimonials,
    realmMethodSteps,
  };
};
