import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Tag from "@/components/common/Tag";
import CtaSection from "@/components/CtaSection";
import { ArrowLeft } from "lucide-react";
import { client1, urlForClient1 } from "../../lib/sanity";

interface ImpactStudy {
  _id: string;
  title: string;
  mainImage: any;
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
  problem: string;
  process: string;
  outcome: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    authorImage?: any;
  };
  publishedAt: string;
}

const ImpactStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [study, setStudy] = useState<ImpactStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudy = async () => {
      try {
        if (!slug) {
          console.error("Slug is missing in the URL.");
          setLoading(false);
          return;
        }

        const query = `*[_type == "post" && slug.current == $slug][0] {
          _id,
          title,
          mainImage,
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
          problem,
          process,
          outcome,
          testimonial,
          publishedAt
        }`;

        const data = await client1.fetch(query, { slug });
        if (!data) {
          console.error("No data found for the given slug:", slug);
        }
        setStudy(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching study:", error);
        setLoading(false);
      }
    };

    fetchStudy();
  }, [slug]);

  if (loading) {
    return (
      <div className="realm-container py-20 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!study) {
    return (
      <div className="realm-container py-20 text-center">
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
      <div className="bg-realm-black text-white py-16 md:py-24 relative">
        {/* Background image with overlay */}
        <div className="realm-image-container absolute inset-0 z-0 opacity-30">
          <img
            src={urlForClient1(study.mainImage).width(1920).url()}
            alt={study.title}
            className="realm-image realm-image-greyscale"
          />
          <div className="realm-image-overlay"></div>
        </div>

        <div className="realm-container relative z-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-white mb-8 hover:underline"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Impact Studies
          </Link>

          <div className="flex items-center mb-4">
            {study.companyLogo && (
              <img
                src={urlForClient1(study.companyLogo).width(100).url()}
                alt={`${study.companyName} logo`}
                className="w-12 h-12 object-contain mr-3 bg-white rounded"
              />
            )}
            <h1 className="text-2xl font-semibold">{study.companyName}</h1>
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl mb-6">
            {study.title}
          </h2>

          <div className="flex flex-wrap gap-2 mt-4">
            {study.industry.map((cat) => (
              <Tag
                key={cat._id}
                label={cat.title}
                className="bg-white text-realm-black"
              />
            ))}
            {study.region.map((reg) => (
              <Tag
                key={reg._id}
                label={reg.title}
                className="bg-white text-realm-black"
              />
            ))}
          </div>
        </div>
      </div>

      <section className="realm-section">
        <div className="realm-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Problem</h3>
              <div className="w-12 h-1 bg-realm-black mb-4"></div>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed">{study.problem}</p>
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
            </div>
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed">{study.process}</p>
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
            </div>
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed">{study.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {study.testimonial && (
        <section className="realm-section bg-realm-black text-white">
          <div className="realm-container max-w-4xl mx-auto text-center">
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl italic mb-8">
              "{study.testimonial.quote}"
            </blockquote>
            <cite className="not-italic flex flex-col items-center">
              {study.testimonial.authorImage && (
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <img
                    src={urlForClient1(study.testimonial.authorImage)
                      .width(200)
                      .url()}
                    alt={study.testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="font-medium text-lg">
                {study.testimonial.author}
              </div>
              <div className="text-realm-lightgray">
                {study.testimonial.position}
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
