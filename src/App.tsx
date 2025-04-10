
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TracksPage from "./pages/TracksPage";
import SchedulePage from "./pages/SchedulePage";
import PrizesPage from "./pages/PrizesPage";
import RulesPage from "./pages/RulesPage";
import FAQPage from "./pages/FAQPage";
import RegisterPage from "./pages/RegisterPage";
import SponsorsPage from "./pages/SponsorsPage";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/tracks" element={<TracksPage />} />
                  <Route path="/schedule" element={<SchedulePage />} />
                  <Route path="/prizes" element={<PrizesPage />} />
                  <Route path="/rules" element={<RulesPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/sponsors" element={<SponsorsPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
