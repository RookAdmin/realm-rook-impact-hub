// Powerful sitemap crawler utility - more powerful than search engines

export interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
}

// CORS proxy endpoints for fetching external websites - multiple reliable options
const CORS_PROXIES = [
  (url: string) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
  (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url: string) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
  (url: string) => `https://cors-anywhere.herokuapp.com/${url}`,
  (url: string) => `https://thingproxy.freeboard.io/fetch/${url}`,
];

const fetchWithProxy = async (url: string, retries = 5): Promise<string> => {
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt < retries; attempt++) {
    // Shuffle proxies for better distribution
    const shuffledProxies = [...CORS_PROXIES].sort(() => Math.random() - 0.5);
    
    for (const proxyFn of shuffledProxies) {
      try {
        const proxyUrl = proxyFn(url);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

        const response = await fetch(proxyUrl, {
          method: "GET",
          headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
            "Cache-Control": "no-cache",
          },
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          lastError = new Error(`HTTP ${response.status}: ${response.statusText}`);
          continue;
        }

        let html = await response.text();
        
        // Handle AllOrigins wrapper
        if (proxyUrl.includes("allorigins.win")) {
          try {
            const data = JSON.parse(html);
            html = data.contents || data.data || html;
          } catch (e) {
            // Not JSON, use as is
          }
        }

        // Verify we got actual HTML content
        if (html && html.length > 100 && (html.includes("<html") || html.includes("<!DOCTYPE") || html.includes("<body"))) {
          return html;
        }
        
        lastError = new Error("Received invalid HTML content");
      } catch (error: any) {
        if (error.name === "AbortError") {
          lastError = new Error("Request timeout");
        } else {
          lastError = error;
        }
        continue; // Try next proxy
      }
    }
    
    // Wait before retry
    if (attempt < retries - 1) {
      await new Promise(resolve => setTimeout(resolve, 2000 * (attempt + 1))); // Exponential backoff
    }
  }
  
  throw lastError || new Error("Failed to fetch website. The site may block automated requests or require authentication.");
};

const extractLinks = (html: string, baseUrl: string, domain: string): Set<string> => {
  const urls = new Set<string>();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const parsedBaseUrl = new URL(baseUrl);

  // Helper to normalize URLs
  const normalizeUrl = (href: string): string | null => {
    if (!href || href.trim() === "") return null;
    
    try {
      let fullUrl: string;
      href = href.trim();
      
      // Skip non-HTTP protocols
      if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:") || href.startsWith("#")) {
        return null;
      }
      
      if (href.startsWith("http://") || href.startsWith("https://")) {
        fullUrl = href;
      } else if (href.startsWith("//")) {
        fullUrl = `${parsedBaseUrl.protocol}${href}`;
      } else if (href.startsWith("/")) {
        fullUrl = `${domain}${href}`;
      } else {
        fullUrl = new URL(href, baseUrl).href;
      }

      const linkUrl = new URL(fullUrl);
      
      // Only include same-domain URLs
      if (linkUrl.origin !== domain) return null;
      
      // Remove query params and fragments for cleaner sitemap
      const cleanUrl = `${linkUrl.origin}${linkUrl.pathname}`;
      
      // Filter out non-page URLs
      if (
        cleanUrl.includes("#") ||
        cleanUrl.match(/\.(jpg|jpeg|png|gif|svg|webp|pdf|zip|rar|exe|dmg|css|js|ico|woff|woff2|ttf|eot|mp4|mp3|avi|mov|wmv|flv|webm)$/i) ||
        cleanUrl.length > 500 ||
        cleanUrl.match(/\/api\//) ||
        cleanUrl.match(/\/admin\//) ||
        cleanUrl.match(/\/private\//)
      ) {
        return null;
      }
      
      return cleanUrl;
    } catch (e) {
      return null;
    }
  };

  // Extract from ALL <a> tags (most comprehensive)
  const allLinks = Array.from(doc.querySelectorAll("a[href]"));
  console.log(`Found ${allLinks.length} <a> tags in HTML`);
  allLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href) {
      const normalized = normalizeUrl(href);
      if (normalized) {
        urls.add(normalized);
      }
    }
  });
  
  // Also try to extract from href attributes in the raw HTML (in case DOM parsing missed some)
  const hrefRegex = /href=["']([^"']+)["']/gi;
  let match;
  while ((match = hrefRegex.exec(html)) !== null) {
    const href = match[1];
    if (href) {
      const normalized = normalizeUrl(href);
      if (normalized) {
        urls.add(normalized);
      }
    }
  }

  // Extract from navigation menus (often contains important links)
  const navSelectors = [
    "nav a[href]",
    ".menu a[href]",
    ".navigation a[href]",
    ".nav a[href]",
    "header a[href]",
    "footer a[href]",
    ".header a[href]",
    ".footer a[href]",
    "[role='navigation'] a[href]",
  ];
  
  navSelectors.forEach((selector) => {
    try {
      const navLinks = Array.from(doc.querySelectorAll(selector));
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href) {
          const normalized = normalizeUrl(href);
          if (normalized) {
            urls.add(normalized);
          }
        }
      });
    } catch (e) {
      // Skip invalid selectors
    }
  });

  // Extract from sitemap.xml references
  const sitemapSelectors = [
    'link[rel="sitemap"]',
    'a[href*="sitemap"]',
    'a[href*="sitemap.xml"]',
  ];
  
  sitemapSelectors.forEach((selector) => {
    try {
      const sitemapLinks = Array.from(doc.querySelectorAll(selector));
      sitemapLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href && href.includes("sitemap")) {
          const normalized = normalizeUrl(href);
          if (normalized) {
            urls.add(normalized);
          }
        }
      });
    } catch (e) {
      // Skip
    }
  });

  // Extract from common content areas
  const contentSelectors = [
    ".content a[href]",
    ".main a[href]",
    ".article a[href]",
    ".post a[href]",
    ".entry a[href]",
  ];
  
  contentSelectors.forEach((selector) => {
    try {
      const contentLinks = Array.from(doc.querySelectorAll(selector));
      contentLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href) {
          const normalized = normalizeUrl(href);
          if (normalized) {
            urls.add(normalized);
          }
        }
      });
    } catch (e) {
      // Skip
    }
  });

  return urls;
};

