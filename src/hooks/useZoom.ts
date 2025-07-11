import { useEffect } from 'react';

const useZoom = (zoomLevel: number = 100) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const setZoom = () => {
      // Get the browser's user agent
      const ua = window.navigator.userAgent.toLowerCase();
      
      // Check for different browsers
      const isFirefox = ua.indexOf('firefox') > -1;
      const isChrome = ua.indexOf('chrome') > -1;
      const isSafari = ua.indexOf('safari') > -1 && !isChrome;
      
      try {
        if (isFirefox) {
          // Firefox approach
          document.body.style.transform = `scale(${zoomLevel / 100})`;
          document.body.style.transformOrigin = '0 0';
          document.body.style.width = `${(100 / zoomLevel) * 100}%`;
          document.body.style.height = `${(100 / zoomLevel) * 100}%`;
        } else if (isChrome || isSafari) {
          // Chrome and Safari approach
          document.body.style.zoom = `${zoomLevel}%`;
        } else {
          // Fallback for other browsers
          document.body.style.zoom = `${zoomLevel}%`;
          document.body.style.transform = `scale(${zoomLevel / 100})`;
          document.body.style.transformOrigin = '0 0';
        }
      } catch (error) {
        console.warn('Failed to set zoom level:', error);
      }
    };

    setZoom();

    // Reset zoom when component unmounts
    return () => {
      document.body.style.zoom = '100%';
      document.body.style.transform = 'none';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    };
  }, [zoomLevel]);
};

export default useZoom; 