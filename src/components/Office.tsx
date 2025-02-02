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
      <div className="h-[calc(100vh-3.5rem)] overflow-hidden bg-[#444A6C]">
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-800 bg-[#343A5C]">
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
          
          <div className="flex-1 overflow-y-auto">
            {isEditing ? (
              <div className="p-2">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full h-[400px] p-4 rounded-md border border-gray-800 bg-[#444A6C] text-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button onClick={handleSave} className="mt-2">Save Changes</Button>
              </div>
            ) : (
              <div className="p-2 prose prose-invert prose-sm md:prose-base lg:prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-4xl font-bold mb-4 text-white">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-semibold mb-3 text-white">{children}</h2>
                    ),
                    p: ({ children }) => (
                      <p className="mb-4 text-gray-300">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside mb-4 text-gray-300">{children}</ul>
                    ),
                    li: ({ children }) => (
                      <li className="mb-2">{children}</li>
                    ),
                    a: ({ href, children }) => (
                      <a href={href} className="text-purple-400 hover:text-purple-300 underline">
                        {children}
                      </a>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};