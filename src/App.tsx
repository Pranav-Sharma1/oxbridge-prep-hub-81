import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Team from "./pages/Team";
import TMUA from "./pages/TMUA";
import MAT from "./pages/MAT";
import ESAT from "./pages/ESAT";
import InterviewPrep from "./pages/InterviewPrep";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="team" element={<Team />} />
            <Route path="tmua" element={<TMUA />} />
            <Route path="mat" element={<MAT />} />
            <Route path="esat" element={<ESAT />} />
            <Route path="interview-prep" element={<InterviewPrep />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
