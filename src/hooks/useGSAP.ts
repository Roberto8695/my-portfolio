'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Registrar plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  
  // Configuración global para mejor performance
  gsap.config({
    force3D: true,
    nullTargetWarn: false,
  });
}

export const useGSAP = (callback: () => void, dependencies: any[] = []) => {
  const ref = useRef<HTMLDivElement>(null);
  const contextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && ref.current) {
      // Limpiar contexto anterior si existe
      if (contextRef.current) {
        contextRef.current.revert();
      }
      
      // Crear nuevo contexto
      contextRef.current = gsap.context(() => {
        callback();
      }, ref.current);
    }

    // Cleanup
    return () => {
      if (contextRef.current) {
        contextRef.current.revert();
        contextRef.current = null;
      }
    };
  }, dependencies);

  // Cleanup adicional al desmontar
  useEffect(() => {
    return () => {
      if (contextRef.current) {
        contextRef.current.revert();
      }
    };
  }, []);

  return ref;
};

// Utilidades para performance
export const optimizeScrollTrigger = () => {
  if (typeof window !== 'undefined') {
    ScrollTrigger.refresh();
  }
};

export { gsap, ScrollTrigger };
