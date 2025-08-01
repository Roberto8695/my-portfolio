import React from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconHome,
  IconUser,
  IconCode,
  IconBriefcase,
} from "@tabler/icons-react";

interface FloatingDockDemoProps {
  onSectionChange?: (sectionIndex: number) => void;
}

export function FloatingDockDemo({ onSectionChange }: FloatingDockDemoProps) {
  const handleNavigation = (sectionIndex: number) => {
    if (onSectionChange) {
      onSectionChange(sectionIndex);
    }
  };

  const links = [
    {
      title: "Inicio",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#inicio",
      onClick: () => handleNavigation(0),
    },
    {
      title: "Sobre mí",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#sobre-mi",
      onClick: () => handleNavigation(1),
    },
    {
      title: "Habilidades",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#habilidades",
      onClick: () => handleNavigation(2),
    },
    {
      title: "Proyectos",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#proyectos",
      onClick: () => handleNavigation(3),
    },
    {
      title: "Contacto",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contacto",
      onClick: () => handleNavigation(4),
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/roberto-escalera-zenteno-273190142/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Roberto8695",
    },
  ];

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
      <FloatingDock
        mobileClassName="translate-x-0"
        items={links}
      />
    </div>
  );
}
