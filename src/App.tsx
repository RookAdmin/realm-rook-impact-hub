
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
import ImpactStudies from "./pages/ImpactStudies";
import ImpactStudyDetail from "./pages/ImpactStudyDetail";
import Resources from "./pages/Resources";
import ResourcesInsights from "./pages/ResourcesInsights";
import InsightDetail from "./pages/InsightDetail";
import PressReleases from "./pages/PressReleases";
import BrandingService from "./pages/services/BrandingService";
import UIUXDesignService from "./pages/services/UIUXDesignService";
import WebAppDevelopmentService from "./pages/services/WebAppDevelopmentService";
import SEOService from "./pages/services/SEOService";
import WhoWePartnerWith from "./pages/WhoWePartnerWith";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/branding" element={<BrandingService />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesignService />} />
          <Route path="/services/web-app-development" element={<WebAppDevelopmentService />} />
          <Route path="/services/seo" element={<SEOService />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/who-we-partner-with" element={<WhoWePartnerWith />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brand-kit" element={<BrandKit />} />
          <Route path="/impact-studies" element={<ImpactStudies />} />
          <Route path="/impact-studies/:slug" element={<ImpactStudyDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/insights" element={<ResourcesInsights />} />
          <Route path="/resources/insights/:slug" element={<InsightDetail />} />
          <Route path="/resources/press-releases" element={<PressReleases />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refunds-policy" element={<RefundsPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