// Try to fetch sitemap.xml directly
const fetchSitemapXML = async (baseUrl: string, domain: string): Promise<Set<string>> => {
  const urls = new Set<string>();
  const sitemapUrls = [
    `${domain}/sitemap.xml`,
    `${domain}/sitemap_index.xml`,
    `${baseUrl}/sitemap.xml`,
    `${baseUrl}/sitemap_index.xml`,
  ];

  for (const sitemapUrl of sitemapUrls) {
    try {
      const html = await fetchWithProxy(sitemapUrl);
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/xml");
      
      // Extract <loc> tags from sitemap
      const locs = Array.from(doc.querySelectorAll("loc"));
      locs.forEach((loc) => {
        const text = loc.textContent?.trim();
        if (text) {
          try {
            const url = new URL(text);
            if (url.origin === domain) {
              urls.add(`${url.origin}${url.pathname}`);
            }
          } catch (e) {
            // Skip invalid URLs
          }
        }
      });
      
      if (urls.size > 0) {
        console.log(`Found ${urls.size} URLs from sitemap.xml`);
        return urls;
      }
    } catch (e) {
      // Sitemap not found or invalid, continue
      continue;
    }
  }
  
  return urls;
};

// Alternative link extraction for JavaScript-heavy sites
const extractLinksAlternative = (html: string, baseUrl: string, domain: string): Set<string> => {
  const urls = new Set<string>();
  const parsedBaseUrl = new URL(baseUrl);

  // Extract from data attributes
  const dataLinkPattern = /data-href=["']([^"']+)["']/gi;
  const dataUrlPattern = /data-url=["']([^"']+)["']/gi;
  
  let match;
  while ((match = dataLinkPattern.exec(html)) !== null) {
    try {
      const href = match[1];
      if (href.startsWith("/") || href.startsWith("http")) {
        const fullUrl = href.startsWith("http") ? href : `${domain}${href}`;
        const url = new URL(fullUrl);
        if (url.origin === domain) {
          urls.add(`${url.origin}${url.pathname}`);
        }
      }
    } catch (e) {
      // Skip invalid URLs
    }
  }
  
  while ((match = dataUrlPattern.exec(html)) !== null) {
    try {
      const href = match[1];
      if (href.startsWith("/") || href.startsWith("http")) {
        const fullUrl = href.startsWith("http") ? href : `${domain}${href}`;
        const url = new URL(fullUrl);
        if (url.origin === domain) {
          urls.add(`${url.origin}${url.pathname}`);
        }
      }
    } catch (e) {
      // Skip invalid URLs
    }
  }

  // Extract from JavaScript variables (common patterns)
  const jsUrlPatterns = [
    /['"](https?:\/\/[^'"]+)['"]/g,
    /['"](\/[^'"]+)['"]/g,
    /href:\s*['"]([^'"]+)['"]/g,
    /url:\s*['"]([^'"]+)['"]/g,
  ];

  jsUrlPatterns.forEach((pattern) => {
    while ((match = pattern.exec(html)) !== null) {
      try {
        const href = match[1];
        if (href && !href.includes("javascript:") && !href.includes("mailto:")) {
          const fullUrl = href.startsWith("http") ? href : `${domain}${href}`;
          const url = new URL(fullUrl);
          if (url.origin === domain && !url.pathname.match(/\.(js|css|jpg|png|gif|svg|ico)$/i)) {
            urls.add(`${url.origin}${url.pathname}`);
          }
        }
      } catch (e) {
        // Skip invalid URLs
      }
    }
  });

  return urls;
};

