
import React from 'react';
import { Brush, Code, BarChart, Layers } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export interface TransformationStory {
  before: string;
  after: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

export interface MethodStep {
  title: string;
  description: string;
}

export const useHomeData = () => {
  // Services data
  const services: ServiceItem[] = [
    {
      title: 'Branding',
      description: 'Crafting unique identities that resonate with your audience and stand the test of time.',
      icon: <Brush size={24} />,
      link: '/services#branding',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing user-friendly experiences that delight users and achieve business goals.',
      icon: <Layers size={24} />,
      link: '/services#ui-ux',
    },
    {
      title: 'Web/App Development',
      description: 'Building responsive, scalable digital homes that perform flawlessly across all devices.',
      icon: <Code size={24} />,
      link: '/services#development',
    },
    {
      title: 'SEO',
      description: 'Boosting online visibility through data-driven strategies that deliver measurable results.',
      icon: <BarChart size={24} />,
      link: '/services#seo',
    },
  ];

  // Transformation stories data
  const transformationStories: TransformationStory[] = [
    {
      before: 'A local boutique with a Wix site and 23 monthly visits.',
      after: 'Rebranded, redesigned, and ranking on page 1. 18K monthly visitors. 3x revenue.'
    },
    {
      before: 'Tech startup with inconsistent branding and 2% conversion rate.',
      after: 'Unified identity system, optimized UX flow. Now at 8.5% conversion and $2M in new funding.'
    },
    {
      before: 'E-commerce store with 5-second load time and 70% bounce rate.',
      after: 'Rebuilt from scratch. 1.2s load time, 22% bounce rate, 41% increase in average order value.'
    }
  ];

  // Customer testimonials data
  const testimonials: Testimonial[] = [
    {
      quote: 'Realm isn't an agency. They're a weapon.',
      author: 'Rishi B.',
      position: 'Founder, Zephyr Skincare'
    },
    {
      quote: 'They understood our product better than we did.',
      author: 'Natasha D.',
      position: 'CEO, Finovo'
    },
    {
      quote: 'The ROI speaks for itself. Best decision we made this year.',
      author: 'Marcus T.',
      position: 'CMO, Elevate Tech'
    }
  ];

  // Realm method steps
  const realmMethodSteps: MethodStep[] = [
    {
      title: 'Discovery',
      description: 'We dive deep into your brand and users.'
    },
    {
      title: 'Design',
      description: 'Bold, on-brand visuals that convert.'
    },
    {
      title: 'Build',
      description: 'Code that performs and scales.'
    },
    {
      title: 'Amplify',
      description: 'SEO + strategy for long-term growth.'
    }
  ];

  return {
    services,
    transformationStories,
    testimonials,
    realmMethodSteps
  };
};
