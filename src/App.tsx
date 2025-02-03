import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ServerConnect } from "@/components/ServerConnect";
import { SecuritySettings } from "@/components/SecuritySettings";
import { Office } from "@/components/Office";
import { Join } from "@/components/Join";
import { RegisterFlowLayout } from "@/components/layout/RegisterFlowLayout";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Messages from "./pages/Messages";

const queryClient = new QueryClient();

const RegisterFlow = () => {
  const navigate = useNavigate();
  
  const handleServerNext = () => navigate('/server-register/security');
  const handleSecurityNext = () => navigate('/server-register/join');
  const handleSecurityBack = () => navigate('/server-register');
  const handleJoinNext = () => navigate('/office');
  const handleJoinBack = () => navigate('/server-register/security');

  return (
    <RegisterFlowLayout>
      <Routes>
        <Route path="/server-register" element={<ServerConnect onNext={handleServerNext} />} />
        <Route 
          path="/server-register/security" 
          element={<SecuritySettings onNext={handleSecurityNext} onBack={handleSecurityBack} />} 
        />
        <Route 
          path="/server-register/join" 
          element={<Join onNext={handleJoinNext} onBack={handleJoinBack} />} 
        />
      </Routes>
    </RegisterFlowLayout>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/server-register/*" element={<RegisterFlow />} />
          <Route path="/office" element={<Office />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;