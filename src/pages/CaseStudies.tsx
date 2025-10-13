import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import PageHeader from "@/components/common/PageHeader";
import CtaSection from "@/components/CtaSection";
import { client1, urlForClient1 } from "../../lib/sanity";

// Types matching ImpactStudyDetail.tsx
interface ImpactStudy {
  _id: string;
  title: string;
  mainImage: any;
  perspectiveCategory: string;
  slug: {
    current: string;
  } | null;
  capabilities?: {
    _id: string;
    title: string;
  }[];
  region?: {
    _id: string;
    title: string;
  }[];
  companyLogo?: any;
  companyName?: string;
  problem?: string;
  process?: string;
  outcome?: string;
  _createdAt?: string;
  _updatedAt?: string;
  publishedAt?: string;
}

// Capabilities Categories
const capabilitiesCategories = [
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

// Region Categories
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

// Components
interface ImpactStudyCardProps {
  study: ImpactStudy;
}

const ImpactStudyCard = ({ study }: ImpactStudyCardProps) => {
  return (
    <Card className="border border-realm-lightgray hover:border-realm-black transition-all duration-300 flex flex-col h-full">
      <CardContent className="pt-6 flex-grow">
        <div className="aspect-video mb-6 overflow-hidden">
          {study.mainImage ? (
            <img
              src={urlForClient1(study.mainImage).width(800).url()}
              alt={study.title}
              className="realm-image realm-image-greyscale hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-realm-lightgray flex items-center justify-center">
              <span className="text-realm-darkgray">No image</span>
            </div>
          )}
        </div>

        {study.companyLogo && study.companyName && (
          <div className="flex items-center gap-4 mt-4">
            <img
              src={urlForClient1(study.companyLogo).width(50).url()}
              alt={study.companyName || "Company Logo"}
              className="w-12 h-12 object-cover rounded-full"
            />
            <span className="text-sm font-medium">{study.companyName}</span>
          </div>
        )}

        <h2 className="text-xl font-display font-bold mt-4 mb-3 line-clamp-2">
          {study.title}
        </h2>

        <div className="flex flex-wrap gap-2 mt-4">
          {study.capabilities?.map((capabilities) => (
            <span
              key={capabilities._id}
              className="inline-block bg-realm-lightgray text-realm-black px-3 py-1 rounded-full text-xs font-semibold"
            >
              {capabilities.title}
            </span>
          ))}
          {study.region?.map((region) => (
            <span
              key={region._id}
              className="inline-block bg-realm-lightgray text-realm-black px-3 py-1 rounded-full text-xs font-semibold"
            >
              {region.title}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Link
          to={`/case-studies/${study.slug?.current || study._id}`}
          className="realm-button inline-flex items-center"
        >
          Read Full Study
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </CardFooter>
    </Card>
  );
};

// Fallback data for when Sanity is not available
const fallbackStudies: ImpactStudy[] = [
  {
    _id: "1",
    title: "Transforming a Local Skincare Brand into a Global Sensation",
    mainImage: null,
    perspectiveCategory: "Branding",
    slug: { current: "zephyr-skincare-rebranding" },
    capabilities: [{ _id: "1", title: "Branding" }],
    region: [{ _id: "1", title: "MENA (Middle East and North Africa)" }],
    companyLogo: null,
    companyName: "Zephyr Skincare",
    problem:
      "Zephyr Skincare was a local boutique with minimal online presence, averaging only 23 monthly website visits.",
    process:
      "We conducted extensive market research and developed a comprehensive brand strategy.",
    outcome:
      "Within six months, Zephyr experienced exponential growth: 18,000+ monthly visitors and 300% increase in online revenue.",
    _createdAt: "2023-08-15T00:00:00Z",
  },
  {
    _id: "2",
    title: "Reimagining Financial Software for the Modern User",
    mainImage: null,
    perspectiveCategory: "UI/UX Design",
    slug: { current: "finovo-ux-redesign" },
    capabilities: [{ _id: "2", title: "UI/UX Design" }],
    region: [{ _id: "2", title: "Europe" }],
    companyLogo: null,
    companyName: "Finovo",
    problem:
      "Finovo was struggling with inconsistent branding and a complex user interface that resulted in a mere 2% conversion rate.",
    process:
      "We began with a UX audit to identify pain points and conversion barriers.",
    outcome:
      "The redesigned platform achieved an 8.5% conversion rate—a 325% improvement.",
    _createdAt: "2023-07-10T00:00:00Z",
  },
  {
    _id: "3",
    title: "Rebuilding an E-Commerce Platform for Speed and Conversion",
    mainImage: null,
    perspectiveCategory: "Web/App Development",
    slug: { current: "elevate-tech-ecommerce" },
    capabilities: [{ _id: "3", title: "Web/App Development" }],
    region: [{ _id: "3", title: "Asia-Pacific" }],
    companyLogo: null,
    companyName: "Elevate Tech",
    problem:
      "Elevate Tech's e-commerce store was plagued by slow load times (5 seconds on average) and a sky-high bounce rate of 70%.",
    process:
      "We rebuilt their platform from scratch using modern technologies with performance at the core.",
    outcome:
      "The new platform loads in just 1.2 seconds, reducing bounce rate to 22%.",
    _createdAt: "2023-06-05T00:00:00Z",
  },
];

// Main Page Component
const CaseStudies = () => {
  const [studies, setStudies] = useState<ImpactStudy[]>(fallbackStudies);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeRegion, setActiveRegion] = useState("All");
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        console.log("Attempting to fetch studies from Sanity...");

        // Try to fetch from ImpactStudy schema first with sorting (newest first)
        const impactStudyQuery = `*[_type == "ImpactStudy"] | order(coalesce(publishedAt, _updatedAt, _createdAt) desc) {
          _id,
          title,
          mainImage,
          perspectiveCategory,
          capabilities[]->{
            _id,
            title
          },
          region[]->{
            _id,
            title
          },
          companyLogo,
          companyName,
          problem,
          process,
          outcome,
          _createdAt,
          _updatedAt,
          publishedAt,
          slug
        }`;

        let data = await client1.fetch(impactStudyQuery);

        // If no ImpactStudy data, try post schema with sorting (newest first)
        if (!data || data.length === 0) {
          console.log("No ImpactStudy data found, trying post schema...");
          const postQuery = `*[_type == "post"] | order(coalesce(publishedAt, _updatedAt, _createdAt) desc) {
            _id,
            title,
            mainImage,
            perspectiveCategory,
            capabilities[]->{
              _id,
              title
            },
            region[]->{
              _id,
              title
            },
            companyLogo,
            companyName,
            _createdAt,
            _updatedAt,
            publishedAt,
            slug
          }`;
          data = await client1.fetch(postQuery);
        }

        if (data && data.length > 0) {
          console.log("Successfully fetched studies:", data);

          // Sort by date as an additional safeguard (newest first)
          const sortedData = data.sort((a: any, b: any) => {
            const dateA = new Date(
              a.publishedAt || a._updatedAt || a._createdAt
            ).getTime();
            const dateB = new Date(
              b.publishedAt || b._updatedAt || b._createdAt
            ).getTime();
            return dateB - dateA; // Descending order (newest first)
          });

          console.log(
            "Sorted studies by date:",
            sortedData.map((s: any) => ({
              title: s.title,
              date: s.publishedAt || s._updatedAt || s._createdAt,
            }))
          );

          setStudies(sortedData);
          setUsingFallback(false);
        } else {
          console.log("No data found, using fallback studies");
          setStudies(fallbackStudies);
          setUsingFallback(true);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching studies:", error);
        console.log("Using fallback studies due to error");
        setStudies(fallbackStudies);
        setUsingFallback(true);
        setLoading(false);
      }
    };

    fetchStudies();
  }, []);

  const filteredStudies = studies
    .filter((study) => {
      const matchesCategory =
        activeCategory === "All" ||
        study.capabilities?.some(
          (capabilities) => capabilities.title === activeCategory
        );
      const matchesRegion =
        activeRegion === "All" ||
        study.region?.some((region) => region.title === activeRegion);
      return matchesCategory && matchesRegion;
    })
    .sort((a: any, b: any) => {
      // Maintain chronological order after filtering (newest first)
      const dateA = new Date(
        a.publishedAt || a._updatedAt || a._createdAt
      ).getTime();
      const dateB = new Date(
        b.publishedAt || b._updatedAt || b._createdAt
      ).getTime();
      return dateB - dateA; // Descending order (newest first)
    });

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>
          Impact Studies - Real Business Transformations | Realm by Rook
        </title>
        <meta
          name="description"
          content="Discover real transformations and measurable results from our client projects. See how Realm by Rook drives business impact through strategic design and development."
        />
        <meta
          name="keywords"
          content="case studies, impact studies, business transformation, client results, success stories, Realm by Rook"
        />
      </Helmet>

      <PageHeader
        title="Impact Studies"
        subtitle="Real transformations. Real results. See how our work drives measurable business impact."
        isLarge={true}
      />

      {usingFallback && (
        <div className="realm-container mb-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
            <p className="text-yellow-800">
              Currently showing demo case studies. Connect to Sanity CMS to
              display live data.
            </p>
          </div>
        </div>
      )}

      {/* Featured Case Studies Section */}
      <section className="realm-section">
        <div className="realm-container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Featured Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
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
            ].map((study, index) => (
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

          {/* Filter by capabilities/Category */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Filter by Capabilities</h3>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {capabilitiesCategories.map((category) => (
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

          {filteredStudies.length === 0 && !loading && (
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
  );
};

export default CaseStudies;
