import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { MDXProvider } from '@mdx-js/react';
import { evaluate } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { components } from "./mdxComponents";
import { OfficeLayout } from "./OfficeLayout";

export const MarketingOffice = () => {
  const [content, setContent] = useState(`
# PR & Marketing Department 📢

## Current Campaigns

<Alert title="Active Campaign">
Q1 Product Launch Campaign in progress - All hands meeting at 3 PM
</Alert>

## Marketing Metrics

<Card title="Campaign Performance" description="Last 30 Days">
- Social Media Engagement: +25%
- Website Traffic: 50k visitors
- Lead Generation: 1,200 new leads

<Badge>Trending Up</Badge>
<Badge variant="secondary">High Impact</Badge>
</Card>

## Content Calendar

<Table data={[
  { date: 'Mon', content: 'Blog Post', platform: 'Website', status: 'Draft' },
  { date: 'Wed', content: 'Product Video', platform: 'YouTube', status: 'Planning' },
  { date: 'Fri', content: 'Newsletter', platform: 'Email', status: 'Scheduled' }
]} />

## Search Google

<Card title="Quick Search" description="Search Google directly">
<iframe
  src="https://www.google.com/search?igu=1"
  width="100%"
  height="400px"
  style={{ border: 'none' }}
></iframe>
</Card>
  `);
  const [compiledContent, setCompiledContent] = useState<React.ReactNode | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Changes saved",
      description: "The marketing office page has been updated",
      className: "bg-[#343A5C] border-purple-800 text-purple-200",
    });
  };

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

  return (
    <OfficeLayout
      title="PR/Marketing"
      isEditing={isEditing}
      onEditToggle={() => setIsEditing(!isEditing)}
      onSave={handleSave}
    >
      {isEditing ? (
        <div className="p-2">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-[400px] p-4 rounded-md border border-gray-800 bg-[#444A6C] text-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      ) : (
        <div className="p-2 prose prose-invert prose-sm md:prose-base lg:prose-lg max-w-none">
          <MDXProvider components={components}>
            {compiledContent}
          </MDXProvider>
        </div>
      )}
    </OfficeLayout>
  );
};
