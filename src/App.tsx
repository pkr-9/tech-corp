import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import BlogPostDetailPage from "./pages/BlogPostDetail";
import ServicesPage from "./pages/Services";
import ServiceDetailPage from "./pages/ServiceDetail";
// import CaseStudiesPage from "./pages/CaseStudies";
// import CaseStudyDetailPage from "./pages/CaseStudyDetail";
import CareersPage from "./pages/Careers";
import PrivacyPage from "./pages/Privacy";
import TermsPage from "./pages/Terms";
import IndustryDetailPage from "./pages/IndustryDetail";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postSlug" element={<BlogPostDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/services/:serviceSlug"
            element={<ServiceDetailPage />}
          />
          {/* <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} /> */}
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms-of-service" element={<TermsPage />} />
          <Route
            path="/services/industry/:industrySlug"
            element={<IndustryDetailPage />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
