import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HelpCircle } from "lucide-react";

export const SecurityLevelSelect = () => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-200 uppercase">
        Security Level
      </label>
      <div className="relative">
        <Select defaultValue="standard">
          <SelectTrigger className="w-full bg-[#221F26]/70 border-purple-400/20 text-white">
            <SelectValue placeholder="Select security level" />
          </SelectTrigger>
          <SelectContent className="bg-[#2A2438] border border-purple-400/30 text-white shadow-xl">
            <SelectItem value="standard" className="hover:bg-purple-500/20 focus:bg-purple-500/20">Standard</SelectItem>
            <SelectItem value="reinforced" className="hover:bg-purple-500/20 focus:bg-purple-500/20">Reinforced</SelectItem>
            <SelectItem value="high" className="hover:bg-purple-500/20 focus:bg-purple-500/20">High</SelectItem>
          </SelectContent>
        </Select>
        <HelpCircle className="absolute right-12 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};