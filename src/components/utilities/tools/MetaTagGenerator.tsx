import React, { useState, useMemo } from "react";
import { Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface MetaTagGeneratorProps {
  onCopy?: (text: string) => void;
}

// Escape HTML function - pure string-based implementation to avoid DOM issues
const escapeHtml = (text: string): string => {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const MetaTagGenerator: React.FC<MetaTagGeneratorProps> = ({ onCopy }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    keywords: "",
    author: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    ogUrl: "",
    ogType: "website",
    ogSiteName: "",
    ogLocale: "en_US",
    twitterCard: "summary_large_image",
    twitterSite: "",
    twitterCreator: "",
    canonicalUrl: "",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    themeColor: "#0F7C4F",
    language: "en",
    charset: "UTF-8",
  });

  const metaTags = useMemo(() => {
    const tags: string[] = [];

    // Charset and Viewport
    tags.push(`<meta charset="${escapeHtml(formData.charset)}" />`);
    tags.push(`<meta name="viewport" content="${escapeHtml(formData.viewport)}" />`);

    // Basic Meta Tags
    if (formData.title) tags.push(`<title>${escapeHtml(formData.title)}</title>`);
    if (formData.description) tags.push(`<meta name="description" content="${escapeHtml(formData.description)}" />`);
    if (formData.keywords) tags.push(`<meta name="keywords" content="${escapeHtml(formData.keywords)}" />`);
    if (formData.author) tags.push(`<meta name="author" content="${escapeHtml(formData.author)}" />`);
    tags.push(`<meta name="robots" content="${escapeHtml(formData.robots)}" />`);
    tags.push(`<meta name="language" content="${escapeHtml(formData.language)}" />`);
    tags.push(`<meta name="theme-color" content="${escapeHtml(formData.themeColor)}" />`);

    // Open Graph Tags
    if (formData.ogTitle || formData.title) {
      tags.push(`<meta property="og:title" content="${escapeHtml(formData.ogTitle || formData.title)}" />`);
    }
    if (formData.ogDescription || formData.description) {
      tags.push(`<meta property="og:description" content="${escapeHtml(formData.ogDescription || formData.description)}" />`);
    }
    if (formData.ogImage) tags.push(`<meta property="og:image" content="${escapeHtml(formData.ogImage)}" />`);
    if (formData.ogUrl) tags.push(`<meta property="og:url" content="${escapeHtml(formData.ogUrl)}" />`);
    tags.push(`<meta property="og:type" content="${escapeHtml(formData.ogType)}" />`);
    if (formData.ogSiteName) tags.push(`<meta property="og:site_name" content="${escapeHtml(formData.ogSiteName)}" />`);
    tags.push(`<meta property="og:locale" content="${escapeHtml(formData.ogLocale)}" />`);

    // Twitter Card Tags
    tags.push(`<meta name="twitter:card" content="${escapeHtml(formData.twitterCard)}" />`);
    if (formData.twitterSite) tags.push(`<meta name="twitter:site" content="${escapeHtml(formData.twitterSite)}" />`);
    if (formData.twitterCreator) tags.push(`<meta name="twitter:creator" content="${escapeHtml(formData.twitterCreator)}" />`);
    if (formData.ogTitle || formData.title) {
      tags.push(`<meta name="twitter:title" content="${escapeHtml(formData.ogTitle || formData.title)}" />`);
    }
    if (formData.ogDescription || formData.description) {
      tags.push(`<meta name="twitter:description" content="${escapeHtml(formData.ogDescription || formData.description)}" />`);
    }
    if (formData.ogImage) tags.push(`<meta name="twitter:image" content="${escapeHtml(formData.ogImage)}" />`);

    // Canonical URL
    if (formData.canonicalUrl) {
      tags.push(`<link rel="canonical" href="${escapeHtml(formData.canonicalUrl)}" />`);
    }

    return tags.join("\n");
  }, [formData]);

  // SEO Score Calculation
  const seoScore = useMemo(() => {
    let score = 0;
    if (formData.title && formData.title.length >= 30 && formData.title.length <= 60) score += 20;
    if (formData.description && formData.description.length >= 120 && formData.description.length <= 160) score += 20;
    if (formData.ogTitle || formData.title) score += 15;
    if (formData.ogDescription || formData.description) score += 15;
    if (formData.ogImage) score += 10;
    if (formData.ogUrl) score += 5;
    if (formData.canonicalUrl) score += 5;
    if (formData.keywords) score += 5;
    if (formData.author) score += 5;
    return score;
  }, [formData]);

  const handleCopy = () => {
    if (onCopy && metaTags) {
      onCopy(metaTags);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([metaTags], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "meta-tags.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      {/* SEO Score */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-[#0F7C4F]/10 to-[#0F7C4F]/5 rounded-lg border border-[#0F7C4F]/20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-realm-black mb-1">SEO Score</h3>
            <p className="text-xs text-realm-gray">Optimize your meta tags for better search visibility</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-2xl sm:text-3xl font-bold text-[#0F7C4F]">{seoScore}%</div>
            <div className="w-24 sm:w-32 h-2 bg-realm-lightgray rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0F7C4F] transition-all duration-300"
                style={{ width: `${seoScore}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Basic Meta Tags */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-realm-black border-b border-realm-lightgray pb-2">
            Basic Meta Tags
          </h3>
          <div>
            <Label htmlFor="title" className="text-sm font-medium text-realm-black">
              Page Title *
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => updateField("title", e.target.value)}
              placeholder="My Awesome Page"
              className="mt-1"
            />
            <div className="flex items-center justify-between mt-1">
              <p className={`text-xs ${formData.title.length >= 30 && formData.title.length <= 60 ? 'text-[#0F7C4F]' : formData.title.length > 60 ? 'text-red-600' : 'text-realm-gray'}`}>
                {formData.title.length}/60 characters
              </p>
              {formData.title.length < 30 && (
                <p className="text-xs text-amber-600">Too short (min 30)</p>
              )}
              {formData.title.length > 60 && (
                <p className="text-xs text-red-600">Too long (max 60)</p>
              )}
            </div>
          </div>
          <div>
            <Label htmlFor="description" className="text-sm font-medium text-realm-black">
              Meta Description *
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => updateField("description", e.target.value)}
              placeholder="A brief description of your page"
              className="mt-1 min-h-[80px]"
            />
            <div className="flex items-center justify-between mt-1">
              <p className={`text-xs ${formData.description.length >= 120 && formData.description.length <= 160 ? 'text-[#0F7C4F]' : formData.description.length > 160 ? 'text-red-600' : 'text-realm-gray'}`}>
                {formData.description.length}/160 characters
              </p>
              {formData.description.length < 120 && formData.description.length > 0 && (
                <p className="text-xs text-amber-600">Recommended: 120-160</p>
              )}
              {formData.description.length > 160 && (
                <p className="text-xs text-red-600">Too long (max 160)</p>
              )}
            </div>
          </div>
          <div>
            <Label htmlFor="keywords" className="text-sm font-medium text-realm-black">
              Keywords
            </Label>
            <Input
              id="keywords"
              value={formData.keywords}
              onChange={(e) => updateField("keywords", e.target.value)}
              placeholder="keyword1, keyword2, keyword3"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="author" className="text-sm font-medium text-realm-black">
              Author
            </Label>
            <Input
              id="author"
              value={formData.author}
              onChange={(e) => updateField("author", e.target.value)}
              placeholder="Author Name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="robots" className="text-sm font-medium text-realm-black">
              Robots
            </Label>
            <select
              id="robots"
              value={formData.robots}
              onChange={(e) => updateField("robots", e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F]"
            >
              <option value="index, follow">Index, Follow</option>
              <option value="noindex, follow">Noindex, Follow</option>
              <option value="index, nofollow">Index, Nofollow</option>
              <option value="noindex, nofollow">Noindex, Nofollow</option>
            </select>
          </div>
        </div>

        {/* Open Graph & Twitter */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-realm-black border-b border-realm-lightgray pb-2">
            Social Media Tags
          </h3>
          <div>
            <Label htmlFor="og-title" className="text-sm font-medium text-realm-black">
              OG Title
            </Label>
            <Input
              id="og-title"
              value={formData.ogTitle}
              onChange={(e) => updateField("ogTitle", e.target.value)}
              placeholder="Open Graph Title"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="og-description" className="text-sm font-medium text-realm-black">
              OG Description
            </Label>
            <Textarea
              id="og-description"
              value={formData.ogDescription}
              onChange={(e) => updateField("ogDescription", e.target.value)}
              placeholder="Open Graph Description"
              className="mt-1 min-h-[80px]"
            />
          </div>
          <div>
            <Label htmlFor="og-image" className="text-sm font-medium text-realm-black">
              OG Image URL
            </Label>
            <Input
              id="og-image"
              value={formData.ogImage}
              onChange={(e) => updateField("ogImage", e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="og-url" className="text-sm font-medium text-realm-black">
              OG URL
            </Label>
            <Input
              id="og-url"
              value={formData.ogUrl}
              onChange={(e) => updateField("ogUrl", e.target.value)}
              placeholder="https://example.com/page"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="og-type" className="text-sm font-medium text-realm-black">
              OG Type
            </Label>
            <select
              id="og-type"
              value={formData.ogType}
              onChange={(e) => updateField("ogType", e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F] text-sm"
            >
              <option value="website">Website</option>
              <option value="article">Article</option>
              <option value="blog">Blog</option>
              <option value="product">Product</option>
              <option value="video">Video</option>
              <option value="music">Music</option>
            </select>
          </div>
          <div>
            <Label htmlFor="og-site-name" className="text-sm font-medium text-realm-black">
              OG Site Name
            </Label>
            <Input
              id="og-site-name"
              value={formData.ogSiteName}
              onChange={(e) => updateField("ogSiteName", e.target.value)}
              placeholder="Your Site Name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="og-locale" className="text-sm font-medium text-realm-black">
              OG Locale
            </Label>
            <Input
              id="og-locale"
              value={formData.ogLocale}
              onChange={(e) => updateField("ogLocale", e.target.value)}
              placeholder="en_US"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="twitter-card" className="text-sm font-medium text-realm-black">
              Twitter Card Type
            </Label>
            <select
              id="twitter-card"
              value={formData.twitterCard}
              onChange={(e) => updateField("twitterCard", e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F]"
            >
              <option value="summary">Summary</option>
              <option value="summary_large_image">Summary Large Image</option>
            </select>
          </div>
          <div>
            <Label htmlFor="twitter-site" className="text-sm font-medium text-realm-black">
              Twitter Site (@username)
            </Label>
            <Input
              id="twitter-site"
              value={formData.twitterSite}
              onChange={(e) => updateField("twitterSite", e.target.value)}
              placeholder="@username"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="twitter-creator" className="text-sm font-medium text-realm-black">
              Twitter Creator (@username)
            </Label>
            <Input
              id="twitter-creator"
              value={formData.twitterCreator}
              onChange={(e) => updateField("twitterCreator", e.target.value)}
              placeholder="@creator"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="canonical-url" className="text-sm font-medium text-realm-black">
              Canonical URL
            </Label>
            <Input
              id="canonical-url"
              value={formData.canonicalUrl}
              onChange={(e) => updateField("canonicalUrl", e.target.value)}
              placeholder="https://example.com/page"
              className="mt-1"
            />
          </div>
        </div>
      </div>

      {/* Advanced Options */}
      <div className="p-4 sm:p-6 bg-white rounded-lg border border-realm-lightgray">
        <h3 className="text-base sm:text-lg font-semibold text-realm-black border-b border-realm-lightgray pb-2 mb-4">
          Advanced Options
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="viewport" className="text-sm font-medium text-realm-black">
              Viewport
            </Label>
            <Input
              id="viewport"
              value={formData.viewport}
              onChange={(e) => updateField("viewport", e.target.value)}
              className="mt-1 text-sm"
            />
          </div>
          <div>
            <Label htmlFor="theme-color" className="text-sm font-medium text-realm-black">
              Theme Color
            </Label>
            <div className="flex gap-2 mt-1">
              <Input
                type="color"
                id="theme-color"
                value={formData.themeColor}
                onChange={(e) => updateField("themeColor", e.target.value)}
                className="w-12 h-10 p-1 border border-realm-lightgray rounded-lg cursor-pointer flex-shrink-0"
              />
              <Input
                value={formData.themeColor}
                onChange={(e) => updateField("themeColor", e.target.value)}
                placeholder="#0F7C4F"
                className="flex-1 text-sm"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="language" className="text-sm font-medium text-realm-black">
              Language
            </Label>
            <Input
              id="language"
              value={formData.language}
              onChange={(e) => updateField("language", e.target.value)}
              placeholder="en"
              className="mt-1 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Generated Output */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
          <Label className="text-sm font-medium text-realm-black">Generated Meta Tags</Label>
          <div className="flex gap-2">
            <Button
              onClick={handleCopy}
              variant="outline"
              className="rounded-full px-4 sm:px-6 py-2 flex items-center gap-2 flex-1 sm:flex-initial"
            >
              <Copy className="w-4 h-4" />
              <span className="hidden sm:inline">Copy</span>
              <span className="sm:hidden">Copy</span>
            </Button>
            <Button
              onClick={handleDownload}
              variant="outline"
              className="rounded-full px-4 sm:px-6 py-2 flex items-center gap-2 flex-1 sm:flex-initial"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
              <span className="sm:hidden">Download</span>
            </Button>
          </div>
        </div>
        <Textarea
          value={metaTags}
          readOnly
          className="min-h-[300px] font-mono text-xs sm:text-sm bg-realm-lightgray border-realm-lightgray overflow-x-auto"
        />
      </div>
    </div>
  );
};

export default MetaTagGenerator;
