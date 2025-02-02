import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MDXProvider } from '@mdx-js/react';
import { compile } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { evaluate } from '@mdx-js/mdx';
import { AppLayout } from "./layout/AppLayout";
import { MessageSquare, Search, Settings, Share2, CheckCircle2, AlertCircle } from "lucide-react";
import Table from './Table';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
  table: ({ children, ...props }) => (
    <div className="my-6 w-full overflow-y-auto">
      <Table {...props} className="w-full border border-gray-800">
        {children}
      </Table>
    </div>
  ),
  thead: TableHeader,
  tbody: TableBody,
  tr: ({ children, ...props }) => (
    <TableRow {...props} className="hover:bg-[#E5DEFF]/10 transition-colors">
      {children}
    </TableRow>
  ),
  th: ({ children, ...props }) => (
    <TableHead {...props} className="border-b border-gray-800 bg-gray-900/50 text-white font-medium p-4">
      {children}
    </TableHead>
  ),
  td: ({ children, ...props }) => (
    <TableCell {...props} className="border-b border-gray-800 text-gray-300 p-4">
      {children}
    </TableCell>
  ),
  Card: ({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) => (
    <Card className="bg-[#343A5C] border-gray-700 mb-6">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        {description && <CardDescription className="text-gray-300">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="text-gray-300">{children}</CardContent>
    </Card>
  ),
  Alert: ({ title, children, variant = "default" }: { title: string; children: React.ReactNode; variant?: "default" | "destructive" }) => (
    <Alert variant={variant} className="mb-6 bg-[#343A5C] border-purple-800">
      <AlertTitle className="text-white">{title}</AlertTitle>
      <AlertDescription className="text-gray-300">{children}</AlertDescription>
    </Alert>
  ),
  Badge: ({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "secondary" | "destructive" | "outline" }) => {
    const getColorClass = (text: string) => {
      if (text === 'In Progress') return 'text-emerald-800 flex items-center gap-1 inline-flex';
      if (text === 'High Priority') return 'text-red-600 flex items-center gap-1 inline-flex';
      return '';
    };

    return (
      <Badge 
        variant={variant} 
        className={`mr-2 mb-2 w-auto ${getColorClass(children?.toString() || '')}`}
      >
        {children?.toString() === 'In Progress' && <CheckCircle2 className="h-3 w-3" />}
        {children?.toString() === 'High Priority' && <AlertCircle className="h-3 w-3" />}
        {children}
      </Badge>
    );
  },
  Table: Table,
};

export const Office = () => {
  const [content, setContent] = useState(`
# Welcome to Our Office Space 🏢

## Today's Updates

<Alert title="Important Notice">
Team meeting scheduled for 2 PM today in the main conference room.
</Alert>

## Project Overview

<Card title="Current Sprint" description="Sprint 23 - Week 2">
- Feature development in progress
- Code reviews pending
- QA testing scheduled

<Badge>In Progress</Badge>
<Badge variant="secondary">High Priority</Badge>
</Card>

## Team Schedule

<Table data={[
  { time: '9:00', monday: 'Standup', tuesday: 'Planning', wednesday: 'Review' },
  { time: '11:00', monday: 'Dev', tuesday: 'Dev', wednesday: 'Testing' },
  { time: '14:00', monday: 'Review', tuesday: 'Testing', wednesday: 'Deploy' }
]} />

## Office Layout

<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0673607881384!2d-122.41941658468226!3d37.77492997975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1648181241469!5w!3h400"
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  width="100%" 
  height="400px"
  className="rounded-lg border border-gray-800 bg-[#343A5C]/50 my-6"
></iframe>

## Resources & Links

<Card title="Quick Links" description="Frequently accessed resources">
- [Documentation Wiki](#)
- [Design System](#)
- [Team Calendar](#)
</Card>

## Code Examples

\`\`\`typescript
// Example of our new API integration
const fetchData = async () => {
  const response = await api.get('/endpoint');
  return response.data;
};
\`\`\`
  `);
  const [compiledContent, setCompiledContent] = useState<React.ReactNode | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const compileContent = async () => {
      try {
        console.log('Compiling MDX content...');
        const result = await evaluate(content, {
          ...runtime,
          useMDXComponents: () => components,
          baseUrl: window.location.origin
        });
        console.log('MDX compilation successful');
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
