// navbar.tsx
"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "@/i18n/LanguageSwitcher";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { messages: m } = useLanguage();

  const navLinks = [
    { href: "#transformations", label: m.nav.transformation, onClick: () => setOpen(false) },
    { href: "#howItWorks", label: m.nav.howItWorks, onClick: () => setOpen(false) },
    { href: "/online-coaching", label: m.nav.onlineCoaching, onClick: () => setOpen(false) },
    { href: "/#about", label: m.nav.about, onClick: () => setOpen(false) },
    { href: "/phone-consultation", label: m.nav.phoneConsultation, onClick: () => setOpen(false) },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 md:px-6 pt-3">
      <nav className="relative mx-auto flex h-[78px] max-w-350 items-center justify-between rounded-lg border border-[#e2d8ca] bg-white/90 px-4 md:px-10 py-4 md:py-8 shadow-[0_22px_70px_rgba(26,19,10,0.08)] backdrop-blur-sm">

        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#14110d] flex items-center justify-center">
            <span className="text-[#fff8ee] text-xs font-black">SC</span>
          </div>
          <span className="text-[16px] font-extrabold tracking-tight text-[#14110d]">
            {m.common.brandName}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-[14px] font-black text-[#6b6257] uppercase tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#16784a] transition-colors scroll-smooth"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          aria-label={m.nav.toggleMenu}
          className="inline-flex items-center gap-2 rounded-lg p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6 text-[#14110d]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <a
            href="https://maednutritions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center rounded-lg bg-[#16784a] px-3 sm:px-6 text-[14px] font-black text-white shadow-[0_14px_28px_rgba(22,120,74,0.25)] transition-all hover:bg-[#0c4d32]"
          >
            <Zap className="mr-2 h-4 w-4 hidden sm:block" />
            <span className="max-w-[100px] truncate sm:max-w-none">{m.common.maedNutrition}</span>
          </a>
        </div>

        {open && (
          <div className="absolute left-4 right-4 top-full z-40 mt-3 rounded-lg border border-[#e2d8ca] bg-white/95 backdrop-blur-sm p-4 shadow-lg lg:hidden">
            <div className="flex flex-col gap-3 px-2 py-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.onClick}
                  className="py-2 text-[14px] font-black text-[#6b6257] uppercase tracking-wide hover:text-[#16784a] transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-2 flex flex-col gap-2">
                <div className="flex justify-start">
                  <LanguageSwitcher />
                </div>
                <a
                  href="https://maednutritions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-full items-center justify-center rounded-lg bg-[#16784a] px-6 text-[14px] font-black text-white shadow-[0_14px_28px_rgba(22,120,74,0.25)] transition-all hover:bg-[#0c4d32]"
                  onClick={() => setOpen(false)}
                >
                  <Zap className="mr-2 h-4 w-4" />
                  {m.common.maedNutrition}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
