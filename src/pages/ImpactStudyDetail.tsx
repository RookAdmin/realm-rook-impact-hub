
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Tag from "@/components/common/Tag";
import CtaSection from "@/components/CtaSection";
import { ArrowLeft } from "lucide-react";
import { client1, urlForClient1 } from "../../lib/sanity";

// Types
interface ImpactStudy {
  _id: string;
  title: string;
  mainImage: any;
  perspectiveCategory: string;
  slug: {
    current: string;
  };
  industry?: {
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
  testimonial?: string;
  testimonialAuthor?: string;
  testimonialPosition?: string;
  testimonialAuthorImage?: any;
  images?: any[];
}

// Fallback data for demo purposes
const fallbackStudies: { [key: string]: ImpactStudy } = {
  "zephyr-skincare-rebranding": {
    _id: "1",
    title: "Transforming a Local Skincare Brand into a Global Sensation",
    mainImage: null,
    perspectiveCategory: "Branding",
    slug: { current: "zephyr-skincare-rebranding" },
    industry: [{ _id: "1", title: "Branding" }],
    region: [{ _id: "1", title: "MENA (Middle East and North Africa)" }],
    companyLogo: null,
    companyName: "Zephyr Skincare",
    problem: "Zephyr Skincare was a local boutique with a basic Wix site and minimal online presence, averaging only 23 monthly website visits. Despite having premium products, their brand identity failed to convey their quality and unique value proposition.",
    process: "Our team conducted extensive market research to understand the competitive landscape and identify opportunities. We developed a comprehensive brand strategy, created a new visual identity, and designed a custom e-commerce website focused on conversion optimization and user experience.",
    outcome: "Within six months of the rebrand and website launch, Zephyr experienced exponential growth: 18,000+ monthly visitors, first-page Google rankings for key search terms, and a 300% increase in online revenue. The brand is now expanding into international markets.",
    testimonial: "Realm isn't an agency. They're a weapon. They completely transformed how people perceive and interact with our brand, and the numbers speak for themselves.",
    testimonialAuthor: "Rishi B.",
    testimonialPosition: "Founder, Zephyr Skincare"
  },
  "finovo-ux-redesign": {
    _id: "2",
    title: "Reimagining Financial Software for the Modern User",
    mainImage: null,
    perspectiveCategory: "UI/UX Design",
    slug: { current: "finovo-ux-redesign" },
    industry: [{ _id: "2", title: "UI/UX Design" }],
    region: [{ _id: "2", title: "Europe" }],
    companyLogo: null,
    companyName: "Finovo",
    problem: "Finovo, a promising fintech startup, was struggling with inconsistent branding and a complex user interface that resulted in a mere 2% conversion rate. The disjointed experience was hindering growth and investor confidence.",
    process: "We began with a UX audit to identify pain points and conversion barriers. Our team developed a unified identity system with clear design principles and rebuilt the user flow with a focus on simplicity and user goals. We conducted iterative user testing to refine the experience.",
    outcome: "The redesigned platform achieved an 8.5% conversion rate—a 325% improvement. The cohesive brand identity and enhanced user experience helped Finovo secure $2 million in new funding. User session times increased by 45% and support tickets decreased by 60%.",
    testimonial: "They understood our product better than we did. The team at Realm didn't just redesign our interface—they transformed how users interact with financial tools completely.",
    testimonialAuthor: "Natasha D.",
    testimonialPosition: "CEO, Finovo"
  },
  "elevate-tech-ecommerce": {
    _id: "3",
    title: "Rebuilding an E-Commerce Platform for Speed and Conversion",
    mainImage: null,
    perspectiveCategory: "Web/App Development",
    slug: { current: "elevate-tech-ecommerce" },
    industry: [{ _id: "3", title: "Web/App Development" }],
    region: [{ _id: "3", title: "Asia-Pacific" }],
    companyLogo: null,
    companyName: "Elevate Tech",
    problem: "Elevate Tech's e-commerce store was plagued by slow load times (5 seconds on average) and a sky-high bounce rate of 70%. Cart abandonment was rampant, and the outdated technology stack couldn't support their growth plans.",
    process: "We conducted a comprehensive technical audit and rebuilt their platform from scratch using modern technologies with performance at the core. The development process prioritized mobile optimization, reduced JavaScript overhead, implemented lazy loading, and optimized all media assets.",
    outcome: "The new platform loads in just 1.2 seconds, reducing bounce rate to 22%. Average order value increased by 41% due to improved product discovery and checkout flow. Mobile conversions doubled, and the new architecture scales effortlessly during high-traffic periods.",
    testimonial: "The ROI speaks for itself. Best decision we made this year. Our customers constantly comment on how fast and easy our site is to use now.",
    testimonialAuthor: "Marcus T.",
    testimonialPosition: "CMO, Elevate Tech"
  }
};

const ImpactStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [study, setStudy] = useState<ImpactStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchStudy = async () => {
      if (!slug) {
        setError("No slug provided");
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching study with slug:", slug);

        // Try to fetch from ImpactStudy schema first
        let query = `*[_type == "ImpactStudy" && slug.current == $slug][0] {
          _id,
          title,
          mainImage,
          perspectiveCategory,
          industry[]->{
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
          testimonial,
          testimonialAuthor,
          testimonialPosition,
          testimonialAuthorImage,
          images,
          "slug": slug
        }`;

        let data = await client1.fetch(query, { slug });

        // If no ImpactStudy data, try post schema
        if (!data) {
          console.log("No ImpactStudy data found, trying post schema...");
          query = `*[_type == "post" && slug.current == $slug][0] {
            _id,
            title,
            mainImage,
            perspectiveCategory,
            industry[]->{
              _id,
              title
            },
            region[]->{
              _id,
              title
            },
            companyLogo,
            companyName,
            "slug": slug
          }`;
          data = await client1.fetch(query, { slug });
        }

        if (data) {
          console.log("Successfully fetched study data:", data);
          setStudy(data);
          setUsingFallback(false);
        } else {
          // Check fallback data
          const fallbackStudy = fallbackStudies[slug];
          if (fallbackStudy) {
            console.log("Using fallback study for slug:", slug);
            setStudy(fallbackStudy);
            setUsingFallback(true);
          } else {
            setError("Study not found");
          }
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching study:", error);
        
        // Try fallback data on error
        const fallbackStudy = fallbackStudies[slug];
        if (fallbackStudy) {
          console.log("Using fallback study due to error for slug:", slug);
          setStudy(fallbackStudy);
          setUsingFallback(true);
          setLoading(false);
        } else {
          setError("Failed to fetch study data");
          setLoading(false);
        }
      }
    };

    fetchStudy();
  }, [slug]);

  if (loading) {
    return (
      <div className="realm-container py-20 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 w-1/4 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="realm-container py-20 text-center">
        <Helmet>
          <title>Study Not Found | Realm by Rook</title>
          <meta name="description" content="The requested impact study could not be found." />
        </Helmet>
        <h1 className="text-3xl font-display font-bold mb-6">Error</h1>
        <p className="mb-8">{error}</p>
        <Link to="/case-studies" className="realm-button">
          Back to Case Studies
        </Link>
      </div>
    );
  }

  if (!study) {
    return (
      <div className="realm-container py-20 text-center">
        <Helmet>
          <title>Study Not Found | Realm by Rook</title>
          <meta name="description" content="The requested impact study could not be found." />
        </Helmet>
        <h1 className="text-3xl font-display font-bold mb-6">
          Study Not Found
        </h1>
        <p className="mb-8">
          The impact study you're looking for doesn't exist.
        </p>
        <Link to="/case-studies" className="realm-button">
          View All Impact Studies
        </Link>
      </div>
    );
  }

  return (
    <main>
      <Helmet>
        <title>{study.title} | Case Study | Realm by Rook</title>
        <meta 
          name="description" 
          content={`${study.problem ? study.problem.substring(0, 150) + '...' : 'Discover how Realm by Rook transformed ' + study.companyName + ' through strategic design and development.'}`}
        />
        <meta name="keywords" content={`case study, ${study.companyName}, ${study.perspectiveCategory}, business transformation, Realm by Rook`} />
      </Helmet>

      <div className="bg-realm-black text-white py-16 md:py-24 relative">
        {study.mainImage && (
          <div className="realm-image-container absolute inset-0 z-0 opacity-30">
            <img
              src={urlForClient1(study.mainImage).width(1200).url()}
              alt={study.title}
              className="realm-image realm-image-greyscale"
            />
            <div className="realm-image-overlay"></div>
          </div>
        )}

        <div className="realm-container relative z-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-white mb-8 hover:underline"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Impact Studies
          </Link>

          {usingFallback && (
            <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 mb-8">
              <p className="text-yellow-200">
                Currently showing demo content. Connect to Sanity CMS to display live data.
              </p>
            </div>
          )}

          {study.companyLogo && study.companyName && (
            <div className="flex items-center mb-4">
              <img
                src={urlForClient1(study.companyLogo).width(100).url()}
                alt={`${study.companyName} logo`}
                className="w-12 h-12 object-contain mr-3 bg-white rounded"
              />
              <h1 className="text-2xl font-semibold">{study.companyName}</h1>
            </div>
          )}

          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl mb-6">
            {study.title}
          </h2>

          <div className="flex flex-wrap gap-2 mt-4">
            {study.industry?.map((industry) => (
              <Tag
                key={industry._id}
                label={industry.title}
                className="bg-white text-realm-black"
              />
            ))}
            {study.region?.map((region) => (
              <Tag
                key={region._id}
                label={region.title}
                className="bg-white text-realm-black"
              />
            ))}
          </div>
        </div>
      </div>

      {study.problem && (
        <section className="realm-section">
          <div className="realm-container max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Problem
                </h3>
                <div className="w-12 h-1 bg-realm-black mb-4"></div>
                <div className="aspect-square bg-realm-lightgray overflow-hidden mb-8">
                  {study.mainImage ? (
                    <img
                      src={urlForClient1(study.mainImage).width(600).url()}
                      alt="Problem visualization"
                      className="realm-image realm-image-greyscale"
                    />
                  ) : (
                    <div className="w-full h-full bg-realm-lightgray flex items-center justify-center">
                      <span className="text-realm-darkgray">Visual placeholder</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg leading-relaxed">{study.problem}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {study.process && (
        <section className="realm-section bg-realm-lightgray">
          <div className="realm-container max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Process
                </h3>
                <div className="w-12 h-1 bg-realm-black mb-4"></div>
                <div className="aspect-square bg-white border border-realm-black overflow-hidden mb-8">
                  {study.mainImage ? (
                    <img
                      src={urlForClient1(study.mainImage).width(600).url()}
                      alt="Process visualization"
                      className="realm-image realm-image-greyscale"
                    />
                  ) : (
                    <div className="w-full h-full bg-white flex items-center justify-center">
                      <span className="text-realm-darkgray">Visual placeholder</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg leading-relaxed">{study.process}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {study.outcome && (
        <section className="realm-section">
          <div className="realm-container max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Outcome
                </h3>
                <div className="w-12 h-1 bg-realm-black mb-4"></div>
                <div className="aspect-square bg-realm-lightgray overflow-hidden mb-8">
                  {study.mainImage ? (
                    <img
                      src={urlForClient1(study.mainImage).width(600).url()}
                      alt="Outcome visualization"
                      className="realm-image realm-image-greyscale"
                    />
                  ) : (
                    <div className="w-full h-full bg-realm-lightgray flex items-center justify-center">
                      <span className="text-realm-darkgray">Visual placeholder</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg leading-relaxed">{study.outcome}</p>

                {study.images && study.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {study.images.map((image, index) => (
                      <img
                        key={index}
                        src={urlForClient1(image).width(400).url()}
                        alt={`${study.title} result ${index + 1}`}
                        className="w-full rounded realm-image-greyscale"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {study.testimonial && (
        <section className="realm-section bg-realm-black text-white">
          <div className="realm-container max-w-4xl mx-auto text-center">
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic mb-8">
              "{study.testimonial}"
            </blockquote>
            <cite className="not-italic flex flex-col items-center">
              {study.testimonialAuthorImage && (
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <img
                    src={urlForClient1(study.testimonialAuthorImage)
                      .width(200)
                      .url()}
                    alt={study.testimonialAuthor}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="font-medium text-lg">
                {study.testimonialAuthor}
              </div>
              <div className="text-realm-lightgray">
                {study.testimonialPosition}
              </div>
            </cite>
          </div>
        </section>
      )}

      <section className="realm-section">
        <div className="realm-container text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
            Let's Write Your Impact Story
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Ready to achieve measurable results that transform your business?
            Let's create your own success story together.
          </p>
          <Link to="/contact" className="realm-button inline-block">
            Start Your Transformation
          </Link>
        </div>
      </section>

      <CtaSection />
    </main>
  );
};

export default ImpactStudyDetail;
