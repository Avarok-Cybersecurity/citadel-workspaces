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

// Wrapper component to provide navigation functions to child components
const RegisterFlow = ({ isOverlay = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleServerNext = () => navigate('/server-register/security');
  const handleSecurityNext = () => navigate('/server-register/join');
  const handleSecurityBack = () => navigate('/server-register');
  const handleJoinNext = () => {
    if (isOverlay) {
      // If it's an overlay (from Office), navigate back to office
      navigate('/office');
    } else {
      // If it's the main flow (from Landing), navigate to office
      navigate('/office');
    }
  };
  const handleJoinBack = () => navigate('/server-register/security');

  // Determine if this is the main registration flow or an overlay
  const containerClass = isOverlay
    ? "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    : "min-h-screen w-full flex items-center justify-center relative";

  // Only render the background for non-overlay mode
  const backgroundStyle = !isOverlay ? (
    <>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('/lovable-uploads/fcd25400-92a0-41ed-95ae-573a0298bd55.png')",
          backgroundSize: 'cover',
          width: '100vw',
          height: '100vh'
        }}
      />
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-r from-[#1C1D28] via-[rgba(28,29,40,0.8)] to-[rgba(28,29,40,0.4)]"
      />
    </>
  ) : null;

  // For overlay mode, don't render anything if we're not on a registration route
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/office" element={<Office />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Main registration flow */}
        <RegisterFlow />
        {/* Overlay registration flow */}
        <RegisterFlow isOverlay={true} />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;