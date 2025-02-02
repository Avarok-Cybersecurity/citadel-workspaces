import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HelpCircle } from "lucide-react";

export const SecurityModeSelect = () => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-200 uppercase">
        Security Mode
      </label>
      <div className="relative">
        <Select defaultValue="best-effort">
          <SelectTrigger className="w-full bg-[#221F26]/70 border-purple-400/20 text-white">
            <SelectValue placeholder="Select security mode" />
          </SelectTrigger>
          <SelectContent className="bg-[#2A2438] border border-purple-400/30 text-white shadow-xl">
            <SelectItem value="best-effort" className="hover:bg-purple-500/20 focus:bg-purple-500/20">Best Effort</SelectItem>
            <SelectItem value="strict" className="hover:bg-purple-500/20 focus:bg-purple-500/20">Strict</SelectItem>
          </SelectContent>
        </Select>
        <HelpCircle className="absolute right-12 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};