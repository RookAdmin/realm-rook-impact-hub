import React, { useState, useMemo } from "react";
import { Copy, Download, Plus, Trash2, Loader2, Globe } from "lucide-react";
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
  const [urls, setUrls] = useState<URL[]>([
    {
      loc: "https://example.com/",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "daily",
      priority: "1.0",
    },
  ]);
  const [scrapeUrl, setScrapeUrl] = useState("");
  const [isScraping, setIsScraping] = useState(false);
  const [scrapeError, setScrapeError] = useState<string | null>(null);

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

    try {
      // Ensure URL has protocol
      let urlToScrape = scrapeUrl.trim();
      if (!urlToScrape.startsWith("http://") && !urlToScrape.startsWith("https://")) {
        urlToScrape = `https://${urlToScrape}`;
      }

      const scrapedUrls = await scrapeWebsite(urlToScrape);
      setUrls(scrapedUrls);
      setScrapeUrl("");
    } catch (error: any) {
      setScrapeError(error.message || "Failed to scrape website. Please check the URL and try again.");
    } finally {
      setIsScraping(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Real-time Scraping Section */}
      <div className="p-4 sm:p-6 bg-realm-lightgray rounded-lg border border-realm-lightgray">
        <Label className="text-sm font-medium text-realm-black mb-2 block">
          Real-time Website Scraping
        </Label>
        <p className="text-xs text-realm-gray mb-3">
          Enter a website URL to automatically discover and fetch all pages for your sitemap
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
            onKeyPress={(e) => {
              if (e.key === "Enter" && !isScraping) {
                handleScrape();
              }
            }}
          />
          <Button
            onClick={handleScrape}
            disabled={isScraping || !scrapeUrl.trim()}
            className="bg-[#0F7C4F] hover:bg-[#0d6b42] text-white rounded-full px-4 sm:px-6 w-full sm:w-auto whitespace-nowrap"
          >
            {isScraping ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                <span className="hidden sm:inline">Scraping...</span>
                <span className="sm:hidden">Scraping</span>
              </>
            ) : (
              <>
                <Globe className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Scrape & Fetch</span>
                <span className="sm:hidden">Scrape</span>
              </>
            )}
          </Button>
        </div>
        {scrapeError && (
          <p className="text-sm text-red-600 mt-2">{scrapeError}</p>
        )}
        {urls.length > 0 && (
          <p className="text-sm text-realm-gray mt-2">
            Found {urls.length} URL{urls.length !== 1 ? "s" : ""}
          </p>
        )}
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
          Add URL
        </Button>
      </div>

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
    </div>
  );
};

export default SitemapGenerator;
