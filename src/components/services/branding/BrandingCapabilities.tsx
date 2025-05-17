
import React from 'react';
import { PenTool, MessageSquare, Lightbulb, Book, Package2 } from 'lucide-react';

interface CapabilityProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Capability = ({ icon, title, description }: CapabilityProps) => {
  return (
    <div className="p-8 border border-realm-lightgray transition-all hover:border-realm-black">
      <div className="h-12 w-12 mb-6 text-realm-black flex items-center justify-center border border-realm-lightgray">
        {icon}
      </div>
      <h3 className="text-xl font-display font-medium mb-3">{title}</h3>
      <p className="text-realm-darkgray">{description}</p>
    </div>
  );
};

const BrandingCapabilities = () => {
  const capabilities = [
    {
      icon: <PenTool size={24} />,
      title: "Visual Identity",
      description: "Distinctive logos, typography selections, and complete color systems that create immediate recognition and resonate with your audience."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Tone of Voice & Brand Story",
      description: "Compelling narratives and consistent communication styles that express your brand values and connect emotionally with customers."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Brand Strategy & Positioning",
      description: "Strategic research and market analysis to define your unique position, target audience, and competitive advantage."
    },
    {
      icon: <Book size={24} />,
      title: "Brand Style Guides & Usage Manuals",
      description: "Comprehensive documentation ensuring consistent application of your brand across all touchpoints and by all team members."
    },
    {
      icon: <Package2 size={24} />,
      title: "Packaging & Collateral Design",
      description: "Cohesive physical expressions of your brand, from packaging and business cards to signage and environmental graphics."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-realm-lightgray">
      <div className="realm-container">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">
          Our Branding Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Capability 
              key={index}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingCapabilities;
