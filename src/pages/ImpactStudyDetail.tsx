import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Tag from "@/components/common/Tag";
import CtaSection from "@/components/CtaSection";
import { ArrowLeft } from "lucide-react";
import { client1, urlForClient1 } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";

// Types
interface ImpactStudy {
  _id: string;
  title: string;
  scopeOfWork?: string;
  mainImage: any;
  perspectiveCategory: string;
  slug: {
    current: string;
  };
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
  problem?: any[]; // blockContent type
  process?: any[]; // blockContent type
  outcome?: any[]; // blockContent type
  testimonial?: string;
  testimonialAuthor?: string;
  testimonialPosition?: string;
  testimonialAuthorImage?: any;
  outcomeGallery?: any[];
  processImage?: any;
  problemImage?: any;
  outcomeImage?: any;
  featuredImage?: string;
  impactSummary?: string;
  tags?: string[];
}

// Fallback data for demo purposes
const fallbackStudies: { [key: string]: ImpactStudy } = {
  "zephyr-skincare-rebranding": {
    _id: "1",
    title: "Transforming a Local Skincare Brand into a Global Sensation",
    mainImage: null,
    perspectiveCategory: "Branding",
    slug: { current: "zephyr-skincare-rebranding" },
    capabilities: [{ _id: "1", title: "Branding" }],
    region: [{ _id: "1", title: "MENA (Middle East and North Africa)" }],
    companyLogo: null,
    companyName: "Zephyr Skincare",
    problem: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Zephyr Skincare was a local boutique with a basic Wix site and minimal online presence, averaging only 23 monthly website visits. Despite having premium products, their brand identity failed to convey their quality and unique value proposition.",
          },
        ],
      },
    ],
    process: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Our team conducted extensive market research to understand the competitive landscape and identify opportunities. We developed a comprehensive brand strategy, created a new visual identity, and designed a custom e-commerce website focused on conversion optimization and user experience.",
          },
        ],
      },
    ],
    outcome: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Within six months of the rebrand and website launch, Zephyr experienced exponential growth: 18,000+ monthly visitors, first-page Google rankings for key search terms, and a 300% increase in online revenue. The brand is now expanding into international markets.",
          },
        ],
      },
    ],
    testimonial:
      "Realm isn't an agency. They're a weapon. They completely transformed how people perceive and interact with our brand, and the numbers speak for themselves.",
    testimonialAuthor: "Rishi B.",
    testimonialPosition: "Founder, Zephyr Skincare",
  },
  "finovo-ux-redesign": {
    _id: "2",
    title: "Reimagining Financial Software for the Modern User",
    mainImage: null,
    perspectiveCategory: "UI/UX Design",
    slug: { current: "finovo-ux-redesign" },
    capabilities: [{ _id: "2", title: "UI/UX Design" }],
    region: [{ _id: "2", title: "Europe" }],
    companyLogo: null,
    companyName: "Finovo",
    problem: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Finovo, a promising fintech startup, was struggling with inconsistent branding and a complex user interface that resulted in a mere 2% conversion rate. The disjointed experience was hindering growth and investor confidence.",
          },
        ],
      },
    ],
    process: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "We began with a UX audit to identify pain points and conversion barriers. Our team developed a unified identity system with clear design principles and rebuilt the user flow with a focus on simplicity and user goals. We conducted iterative user testing to refine the experience.",
          },
        ],
      },
    ],
    outcome: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "The redesigned platform achieved an 8.5% conversion rate—a 325% improvement. The cohesive brand identity and enhanced user experience helped Finovo secure $2 million in new funding. User session times increased by 45% and support tickets decreased by 60%.",
          },
        ],
      },
    ],
    testimonial:
      "They understood our product better than we did. The team at Realm didn't just redesign our interface—they transformed how users interact with financial tools completely.",
    testimonialAuthor: "Natasha D.",
    testimonialPosition: "CEO, Finovo",
  },
  "elevate-tech-ecommerce": {
    _id: "3",
    title: "Rebuilding an E-Commerce Platform for Speed and Conversion",
    mainImage: null,
    perspectiveCategory: "Web/App Development",
    slug: { current: "elevate-tech-ecommerce" },
    capabilities: [{ _id: "3", title: "Web/App Development" }],
    region: [{ _id: "3", title: "Asia-Pacific" }],
    companyLogo: null,
    companyName: "Elevate Tech",
    problem: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Elevate Tech's e-commerce store was plagued by slow load times (5 seconds on average) and a sky-high bounce rate of 70%. Cart abandonment was rampant, and the outdated technology stack couldn't support their growth plans.",
          },
        ],
      },
    ],
    process: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "We conducted a comprehensive technical audit and rebuilt their platform from scratch using modern technologies with performance at the core. The development process prioritized mobile optimization, reduced JavaScript overhead, implemented lazy loading, and optimized all media assets.",
          },
        ],
      },
    ],
    outcome: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "The new platform loads in just 1.2 seconds, reducing bounce rate to 22%. Average order value increased by 41% due to improved product discovery and checkout flow. Mobile conversions doubled, and the new architecture scales effortlessly during high-traffic periods.",
          },
        ],
      },
    ],
    testimonial:
      "The ROI speaks for itself. Best decision we made this year. Our customers constantly comment on how fast and easy our site is to use now.",
    testimonialAuthor: "Marcus T.",
    testimonialPosition: "CMO, Elevate Tech",
  },
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
          scopeOfWork,
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
          testimonial,
          testimonialAuthor,
          testimonialPosition,
          testimonialAuthorImage,
          outcomeGallery,
          processImage,
          problemImage,
          outcomeImage,
          "slug": slug
        }`;

        let data = await client1.fetch(query, { slug });
        console.log("Fetched study data:", data);
        console.log("Problem content:", data?.problem);
        console.log("Process content:", data?.process);
        console.log("Outcome content:", data?.outcome);

        // If no ImpactStudy data, try post schema
        if (!data) {
          console.log("No ImpactStudy data found, trying post schema...");
          query = `*[_type == "post" && slug.current == $slug][0] {
            _id,
            title,
            scopeOfWork,
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
            outcomeGallery,
            processImage,
            problemImage,
            outcomeImage,
            "slug": slug
          }`;
          data = await client1.fetch(query, { slug });
          console.log("Fetched post data:", data);
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
          <meta
            name="description"
            content="The requested impact study could not be found."
          />
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
          <meta
            name="description"
            content="The requested impact study could not be found."
          />
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
          content={`${
            study.problem?.[0]?.children?.[0]?.text?.substring(0, 150) +
              "..." ||
            "Discover how Realm by Rook transformed " +
              study.companyName +
              " through strategic design and development."
          }`}
        />
        <meta
          name="keywords"
          content={`case study, ${study.companyName}, ${study.perspectiveCategory}, business transformation, Realm by Rook`}
        />
      </Helmet>

      <div className="bg-gradient-to-br from-realm-black to-gray-900 text-white py-20 md:py-32 relative mt-20 border-b border-white/10">
        <div className="realm-container relative z-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-white/80 hover:text-white mb-12 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Impact Studies
          </Link>

          {usingFallback && (
            <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 mb-8">
              <p className="text-yellow-200">
                Currently showing demo content. Connect to Sanity CMS to display
                live data.
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <img
                    src="/logo-black.png"
                    alt="Realm by Rook"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-white/60">
                  Impact Studies
                </span>
              </div>

              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                {study.title}
              </h1>

              <p className="text-xl text-white/80 max-w-3xl mb-8">
                {study.impactSummary}
              </p>

              <div className="flex flex-wrap gap-3">
                {study.tags?.map((tag) => (
                  <Tag
                    key={tag}
                    label={tag}
                    className="bg-white/10 text-white hover:bg-white/20 transition-colors"
                  />
                ))}
              </div>
            </div>

            <div className="md:col-span-4">
              {study.companyName && (
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    {study.companyLogo && (
                      <div className="w-16 h-16 bg-white rounded-xl p-3">
                        <img
                          src={urlForClient1(study.companyLogo)
                            .width(100)
                            .url()}
                          alt={`${study.companyName} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h2 className="text-xl font-semibold">
                        {study.companyName}
                      </h2>
                      {study.perspectiveCategory && (
                        <p className="text-sm text-white/60">
                          {study.perspectiveCategory}
                        </p>
                      )}
                    </div>
                  </div>

                  {study.scopeOfWork && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-sm text-white/60 mb-2">
                        Scope of Work
                      </p>
                      <p className="font-medium">{study.scopeOfWork}</p>
                    </div>
                  )}

                  {study.region && study.region.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-sm text-white/60 mb-2">Region</p>
                      <div className="flex flex-wrap gap-2">
                        {study.region.map((r) => (
                          <div
                            key={r._id}
                            className="bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 transition-all duration-300 rounded-lg px-3 py-1"
                          >
                            <p className="font-medium text-white">{r.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="realm-section">
        <div className="realm-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Problem</h3>
              <div className="w-12 h-1 bg-realm-black mb-4"></div>
              <div
                className="aspect-square bg-realm-lightgray overflow-hidden mb-8 border border-realm-black/10 hover:border-realm-black/20 transition-all duration-300"
                style={{ borderRadius: "10px" }}
              >
                {study.problemImage ? (
                  <img
                    src={urlForClient1(study.problemImage).width(800).url()}
                    alt="Problem visualization"
                    className="realm-image realm-image-greyscale"
                  />
                ) : (
                  <div className="w-full h-full bg-realm-lightgray" />
                )}
              </div>
            </div>
            <div className="md:col-span-2">
              {study.problem && (
                <div className="prose prose-lg max-w-none">
                  {(() => {
                    console.log("Rendering problem:", study.problem);
                    return (
                      <PortableText
                        value={study.problem}
                        components={{
                          block: {
                            normal: ({ children }) => (
                              <p className="text-lg leading-relaxed">
                                {children}
                              </p>
                            ),
                          },
                        }}
                      />
                    );
                  })()}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Process</h3>
              <div className="w-12 h-1 bg-realm-black mb-4"></div>
              <div
                className="aspect-square bg-white border border-realm-black/10 hover:border-realm-black/20 transition-all duration-300 overflow-hidden mb-8"
                style={{ borderRadius: "10px" }}
              >
                {study.processImage ? (
                  <img
                    src={urlForClient1(study.processImage).width(800).url()}
                    alt="Process visualization"
                    className="realm-image realm-image-greyscale"
                  />
                ) : (
                  <div className="w-full h-full bg-white" />
                )}
              </div>
            </div>
            <div className="md:col-span-2">
              {study.process && (
                <div className="prose prose-lg max-w-none">
                  {(() => {
                    console.log("Rendering process:", study.process);
                    return (
                      <PortableText
                        value={study.process}
                        components={{
                          block: {
                            normal: ({ children }) => (
                              <p className="text-lg leading-relaxed">
                                {children}
                              </p>
                            ),
                          },
                        }}
                      />
                    );
                  })()}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="realm-section">
        <div className="realm-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Outcome</h3>
              <div className="w-12 h-1 bg-realm-black mb-4"></div>
              <div
                className="aspect-square bg-realm-lightgray overflow-hidden mb-8 border border-realm-black/10 hover:border-realm-black/20 transition-all duration-300"
                style={{ borderRadius: "10px" }}
              >
                {study.outcomeImage ? (
                  <img
                    src={urlForClient1(study.outcomeImage).width(800).url()}
                    alt="Outcome visualization"
                    className="realm-image realm-image-greyscale"
                  />
                ) : (
                  <div className="w-full h-full bg-realm-lightgray" />
                )}
              </div>
            </div>
            <div className="md:col-span-2">
              <PortableText value={study.outcome} />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {study.outcomeGallery?.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden rounded"
                  >
                    <img
                      src={urlForClient1(image).width(400).height(400).url()}
                      alt={`${study.companyName} result ${index + 1}`}
                      className="w-full h-full object-cover realm-image-greyscale"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
