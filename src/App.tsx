import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Mission from "./pages/Mission";
import Aura from "./pages/Aura";
import Detect from "./pages/Detect";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import AuraLinkManage from "./pages/AuraLinkManage";
import EnterpriseDashboard from "./pages/EnterpriseDashboard";
import EnterpriseOnboarding from "./pages/EnterpriseOnboarding";
import OrbitContinent from "./pages/OrbitContinent";
import ConsumerSignup from "./pages/ConsumerSignup";
import Onboarding from "./pages/Onboarding";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/aura" element={<Aura />} />
          <Route path="/detect" element={<Detect />} />
          <Route path="/orbit/:continent" element={<OrbitContinent />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup/consumer" element={<ConsumerSignup />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:slug" element={<AuraLinkManage />} />
          <Route path="/onboarding/enterprise" element={<EnterpriseOnboarding />} />
          <Route path="/dashboard/enterprise" element={<EnterpriseDashboard />} />
          
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
