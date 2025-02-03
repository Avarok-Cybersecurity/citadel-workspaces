import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ServerConnect } from "@/components/ServerConnect";
import { SecuritySettings } from "@/components/SecuritySettings";
import { Office } from "@/components/Office";
import { Join } from "@/components/Join";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Messages from "./pages/Messages";

const queryClient = new QueryClient();

const RegisterFlow = ({ isOverlay = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleServerNext = () => navigate('/server-register/security');
  const handleSecurityNext = () => navigate('/server-register/join');
  const handleSecurityBack = () => navigate('/server-register');
  const handleJoinNext = () => {
    if (isOverlay) {
      navigate('/office');
    } else {
      navigate('/office');
    }
  };
  const handleJoinBack = () => navigate('/server-register/security');

  const containerClass = isOverlay
    ? "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    : "min-h-screen w-full flex items-center justify-center relative";

  const backgroundStyle = !isOverlay ? (
    <>
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/6dc44a79-0611-42a5-a5d1-5a4aa7305aaa.png')",
          backgroundSize: 'cover',
          width: '100vw',
          height: '100vh',
          '@media (max-width: 768px)': {
            backgroundPosition: 'center center',
            backgroundSize: 'contain'
          }
        }}
      />
      <div 
        className="fixed inset-0 z-0 bg-gradient-to-r from-[#1C1D28] via-[rgba(28,29,40,0.8)] to-[rgba(28,29,40,0.4)]"
      />
    </>
  ) : null;

  if (isOverlay && !location.pathname.includes('/server-register')) {
    return null;
  }

  return (
    <div className={containerClass}>
      {backgroundStyle}
      <div className="w-full max-w-xl p-4 z-10">
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
      </div>
    </div>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <RegisterFlow />
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}