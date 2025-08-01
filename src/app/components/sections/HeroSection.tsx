"use client";
import { useRef } from 'react';
import { useFullPageAnimations } from '@/hooks/useFullPageAnimations';
import TrueFocus from "@/app/components/ui/TrueFocus";
import BgHeroSection from "@/app/components/layout/BgHeroSection";

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Usar el hook de animaciones para fullpage.js
  useFullPageAnimations({
    title: titleRef.current,
    subtitle: subtitleRef.current,
    description: descriptionRef.current,
    button: buttonRef.current
  }, 'heroSection');

  return (
    <div
      className="section flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative"
      data-section="hero"
    >
      <BgHeroSection />
      
      <div ref={contentRef} className="text-center max-w-4xl px-6 relative z-99">
        <h1 
          ref={titleRef} 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent opacity-0"
        >
          <TrueFocus 
            sentence="Hola,soy Roberto"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
            
          />
        </h1>
        <p ref={subtitleRef} className="text-xl md:text-2xl mb-8 text-white opacity-0">
          Desarrollador Full Stack & Diseñador UI/UX
        </p>
        <p ref={descriptionRef} className="text-lg text-white max-w-2xl mx-auto mb-8 opacity-0">
          Creando experiencias digitales excepcionales con código limpio y
          diseño innovador
        </p>
        <button ref={buttonRef} className="bg-white hover:to-purple-700 text-black px-8 py-3 rounded-full text-lg font-light transition-all duration-300 transform hover:scale-105 opacity-0">
          Ver mi trabajo
        </button>
      </div>
    </div>
  );
}
