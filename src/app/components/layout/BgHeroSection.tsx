"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Orb from '@/app/components/ui/Orb';

export default function BgHeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = bgRef.current;
    if (!element) return;

    // Animación de entrada
    gsap.fromTo(element, {
      opacity: 0,
      scale: 0.8,
    }, {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "power2.out"
    });

    // Listener para animaciones de fullpage.js
    const handleSectionLeave = () => {
      gsap.to(element, {
        opacity: 0,
        scale: 1.2,
        duration: 0.8,
        ease: "power2.in"
      });
    };

    const handleSectionEnter = () => {
      gsap.fromTo(element, {
        opacity: 0,
        scale: 0.8,
      }, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out"
      });
    };

    // Agregar eventos personalizados para fullpage.js
    window.addEventListener('hero-leave', handleSectionLeave);
    window.addEventListener('hero-enter', handleSectionEnter);

    return () => {
      window.removeEventListener('hero-leave', handleSectionLeave);
      window.removeEventListener('hero-enter', handleSectionEnter);
    };
  }, []);

  return (
    <div 
      ref={bgRef}
      style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
    >
      <Orb
        hoverIntensity={0.8}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />
    </div>
  );
}