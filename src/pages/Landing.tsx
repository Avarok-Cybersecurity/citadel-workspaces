import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-[#1C1D28]">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat md:bg-cover md:bg-center sm:bg-contain sm:bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/6dc44a79-0611-42a5-a5d1-5a4aa7305aaa.png')",
          width: '100vw',
          height: '100vh'
        }}
      />
      
      <div 
        className="fixed inset-0 z-0 bg-gradient-to-r from-[#1C1D28] via-[rgba(28,29,40,0.8)] to-[rgba(28,29,40,0.4)]"
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The World's First Post-Quantum Virtual Workspace
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12">
            Hyper-security and control over defense and privacy at your fingertips
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => navigate("/server-register")}
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 h-[60px] transition-colors duration-300 w-full sm:w-auto"
              size="lg"
            >
              Join Workspace
            </Button>
            
            <Button
              variant="outline"
              className="border-white bg-white text-black hover:bg-gray-100 text-lg px-8 h-[60px] flex items-center gap-2 transition-colors duration-300 w-full sm:w-auto"
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