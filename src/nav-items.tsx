
import { HomeIcon, InfoIcon, BriefcaseIcon, PhoneIcon, UsersIcon, BookIcon, FileTextIcon, ShieldIcon, RefreshCwIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import BrandingService from "./pages/services/BrandingService.jsx";
import UIUXDesignService from "./pages/services/UIUXDesignService.jsx";
import WebAppDevelopmentService from "./pages/services/WebAppDevelopmentService.jsx";
import SEOService from "./pages/services/SEOService.jsx";
import SocialMediaMarketingService from "./pages/services/SocialMediaMarketingService.jsx";
import AIAgentsAutomationService from "./pages/services/AIAgentsAutomationService.jsx";
import DomainNameConsultation from "./pages/services/DomainNameConsultation.jsx";
import EnterpriseDomainManagement from "./pages/services/EnterpriseDomainManagement.jsx";
import D2CStartups from "./pages/discover/D2CStartups.jsx";
import SaaSStartups from "./pages/discover/SaaSStartups.jsx";
import Resources from "./pages/Resources.jsx";
import ResourcesInsights from "./pages/ResourcesInsights.jsx";
import InsightDetail from "./pages/InsightDetail.jsx";
import PressReleases from "./pages/PressReleases.jsx";
import WhoWePartnerWith from "./pages/WhoWePartnerWith.jsx";
import BrandKit from "./pages/BrandKit.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import RefundsPolicy from "./pages/RefundsPolicy.jsx";
import NotFound from "./pages/NotFound.jsx";

/**
 * Central place for defining the navigation structure of our app.
 * Used by the navigation components and routing logic.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Services",
    to: "/services",
    icon: <BriefcaseIcon className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "Branding Service",
    to: "/services/branding",
    page: <BrandingService />,
  },
  {
    title: "UI/UX Design Service",
    to: "/services/ui-ux-design",
    page: <UIUXDesignService />,
  },
  {
    title: "Web/App Development Service",
    to: "/services/web-app-development",
    page: <WebAppDevelopmentService />,
  },
  {
    title: "SEO Service",
    to: "/services/seo",
    page: <SEOService />,
  },
  {
    title: "Social Media Marketing Service",
    to: "/services/social-media-marketing",
    page: <SocialMediaMarketingService />,
  },
  {
    title: "AI Agents Automation Service",
    to: "/services/ai-agents-automation",
    page: <AIAgentsAutomationService />,
  },
  {
    title: "Domain Name Consultation",
    to: "/services/domain-name-consultation",
    page: <DomainNameConsultation />,
  },
  {
    title: "Enterprise Domain Management",
    to: "/services/enterprise-domain-management",
    page: <EnterpriseDomainManagement />,
  },
  {
    title: "D2C Startups",
    to: "/discover/d2c-startups",
    page: <D2CStartups />,
  },
  {
    title: "SaaS Startups",
    to: "/discover/saas-startups",
    page: <SaaSStartups />,
  },
  {
    title: "Case Studies",
    to: "/case-studies",
    icon: <FileTextIcon className="h-4 w-4" />,
    page: <CaseStudies />,
  },
  {
    title: "Resources",
    to: "/resources",
    icon: <BookIcon className="h-4 w-4" />,
    page: <Resources />,
  },
  {
    title: "Resources Insights",
    to: "/resources/insights",
    page: <ResourcesInsights />,
  },
  {
    title: "Insight Detail",
    to: "/resources/insights/:slug",
    page: <InsightDetail />,
  },
  {
    title: "Press Releases",
    to: "/resources/press-releases",
    page: <PressReleases />,
  },
  {
    title: "Who We Partner With",
    to: "/who-we-partner-with",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <WhoWePartnerWith />,
  },
  {
    title: "Brand Kit",
    to: "/brand-kit",
    page: <BrandKit />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <PhoneIcon className="h-4 w-4" />,
    page: <Contact />,
  },
  {
    title: "Privacy Policy",
    to: "/privacy-policy",
    page: <PrivacyPolicy />,
  },
  {
    title: "Terms & Conditions",
    to: "/terms-and-conditions",
    page: <TermsConditions />,
  },
  {
    title: "Refunds Policy",
    to: "/refunds-policy",
    page: <RefundsPolicy />,
  },
  {
    title: "Not Found",
    to: "*",
    page: <NotFound />,
  },
];
