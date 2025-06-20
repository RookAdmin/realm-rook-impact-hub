import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContactBar from "./components/FloatingContactBar";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundsPolicy from "./pages/RefundsPolicy";
import BrandKit from "./pages/BrandKit";
import ImpactStudyDetail from "./pages/ImpactStudyDetail";
import ResourcesInsights from "./pages/ResourcesInsights";
import InsightDetail from "./pages/InsightDetail";
import PressReleases from "./pages/PressReleases";
import BrandingService from "./pages/services/BrandingService";
import UIUXDesignService from "./pages/services/UIUXDesignService";
import WebAppDevelopmentService from "./pages/services/WebAppDevelopmentService";
import SEOService from "./pages/services/SEOService";
import SocialMediaMarketingService from "./pages/services/SocialMediaMarketingService";
import AIAgentsAutomationService from "./pages/services/AIAgentsAutomationService";
import DomainConsultationService from "./pages/services/DomainConsultationService";
import EnterpriseDomainService from "./pages/services/EnterpriseDomainService";
import WhoWePartnerWith from "./pages/WhoWePartnerWith";
import DomainNameConsultation from "./pages/services/DomainNameConsultation";
import EnterpriseDomainManagement from "./pages/services/EnterpriseDomainManagement";
import D2CStartups from "./pages/discover/D2CStartups";
import SaaSStartups from "./pages/discover/SaaSStartups";
import Partners from "./pages/Partners";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <FloatingContactBar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/branding" element={<BrandingService />} />
            <Route
              path="/services/ui-ux-design"
              element={<UIUXDesignService />}
            />
            <Route
              path="/services/web-app-development"
              element={<WebAppDevelopmentService />}
            />
            <Route path="/services/seo" element={<SEOService />} />
            <Route
              path="/services/social-media-marketing"
              element={<SocialMediaMarketingService />}
            />
            <Route
              path="/services/ai-agents-automation"
              element={<AIAgentsAutomationService />}
            />
            <Route
              path="/services/domain-name-consultation"
              element={<DomainNameConsultation />}
            />
            <Route
              path="/services/enterprise-domain-management"
              element={<EnterpriseDomainService />}
            />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<ImpactStudyDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brand-kit" element={<BrandKit />} />
            <Route path="/resources/insights" element={<ResourcesInsights />} />
            <Route
              path="/resources/insights/:slug"
              element={<InsightDetail />}
            />
            <Route
              path="/resources/press-releases"
              element={<PressReleases />}
            />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refunds-policy" element={<RefundsPolicy />} />
            <Route path="/discover/d2c-startups" element={<D2CStartups />} />
            <Route path="/discover/saas-startups" element={<SaaSStartups />} />
            <Route path="/who-we-partner-with" element={<Partners />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
