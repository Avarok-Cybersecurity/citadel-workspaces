import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const ServerConnect = () => {
  const [serverAddress, setServerAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement actual server connection logic
      console.log("Connecting to server:", serverAddress);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network request
      
      toast({
        title: "Connected successfully",
        description: "Welcome to the server!",
      });
      
      navigate("/office");
    } catch (error) {
      toast({
        title: "Connection failed",
        description: "Please check your server address and try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="glass-panel w-full max-w-md p-8 rounded-lg animate-in">
        <h1 className="text-3xl font-bold text-center mb-8">Connect to Server</h1>
        <form onSubmit={handleConnect} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="server" className="text-sm font-medium">
              Server Address
            </label>
            <Input
              id="server"
              type="text"
              placeholder="Enter server address"
              value={serverAddress}
              onChange={(e) => setServerAddress(e.target.value)}
              className="w-full"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password (Optional)
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter server password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={!serverAddress || isLoading}
          >
            {isLoading ? "Connecting..." : "Connect"}
          </Button>
        </form>
      </div>
    </div>
  );
};