import { Button } from "@/components/ui/button";
import { Shield, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { SecurityLevelSelect } from "./security/SecurityLevelSelect";
import { SecurityModeSelect } from "./security/SecurityModeSelect";

export const SecuritySettings = () => {
  const navigate = useNavigate();

  const { data: formData } = useQuery({
    queryKey: ['serverConnectForm'],
    queryFn: () => ({ serverAddress: '', password: '' }),
    initialData: { serverAddress: '', password: '' }
  });

  console.log('Retrieved form data in SecuritySettings:', formData);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
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
          background: "linear-gradient(90deg, #1a1b26 0%, rgba(26, 27, 38, 0.95) 30%, rgba(26, 27, 38, 0.8) 60%, rgba(26, 27, 38, 0.4) 100%)"
        }}
      />

      <div className="w-full max-w-xl p-8 space-y-8 bg-[#4F5889]/95 backdrop-blur-sm border border-purple-500/20 shadow-lg rounded-lg z-10 animate-fade-in">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-bold text-white">ADD A NEW WORKSPACE</h1>
        </div>

        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-white">SESSION SECURITY SETTINGS</h2>

          <div className="space-y-6">
            <SecurityLevelSelect />
            <SecurityModeSelect />

            <div className="space-y-2">
              <button className="flex items-center text-white space-x-2">
                <span className="text-lg font-semibold">ADVANCED SETTINGS</span>
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button
              type="button"
              variant="ghost"
              onClick={() => navigate("/connect")}
              className="text-white hover:bg-purple-500/20"
            >
              BACK
            </Button>
            <Button
              type="button"
              onClick={() => navigate("/office")}
              className="bg-purple-600 hover:bg-purple-700 text-white transition-colors"
            >
              NEXT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};