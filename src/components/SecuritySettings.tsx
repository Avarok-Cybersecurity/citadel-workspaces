import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, HelpCircle, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const SecuritySettings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background with smooth gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(90deg, #4F5889 0%, rgba(79, 88, 137, 0.9) 100%)"
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
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase">
                Security Level
              </label>
              <div className="relative">
                <Select defaultValue="standard">
                  <SelectTrigger className="w-full bg-[#221F26]/70 border-purple-400/20 text-white">
                    <SelectValue placeholder="Select security level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="maximum">Maximum</SelectItem>
                  </SelectContent>
                </Select>
                <HelpCircle className="absolute right-12 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 uppercase">
                Security Mode
              </label>
              <div className="relative">
                <Select defaultValue="best-effort">
                  <SelectTrigger className="w-full bg-[#221F26]/70 border-purple-400/20 text-white">
                    <SelectValue placeholder="Select security mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="best-effort">Best Effort</SelectItem>
                    <SelectItem value="strict">Strict</SelectItem>
                  </SelectContent>
                </Select>
                <HelpCircle className="absolute right-12 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

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