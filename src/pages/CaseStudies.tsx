<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> 41894f63601cd89f31f27c81dcb7353a589dbb85
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import PageHeader from "@/components/common/PageHeader";
import CtaSection from "@/components/CtaSection";
import { client1, urlForClient1 } from "../../lib/sanity";

// Types
interface ImpactStudy {
  _id: string;
  title: string;
  mainImage: any;
  perspectiveCategory: string;
  industry: {
    _id: string;
    title: string;
  }[];
  region: {
    _id: string;
    title: string;
  }[];
  companyName: string;
  companyLogo: any;
  slug: {
    current: string;
  };
}

const industryCategories = [
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

const regionCategories = [
  "All",
  "MENA (Middle East and North Africa)",
  "Asia-Pacific",
  "Europe",
  "North America",
  "Latin America and the Caribbean",
  "Sub-Saharan Africa",
  "Central Asia",
];

// Featured case studies data
const featuredCaseStudies = [
  {
    category: "E-commerce / UX Design",
    title: "RetailCore Rebrand",
    description:
      "How we increased conversion rates by 38% through strategic UX redesign and brand positioning.",
    link: "/case-studies/retailcore-rebrand",
  },
  {
    category: "SaaS / Development",
    title: "Fluent Finance Dashboard",
    description:
      "Rebuilding a complex financial app that reduced load time by 75% and improved user retention.",
    link: "/case-studies/fluent-finance",
  },
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
            src={urlForClient1(study.mainImage).width(800).url()}
            alt={study.title}
            className="realm-image realm-image-greyscale hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="flex items-center gap-3 mb-4">
          {study.companyLogo && (
            <img
              src={urlForClient1(study.companyLogo).width(100).url()}
              alt={`${study.companyName} logo`}
              className="h-8 w-auto object-contain"
            />
          )}
          <h3 className="text-sm font-medium text-realm-darkgray">
            {study.companyName}
          </h3>
        </div>

        <h2 className="text-xl font-display font-bold mb-3 line-clamp-2">
          {study.title}
        </h2>

        <div className="flex flex-wrap gap-2 mt-4">
          {study.industry.map((cat) => (
            <span
              key={cat._id}
              className="inline-block bg-realm-lightgray text-realm-black px-3 py-1 rounded-full text-xs font-semibold"
            >
              {cat.title}
            </span>
          ))}
          {study.region.map((reg) => (
            <span
              key={reg._id}
              className="inline-block bg-realm-lightgray text-realm-black px-3 py-1 rounded-full text-xs font-semibold"
            >
              {reg.title}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Link
          to={`/case-studies-details/${study.slug.current}`}
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
const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeRegion, setActiveRegion] = useState("All");
  const [studies, setStudies] = useState<ImpactStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        const query = `*[_type == "post"] {
          _id,
          title,
          mainImage,
          perspectiveCategory,
          "industry": industry[]-> {
            _id,
            title
          },
          "region": region[]-> {
            _id,
            title
          },
          companyName,
          companyLogo,
          "slug": slug
        }`;

        const data = await client1.fetch(query);
        setStudies(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching studies:", error);
        setLoading(false);
      }
    };

    fetchStudies();
  }, []);

  // Filter studies by both category and region
  const filteredStudies = studies.filter((study) => {
    const matchesCategory =
      activeCategory === "All" ||
      study.industry.some((cat) => cat.title === activeCategory);
    const matchesRegion =
      activeRegion === "All" ||
      study.region.some((reg) => reg.title === activeRegion);
    return matchesCategory && matchesRegion;
  });

  return (
<<<<<<< HEAD
    <main className="min-h-screen">
      <PageHeader
        title="Impact Studies"
        subtitle="Real transformations. Real results. See how our work drives measurable business impact."
        isLarge={true}
      />

      {/* Featured Case Studies Section */}
      <section className="realm-section">
        <div className="realm-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Featured Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredCaseStudies.map((study, index) => (
              <div
                key={index}
                className="border border-realm-lightgray p-8 hover:border-realm-black transition-all duration-300"
              >
                <span className="text-sm text-realm-darkgray block mb-4">
                  {study.category}
                </span>
                <h3 className="text-2xl font-display font-bold mb-4">
                  {study.title}
                </h3>
                <p className="text-realm-darkgray mb-6">{study.description}</p>
                <Link
                  to={study.link}
                  className="realm-link flex items-center space-x-2"
                >
                  <span>View case study</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section className="realm-section bg-realm-black text-white">
        <div className="realm-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Our Impact By The Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-white/20">
              <h3 className="text-4xl font-bold mb-2">38%</h3>
              <p className="text-sm text-white/80">
                Average Increase in Conversion Rate
              </p>
            </div>
            <div className="text-center p-6 border border-white/20">
              <h3 className="text-4xl font-bold mb-2">75%</h3>
              <p className="text-sm text-white/80">Reduction in Load Times</p>
            </div>
            <div className="text-center p-6 border border-white/20">
              <h3 className="text-4xl font-bold mb-2">230%</h3>
              <p className="text-sm text-white/80">
                Increase in Social Engagement
              </p>
            </div>
            <div className="text-center p-6 border border-white/20">
              <h3 className="text-4xl font-bold mb-2">85+</h3>
              <p className="text-sm text-white/80">
                Successful Client Projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies / Impact Studies */}
      <section className="realm-section">
        <div className="realm-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
            All Case Studies
          </h2>

          {/* Filter by Industry/Category */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Filter by Industry</h3>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {industryCategories.map((category) => (
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
          </div>

          {/* Filter by Region */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Filter by Region</h3>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {regionCategories.map((region) => (
                <button
                  key={region}
                  className={`px-4 py-2 ${
                    activeRegion === region
                      ? "bg-realm-black text-white"
                      : "bg-white text-realm-black border border-realm-black"
                  } hover:bg-realm-black hover:text-white transition-colors`}
                  onClick={() => setActiveRegion(region)}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-video bg-gray-200 mb-6"></div>
                  <div className="h-6 bg-gray-200 mb-3"></div>
                  <div className="h-4 bg-gray-200 w-24"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study) => (
                <ImpactStudyCard key={study._id} study={study} />
              ))}
            </div>
          )}

          {!loading && filteredStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl">
                No case studies found matching your filters.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <button
                  className="realm-button bg-realm-black text-white"
                  onClick={() => {
                    setActiveCategory("All");
                    setActiveRegion("All");
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </main>
=======
    <>
      <Helmet>
        <title>Case Studies | Realm by Rook - Real Results & Success Stories</title>
        <meta name="description" content="Explore our portfolio of successful projects and client transformations. See real results from our branding, design, development, and AI automation work with businesses worldwide." />
        <meta name="keywords" content="case studies, portfolio, success stories, client results, project showcase, digital transformation examples" />
      </Helmet>
      <main className="min-h-screen">
        <PageHeader 
          title="Impact Studies"
          subtitle="Real transformations. Real results. See how our work drives measurable business impact."
          isLarge={true}
        />
        
        {/* Featured Case Studies Section */}
        <section className="realm-section">
          <div className="realm-container">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Featured Case Studies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {featuredCaseStudies.map((study, index) => (
                <div key={index} className="border border-realm-lightgray p-8 hover:border-realm-black transition-all duration-300">
                  <span className="text-sm text-realm-darkgray block mb-4">{study.category}</span>
                  <h3 className="text-2xl font-display font-bold mb-4">{study.title}</h3>
                  <p className="text-realm-darkgray mb-6">{study.description}</p>
                  <Link to={study.link} className="realm-link flex items-center space-x-2">
                    <span>View case study</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Results & Metrics */}
        <section className="realm-section bg-realm-black text-white">
          <div className="realm-container">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Our Impact By The Numbers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 border border-white/20">
                <h3 className="text-4xl font-bold mb-2">38%</h3>
                <p className="text-sm text-white/80">Average Increase in Conversion Rate</p>
              </div>
              <div className="text-center p-6 border border-white/20">
                <h3 className="text-4xl font-bold mb-2">75%</h3>
                <p className="text-sm text-white/80">Reduction in Load Times</p>
              </div>
              <div className="text-center p-6 border border-white/20">
                <h3 className="text-4xl font-bold mb-2">230%</h3>
                <p className="text-sm text-white/80">Increase in Social Engagement</p>
              </div>
              <div className="text-center p-6 border border-white/20">
                <h3 className="text-4xl font-bold mb-2">85+</h3>
                <p className="text-sm text-white/80">Successful Client Projects</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* All Case Studies / Impact Studies */}
        <section className="realm-section">
          <div className="realm-container">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">All Impact Studies</h2>
            
            {/* Filter by Industry/Category */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Filter by Industry</h3>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 ${
                      activeCategory === category
                        ? 'bg-realm-black text-white'
                        : 'bg-white text-realm-black border border-realm-black'
                    } hover:bg-realm-black hover:text-white transition-colors`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Filter by Region */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Filter by Region</h3>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {regions.map((region) => (
                  <button
                    key={region}
                    className={`px-4 py-2 ${
                      activeRegion === region
                        ? 'bg-realm-black text-white'
                        : 'bg-white text-realm-black border border-realm-black'
                    } hover:bg-realm-black hover:text-white transition-colors`}
                    onClick={() => setActiveRegion(region)}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study) => (
                <ImpactStudyCard key={study.id} study={study} />
              ))}
            </div>
            
            {filteredStudies.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl">No impact studies found matching your filters.</p>
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                  <button 
                    className="realm-button bg-realm-black text-white"
                    onClick={() => {
                      setActiveCategory('All');
                      setActiveRegion('All');
                    }}
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="realm-section bg-realm-lightgray">
          <div className="realm-container">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Client Testimonials</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white">
                <p className="text-lg italic mb-6">
                  "Realm transformed our entire digital presence. The results speak for themselves—our conversion rates have never been higher."
                </p>
                <p className="font-medium">— Marketing Director, RetailCore</p>
              </div>
              <div className="p-8 bg-white">
                <p className="text-lg italic mb-6">
                  "Working with Realm was the best decision we made last year. Their strategic approach to our challenges delivered measurable impact."
                </p>
                <p className="font-medium">— CEO, Fluent Finance</p>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
    </>
>>>>>>> 41894f63601cd89f31f27c81dcb7353a589dbb85
  );
};

export default CaseStudies;
