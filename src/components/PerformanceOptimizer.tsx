import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        "/src/assets/hero-waste-workers.png",
        "/src/assets/aret-logo.png"
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize font loading
    const optimizeFonts = () => {
      const fontPreloadLink = document.createElement('link');
      fontPreloadLink.rel = 'preconnect';
      fontPreloadLink.href = 'https://fonts.googleapis.com';
      document.head.appendChild(fontPreloadLink);

      const fontPreloadLink2 = document.createElement('link');
      fontPreloadLink2.rel = 'preconnect';
      fontPreloadLink2.href = 'https://fonts.gstatic.com';
      fontPreloadLink2.crossOrigin = 'anonymous';
      document.head.appendChild(fontPreloadLink2);
    };

    // Add performance monitoring
    const monitorPerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const loadTime = navigationTiming.loadEventEnd - navigationTiming.loadEventStart;
          
          if (loadTime > 3000) {
            console.warn('Page load time is slow:', loadTime + 'ms');
          }
        });
      }
    };

    preloadCriticalResources();
    optimizeFonts();
    monitorPerformance();

    // Cleanup function
    return () => {
      // Remove performance listeners if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;