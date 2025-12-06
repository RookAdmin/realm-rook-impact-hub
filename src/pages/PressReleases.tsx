import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageHeader from "@/components/common/PageHeader";
import { Download, ArrowRight } from "lucide-react";
import DownloadButton from "@/components/common/DownloadButton";
import { Button } from "@/components/ui/button";
import CtaSection from "@/components/CtaSection";
import { client3, urlForClient3 } from "../../lib/sanity";
import { PressRelease } from "@/types";

// Default categories and years for filtering
const DEFAULT_CATEGORIES = [
  "All",
  "Awards",
  "Partnerships",
  "Launches",
  "Expansion",
  "Milestones",
];
const DEFAULT_YEARS = [
  "All",
  "2026",
  "2025",
];

interface SanityPressRelease {
  _id: string;
  title: string;
  description?: string;
  slug: {
    current: string;
  };
  mainImage?: any;
  pdfFile?: {
    asset: {
      url: string;
    };
  };
  categories?: {
    _id: string;
    title: string;
  }[];
  publishedAt: string;
  body?: any[];
}

const PressReleases = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeYear, setActiveYear] = useState("All");
  const [pressReleases, setPressReleases] = useState<PressRelease[]>([]);
  const [pressCategories, setPressCategories] = useState<string[]>(["All"]);
  const [pressYears, setPressYears] = useState<string[]>(["All"]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          description,
          slug,
          mainImage,
          pdfFile,
          categories[]->{
            _id,
            title
          },
          publishedAt,
          body
        }`;

        const data = await client3.fetch<SanityPressRelease[]>(query);

        if (data && data.length > 0) {
          // Transform Sanity data to PressRelease format
          const transformedReleases: PressRelease[] = data.map((item) => {
            const publishedDate = new Date(item.publishedAt);
            const year = publishedDate.getFullYear().toString();
            const category =
              item.categories && item.categories.length > 0
                ? item.categories[0].title
                : "Uncategorized";

            const pdfUrl = item.pdfFile?.asset?.url || "";

            return {
              id: item._id,
              slug: item.slug.current,
              title: item.title,
              date: item.publishedAt,
              url: pdfUrl,
              isExternalLink: pdfUrl.startsWith("http"),
              category: category,
              year: year,
              subtitle: item.description,
              image: item.mainImage
                ? urlForClient3(item.mainImage).width(1200).url()
                : undefined,
            };
          });

          setPressReleases(transformedReleases);
          setUsingFallback(false);

          // Extract unique categories and years from CMS data
          const cmsCategories = new Set(
            transformedReleases.map((r) => r.category)
          );
          const cmsYears = new Set(transformedReleases.map((r) => r.year));

          // Merge default categories with CMS categories, ensuring defaults are always present
          const additionalCategories = Array.from(cmsCategories).filter(
            (cat) => !DEFAULT_CATEGORIES.includes(cat)
          );
          const mergedCategories = [
            ...DEFAULT_CATEGORIES,
            ...additionalCategories,
          ];

          // Merge default years with CMS years, ensuring defaults are always present
          const additionalYears = Array.from(cmsYears)
            .filter((year) => !DEFAULT_YEARS.includes(year))
            .sort((a, b) => b.localeCompare(a)); // Sort additional years in descending order

          // Combine: "All" first, then default years in their order, then additional years
          const mergedYears = [
            "All",
            ...DEFAULT_YEARS.filter((y) => y !== "All"), // Default years excluding "All"
            ...additionalYears,
          ];

          setPressCategories(mergedCategories);
          setPressYears(mergedYears);
        } else {
          setUsingFallback(true);
          // Set default categories and years even when no CMS data
          setPressCategories(DEFAULT_CATEGORIES);
          setPressYears(DEFAULT_YEARS);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching press releases:", error);
        setUsingFallback(true);
        setLoading(false);
      }
    };

    fetchPressReleases();
  }, []);

  const filteredReleases = pressReleases
    .filter(
      (release) =>
        activeCategory === "All" || release.category === activeCategory
    )
    .filter((release) => activeYear === "All" || release.year === activeYear);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="realm-container py-20">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 w-1/2 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="p-6 border border-realm-lightgray bg-white"
              >
                <div className="h-4 bg-gray-200 w-1/4 mb-4"></div>
                <div className="h-6 bg-gray-200 w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          Press Releases | Realm by Rook - Latest News & Media Coverage
        </title>
        <meta
          name="description"
          content="Latest news, press releases, and media coverage of Realm by Rook. Stay updated with our company announcements, achievements, and industry recognition."
        />
        <meta
          name="keywords"
          content="press releases, news, media coverage, company announcements, Realm by Rook news"
        />
      </Helmet>
      <main>
        <PageHeader
          title="Press Room — Realm by Rook in the Spotlight"
          subtitle="Discover our latest news, press releases, and media coverage."
          isLarge={true}
        />

        <section className="realm-section">
          <div className="realm-container">
            {usingFallback && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
                <p className="text-yellow-800">
                  Currently showing demo content. Connect to Sanity CMS to
                  display live data.
                </p>
              </div>
            )}
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <div className="flex-1">
                <label
                  htmlFor="categoryFilter"
                  className="block text-sm font-medium mb-2"
                >
                  Filter by Category
                </label>
                <select
                  id="categoryFilter"
                  className="w-full p-3 border border-realm-black bg-white"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                >
                  {pressCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label
                  htmlFor="yearFilter"
                  className="block text-sm font-medium mb-2"
                >
                  Filter by Year
                </label>
                <select
                  id="yearFilter"
                  className="w-full p-3 border border-realm-black bg-white"
                  value={activeYear}
                  onChange={(e) => setActiveYear(e.target.value)}
                >
                  {pressYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredReleases.length > 0 ? (
                filteredReleases.map((release) => (
                  <div
                    key={release.id}
                    className="p-6 border border-realm-lightgray flex flex-col h-full bg-white"
                  >
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-block px-3 py-1 text-xs border border-realm-black rounded-full">
                          {release.category}
                        </span>
                        <span className="text-sm text-realm-gray">
                          {formatDate(release.date)}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium">{release.title}</h3>
                    </div>

                    <div className="mt-auto">
                      <div className="flex gap-3 flex-wrap">
                        <DownloadButton
                          label="Download PDF"
                          url={release.url}
                          className="realm-button w-[200px]"
                        />
                        <Button
                          asChild
                          className="realm-button w-[200px] flex items-center gap-2"
                        >
                          <Link
                            to={`/resources/press-releases/${release.slug}`}
                          >
                            Read Full Release <ArrowRight size={16} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 py-12 text-center">
                  <p className="text-lg">
                    No press releases found matching your filters.
                  </p>
                  <button
                    className="mt-4 realm-button"
                    onClick={() => {
                      setActiveCategory("All");
                      setActiveYear("All");
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="realm-section bg-realm-lightgray">
          <div className="realm-container text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Brand Kit
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Need comprehensive brand assets and guidelines for Realm by Rook?
              Download our complete brand kit with logos, color palettes,
              typography, and brand guidelines to maintain consistency across
              all communications.
            </p>
            <a
              href="/BrandKit"
              download
              className="realm-button inline-flex items-center bg-black text-white rounded-md hover:bg-opacity-90"
            >
              <span>Go to Brand Kit</span>
            </a>
          </div>
        </section>

        <section className="realm-section">
          <div className="realm-container text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Media Inquiries
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              For press inquiries, interview requests, or additional
              information, please contact our media relations team.
            </p>
            <a
              href="mailto:hlo@realmrook.com"
              className="realm-button inline-block border-[1px] border-realm-black text-realm-black rounded-sm"
            >
              Contact Media Relations
            </a>
          </div>
        </section>

        <CtaSection />
      </main>
    </>
  );
};

export default PressReleases;
