import { useEffect, useRef, useState } from "react";

interface LazyIframeProps {
  src: string;
  className?: string;
}

export const LazyIframe = ({ src, className }: LazyIframeProps) => {
  const iframeRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={iframeRef} className={className}>
      {isVisible && (
        <iframe 
          src={src} 
          scrolling="no" 
          className="w-full h-full rounded-lg border border-purple-200/20"
        />
      )}
    </div>
  );
};