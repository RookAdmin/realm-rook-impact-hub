import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Tag from "@/components/common/Tag";
import CtaSection from "@/components/CtaSection";
import { ArrowLeft, Clock } from "lucide-react";
import { client2, urlForClient2 } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";

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
  content: any[]; // Portable Text content
  paragraph: any[]; // Block Content for paragraph
}

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [insight, setInsight] = useState<Insight | null>(null);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchInsight = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching insight with slug:", slug);

        const query = `*[_type == "post" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          mainImage,
          description,
          publishedAt,
          categories[]->{
            _id,
            title
          },
          content,
          paragraph
        }`;

        const data = await client2.fetch(query, { slug });

        if (data) {
          console.log("Successfully fetched insight:", data);
          setInsight(data);
          setUsingFallback(false);
        } else {
          console.log("No data found");
          setInsight(null);
          setUsingFallback(true);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching insight:", error);
        setInsight(null);
        setUsingFallback(true);
        setLoading(false);
      }
    };

    fetchInsight();
  }, [slug]);

  if (loading) {
    return (
      <div className="realm-container py-20">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 w-1/2 mb-8"></div>
          <div className="aspect-video bg-gray-200 mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 w-3/4"></div>
            <div className="h-4 bg-gray-200 w-5/6"></div>
            <div className="h-4 bg-gray-200 w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!insight) {
    return (
      <div className="realm-container py-20 text-center">
        <h1 className="text-3xl font-display font-bold mb-6">
          Insight Not Found
        </h1>
        <p className="mb-8">The insight you're looking for doesn't exist.</p>
        <Link to="/resources/insights" className="realm-button">
          View All Insights
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(insight.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <main>
      <Helmet>
        <title>{insight.title} | Realm by Rook</title>
        <meta name="description" content={insight.description} />
      </Helmet>

      <div className="pt-24 pb-8 border-b border-realm-lightgray">
        <div className="realm-container max-w-4xl">
          <Link
            to="/resources/insights"
            className="inline-flex items-center mb-8 hover:underline"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Insights
          </Link>

          {usingFallback && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <p className="text-yellow-800">
                Currently showing demo content. Connect to Sanity CMS to display
                live data.
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {insight.categories.map((category) => (
              <Tag key={category._id} label={category.title} />
            ))}
          </div>

          <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            {insight.title}
          </h1>

          <p className="text-lg text-black mb-6">{insight.description}</p>

          <div className="flex items-center justify-between flex-wrap gap-4 pb-6">
            <div className="flex items-center gap-4 text-sm text-realm-gray">
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="realm-section">
        <div className="realm-container max-w-4xl">
          <div className="aspect-video mb-8">
            <img
              src={urlForClient2(insight.mainImage).width(1200).url()}
              alt={insight.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <PortableText
              value={insight.content}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-lg leading-relaxed mb-6">{children}</p>
                  ),
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-display font-bold mt-12 mb-6">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-display font-bold mt-10 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-display font-bold mt-8 mb-4">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-xl font-display font-bold mt-6 mb-4">
                      {children}
                    </h4>
                  ),
                },
              }}
            />
            {insight.paragraph && (
              <div className="mt-8">
                <PortableText
                  value={insight.paragraph}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="text-lg leading-relaxed mb-6">
                          {children}
                        </p>
                      ),
                      h1: ({ children }) => (
                        <h1 className="text-4xl font-display font-bold mt-12 mb-6">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-3xl font-display font-bold mt-10 mb-4">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-2xl font-display font-bold mt-8 mb-4">
                          {children}
                        </h3>
                      ),
                      h4: ({ children }) => (
                        <h4 className="text-xl font-display font-bold mt-6 mb-4">
                          {children}
                        </h4>
                      ),
                    },
                  }}
                />
              </div>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-realm-lightgray">
            <div className="flex items-center justify-between flex-wrap gap-4"></div>
          </div>
        </div>
      </div>

      <section className="realm-section bg-realm-lightgray">
        <div className="realm-container text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to get notified when we publish new
            content on design, development, and digital strategy.
          </p>
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 border border-realm-black"
              aria-label="Email address"
              required
            />
            <button type="submit" className="realm-button whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <CtaSection />
    </main>
  );
};

export default InsightDetail;
