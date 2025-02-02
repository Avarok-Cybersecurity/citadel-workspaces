import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MDXProvider } from '@mdx-js/react';
import { compile } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { evaluate } from '@mdx-js/mdx';
import { AppLayout } from "./layout/AppLayout";
import { MessageSquare, Search, Settings, Share2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const components = {
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
  img: ({ src, alt }) => (
    <img src={src} alt={alt} className="max-w-full h-auto rounded-lg shadow-lg my-4" />
  ),
  table: ({ children }) => (
    <Table className="my-4">{children}</Table>
  ),
  thead: ({ children }) => (
    <TableHeader>{children}</TableHeader>
  ),
  tbody: ({ children }) => (
    <TableBody>{children}</TableBody>
  ),
  th: ({ children }) => (
    <TableHead className="text-white">{children}</TableHead>
  ),
  td: ({ children }) => (
    <TableCell className="text-gray-300">{children}</TableCell>
  ),
  tr: TableRow,
};

export const Office = () => {
  const [content, setContent] = useState(`
# Welcome to Our Office Space 🏢

## Interactive Documentation Example

This is a demonstration of what MDX can do in our office space. Let's explore some features:

### MDX-Specific Features

{/* This is an MDX comment - it won't show in the output */}

{/* Using a React component inline */}
<Button 
  onClick={() => alert('MDX is awesome!')}
  className="my-4"
>
  Click me - I'm a React component!
</Button>

{/* Using variables and expressions */}
export const teamName = 'Awesome Team';
export const currentTime = new Date().toLocaleTimeString();

Your team: **{teamName}**
Current time: *{currentTime}*

### Rich Text Formatting

You can write **bold text**, *italic text*, and even ~~strikethrough~~. 

### Lists and Tasks

Here's what's on our agenda today:
- Morning standup at 9:00 AM
- Project review at 11:00 AM
- Team lunch at 12:30 PM
- Sprint planning at 2:00 PM

### Code Examples

You can share code snippets with your team:

\`\`\`typescript
const greetTeam = (name: string) => {
  console.log(\`Welcome to the team, \${name}!\`);
};
\`\`\`

### Links and References

- [Company Wiki](#)
- [HR Portal](#)
- [IT Support](#)

### Images and Media

Here's our team celebrating last quarter's success:

![Team Celebration](https://content.codecademy.com/courses/learn-cpp/community-challenge/highfive.gif)

### Quotes and Callouts

> "Innovation distinguishes between a leader and a follower." 
> - Steve Jobs

### Tables

| Time  | Monday  | Tuesday | Wednesday |
|-------|---------|----------|-----------|
| 9:00  | Standup | Planning | Review    |
| 11:00 | Dev     | Dev      | Testing   |
| 14:00 | Review  | Testing  | Deploy    |

### Final Notes

Remember to:
1. Check your calendar for meetings
2. Update your tasks in the project board
3. Share your progress with the team

---

Need help? Reach out to your team lead or visit the support portal.
  `);
  const [compiledContent, setCompiledContent] = useState<React.ReactNode | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const compileContent = async () => {
      try {
        const result = await evaluate(content, {
          ...runtime,
          useMDXComponents: () => components
        });
        setCompiledContent(result.default({ components }));
      } catch (error) {
        console.error('Error compiling MDX:', error);
      }
    };

    compileContent();
  }, [content]);

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
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-[#E5DEFF] hover:text-[#343A5C]"
              >
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-[#E5DEFF] hover:text-[#343A5C]"
              >
                <Search className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-[#E5DEFF] hover:text-[#343A5C]"
              >
                <Share2 className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-[#E5DEFF] hover:text-[#343A5C]"
              >
                <Settings className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                className="bg-[#E5DEFF] text-[#343A5C] hover:bg-[#F1F0FB] hover:text-[#262C4A]"
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
                <Button 
                  onClick={handleSave} 
                  className="mt-2 bg-[#E5DEFF] text-[#343A5C] hover:bg-[#F1F0FB] hover:text-[#262C4A]"
                >
                  Save Changes
                </Button>
              </div>
            ) : (
              <div className="p-2 prose prose-invert prose-sm md:prose-base lg:prose-lg max-w-none">
                <MDXProvider components={components}>
                  {compiledContent}
                </MDXProvider>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
