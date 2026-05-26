// navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 md:px-6 pt-3">
      <nav className="relative mx-auto flex h-[78px] max-w-350 items-center justify-between rounded-2xl border border-[#E8E8E8] bg-white/95 px-4 md:px-10 py-4 md:py-8 shadow-sm backdrop-blur">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-[16px] font-extrabold tracking-tight text-[#111111]">
            Sofi Circle Diet
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-[#111111]">
          <Link href="/transformation">Transformation</Link>
          <Link href="/phone-consultation">Phone Consultation</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/online-coaching">Online Coaching</Link>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          className="inline-flex items-center gap-2 rounded-lg p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6 text-[#111111]"
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

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:flex h-11 items-center justify-center rounded-xl border border-[#D9D9D9] px-6 text-[15px] font-semibold text-[#3FAE49] transition hover:bg-[#F3FBF4]"
          >
            Log in
          </Link>

          <Link href="/mealPlan" className="flex h-11 items-center justify-center rounded-xl bg-[#3FAE49] px-4 sm:px-6 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#36963f]">
            Sign up
          </Link>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="absolute left-4 right-4 top-full z-40 mt-3 rounded-2xl border bg-white p-4 shadow-lg lg:hidden">
            <div className="flex flex-col gap-3 px-2 py-1 text-[15px] font-semibold">
              <Link href="/transformation" onClick={() => setOpen(false)} className="py-2">Transformation</Link>
              <Link href="/phone-consultation" onClick={() => setOpen(false)} className="py-2">Phone Consultation</Link>
              <Link href="/how-it-works" onClick={() => setOpen(false)} className="py-2">How It Works</Link>
              <Link href="/online-coaching" onClick={() => setOpen(false)} className="py-2">Online Coaching</Link>

              <div className="mt-2 flex flex-col gap-2">
                <Link
                  href="/login"
                  className="flex h-11 w-full items-center justify-center rounded-xl border border-[#D9D9D9] px-6 text-[15px] font-semibold text-[#3FAE49] transition hover:bg-[#F3FBF4]"
                  onClick={() => setOpen(false)}
                >
                  Log in
                </Link>

                <Link href="/mealPlan" className="flex h-11 w-full items-center justify-center rounded-xl bg-[#3FAE49] px-6 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#36963f]" onClick={() => setOpen(false)}>
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}