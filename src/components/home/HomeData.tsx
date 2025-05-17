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
  before: string;
  after: string;
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

    // Transformation Stories data - updating to match the expected structure with before/after
    setTransformationStories([
      {
        before: "A local boutique with minimal online presence",
        after: "A global sensation with 18K monthly visitors"
      },
      {
        before: "5-second load times and 70% bounce rate",
        after: "1.2-second load time and 22% bounce rate"
      },
      {
        before: "Invisible in search results, paying for every visitor",
        after: "Ranking for 60+ key terms, organic traffic up 400%"
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
