import React, { useState, useMemo } from "react";
import { Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface MetaTagGeneratorProps {
  onCopy?: (text: string) => void;
}

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
    twitterCard: "summary_large_image",
    twitterSite: "",
    canonicalUrl: "",
    robots: "index, follow",
  });

  const metaTags = useMemo(() => {
    const tags: string[] = [];

    // Basic Meta Tags
    if (formData.title) tags.push(`<title>${escapeHtml(formData.title)}</title>`);
    if (formData.description) tags.push(`<meta name="description" content="${escapeHtml(formData.description)}" />`);
    if (formData.keywords) tags.push(`<meta name="keywords" content="${escapeHtml(formData.keywords)}" />`);
    if (formData.author) tags.push(`<meta name="author" content="${escapeHtml(formData.author)}" />`);
    tags.push(`<meta name="robots" content="${escapeHtml(formData.robots)}" />`);

    // Open Graph Tags
    if (formData.ogTitle || formData.title) {
      tags.push(`<meta property="og:title" content="${escapeHtml(formData.ogTitle || formData.title)}" />`);
    }
    if (formData.ogDescription || formData.description) {
      tags.push(`<meta property="og:description" content="${escapeHtml(formData.ogDescription || formData.description)}" />`);
    }
    if (formData.ogImage) tags.push(`<meta property="og:image" content="${escapeHtml(formData.ogImage)}" />`);
    if (formData.ogUrl) tags.push(`<meta property="og:url" content="${escapeHtml(formData.ogUrl)}" />`);
    tags.push(`<meta property="og:type" content="website" />`);

    // Twitter Card Tags
    tags.push(`<meta name="twitter:card" content="${escapeHtml(formData.twitterCard)}" />`);
    if (formData.twitterSite) tags.push(`<meta name="twitter:site" content="${escapeHtml(formData.twitterSite)}" />`);
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

  const escapeHtml = (text: string) => {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  };

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
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Basic Meta Tags */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-realm-black border-b border-realm-lightgray pb-2">
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
            <p className="text-xs text-realm-gray mt-1">{formData.title.length}/60 characters</p>
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
            <p className="text-xs text-realm-gray mt-1">{formData.description.length}/160 characters</p>
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
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-realm-black border-b border-realm-lightgray pb-2">
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

      {/* Generated Output */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <Label className="text-sm font-medium text-realm-black">Generated Meta Tags</Label>
          <div className="flex gap-2">
            <Button
              onClick={handleCopy}
              variant="outline"
              className="rounded-full px-6 py-2 flex items-center gap-2"
            >
              <Copy className="w-4 h-4" />
              Copy
            </Button>
            <Button
              onClick={handleDownload}
              variant="outline"
              className="rounded-full px-6 py-2 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>
        </div>
        <Textarea
          value={metaTags}
          readOnly
          className="min-h-[300px] font-mono text-sm bg-realm-lightgray border-realm-lightgray"
        />
      </div>
    </div>
  );
};

export default MetaTagGenerator;
