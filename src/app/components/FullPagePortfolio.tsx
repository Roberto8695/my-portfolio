'use client';

import { useEffect, useRef, useState } from 'react';
import { FloatingDockDemo } from './layout/FloatingDockDemo';

interface FullPagePortfolioProps {
  children: React.ReactNode;
}

export default function FullPagePortfolio({ children }: FullPagePortfolioProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const sectionNames = ['Inicio', 'Sobre mí', 'Habilidades', 'Proyectos', 'Contacto'];

  const scrollToSection = (index: number) => {
    if (isScrolling || !containerRef.current) return;
    
    setIsScrolling(true);
    setCurrentSection(index);
    
    const targetSection = sectionsRef.current[index];
    if (targetSection) {
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      e.preventDefault();
      
      if (e.deltaY > 0 && currentSection < sectionNames.length - 1) {
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          if (currentSection < sectionNames.length - 1) {
            scrollToSection(currentSection + 1);
          }
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          if (currentSection > 0) {
            scrollToSection(currentSection - 1);
          }
          break;
        case 'Home':
          e.preventDefault();
          scrollToSection(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToSection(sectionNames.length - 1);
          break;
      }
    };

    // Escuchar eventos de navegación del FloatingDock
    const handleFloatingDockNavigation = (e: CustomEvent) => {
      const { sectionIndex } = e.detail;
      scrollToSection(sectionIndex);
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling, sectionNames.length]);

  // Navegación por dots
  const renderNavigation = () => (
    <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
      <ul className="space-y-4">
        {sectionNames.map((name, index) => (
          <li key={index} className="relative group">
            <button
              onClick={() => scrollToSection(index)}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                currentSection === index
                  ? 'bg-blue-500 border-blue-500'
                  : 'border-white/50 hover:border-white'
              }`}
              aria-label={`Ir a ${name}`}
            />
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      <div ref={containerRef} className="snap-y snap-mandatory overflow-y-scroll h-screen">
        {Array.isArray(children) ? 
          children.map((child, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) sectionsRef.current[index] = el;
              }}
              className="section snap-start h-screen"
            >
              {child}
            </div>
          )) :
          <div 
            ref={(el) => {
              if (el) sectionsRef.current[0] = el;
            }}
            className="section snap-start h-screen"
          >
            {children}
          </div>
        }
      </div>
      {renderNavigation()}
      <FloatingDockDemo onSectionChange={scrollToSection} />
    </>
  );
}
