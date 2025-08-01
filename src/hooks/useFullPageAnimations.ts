'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

interface AnimationElements {
  title: HTMLElement | null;
  subtitle: HTMLElement | null;
  description: HTMLElement | null;
  button: HTMLElement | null;
}

export const useFullPageAnimations = (elements: AnimationElements, sectionName: string) => {
  useEffect(() => {
    const { title, subtitle, description, button } = elements;
    
    if (!title || !subtitle || !description || !button) return;

    // Configurar estado inicial
    gsap.set([title, subtitle, description, button], {
      opacity: 0,
      y: 50
    });

    // Animación de entrada inicial
    const initialTl = gsap.timeline();
    initialTl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.5
    })
    .to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .to(description, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")
    .to(button, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.3");

    // Funciones de animación para fullpage.js
    const handleLeave = () => {
      gsap.to([title, subtitle, description, button], {
        opacity: 0,
        y: -30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.in"
      });
    };

    const handleEnter = () => {
      gsap.set([title, subtitle, description, button], {
        opacity: 0,
        y: 50
      });

      const enterTl = gsap.timeline();
      enterTl.to(title, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      })
      .to(subtitle, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5")
      .to(description, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
      .to(button, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.3");
    };

    // Registrar funciones globalmente para fullpage.js
    const windowWithAnimations = window as typeof window & {
      [key: string]: () => void;
    };
    
    windowWithAnimations[`${sectionName}Leave`] = handleLeave;
    windowWithAnimations[`${sectionName}Enter`] = handleEnter;

    // Cleanup
    return () => {
      delete windowWithAnimations[`${sectionName}Leave`];
      delete windowWithAnimations[`${sectionName}Enter`];
    };
  }, [elements, sectionName]);
};
