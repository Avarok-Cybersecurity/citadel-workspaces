import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";
import { AppLayout } from "./layout/AppLayout";
import { MessageSquare, Search, Settings, Share2 } from "lucide-react";

export const Office = () => {
  const [content, setContent] = useState(`
# Welcome to Our Office
## Company Updates
- New project kickoff next week
- Team building event on Friday
- Q4 planning session tomorrow

## Quick Links
- [HR Portal](#)
- [IT Support](#)
- [Meeting Rooms](#)
  `);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Changes saved",
      description: "The office page has been updated",
    });
  };

  return (
    <AppLayout>
      <div className="flex-1 h-[calc(100vh-3.5rem)] overflow-hidden bg-[#1A1F2C]">
        <div className="h-full flex flex-col">
          {/* Chat Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-white">Office</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Cancel" : "Edit"}
              </Button>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-4">
            {isEditing ? (
              <div className="space-y-4">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full h-[400px] p-4 rounded-md border border-gray-800 bg-[#1E2433] text-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button onClick={handleSave}>Save Changes</Button>
              </div>
            ) : (
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};