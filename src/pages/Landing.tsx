import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-[#1C1D28]">
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
          background: "linear-gradient(90deg, #1C1D28 0%, rgba(28, 29, 40, 0.8) 50%, rgba(28, 29, 40, 0.4) 100%)"
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            The World's First Post-Quantum Virtual Workspace
          </h1>
          
          <p className="text-xl text-gray-300 mb-12">
            Hyper-security and control over defense and privacy at your fingertips
          </p>
          
          <div className="flex gap-4">
            <Button
              onClick={() => navigate("/connect")}
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 h-[60px] transition-colors duration-300"
              size="lg"
            >
              Join Workspace
            </Button>
            
            <Button
              variant="outline"
              className="border-white bg-white text-black hover:bg-gray-100 text-lg px-8 h-[60px] flex items-center gap-2 transition-colors duration-300"
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