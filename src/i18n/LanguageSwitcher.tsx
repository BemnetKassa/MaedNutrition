"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Languages } from "lucide-react";
import { useLanguage, type Locale } from "./LanguageProvider";

const options: { value: Locale; short: string; labelKey: "languageEn" | "languageAm" }[] = [
  { value: "en", short: "EN", labelKey: "languageEn" },
  { value: "am", short: "አማ", labelKey: "languageAm" },
];

export function LanguageSwitcher() {
  const { locale, setLocale, messages } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const active = options.find((o) => o.value === locale) ?? options[0];

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };

    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  const select = (value: Locale) => {
    setLocale(value);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-8 items-center gap-1 rounded-md border border-[#e2d8ca] bg-white/90 px-2 text-[11px] font-black text-[#14110d] shadow-sm transition-colors hover:border-[#16784a] hover:text-[#16784a]"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Language"
      >
        <Languages className="h-3.5 w-3.5 shrink-0 text-[#6b6257]" aria-hidden />
        <span>{active.short}</span>
        <ChevronDown
          className={`h-3 w-3 shrink-0 text-[#6b6257] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-full z-50 mt-1 min-w-[7.5rem] overflow-hidden rounded-md border border-[#e2d8ca] bg-white py-0.5 shadow-[0_12px_38px_rgba(26,19,10,0.12)]"
        >
          {options.map((opt) => {
            const isActive = locale === opt.value;
            return (
              <li key={opt.value} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => select(opt.value)}
                  className={`flex w-full items-center justify-between gap-2 px-2.5 py-1.5 text-left text-[11px] font-bold transition-colors ${
                    isActive
                      ? "bg-[#16784a]/10 text-[#16784a]"
                      : "text-[#6b6257] hover:bg-[#f3eadc] hover:text-[#14110d]"
                  }`}
                >
                  <span>{messages.common[opt.labelKey]}</span>
                  <span className="text-[10px] font-black uppercase tracking-wide opacity-70">
                    {opt.short}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
