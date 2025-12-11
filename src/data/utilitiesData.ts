import {
  Type,
  Search,
  Code,
  Palette,
  Briefcase,
  FileText,
  Hash,
  Link as LinkIcon,
  Image,
  Globe,
  BarChart3,
  Zap,
  FileCode,
  Copy,
  Lock,
  Key,
  ScanLine,
  Terminal,
  Droplet,
  Star,
  ReceiptText,
  Tag,
  Network,
  Settings,
  TrendingUp,
  Share2,
} from "lucide-react";

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  slug: string;
  component: React.ComponentType<any>;
  documentation: {
    howToUse: string[];
    useCases: string[];
  };
}

// Tool Components will be imported dynamically
const ToolComponents: Record<string, React.ComponentType<any>> = {};

export const tools: Tool[] = [
  // Text & Content Tools
  {
    id: "word-counter",
    name: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs in your text",
    category: "Text & Content Tools",
    icon: FileText,
    color: "#131313",
    slug: "word-counter",
    component: null as any,
    documentation: {
      howToUse: [
        "Paste or type your text into the input field",
        "View real-time statistics including word count, character count, and more",
        "Use the copy button to copy your text",
      ],
      useCases: [
        "Blog post writing and editing",
        "Social media content creation",
        "Academic writing and essays",
        "SEO content optimization",
      ],
    },
  },
  {
    id: "text-case-converter",
    name: "Text Case Converter",
    description: "Convert text between uppercase, lowercase, title case, and more",
    category: "Text & Content Tools",
    icon: Type,
    color: "#131313",
    slug: "text-case-converter",
    component: null as any,
    documentation: {
      howToUse: [
        "Enter your text in the input field",
        "Select the desired case format",
        "Click convert and copy the result",
      ],
      useCases: [
        "Formatting titles and headings",
        "Code formatting",
        "Social media posts",
        "Document preparation",
      ],
    },
  },
  {
    id: "url-encoder-decoder",
    name: "URL Encoder/Decoder",
    description: "Encode and decode URLs with percent encoding",
    category: "Text & Content Tools",
    icon: LinkIcon,
    color: "#131313",
    slug: "url-encoder-decoder",
    component: null as any,
    documentation: {
      howToUse: [
        "Enter your URL or encoded string",
        "Choose encode or decode operation",
        "Copy the result",
      ],
      useCases: [
        "Web development",
        "API integration",
        "Link sharing",
        "Data processing",
      ],
    },
  },

  // SEO & Marketing Tools
  {
    id: "meta-tag-generator",
    name: "Meta Tag Generator",
    description: "Generate SEO meta tags for your website",
    category: "SEO & Marketing Tools",
    icon: Tag,
    color: "#131313",
    slug: "meta-tag-generator",
    component: null as any,
    documentation: {
      howToUse: [
        "Enter your page title, description, and keywords",
        "Add Open Graph and Twitter Card data",
        "Copy the generated HTML meta tags",
      ],
      useCases: [
        "Website SEO optimization",
        "Social media sharing",
        "Content marketing",
        "Blog post optimization",
      ],
    },
  },
  {
    id: "sitemap-generator",
    name: "Sitemap Generator",
    description: "Generate XML sitemaps for search engines",
    category: "SEO & Marketing Tools",
    icon: Network,
    color: "#131313",
    slug: "sitemap-generator",
    component: null as any,
    documentation: {
      howToUse: [
        "Enter your website URLs",
        "Set priority and change frequency",
        "Download the XML sitemap",
      ],
      useCases: [
        "SEO optimization",
        "Search engine indexing",
        "Website structure planning",
        "Content organization",
      ],
    },
  },
  {
    id: "robots-txt-generator",
    name: "Robots.txt Generator",
    description: "Create robots.txt files for search engine crawlers",
    category: "SEO & Marketing Tools",
    icon: Settings,
    color: "#131313",
    slug: "robots-txt-generator",
    component: null as any,
    documentation: {
      howToUse: [
        "Add user agents and rules",
        "Specify allowed/disallowed paths",
        "Generate and download robots.txt",
      ],
      useCases: [
        "SEO management",
        "Crawl control",
        "Website protection",
        "Search engine optimization",
      ],
    },
  },
  {
    id: "keyword-density-checker",
    name: "Keyword Density Checker",
    description: "Analyze keyword density in your content",
    category: "SEO & Marketing Tools",
    icon: TrendingUp,
    color: "#131313",
    slug: "keyword-density-checker",
    component: null as any,
    documentation: {
      howToUse: [
        "Paste your content",
        "Enter target keywords",
        "View density analysis and suggestions",
      ],
      useCases: [
        "SEO content writing",
        "Keyword optimization",
        "Content analysis",
        "Marketing research",
      ],
    },
  },
  {
    id: "social-media-preview",
    name: "Social Media Link Preview",
    description: "Preview how your links appear when shared on different social platforms",
    category: "SEO & Marketing Tools",
    icon: Share2,
    color: "#131313",
    slug: "social-media-preview",
    component: null as any,
    documentation: {
      howToUse: [
        "Enter a URL to fetch its meta tags",
        "View previews for LinkedIn, WhatsApp, Facebook, Twitter, and more",
        "Edit title, description, and image manually if needed",
        "See how your link will appear on each platform",
      ],
      useCases: [
        "Social media marketing",
        "Link preview optimization",
        "Content sharing strategy",
        "SEO and Open Graph testing",
        "Marketing campaign planning",
      ],
    },
  },

  // Developer & Technical Tools
  {
    id: "json-formatter",
    name: "JSON Formatter",
    description: "Format and validate JSON data",
    category: "Developer & Technical Tools",
    icon: FileCode,
    color: "#131313",
    slug: "json-formatter",
    component: null as any,
    documentation: {
      howToUse: [
        "Paste your JSON string",
        "Click format to beautify",
        "Validate and copy formatted JSON",
      ],
      useCases: [
        "API development",
        "Data processing",
        "Code debugging",
        "Configuration files",
      ],
    },
  },
  {
    id: "hash-generator",
    name: "Hash Generator",
    description: "Generate MD5, SHA1, SHA256 hashes",
    category: "Developer & Technical Tools",
    icon: Hash,
    color: "#131313",
    slug: "hash-generator",
    component: null as any,
    documentation: {
      howToUse: [
        "Enter text or file",
        "Select hash algorithm",
        "Copy the generated hash",
      ],
      useCases: [
        "Password hashing",
        "Data integrity",
        "Security applications",
        "File verification",
      ],
    },
  },
  {
    id: "uuid-generator",
    name: "UUID Generator",
    description: "Generate unique identifiers (UUIDs)",
    category: "Developer & Technical Tools",
    icon: Key,
    color: "#131313",
    slug: "uuid-generator",
    component: null as any,
    documentation: {
      howToUse: [
        "Select UUID version (v1, v4)",
        "Click generate",
        "Copy the UUID",
      ],
      useCases: [
        "Database primary keys",
        "API identifiers",
        "Session management",
        "Unique ID generation",
      ],
    },
  },
  {
    id: "qr-code-generator",
    name: "QR Code Generator",
    description: "Generate QR codes for URLs, text, and more",
    category: "Developer & Technical Tools",
    icon: ScanLine,
    color: "#131313",
    slug: "qr-code-generator",
    component: null as any,
    documentation: {
      howToUse: [
        "Enter URL or text",
        "Customize size and error correction",
        "Download QR code image",
      ],
      useCases: [
        "Marketing campaigns",
        "Event management",
        "Contact sharing",
        "Payment links",
      ],
    },
  },
  {
    id: "regex-tester",
    name: "Regex Tester",
    description: "Test and debug regular expressions",
    category: "Developer & Technical Tools",
    icon: Terminal,
    color: "#131313",
    slug: "regex-tester",
    component: null as any,
    documentation: {
      howToUse: [
        "Enter your regex pattern",
        "Add test strings",
        "View matches and groups",
      ],
      useCases: [
        "Form validation",
        "Text processing",
        "Data extraction",
        "Pattern matching",
      ],
    },
  },

  // Color & Design Tools
  {
    id: "color-picker",
    name: "Color Picker",
    description: "Pick colors and get hex, RGB, HSL values",
    category: "Color & Design Tools",
    icon: Droplet,
    color: "#131313",
    slug: "color-picker",
    component: null as any,
    documentation: {
      howToUse: [
        "Click on the color picker",
        "Select your color",
        "Copy color codes in various formats",
      ],
      useCases: [
        "Web design",
        "Brand color selection",
        "UI/UX design",
        "Color palette creation",
      ],
    },
  },
  {
    id: "color-converter",
    name: "Color Converter",
    description: "Convert between HEX, RGB, HSL, and CMYK",
    category: "Color & Design Tools",
    icon: Palette,
    color: "#131313",
    slug: "color-converter",
    component: null as any,
    documentation: {
      howToUse: [
        "Enter color in any format",
        "View converted values",
        "Copy the desired format",
      ],
      useCases: [
        "Design workflow",
        "Color matching",
        "Print design",
        "Web development",
      ],
    },
  },
  {
    id: "gradient-generator",
    name: "Gradient Generator",
    description: "Create beautiful CSS gradients",
    category: "Color & Design Tools",
    icon: Star,
    color: "#131313",
    slug: "gradient-generator",
    component: null as any,
    documentation: {
      howToUse: [
        "Select gradient colors",
        "Adjust angle and stops",
        "Copy CSS code",
      ],
      useCases: [
        "Web design",
        "Background creation",
        "UI elements",
        "Visual effects",
      ],
    },
  },

  // Productivity & Business Tools
  {
    id: "password-generator",
    name: "Password Generator",
    description: "Generate secure random passwords",
    category: "Productivity & Business Tools",
    icon: Lock,
    color: "#131313",
    slug: "password-generator",
    component: null as any,
    documentation: {
      howToUse: [
        "Set password length",
        "Choose character types",
        "Generate and copy password",
      ],
      useCases: [
        "Account security",
        "Password management",
        "Secure authentication",
        "Data protection",
      ],
    },
  },
  {
    id: "invoice-generator",
    name: "Invoice Generator",
    description: "Create professional invoices with advanced features",
    category: "Productivity & Business Tools",
    icon: ReceiptText,
    color: "#131313",
    slug: "invoice-generator",
    component: null as any,
    documentation: {
      howToUse: [
        "Enter business and client details",
        "Add line items",
        "Generate and download PDF",
      ],
      useCases: [
        "Freelance billing",
        "Small business invoicing",
        "Service billing",
        "Financial records",
      ],
    },
  },
];

export const categories = [
  "Text & Content Tools",
  "SEO & Marketing Tools",
  "Developer & Technical Tools",
  "Color & Design Tools",
  "Productivity & Business Tools",
];

export const getToolBySlug = (slug: string): Tool | undefined => {
  return tools.find((tool) => tool.slug === slug);
};

export const getToolsByCategory = (category: string): Tool[] => {
  return tools.filter((tool) => tool.category === category);
};

export const getRelatedTools = (currentTool: Tool, limit: number = 3): Tool[] => {
  return tools
    .filter((tool) => tool.id !== currentTool.id && tool.category === currentTool.category)
    .slice(0, limit);
};

