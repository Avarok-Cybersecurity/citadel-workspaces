import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg border border-purple-100">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-purple-900">Welcome</h1>
          <p className="text-purple-600">Connect to your workspace</p>
        </div>

        <form onSubmit={handleConnect} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="server" className="text-sm font-medium text-purple-700">
              Server Address
            </label>
            <Input
              id="server"
              type="text"
              placeholder="Enter server address"
              value={serverAddress}
              onChange={(e) => setServerAddress(e.target.value)}
              className="w-full border-purple-200 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-purple-700">
              Password (Optional)
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-purple-200 focus:border-purple-500 focus:ring-purple-500"
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