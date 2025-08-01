'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
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

  const getSectionName = (index: number) => {
    const sectionMap: { [key: number]: string } = {
      0: 'heroSection',
      1: 'aboutSection', 
      2: 'skillsSection',
      3: 'projectsSection',
      4: 'contactSection'
    };
    return sectionMap[index] || 'section';
  };

  const scrollToSection = useCallback((index: number) => {
    if (isScrolling || !containerRef.current) return;
    
    setIsScrolling(true);
    
    // Ejecutar animaciones de salida de la sección actual
    const currentSectionName = getSectionName(currentSection);
    const windowWithAnimations = window as typeof window & {
      [key: string]: (() => void) | undefined;
    };
    const leaveFunction = windowWithAnimations[`${currentSectionName}Leave`];
    if (leaveFunction) {
      leaveFunction();
    }
    
    setCurrentSection(index);
    
    const targetSection = sectionsRef.current[index];
    if (targetSection) {
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Ejecutar animaciones de entrada de la nueva sección después del scroll
    setTimeout(() => {
      const newSectionName = getSectionName(index);
      const enterFunction = windowWithAnimations[`${newSectionName}Enter`];
      if (enterFunction) {
        enterFunction();
      }
      setIsScrolling(false);
    }, 500);
  }, [isScrolling, currentSection]);

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

    

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling, sectionNames.length, scrollToSection]);

  

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
     
      <FloatingDockDemo onSectionChange={scrollToSection} />
    </>
  );
}
