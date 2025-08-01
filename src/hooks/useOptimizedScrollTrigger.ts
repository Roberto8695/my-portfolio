'use client';

import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/hooks/useGSAP';

// Utility function para debounce
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const useOptimizedScrollTrigger = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Configuración global optimizada para ScrollTrigger
    ScrollTrigger.config({
      limitCallbacks: true, // Limita callbacks para mejor performance
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize',
    });

    // Refresh ScrollTrigger cuando sea necesario
    const handleResize = debounce(() => {
      ScrollTrigger.refresh();
    }, 250);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Configuración de GSAP para mejor performance
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
      autoSleep: 60, // Pausa animaciones después de 60s de inactividad
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
};
