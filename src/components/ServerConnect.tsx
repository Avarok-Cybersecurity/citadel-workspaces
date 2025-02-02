import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

export const ServerConnect = () => {
  const [serverAddress, setServerAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serverAddress) {
      toast({
        title: "Server address required",
        description: "Please enter a server address to connect",
        variant: "destructive",
      });
      return;
    }
    
    // For demo purposes, always navigate to office
    navigate("/office");
  };

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
          background: "linear-gradient(90deg, #1a1b26 0%, rgba(26, 27, 38, 0.8) 50%, rgba(26, 27, 38, 0.4) 100%)"
        }}
      />

      {/* Back Button */}
      <Button
        variant="ghost"
        className="absolute top-4 left-4 text-white z-10 hover:bg-purple-500/20"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="w-full max-w-md p-8 space-y-6 glass-panel z-10">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-purple-100">Welcome</h1>
          <p className="text-purple-200">Connect to your workspace</p>
        </div>

        <form onSubmit={handleConnect} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="server" className="text-sm font-medium text-purple-100">
              Server Address
            </label>
            <Input
              id="server"
              type="text"
              placeholder="Enter server address"
              value={serverAddress}
              onChange={(e) => setServerAddress(e.target.value)}
              className="bg-purple-900/50 border-purple-700 text-purple-100 placeholder:text-purple-400"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-purple-100">
              Password (Optional)
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-purple-900/50 border-purple-700 text-purple-100 placeholder:text-purple-400"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors"
          >
            Connect
          </Button>
        </form>
      </div>
    </div>
  );
};