import React, { useState, useMemo } from "react";
import { Copy, Download, Plus, Trash2, Loader2, Globe, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { scrapeWebsite } from "@/lib/sitemapScraper";

interface SitemapGeneratorProps {
  onCopy?: (text: string) => void;
}

interface URL {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
}

const escapeXml = (text: string) => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
};

const SitemapGenerator: React.FC<SitemapGeneratorProps> = ({ onCopy }) => {
  const [urls, setUrls] = useState<URL[]>([]);
  const [scrapeUrl, setScrapeUrl] = useState("");
  const [isScraping, setIsScraping] = useState(false);
  const [scrapeError, setScrapeError] = useState<string | null>(null);
  const [scrapingProgress, setScrapingProgress] = useState({ current: 0, total: 0, currentUrl: "" });
  const [discoveredPages, setDiscoveredPages] = useState<string[]>([]);

  const sitemapXML = useMemo(() => {
    const xml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ];

    urls.forEach((url) => {
      xml.push("  <url>");
      xml.push(`    <loc>${escapeXml(url.loc)}</loc>`);
      if (url.lastmod) {
        xml.push(`    <lastmod>${url.lastmod}</lastmod>`);
      }
      xml.push(`    <changefreq>${url.changefreq}</changefreq>`);
      xml.push(`    <priority>${url.priority}</priority>`);
      xml.push("  </url>");
    });

    xml.push("</urlset>");
    return xml.join("\n");
  }, [urls]);

  const addURL = () => {
    setUrls([
      ...urls,
      {
        loc: "",
        lastmod: new Date().toISOString().split("T")[0],
        changefreq: "weekly",
        priority: "0.5",
      },
    ]);
  };

  const removeURL = (index: number) => {
    setUrls(urls.filter((_, i) => i !== index));
  };

  const updateURL = (index: number, field: keyof URL, value: any) => {
    const updated = [...urls];
    updated[index] = { ...updated[index], [field]: value };
    setUrls(updated);
  };

  const handleCopy = () => {
    if (onCopy) {
      onCopy(sitemapXML);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([sitemapXML], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sitemap.xml";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleScrape = async () => {
    if (!scrapeUrl.trim()) {
      setScrapeError("Please enter a valid URL");
      return;
    }

    setIsScraping(true);
    setScrapeError(null);
    setScrapingProgress({ current: 0, total: 0, currentUrl: "" });
    setDiscoveredPages([]);
    setUrls([]); // Clear previous results

    try {
      // Ensure URL has protocol
      let urlToScrape = scrapeUrl.trim();
      if (!urlToScrape.startsWith("http://") && !urlToScrape.startsWith("https://")) {
        urlToScrape = `https://${urlToScrape}`;
      }

      // Validate URL
      try {
        new URL(urlToScrape);
      } catch (e) {
        throw new Error("Invalid URL format. Please enter a valid website URL.");
      }

      // Create a progress callback with immediate updates
      const progressCallback = (current: number, total: number, currentUrl: string) => {
        // Use requestAnimationFrame for smooth UI updates
        requestAnimationFrame(() => {
          setScrapingProgress({ current, total, currentUrl });
        });
      };

      console.log(`Starting scrape of ${urlToScrape}...`);
      const scrapedUrls = await scrapeWebsite(urlToScrape, progressCallback);
      
      console.log(`Scrape completed. Found ${scrapedUrls.length} URLs`);
      
      if (scrapedUrls.length === 0) {
        throw new Error("No pages found. The website may be blocking automated requests, or it may not have any crawlable links.");
      }
      
      if (scrapedUrls.length === 1 && scrapedUrls[0].loc === urlToScrape) {
        throw new Error("Only homepage found. The website may be blocking automated requests, require JavaScript to load content, or have no internal links. Try a different website or check if the site uses client-side rendering.");
      }
      
      setUrls(scrapedUrls);
      setDiscoveredPages(scrapedUrls.map(u => u.loc));
      setScrapeUrl("");
    } catch (error: any) {
      console.error("Scrape error:", error);
      const errorMessage = error.message || "Failed to scrape website. Please check the URL and try again.";
      setScrapeError(errorMessage);
      
      // If we got some URLs before error, still show them
      if (urls.length > 0) {
        console.log(`Partial results: ${urls.length} URLs found before error`);
      }
    } finally {
      setIsScraping(false);
      setScrapingProgress({ current: 0, total: 0, currentUrl: "" });
    }
  };

  return (
    <div className="space-y-6">
      {/* Real-time Scraping Section */}
      <div className="p-4 sm:p-6 bg-white rounded-lg border border-realm-lightgray shadow-sm">
        <Label className="text-sm font-medium text-realm-black mb-2 block">
          Powerful Website Crawler
        </Label>
        <p className="text-xs text-realm-gray mb-4">
          Enter any website URL to automatically crawl and discover all pages. Our advanced crawler is more powerful than search engines and can discover deep pages, dynamic routes, and hidden content.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            value={scrapeUrl}
            onChange={(e) => {
              setScrapeUrl(e.target.value);
              setScrapeError(null);
            }}
            placeholder="https://example.com"
            className="flex-1 w-full"
            disabled={isScraping}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !isScraping) {
                handleScrape();
              }
            }}
          />
          <Button
            onClick={handleScrape}
            disabled={isScraping || !scrapeUrl.trim()}
            className="bg-[#0F7C4F] hover:bg-[#0d6b42] text-white rounded-full px-4 sm:px-6 w-full sm:w-auto whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isScraping ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                <span className="hidden sm:inline">Crawling...</span>
                <span className="sm:hidden">Crawling</span>
              </>
            ) : (
              <>
                <Globe className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Start Crawling</span>
                <span className="sm:hidden">Crawl</span>
              </>
            )}
          </Button>
        </div>

        {/* Modern Loading Indicator */}
        {isScraping && (
          <div className="mt-4 space-y-3 p-4 bg-[#0F7C4F]/5 rounded-lg border border-[#0F7C4F]/20">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-[#0F7C4F] font-medium">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Crawling website...</span>
              </span>
              <span className="text-[#0F7C4F] font-semibold">
                {scrapingProgress.current > 0 ? `${scrapingProgress.current}` : "Starting"} / {scrapingProgress.total > 0 ? scrapingProgress.total : "?"} pages
              </span>
            </div>
            <div className="w-full bg-realm-lightgray rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-[#0F7C4F] rounded-full transition-all duration-200 ease-out"
                style={{
                  width: scrapingProgress.total > 0 
                    ? `${Math.min(100, (scrapingProgress.current / scrapingProgress.total) * 100)}%`
                    : "10%",
                }}
              />
            </div>
            {scrapingProgress.currentUrl && (
              <div className="space-y-1">
                <p className="text-xs text-realm-gray">
                  <span className="font-medium text-realm-black">Status:</span> {scrapingProgress.currentUrl}
                </p>
                {scrapingProgress.current > 0 && (
                  <p className="text-xs text-[#0F7C4F]">
                    Discovered {scrapingProgress.current} page{scrapingProgress.current !== 1 ? "s" : ""} so far...
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {scrapeError && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{scrapeError}</p>
          </div>
        )}

        {!isScraping && urls.length > 0 && (
          <div className="mt-4 p-3 bg-[#0F7C4F]/10 border border-[#0F7C4F]/20 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0F7C4F] flex-shrink-0" />
              <p className="text-sm text-[#0F7C4F] font-medium">
                Successfully discovered {urls.length} page{urls.length !== 1 ? "s" : ""} across the website
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Discovered Pages List */}
      {discoveredPages.length > 0 && !isScraping && (
        <div className="bg-white rounded-lg border border-realm-lightgray shadow-sm p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <Label className="text-sm font-medium text-realm-black">
              Discovered Pages ({discoveredPages.length})
            </Label>
            <Button
              onClick={() => setDiscoveredPages([])}
              variant="ghost"
              size="sm"
              className="text-xs text-realm-gray hover:text-realm-black"
            >
              Clear
            </Button>
          </div>
          <div className="max-h-[400px] overflow-y-auto space-y-2">
            {discoveredPages.map((page, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-realm-lightgray/50 rounded-lg hover:bg-realm-lightgray transition-colors group"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0F7C4F]/10 flex items-center justify-center">
                  <span className="text-xs font-medium text-[#0F7C4F]">{index + 1}</span>
                </div>
                <a
                  href={page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-sm text-realm-black hover:text-[#0F7C4F] truncate transition-colors"
                  title={page}
                >
                  {page}
                </a>
                <ExternalLink className="w-4 h-4 text-realm-gray group-hover:text-[#0F7C4F] flex-shrink-0 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Generated Sitemap XML Section - Moved Above URL Sections */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
          <Label className="text-sm font-medium text-realm-black">Generated Sitemap XML</Label>
          <div className="flex gap-2">
            <Button onClick={handleCopy} variant="outline" className="rounded-full flex-1 sm:flex-initial">
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
            <Button onClick={handleDownload} variant="outline" className="rounded-full flex-1 sm:flex-initial">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
        <Textarea
          value={sitemapXML}
          readOnly
          className="min-h-[300px] font-mono text-xs sm:text-sm bg-realm-lightgray overflow-x-auto"
        />
      </div>

      <div className="space-y-4">
        {urls.map((url, index) => (
          <div key={index} className="p-4 sm:p-6 border border-realm-lightgray rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-realm-black text-sm sm:text-base">URL {index + 1}</h3>
              <Button
                onClick={() => removeURL(index)}
                variant="ghost"
                size="sm"
                className="text-red-600 flex-shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div>
              <Label className="text-sm font-medium text-realm-black">URL *</Label>
              <Input
                value={url.loc}
                onChange={(e) => updateURL(index, "loc", e.target.value)}
                placeholder="https://example.com/page"
                className="mt-1 w-full"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <Label className="text-sm font-medium text-realm-black">Last Modified</Label>
                <Input
                  type="date"
                  value={url.lastmod}
                  onChange={(e) => updateURL(index, "lastmod", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-realm-black">Change Frequency</Label>
                <select
                  value={url.changefreq}
                  onChange={(e) =>
                    updateURL(index, "changefreq", e.target.value as URL["changefreq"])
                  }
                  className="mt-1 w-full px-3 py-2 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F]"
                >
                  <option value="always">Always</option>
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                  <option value="never">Never</option>
                </select>
              </div>
              <div>
                <Label className="text-sm font-medium text-realm-black">Priority (0.0-1.0)</Label>
                <Input
                  type="number"
                  min="0"
                  max="1"
                  step="0.1"
                  value={url.priority}
                  onChange={(e) => updateURL(index, "priority", e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        ))}

        <Button onClick={addURL} variant="outline" className="w-full rounded-full">
          <Plus className="w-4 h-4 mr-2" />
          Add URL Manually
        </Button>
      </div>
    </div>
  );
};

export default SitemapGenerator;
