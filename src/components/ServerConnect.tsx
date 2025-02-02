import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Shield, HelpCircle } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const ServerConnect = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Use React Query to persist form state
  const { data: formData } = useQuery({
    queryKey: ['serverConnectForm'],
    queryFn: () => ({ serverAddress: '', password: '' }),
    initialData: { serverAddress: '', password: '' }
  });

  const [serverAddress, setServerAddress] = useState(formData.serverAddress);
  const [password, setPassword] = useState(formData.password);

  // Mutation to update form state in cache
  const { mutate: updateFormCache } = useMutation({
    mutationFn: (newData: { serverAddress: string; password: string }) => {
      console.log('Updating form cache:', newData);
      return Promise.resolve(newData);
    },
    onSuccess: (newData) => {
      queryClient.setQueryData(['serverConnectForm'], newData);
    },
  });

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
    
    // Update cache before navigation
    updateFormCache({ serverAddress, password });
    navigate("/security-settings");
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
          background: "linear-gradient(90deg, #1a1b26 0%, rgba(26, 27, 38, 0.95) 30%, rgba(26, 27, 38, 0.8) 60%, rgba(26, 27, 38, 0.4) 100%)"
        }}
      />

      {/* Back Button */}
      <Button
        variant="ghost"
        className="absolute top-4 left-4 text-white z-10 hover:bg-purple-500/20 animate-fade-in"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="w-full max-w-xl p-8 space-y-6 bg-[#4F5889]/95 backdrop-blur-sm border border-purple-500/20 shadow-lg rounded-lg z-10 animate-fade-in">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-bold text-white">ADD A NEW WORKSPACE</h1>
        </div>

        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-white">WORKSPACE INFORMATION</h2>

          <form onSubmit={handleConnect} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="server" className="text-sm font-medium text-gray-200 uppercase">
                Workspace Location
              </label>
              <div className="relative">
                <Input
                  id="server"
                  type="text"
                  placeholder="workspace-name.avarok.net"
                  value={serverAddress}
                  onChange={(e) => setServerAddress(e.target.value)}
                  className="bg-[#221F26]/70 border-purple-400/20 text-white placeholder:text-gray-400 pr-10"
                />
                <HelpCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-200 uppercase">
                Workspace Password (Optional)
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter workspace password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#221F26]/70 border-purple-400/20 text-white placeholder:text-gray-400 pr-10"
                />
                <HelpCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <Button
                type="button"
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-white hover:bg-purple-500/20"
              >
                CANCEL
              </Button>
              <Button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white transition-colors"
              >
                NEXT
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};