"use client";

import { Languages } from "lucide-react";

export type Language = "en" | "pt";

interface LanguageSwitchProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export default function LanguageSwitch({
  language,
  onLanguageChange,
}: LanguageSwitchProps) {
  const isPortuguese = language === "pt";

  return (
    <button
      type="button"
      onClick={() => onLanguageChange(isPortuguese ? "en" : "pt")}
      className="fixed bottom-5 right-5 z-[110] flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] p-1.5 text-xs font-semibold text-white shadow-2xl shadow-black/30 backdrop-blur-xl transition-colors hover:bg-white/[0.09]"
      aria-label={isPortuguese ? "Switch to English" : "Traduzir para português"}
      aria-pressed={isPortuguese}
    >
      <span className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-black/20">
        <Languages className="size-4 text-cyan-100" />
      </span>
      <span className="relative grid h-8 w-28 grid-cols-2 rounded-full border border-white/10 bg-black/25 p-0.5">
        <span
          className={`absolute top-0.5 h-7 w-[calc(50%-0.125rem)] rounded-full bg-cyan-100 transition-transform ${
            isPortuguese ? "translate-x-[3.375rem]" : "translate-x-0"
          }`}
        />
        <span
          className={`relative z-10 flex items-center justify-center transition-colors ${
            isPortuguese ? "text-white/55" : "text-[#07111f]"
          }`}
        >
          EN
        </span>
        <span
          className={`relative z-10 flex items-center justify-center transition-colors ${
            isPortuguese ? "text-[#07111f]" : "text-white/55"
          }`}
        >
          PT
        </span>
      </span>
    </button>
  );
}
