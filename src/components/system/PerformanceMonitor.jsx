"use client";
import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Monitor page load performance
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0];
          const paint = performance.getEntriesByType('paint');
          
          const metrics = {
            // Navigation timing
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp: navigation.connectEnd - navigation.connectStart,
            ttfb: navigation.responseStart - navigation.requestStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            
            // Paint timing
            firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime,
            firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
          };

          // Send to analytics if needed
          // analytics.track('performance_metrics', metrics);
        }, 0);
      });
    }
  }, []);

  return null; // This component doesn't render anything
}
