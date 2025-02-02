import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export const SidebarGroup = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-4", className)} {...props} />
);

export const SidebarGroupLabel = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-2 text-xs font-semibold", className)} {...props} />
);

export const SidebarGroupContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <ScrollArea className={cn("h-[200px] px-1", className)}>
    <div className="pr-2" {...props} />
  </ScrollArea>
);

export const SidebarMenu = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-1", className)} {...props} />
);

export const SidebarMenuItem = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("", className)} {...props} />
);

export const SidebarMenuButton = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    variant="ghost"
    className={cn(
      "w-full justify-start gap-2 px-2 text-sm font-normal",
      className
    )}
    {...props}
  />
);