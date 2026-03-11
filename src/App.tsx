import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Mission from "./pages/Mission";
import Aura from "./pages/Aura";
import Detect from "./pages/Detect";
import AuraLinkManage from "./pages/AuraLinkManage";
import OrbitContinent from "./pages/OrbitContinent";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import CreateAuraLink from "./pages/CreateAuraLink";
import AuraLinkPublic from "./pages/AuraLinkPublic";
import ProfileEdit from "./pages/ProfileEdit";
import ProfilePublic from "./pages/ProfilePublic";

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
          <Route path="/dashboard/create" element={<CreateAuraLink />} />
          <Route path="/dashboard/enterprise" element={<EnterpriseDashboard />} />
          <Route path="/dashboard/:slug" element={<AuraLinkManage />} />
          <Route path="/onboarding/enterprise" element={<EnterpriseOnboarding />} />
          <Route path="/aura/:slug" element={<AuraLinkPublic />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/profile/:slug" element={<ProfilePublic />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
