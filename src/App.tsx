import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";

import HomePage from "./pages/HomePage";
import HvacPage from "./pages/HvacPage";
import DrainagePage from "./pages/DrainagePage";
import KitchenPage from "./pages/KitchenPage";
import BathroomPage from "./pages/BathroomPage";
import EmergencyPage from "./pages/EmergencyPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HvacServicePage from "./pages/HvacServicePage";
import DrainageServicePage from "./pages/DrainageServicePage";
import BathroomServicePage from "./pages/BathroomServicePage";
import EmergencyServicePage from "./pages/EmergencyServicePage";
import BurstPipeRepairPage from "./pages/BurstPipeRepairPage";
import LeakRepairPage from "./pages/LeakRepairPage";
import TapInstallationPage from "./pages/TapInstallationPage";
import TapRepairPage from "./pages/TapRepairPage";
import ToiletUnblockingPage from "./pages/ToiletUnblockingPage";
import GeyserRepairPage from "./pages/GeyserRepairPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/hvac-geyser-services-windhoek" element={<HvacPage />} />
            <Route path="/hvac-geyser-services-windhoek/:slug" element={<HvacServicePage />} />
            <Route path="/drainage-services-windhoek" element={<DrainagePage />} />
            <Route path="/drainage-services-windhoek/:slug" element={<DrainageServicePage />} />
            <Route path="/kitchen-plumbing-windhoek" element={<KitchenPage />} />
            <Route path="/bathroom-renovations-windhoek" element={<BathroomPage />} />
            <Route path="/bathroom-renovations-windhoek/:slug" element={<BathroomServicePage />} />
            <Route path="/emergency-plumbing-windhoek" element={<EmergencyPage />} />
            <Route path="/emergency-plumbing-windhoek/burst-pipe-repair" element={<BurstPipeRepairPage />} />
            <Route path="/emergency-plumbing-windhoek/leak-repair" element={<LeakRepairPage />} />
            <Route path="/emergency-plumbing-windhoek/:slug" element={<EmergencyServicePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/tap-installation" element={<TapInstallationPage />} />
            <Route path="/services/tap-repair" element={<TapRepairPage />} />
            <Route path="/services/toilet-unblocking" element={<ToiletUnblockingPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
