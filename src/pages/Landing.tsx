import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-[#1a1b26]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/da713047-2cd4-4f0e-aa8b-41f2f94bc851.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
          opacity: 0.5
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Quantum-Proof Your Virtual Workplace
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 animate-fade-in [animation-delay:200ms]">
            Hyper-Secure, p2p, and up to 256 layers of encryption.
          </p>
          
          <div className="flex gap-4 animate-fade-in [animation-delay:400ms]">
            <Button
              onClick={() => navigate("/connect")}
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6"
              size="lg"
            >
              Join Workspace
            </Button>
            
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              size="lg"
            >
              Create Workspace
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;