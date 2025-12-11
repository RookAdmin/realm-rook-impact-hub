import React, { useState, useEffect } from "react";
import { Loader2, ExternalLink, Copy, Check, Globe, Linkedin, MessageCircle, Facebook, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SocialMediaPreviewProps {
  onCopy?: (text: string) => void;
}

interface MetaData {
  title: string;
  description: string;
  image: string;
  url: string;
  siteName: string;
}

interface PlatformPreview {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

const platforms: PlatformPreview[] = [
  { name: "LinkedIn", icon: Linkedin, color: "#0077B5", bgColor: "bg-[#0077B5]" },
  { name: "WhatsApp", icon: MessageCircle, color: "#25D366", bgColor: "bg-[#25D366]" },
  { name: "Facebook", icon: Facebook, color: "#1877F2", bgColor: "bg-[#1877F2]" },
  { name: "Twitter/X", icon: Twitter, color: "#1DA1F2", bgColor: "bg-[#1DA1F2]" },
  { name: "Telegram", icon: Send, color: "#0088CC", bgColor: "bg-[#0088CC]" },
  { name: "Generic", icon: Globe, color: "#6366F1", bgColor: "bg-[#6366F1]" },
];

const SocialMediaPreview: React.FC<SocialMediaPreviewProps> = ({ onCopy }) => {
  const [url, setUrl] = useState("");
  const [metaData, setMetaData] = useState<MetaData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const fetchMetaData = async (targetUrl: string) => {
    setLoading(true);
    setError(null);
    setMetaData(null);

    // Ensure URL has protocol
    let urlToFetch = targetUrl.trim();
    if (!urlToFetch.startsWith("http://") && !urlToFetch.startsWith("https://")) {
      urlToFetch = `https://${urlToFetch}`;
    }

    try {
      // Try multiple CORS proxy services for better reliability
      const proxies = [
        `https://api.allorigins.win/get?url=${encodeURIComponent(urlToFetch)}`,
        `https://corsproxy.io/?${encodeURIComponent(urlToFetch)}`,
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(urlToFetch)}`,
      ];

      let htmlContent = "";
      let lastError: Error | null = null;

      // Try each proxy until one works (with timeout)
      for (const proxyUrl of proxies) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

          const response = await fetch(proxyUrl, {
            method: "GET",
            headers: {
              "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            },
            signal: controller.signal,
          });

          clearTimeout(timeoutId);

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          const data = await response.json();
          
          // Handle different proxy response formats
          if (data.contents) {
            htmlContent = data.contents;
          } else if (typeof data === "string") {
            htmlContent = data;
          } else if (data.data) {
            htmlContent = data.data;
          } else if (data.status?.http_code === 200 && data.contents) {
            htmlContent = data.contents;
          } else {
            throw new Error("Unexpected response format");
          }

          if (htmlContent && htmlContent.length > 100) {
            break; // Success, exit loop
          }
        } catch (err: any) {
          if (err.name === "AbortError") {
            lastError = new Error("Request timeout");
          } else {
            lastError = err;
          }
          continue; // Try next proxy
        }
      }

      if (!htmlContent) {
        throw lastError || new Error("All proxy services failed");
      }

      // Parse HTML to extract meta tags
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");

      const getMetaContent = (property: string, attribute: string = "property") => {
        const meta = doc.querySelector(`meta[${attribute}="${property}"]`) || 
                    doc.querySelector(`meta[name="${property}"]`);
        return meta?.getAttribute("content") || "";
      };

      const title = getMetaContent("og:title") || 
                   doc.querySelector("title")?.textContent || 
                   getMetaContent("twitter:title") || 
                   "";
      
      const description = getMetaContent("og:description") || 
                         getMetaContent("description") || 
                         getMetaContent("twitter:description") || 
                         "";
      
      const image = getMetaContent("og:image") || 
                   getMetaContent("twitter:image") || 
                   "";
      
      const siteName = getMetaContent("og:site_name") || 
                      new URL(urlToFetch).hostname.replace("www.", "") || 
                      "";

      setMetaData({
        title: title || "No Title",
        description: description || "No description available",
        image: image || "",
        url: urlToFetch,
        siteName: siteName || new URL(urlToFetch).hostname,
      });
    } catch (err: any) {
      console.error("Fetch error:", err);
      const errorMessage = err.message || "Failed to fetch link preview";
      
      // Provide helpful error message
      if (errorMessage.includes("CORS") || errorMessage.includes("proxy")) {
        setError("Unable to fetch preview due to CORS restrictions. You can still manually edit the preview data below.");
      } else if (errorMessage.includes("Failed to fetch") || errorMessage.includes("network")) {
        setError("Network error. Please check your internet connection and try again.");
      } else {
        setError("Failed to fetch link preview. You can still manually edit the preview data below.");
      }
      
      // Set default data for manual input even on error
      try {
        const urlObj = new URL(urlToFetch);
        setMetaData({
          title: "",
          description: "",
          image: "",
          url: urlToFetch,
          siteName: urlObj.hostname.replace("www.", "") || "",
        });
      } catch {
        setMetaData({
          title: "",
          description: "",
          image: "",
          url: urlToFetch,
          siteName: "",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFetch = () => {
    if (!url.trim()) {
      setError("Please enter a valid URL");
      return;
    }
    fetchMetaData(url);
  };

  const handleManualUpdate = (field: keyof MetaData, value: string) => {
    if (!metaData) return;
    setMetaData({ ...metaData, [field]: value });
  };

  const handleCopyUrl = async () => {
    if (metaData?.url) {
      try {
        await navigator.clipboard.writeText(metaData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        onCopy?.(metaData.url);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  const renderPreview = (platform: PlatformPreview) => {
    if (!metaData) return null;

    const PlatformIcon = platform.icon;
    const displayTitle = metaData.title || "Untitled";
    const displayDescription = metaData.description || "No description";
    const displayImage = metaData.image || "";
    const hostname = new URL(metaData.url).hostname.replace("www.", "");

    // Render platform-specific previews with exact styling
    switch (platform.name) {
      case "LinkedIn":
        return (
          <div key={platform.name} className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <PlatformIcon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: platform.color }} />
              <h3 className="text-xs sm:text-sm font-semibold text-realm-black">{platform.name}</h3>
            </div>
            <div className="bg-white border-l-4 border-[#0077B5] rounded-r-lg shadow-sm hover:shadow-md transition-all overflow-hidden">
              {displayImage && (
                <div className="w-full h-40 sm:h-48 md:h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={displayImage}
                    alt={displayTitle}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
              <div className="p-3 sm:p-4">
                <div className="text-[10px] sm:text-xs text-gray-500 mb-1.5 font-medium uppercase tracking-wide">
                  {metaData.siteName || hostname}
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5 line-clamp-2 leading-tight">
                  {truncateText(displayTitle, 90)}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2 leading-relaxed">
                  {truncateText(displayDescription, 140)}
                </p>
                <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-gray-100">
                  <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs text-gray-500 truncate">{hostname}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "WhatsApp":
        return (
          <div key={platform.name} className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <PlatformIcon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: platform.color }} />
              <h3 className="text-xs sm:text-sm font-semibold text-realm-black">{platform.name}</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                {displayImage && (
                  <div className="w-full sm:w-32 sm:flex-shrink-0 h-32 sm:h-auto bg-gray-100 overflow-hidden">
                    <img
                      src={displayImage}
                      alt={displayTitle}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                )}
                <div className="flex-1 p-3 sm:p-4">
                  <div className="text-[10px] sm:text-xs text-gray-400 mb-1 font-normal">
                    {metaData.siteName || hostname}
                  </div>
                  <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-1 line-clamp-2 leading-snug">
                    {truncateText(displayTitle, 70)}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-600 mb-2 line-clamp-2 leading-relaxed">
                    {truncateText(displayDescription, 100)}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
                    <span className="text-[10px] text-gray-400 truncate">{hostname}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Facebook":
        return (
          <div key={platform.name} className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <PlatformIcon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: platform.color }} />
              <h3 className="text-xs sm:text-sm font-semibold text-realm-black">{platform.name}</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden">
              {displayImage && (
                <div className="w-full h-40 sm:h-48 md:h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={displayImage}
                    alt={displayTitle}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
              <div className="p-3 sm:p-4">
                <div className="text-[10px] sm:text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wider">
                  {metaData.siteName || hostname}
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5 line-clamp-2 leading-tight">
                  {truncateText(displayTitle, 100)}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2 leading-relaxed">
                  {truncateText(displayDescription, 150)}
                </p>
                <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-gray-100">
                  <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs text-gray-500 truncate">{hostname}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "Twitter/X":
        return (
          <div key={platform.name} className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <PlatformIcon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: platform.color }} />
              <h3 className="text-xs sm:text-sm font-semibold text-realm-black">{platform.name}</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden">
              {displayImage && (
                <div className="w-full h-40 sm:h-48 md:h-56 bg-gray-100 overflow-hidden rounded-t-2xl">
                  <img
                    src={displayImage}
                    alt={displayTitle}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
              <div className="p-3 sm:p-4">
                <div className="text-[10px] sm:text-xs text-gray-500 mb-1.5 font-medium">
                  {metaData.siteName || hostname}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 line-clamp-2 leading-tight">
                  {truncateText(displayTitle, 120)}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2 leading-relaxed">
                  {truncateText(displayDescription, 180)}
                </p>
                <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-gray-100">
                  <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs text-gray-500 truncate">{hostname}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "Telegram":
        return (
          <div key={platform.name} className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <PlatformIcon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: platform.color }} />
              <h3 className="text-xs sm:text-sm font-semibold text-realm-black">{platform.name}</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden">
              <div className="flex">
                {displayImage && (
                  <div className="w-24 sm:w-32 flex-shrink-0 h-24 sm:h-32 bg-gray-100 overflow-hidden">
                    <img
                      src={displayImage}
                      alt={displayTitle}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                )}
                <div className="flex-1 p-3 sm:p-4 min-w-0">
                  <div className="text-[10px] sm:text-xs text-gray-400 mb-1 font-normal">
                    {metaData.siteName || hostname}
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1 line-clamp-2 leading-snug">
                    {truncateText(displayTitle, 80)}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-600 mb-1 line-clamp-2 leading-relaxed">
                    {truncateText(displayDescription, 110)}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
                    <span className="text-[10px] text-gray-400 truncate">{hostname}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default: // Generic
        return (
          <div key={platform.name} className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <PlatformIcon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: platform.color }} />
              <h3 className="text-xs sm:text-sm font-semibold text-realm-black">{platform.name}</h3>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden">
              {displayImage && (
                <div className="w-full h-40 sm:h-48 md:h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={displayImage}
                    alt={displayTitle}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
              <div className="p-3 sm:p-4">
                <div className="text-[10px] sm:text-xs text-gray-500 mb-1.5 font-medium">
                  {metaData.siteName || hostname}
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5 line-clamp-2 leading-tight">
                  {truncateText(displayTitle, 90)}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2 leading-relaxed">
                  {truncateText(displayDescription, 140)}
                </p>
                <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-gray-100">
                  <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs text-gray-500 truncate">{hostname}</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* URL Input Section */}
      <div className="p-4 sm:p-6 bg-realm-lightgray rounded-lg border border-realm-lightgray">
        <Label className="text-sm font-medium text-realm-black mb-2 block">
          Enter URL to Preview
        </Label>
        <p className="text-xs text-realm-gray mb-3">
          See how your link will appear when shared on different social media platforms
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setError(null);
            }}
            placeholder="https://example.com"
            className="flex-1 w-full"
            onKeyPress={(e) => {
              if (e.key === "Enter" && !loading) {
                handleFetch();
              }
            }}
          />
          <Button
            onClick={handleFetch}
            disabled={loading || !url.trim()}
            className="bg-[#0F7C4F] hover:bg-[#0d6b42] text-white rounded-full px-4 sm:px-6 w-full sm:w-auto whitespace-nowrap"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                <span className="hidden sm:inline">Fetching...</span>
                <span className="sm:hidden">Loading</span>
              </>
            ) : (
              <>
                <Globe className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Fetch Preview</span>
                <span className="sm:hidden">Fetch</span>
              </>
            )}
          </Button>
        </div>
        {error && (
          <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800 font-medium mb-1">{error}</p>
            <p className="text-xs text-amber-700">
              Don't worry! You can still manually edit the preview data below to see how your link will appear on social media platforms.
            </p>
          </div>
        )}
        {metaData && (
          <div className="mt-3 flex items-center gap-2">
            <Button
              onClick={handleCopyUrl}
              variant="outline"
              size="sm"
              className="rounded-full text-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 mr-1" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 mr-1" />
                  Copy URL
                </>
              )}
            </Button>
            <a
              href={metaData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-realm-gray hover:text-[#0F7C4F] flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" />
              Open in new tab
            </a>
          </div>
        )}
      </div>

      {/* Manual Edit Section */}
      {metaData && (
        <div className="p-4 sm:p-6 bg-white rounded-lg border border-realm-lightgray">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-sm sm:text-base font-semibold text-realm-black">Edit Preview Data</h3>
            <div className="flex items-center gap-2 text-xs text-[#0F7C4F]">
              <div className="w-2 h-2 bg-[#0F7C4F] rounded-full animate-pulse"></div>
              <span className="hidden sm:inline">Live Preview</span>
            </div>
          </div>
          <p className="text-xs text-realm-gray mb-3 sm:mb-4">
            Changes update in real-time across all platform previews below
          </p>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Title</Label>
              <Input
                value={metaData.title}
                onChange={(e) => handleManualUpdate("title", e.target.value)}
                placeholder="Page title"
                className="w-full"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Description</Label>
              <textarea
                value={metaData.description}
                onChange={(e) => handleManualUpdate("description", e.target.value)}
                placeholder="Page description"
                className="w-full px-3 py-2 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F] min-h-[80px] text-sm"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Image URL</Label>
              <Input
                value={metaData.image}
                onChange={(e) => handleManualUpdate("image", e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Site Name</Label>
              <Input
                value={metaData.siteName}
                onChange={(e) => handleManualUpdate("siteName", e.target.value)}
                placeholder="Site name"
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* Platform Previews */}
      {metaData && (
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-realm-black mb-3 sm:mb-4">Social Media Previews</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {platforms.map((platform) => renderPreview(platform))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!metaData && !loading && (
        <div className="text-center py-12 bg-realm-lightgray rounded-lg">
          <Globe className="w-12 h-12 mx-auto text-realm-gray mb-4" />
          <p className="text-realm-gray">Enter a URL above to see how it appears on social media platforms</p>
        </div>
      )}
    </div>
  );
};

export default SocialMediaPreview;

