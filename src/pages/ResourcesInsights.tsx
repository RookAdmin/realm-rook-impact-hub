import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import { insights, insightTags } from "@/data/insightsData";
import CtaSection from "@/components/CtaSection";
import { Card, CardContent } from "@/components/ui/card";
import Tag from "@/components/common/Tag";
import { client2, urlForClient2 } from "../../lib/sanity";

// Types
interface Insight {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: any;
  description: string;
  publishedAt: string;
  categories: {
    _id: string;
    title: string;
  }[];
}

const ResourcesInsights = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        console.log("Attempting to fetch insights from Sanity...");

        const query = `*[_type == "post"] {
          _id,
          title,
          slug,
          mainImage,
          description,
          publishedAt,
          categories[]->{
            _id,
            title
          }
        }`;

        const data = await client2.fetch(query);

        if (data && data.length > 0) {
          console.log("Successfully fetched insights:", data);
          setInsights(data);
          setUsingFallback(false);
        } else {
          console.log("No data found, using fallback insights");
          setInsights([]);
          setUsingFallback(true);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching insights:", error);
        console.log("Using fallback insights due to error");
        setInsights([]);
        setUsingFallback(true);
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  const filteredInsights =
    activeTag === "All"
      ? insights
      : insights.filter((insight) =>
          insight.categories.some((category) => category.title === activeTag)
        );

  const InsightCard = ({ insight }: { insight: Insight }) => {
    const formattedDate = new Date(insight.publishedAt).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );

    return (
      <Card className="border border-realm-lightgray hover:border-realm-black transition-all duration-300 h-full flex flex-col">
        <CardContent className="pt-6 flex-grow">
          <Link to={`/resources/insights/${insight.slug.current}`}>
            <div className="aspect-video rounded overflow-hidden mb-4">
              <img
                src={urlForClient2(insight.mainImage).width(800).url()}
                alt={insight.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex items-center gap-4 text-sm mb-2 text-realm-gray">
              <span>{formattedDate}</span>
            </div>

            <h2 className="text-xl font-display font-bold mb-3 hover:underline">
              {insight.title}
            </h2>

            <p className="text-realm-darkgray mb-4 line-clamp-3">
              {insight.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {insight.categories.slice(0, 3).map((category) => (
                <Tag key={category._id} label={category.title} />
              ))}
            </div>
          </Link>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <Helmet>
        <title>Digital Marketing Insights & Resources | Expert Guides on Branding, SEO, Web Development & AI</title>
        <meta
          name="description"
          content="Expert insights on digital marketing, branding strategy, UI/UX design, web development, SEO best practices, and AI automation. Learn from industry experts and stay ahead of digital trends with actionable guides."
        />
        <meta
          name="keywords"
          content="digital marketing insights, branding guides, SEO tips, web development best practices, UI UX design trends, AI automation guides, marketing resources, design blog, development tutorials, industry insights"
        />
        <meta property="og:title" content="Expert Digital Marketing Insights & Resources | Realm by Rook" />
        <meta property="og:description" content="Learn from industry experts. Get actionable insights on branding, design, development, SEO, and AI automation." />
      </Helmet>
      <main>
        <PageHeader
          title="Insights"
          subtitle="Strategic frameworks, creative processes, and thought leadership to help you navigate the digital landscape."
          isLarge={true}
        />

        {usingFallback && (
          <div className="realm-container mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
              <p className="text-yellow-800">
                Currently showing demo insights. Connect to Sanity CMS to
                display live data.
              </p>
            </div>
          </div>
        )}

        <section className="realm-section">
          <div className="realm-container">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-12">
              {insightTags.map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 rounded-full ${
                    activeTag === tag
                      ? "bg-realm-black text-white"
                      : "bg-white text-realm-black border border-realm-black"
                  } hover:bg-realm-black hover:text-white transition-colors`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </button>
              ))}
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
                {filteredInsights.map((insight) => (
                  <InsightCard key={insight._id} insight={insight} />
                ))}
              </div>
            )}

            {filteredInsights.length === 0 && !loading && (
              <div className="text-center py-16">
                <p className="text-xl">No insights found for this tag.</p>
                <button
                  className="mt-4 realm-button"
                  onClick={() => setActiveTag("All")}
                >
                  View All Insights
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="realm-section bg-realm-lightgray">
          <div className="realm-container text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Want us to cover a topic?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              If there's a specific design, development, or strategy topic you'd
              like our team to address, we're all ears.
            </p>
            <a
              href="mailto:hlo@realmrook.com"
              className="realm-button inline-block"
            >
              Write to us
            </a>
          </div>
        </section>

        <CtaSection />
      </main>
    </>
  );
};

export default ResourcesInsights;
