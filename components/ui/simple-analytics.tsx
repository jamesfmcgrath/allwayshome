'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Simple Analytics tracking utility
export const simpleAnalytics = {
  // Track custom events
  track: (eventName: string, metadata?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.sa_event) {
      window.sa_event(eventName, metadata);
    }
  },

  // Track page views manually (if needed)
  pageview: (path?: string) => {
    if (typeof window !== 'undefined' && window.sa_pageview) {
      window.sa_pageview(path);
    }
  },
};

// Component for automatic page tracking (optional - the script handles this automatically)
export default function SimpleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Page views are automatically tracked by the script
    // This is here just for demonstration or if you need custom tracking
    if (process.env.NODE_ENV === 'production') {
      simpleAnalytics.pageview(pathname);
    }
  }, [pathname]);

  return null;
}

// Type declarations for Simple Analytics
declare global {
  interface Window {
    sa_event?: (eventName: string, metadata?: Record<string, any>) => void;
    sa_pageview?: (path?: string) => void;
  }
}
