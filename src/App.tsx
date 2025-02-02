import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ServerConnect } from "@/components/ServerConnect";
import { SecuritySettings } from "@/components/SecuritySettings";
import { Office } from "@/components/Office";
import { Join } from "@/components/Join";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Messages from "./pages/Messages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/server-register" element={<ServerConnect />} />
          <Route path="/server-register/security" element={<SecuritySettings />} />
          <Route path="/server-register/join" element={<Join />} />
          <Route path="/office" element={<Office />} />
          <Route path="/messages" element={<Messages />} />
          {/* Redirect old routes to new ones */}
          <Route path="/connect" element={<Navigate to="/server-register" replace />} />
          <Route path="/security-settings" element={<Navigate to="/server-register/security" replace />} />
          <Route path="/join" element={<Navigate to="/server-register/join" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;