'use client';

import { useEffect } from 'react';
import { simpleAnalytics } from './simple-analytics';

export default function NotFoundTracker() {
  useEffect(() => {
    // Track 404 errors
    simpleAnalytics.track('404_error', {
      path: window.location.pathname,
      referrer: document.referrer || 'direct',
      timestamp: new Date().toISOString(),
    });
  }, []);

  return null;
}
