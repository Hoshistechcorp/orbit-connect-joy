import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCartSync } from "@/hooks/useCartSync";
import Index from "./pages/Index";
import Mission from "./pages/Mission";
import Aura from "./pages/Aura";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import Store from "./pages/Store";
import ProductDetail from "./pages/ProductDetail";
import EmailPreview from "./pages/EmailPreview";

const queryClient = new QueryClient();

function AppInner() {
  useCartSync();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/aura" element={<Aura />} />
      <Route path="/store" element={<Store />} />
      <Route path="/product/:handle" element={<ProductDetail />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
