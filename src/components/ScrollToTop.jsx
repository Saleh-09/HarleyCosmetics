import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
   const { pathname } = useLocation();

  useEffect(() => {
    // Multiple approaches to ensure scroll to top works
    
    // Method 1: Immediate scroll
    window.scrollTo(0, 0);
    
    // Method 2: Scroll with smooth behavior (optional)
    // window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Method 3: Force scroll after a small delay (fallback)
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);

    // Method 4: Reset scroll on document and body elements
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;