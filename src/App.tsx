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

// NEW / ADDED PAGES:
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import DashboardStudent from "./pages/dashboard/Student";
import DashboardTutor from "./pages/dashboard/Tutor";
import Messages from "./pages/messages/Index";
import Thread from "./pages/messages/Thread";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="team" element={<Team />} />
                <Route path="tmua" element={<TMUA />} />
                <Route path="mat" element={<MAT />} />
                <Route path="esat" element={<ESAT />} />
                <Route path="interview-prep" element={<InterviewPrep />} />
              </Route>

              {/* Auth */}
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/signup" element={<Signup />} />

              {/* Dashboards */}
              <Route
                path="/dashboard/student"
                element={
                  <ProtectedRoute roles={["student", "admin"]}>
                    <DashboardStudent />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/tutor"
                element={
                  <ProtectedRoute roles={["tutor", "admin"]}>
                    <DashboardTutor />
                  </ProtectedRoute>
                }
              />

              {/* Messaging */}
              <Route path="/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
              <Route path="/messages/:conversationId" element={<ProtectedRoute><Thread /></ProtectedRoute>} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
