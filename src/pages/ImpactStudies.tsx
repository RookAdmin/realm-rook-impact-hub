import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import PageHeader from "@/components/common/PageHeader";
import CtaSection from "@/components/CtaSection";

// Types
interface ImpactStudy {
  id: string;
  slug: string;
  title: string;
  company: string;
  companyLogo: string;
  impactSummary: string;
  category: string;
  problem: string;
  process: string;
  outcome: string;
  testimonial: string;
  testimonialAuthor: string;
  testimonialPosition: string;
  images: string[];
  tags: string[];
  date: string;
  region: string;
  featuredImage?: string;
}

// Data
const impactStudies: ImpactStudy[] = [
  {
    id: "1",
    slug: "zephyr-skincare-rebranding",
    title: "Transforming a Local Skincare Brand into a Global Sensation",
    company: "Zephyr Skincare",
    companyLogo: "/placeholder.svg",
    impactSummary: "From 23 monthly visits to 18K visitors & 3x revenue",
    category: "Branding",
    problem:
      "Zephyr Skincare was a local boutique with a basic Wix site and minimal online presence, averaging only 23 monthly website visits. Despite having premium products, their brand identity failed to convey their quality and unique value proposition.",
    process:
      "Our team conducted extensive market research to understand the competitive landscape and identify opportunities. We developed a comprehensive brand strategy, created a new visual identity, and designed a custom e-commerce website focused on conversion optimization and user experience.",
    outcome:
      "Within six months of the rebrand and website launch, Zephyr experienced exponential growth: 18,000+ monthly visitors, first-page Google rankings for key search terms, and a 300% increase in online revenue. The brand is now expanding into international markets.",
    testimonial:
      "Realm isn't an agency. They're a weapon. They completely transformed how people perceive and interact with our brand, and the numbers speak for themselves.",
    testimonialAuthor: "Rishi B.",
    testimonialPosition: "Founder, Zephyr Skincare",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tags: ["Branding", "Website", "SEO"],
    date: "2023-08-15",
    region: "MENA (Middle East and North Africa)",
  },
  // ... existing code ...
];

const categories = [
  "All",
  "AI Agents Automation",
  "Branding",
  "UI/UX Design",
  "Web/App Development",
  "SEO",
  "SMM",
  "Domain Name Consultation",
  "Enterprise Domain Management",
];

// Components
interface ImpactStudyCardProps {
  study: ImpactStudy;
}

const ImpactStudyCard = ({ study }: ImpactStudyCardProps) => {
  return (
    <Card className="border border-realm-lightgray hover:border-realm-black transition-all duration-300 flex flex-col h-full">
      <CardContent className="pt-6 flex-grow">
        <div className="aspect-video mb-6 overflow-hidden">
          <img
            src={
              study.featuredImage ||
              "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400"
            }
            alt={study.title}
            className="realm-image realm-image-greyscale hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <img
            src={study.companyLogo}
            alt={`${study.company} logo`}
            className="w-10 h-10 object-contain mr-3"
          />
          <h3 className="font-semibold">{study.company}</h3>
        </div>

        <h2 className="text-xl font-display font-bold mb-3 line-clamp-2">
          {study.title}
        </h2>

        <p className="font-medium text-lg mb-4">{study.impactSummary}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {study.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-block bg-realm-lightgray text-realm-black px-3 py-1 rounded-full text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Link
          to={`/case-studies/${study.slug}`}
          className="realm-button inline-flex items-center"
        >
          Read Full Study
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </CardFooter>
    </Card>
  );
};

// Main Page Component
const ImpactStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies =
    activeCategory === "All"
      ? impactStudies
      : impactStudies.filter(
          (study) =>
            study.category === activeCategory ||
            study.tags.includes(activeCategory)
        );

  return (
    <main>
      <PageHeader
        title="Impact Studies — The Proof is in the Results"
        subtitle="Real transformations. Real results. See how our work drives measurable business impact."
        isLarge={true}
      />

      <section className="realm-section">
        <div className="realm-container">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 ${
                  activeCategory === category
                    ? "bg-realm-black text-white"
                    : "bg-white text-realm-black border border-realm-black"
                } hover:bg-realm-black hover:text-white transition-colors`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <ImpactStudyCard key={study.id} study={study} />
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl">
                No impact studies found for this category.
              </p>
              <button
                className="mt-4 realm-button"
                onClick={() => setActiveCategory("All")}
              >
                View All Studies
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </main>
  );
};

export default ImpactStudies;
