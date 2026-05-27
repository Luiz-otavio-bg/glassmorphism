
"use client";

import type { Language } from "@/components/language-switch";

interface NavbarProps {
  language: Language;
  onNavHover: (isHovering: boolean) => void;
}

const navItems = {
  en: [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Principles", target: "principles" },
    { label: "Gallery", target: "components" },
    { label: "Lab", target: "lab" },
    { label: "Contact", target: "contactus" },
  ],
  pt: [
    { label: "Início", target: "home" },
    { label: "Sobre", target: "about" },
    { label: "Princípios", target: "principles" },
    { label: "Galeria", target: "components" },
    { label: "Lab", target: "lab" },
    { label: "Contato", target: "contactus" },
  ],
};

export default function Navbar({ language, onNavHover }: NavbarProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      onMouseEnter={() => onNavHover(true)}
      onMouseLeave={() => onNavHover(false)}
      className="fixed left-1/2 top-4 z-[100] flex w-[calc(100%-1rem)] max-w-5xl -translate-x-1/2 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-8"
    >
      <button
        type="button"
        className="font-lemon text-lg text-white sm:text-xl"
        onClick={() => scrollTo("home")}
        aria-label="Go to home"
      >
        BG
      </button>

      <div className="flex max-w-[78vw] items-center gap-3 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 [&::-webkit-scrollbar]:hidden">
        {navItems[language].map((item) => (
          <button
            key={item.target}
            type="button"
            onClick={() => scrollTo(item.target)}
            className="font-sans text-xs font-medium tracking-wide text-white/70 transition-colors hover:text-white sm:text-sm"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