export const scrapeWebsite = async (
  url: string,
  progressCallback?: (current: number, total: number, currentUrl: string) => void
): Promise<SitemapURL[]> => {
  try {
    // Normalize URL
    let baseUrl = url.trim();
    if (!baseUrl.startsWith("http://") && !baseUrl.startsWith("https://")) {
      baseUrl = `https://${baseUrl}`;
    }
    baseUrl = baseUrl.replace(/\/$/, "");
    
    const parsedUrl = new URL(baseUrl);
    const domain = parsedUrl.origin;
    const visited = new Set<string>();
    const allUrls = new Set<string>();

    // Maximum pages to crawl (powerful crawler limit)
    const MAX_PAGES = 500;
    const MAX_DEPTH = 5;
    let pagesCrawled = 0;

    // First, try to fetch sitemap.xml directly (fastest method)
    console.log("Attempting to fetch sitemap.xml...");
    try {
      const sitemapUrls = await fetchSitemapXML(baseUrl, domain);
      if (sitemapUrls.size > 0) {
        console.log(`Using sitemap.xml: Found ${sitemapUrls.size} URLs`);
        sitemapUrls.forEach(url => allUrls.add(url));
        // Still crawl a few pages to discover any missing URLs
      }
    } catch (e) {
      console.log("No sitemap.xml found, will crawl manually");
    }

    // Breadth-first crawling for better coverage - START WITH HOMEPAGE
    // If we found URLs from sitemap, add some to queue for verification, but always start with homepage
    const crawlQueue: Array<{ url: string; depth: number }> = [{ url: baseUrl, depth: 0 }];
    
    // Add a few URLs from sitemap to queue for crawling (to discover more links)
    if (allUrls.size > 0) {
      const sitemapUrlsArray = Array.from(allUrls).slice(0, 20); // Take first 20
      sitemapUrlsArray.forEach((url) => {
        if (url !== baseUrl && !crawlQueue.some(item => item.url === url)) {
          crawlQueue.push({ url, depth: 1 });
        }
      });
    }
    
    // Estimate total pages (will be updated as we discover more)
    let estimatedTotal = Math.max(10, allUrls.size || 10); // Start with at least 10 to show progress
    
    // Initial progress update
    if (progressCallback) {
      progressCallback(0, estimatedTotal, `Starting crawl of ${baseUrl}...`);
    }
    
    console.log(`Starting crawl of ${baseUrl}... (Queue size: ${crawlQueue.length}, Already found: ${allUrls.size})`);
    
    // Minimum pages to crawl - ensure we try to find at least some pages
    const MIN_PAGES_TO_CRAWL = 5;
    let consecutiveFailures = 0;
    
    while ((crawlQueue.length > 0 && pagesCrawled < MAX_PAGES) || (pagesCrawled < MIN_PAGES_TO_CRAWL && allUrls.size <= 1)) {
      const queueItem = crawlQueue.shift();
      if (!queueItem) break;
      
      const { url: currentUrl, depth } = queueItem;
      
      // Skip if already visited or too deep
      if (depth > MAX_DEPTH || visited.has(currentUrl)) {
        continue;
      }

      visited.add(currentUrl);
      pagesCrawled++;

      // Update progress BEFORE fetching
      if (progressCallback) {
        estimatedTotal = Math.max(estimatedTotal, crawlQueue.length + pagesCrawled + 10);
        progressCallback(pagesCrawled, estimatedTotal, currentUrl);
      }

      try {
        console.log(`Crawling [${pagesCrawled}/${MAX_PAGES}] (depth ${depth}): ${currentUrl}`);
        
        // Update progress - starting to fetch
        if (progressCallback) {
          progressCallback(pagesCrawled, estimatedTotal, `Fetching ${currentUrl}...`);
        }
        
        // Fetch page with proxy
        const html = await fetchWithProxy(currentUrl);
        
        if (!html || html.length < 100) {
          console.warn(`Received empty or invalid HTML for ${currentUrl}`);
          if (progressCallback) {
            progressCallback(pagesCrawled, estimatedTotal, `Failed: ${currentUrl}`);
          }
          continue;
        }
        
        // Update progress - parsing links
        if (progressCallback) {
          progressCallback(pagesCrawled, estimatedTotal, `Parsing links from ${currentUrl}...`);
        }
        
        const pageUrls = extractLinks(html, currentUrl, domain);
        
        console.log(`Found ${pageUrls.size} links on ${currentUrl}`);

        // Add discovered URLs
        let newUrlsAdded = 0;
        pageUrls.forEach((url) => {
          allUrls.add(url);
          // Add to queue for crawling if not visited and within limits
          if (depth < MAX_DEPTH && !visited.has(url) && !crawlQueue.some(item => item.url === url)) {
            crawlQueue.push({ url, depth: depth + 1 });
            newUrlsAdded++;
            estimatedTotal = Math.max(estimatedTotal, crawlQueue.length + pagesCrawled);
          }
        });
        
        console.log(`Added ${newUrlsAdded} new URLs to crawl queue (queue size: ${crawlQueue.length}, total found: ${allUrls.size})`);
        
        // Update progress after processing
        if (progressCallback) {
          progressCallback(pagesCrawled, estimatedTotal, `Found ${newUrlsAdded} new links on ${currentUrl}`);
        }

        // If we're not finding enough links, try harder
        if (pagesCrawled === 1 && newUrlsAdded === 0 && allUrls.size <= 1) {
          console.warn("Only found homepage, trying alternative link extraction methods...");
          // Try extracting from script tags, data attributes, etc.
          const altLinks = extractLinksAlternative(html, currentUrl, domain);
          altLinks.forEach((url) => {
            allUrls.add(url);
            if (depth < MAX_DEPTH && !visited.has(url) && !crawlQueue.some(item => item.url === url)) {
              crawlQueue.push({ url, depth: depth + 1 });
              newUrlsAdded++;
            }
          });
          console.log(`Alternative extraction found ${altLinks.size} additional links`);
        }

        // Rate limiting to avoid overwhelming servers
        await new Promise(resolve => setTimeout(resolve, 300)); // Reduced delay for faster crawling
      } catch (error: any) {
        // Continue crawling other pages even if one fails
        console.warn(`Failed to crawl ${currentUrl}:`, error.message || error);
        consecutiveFailures++;
        
        // Update progress with error
        if (progressCallback) {
          progressCallback(pagesCrawled, estimatedTotal, `Error: ${currentUrl} - ${error.message}`);
        }
        
        // If we have too many consecutive failures and no URLs found, try a different approach
        if (consecutiveFailures > 3 && allUrls.size <= 1) {
          console.warn("Multiple failures detected, trying direct fetch without proxy...");
          try {
            // Try direct fetch (might work for same-origin or CORS-enabled sites)
            const directResponse = await fetch(currentUrl, {
              method: "GET",
              mode: "cors",
              credentials: "omit",
            });
            if (directResponse.ok) {
              const html = await directResponse.text();
              const pageUrls = extractLinks(html, currentUrl, domain);
              pageUrls.forEach((url) => {
                allUrls.add(url);
                if (depth < MAX_DEPTH && !visited.has(url) && !crawlQueue.some(item => item.url === url)) {
                  crawlQueue.push({ url, depth: depth + 1 });
                }
              });
              consecutiveFailures = 0; // Reset on success
            }
          } catch (directError) {
            // Direct fetch also failed
            console.warn("Direct fetch also failed");
          }
        }
        
        // Don't break - continue with next URL
        await new Promise(resolve => setTimeout(resolve, 200)); // Short delay before next attempt
      }
    }
    
    console.log(`Crawl completed. Found ${allUrls.size} total URLs, crawled ${pagesCrawled} pages`);

    // Ensure homepage is included
    allUrls.add(baseUrl);

    // Convert to SitemapURL format
    const today = new Date().toISOString().split("T")[0];
    const sitemapUrls: SitemapURL[] = Array.from(allUrls)
      .sort() // Sort alphabetically
      .map((url) => {
        // Determine priority based on depth and importance
        const depth = (url.match(/\//g) || []).length - 2;
        let priority = "0.8";
        if (url === baseUrl || depth === 0) priority = "1.0";
        else if (depth === 1) priority = "0.9";
        else if (depth === 2) priority = "0.8";
        else if (depth >= 3) priority = "0.6";

        // Determine changefreq based on URL pattern
        let changefreq: SitemapURL["changefreq"] = "weekly";
        if (url === baseUrl) changefreq = "daily";
        else if (url.includes("/blog/") || url.includes("/news/") || url.includes("/articles/")) changefreq = "daily";
        else if (url.includes("/product/") || url.includes("/shop/")) changefreq = "weekly";
        else if (depth >= 3) changefreq = "monthly";
        else if (url.includes("/about") || url.includes("/contact") || url.includes("/privacy") || url.includes("/terms")) changefreq = "monthly";

        return {
          loc: url,
          lastmod: today,
          changefreq,
          priority,
        };
      });

    return sitemapUrls;
  } catch (error: any) {
    console.error("Error scraping website:", error);
    throw new Error(error.message || "Failed to crawl website. Please check the URL and try again.");
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

