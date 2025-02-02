import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Shield, ChevronDown, HelpCircle, ArrowLeft } from "lucide-react";

export const SecuritySettings = () => {
  const [securityLevel, setSecurityLevel] = useState("standard");
  const [securityMode, setSecurityMode] = useState("best-effort");
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const navigate = useNavigate();

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
      
      {/* Gradient Overlay - Smooth transition */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(90deg, #1a1b26 0%, rgba(26, 27, 38, 0.95) 30%, rgba(26, 27, 38, 0.8) 60%, rgba(26, 27, 38, 0.4) 100%)"
        }}
      />

      {/* Back Button */}
      <Button
        variant="ghost"
        className="absolute top-4 left-4 text-white z-10 hover:bg-purple-500/20"
        onClick={() => navigate("/connect")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="w-full max-w-xl p-8 space-y-6 bg-[#4F5889]/95 backdrop-blur-sm border border-purple-500/20 shadow-lg rounded-lg z-10">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-bold text-white">ADD A NEW WORKSPACE</h1>
        </div>

        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-white">SESSION SECURITY SETTINGS</h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase">
                Security Level
              </label>
              <div className="flex items-center gap-2">
                <Select value={securityLevel} onValueChange={setSecurityLevel}>
                  <SelectTrigger className="bg-[#221F26]/70 border-purple-400/20 text-white">
                    <SelectValue placeholder="Select security level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="maximum">Maximum</SelectItem>
                  </SelectContent>
                </Select>
                <HelpCircle className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase">
                Security Mode
              </label>
              <div className="flex items-center gap-2">
                <Select value={securityMode} onValueChange={setSecurityMode}>
                  <SelectTrigger className="bg-[#221F26]/70 border-purple-400/20 text-white">
                    <SelectValue placeholder="Select security mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="best-effort">Best Effort</SelectItem>
                    <SelectItem value="strict">Strict</SelectItem>
                    <SelectItem value="paranoid">Paranoid</SelectItem>
                  </SelectContent>
                </Select>
                <HelpCircle className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <button
              onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
              className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
            >
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isAdvancedOpen ? "rotate-180" : ""
                }`}
              />
              <span className="text-lg font-semibold">ADVANCED SETTINGS</span>
            </button>

            <div className="flex justify-end gap-4 mt-8">
              <Button
                variant="ghost"
                onClick={() => navigate("/connect")}
                className="text-white hover:bg-purple-500/20"
              >
                BACK
              </Button>
              <Button
                onClick={() => navigate("/office")}
                className="bg-purple-600 hover:bg-purple-700 text-white transition-colors"
              >
                NEXT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};