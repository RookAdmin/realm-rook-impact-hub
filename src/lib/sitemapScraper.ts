// Sitemap scraper utility for real-time sitemap generation

export interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
}

export const scrapeWebsite = async (url: string): Promise<SitemapURL[]> => {
  try {
    // Normalize URL
    const baseUrl = url.replace(/\/$/, "");
    const parsedUrl = new URL(baseUrl);
    const domain = parsedUrl.origin;

    // Fetch the homepage
    const response = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; SitemapGenerator/1.0)",
      },
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Extract all links
    const links = Array.from(doc.querySelectorAll("a[href]"));
    const urls: Set<string> = new Set();
    
    // Add homepage
    urls.add(baseUrl);

    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;

      try {
        // Handle relative URLs
        let fullUrl: string;
        if (href.startsWith("http://") || href.startsWith("https://")) {
          fullUrl = href;
        } else if (href.startsWith("//")) {
          fullUrl = `${parsedUrl.protocol}${href}`;
        } else if (href.startsWith("/")) {
          fullUrl = `${domain}${href}`;
        } else {
          fullUrl = `${baseUrl}/${href}`;
        }

        // Only include URLs from the same domain
        const linkUrl = new URL(fullUrl);
        if (linkUrl.origin === domain) {
          // Remove fragments and query params for cleaner sitemap
          const cleanUrl = `${linkUrl.origin}${linkUrl.pathname}`;
          if (cleanUrl.length < 200) { // Avoid very long URLs
            urls.add(cleanUrl);
          }
        }
      } catch (e) {
        // Skip invalid URLs
      }
    });

    // Convert to SitemapURL format
    const today = new Date().toISOString().split("T")[0];
    const sitemapUrls: SitemapURL[] = Array.from(urls).map((url, index) => {
      // Determine priority based on depth
      const depth = (url.match(/\//g) || []).length - 2; // Subtract 2 for domain slashes
      let priority = "0.8";
      if (depth === 0) priority = "1.0";
      else if (depth === 1) priority = "0.9";
      else if (depth >= 3) priority = "0.6";

      // Determine changefreq
      let changefreq: SitemapURL["changefreq"] = "weekly";
      if (url === baseUrl) changefreq = "daily";
      else if (depth >= 3) changefreq = "monthly";

      return {
        loc: url,
        lastmod: today,
        changefreq,
        priority,
      };
    });

    return sitemapUrls;
  } catch (error) {
    console.error("Error scraping website:", error);
    throw error;
  }
};

// Alternative: Use a backend API endpoint
export const scrapeWebsiteViaAPI = async (url: string): Promise<SitemapURL[]> => {
  try {
    // This would call your backend API endpoint
    // For now, we'll use the client-side scraper
    // In production, you'd want to use: const response = await fetch('/api/scrape-sitemap', { method: 'POST', body: JSON.stringify({ url }) });
    return await scrapeWebsite(url);
  } catch (error) {
    throw error;
  }
};

