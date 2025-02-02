import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-[#1a1b26]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/fcd25400-92a0-41ed-95ae-573a0298bd55.png')",
          backgroundSize: "contain",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          opacity: 0.7
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(90deg, #1a1b26 0%, rgba(26, 27, 38, 0.8) 50%, rgba(26, 27, 38, 0.4) 100%)"
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Quantum-Proof Your Virtual Workplace
          </h1>
          
          <p className="text-xl text-gray-300 mb-12">
            Hyper-Secure, p2p, and up to 256 layers of encryption.
          </p>
          
          <div className="flex gap-4">
            <Button
              onClick={() => navigate("/connect")}
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 h-[60px] transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              Join Workspace
            </Button>
            
            <Button
              variant="outline"
              className="border-white bg-white text-black hover:bg-gray-100 text-lg px-8 h-[60px] flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              <PlusCircle className="w-5 h-5" />
              Create Workspace
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;