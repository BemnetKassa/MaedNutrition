// navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { Button } from "./Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 md:px-6 pt-3">
      <nav className="relative mx-auto flex h-[78px] max-w-350 items-center justify-between rounded-2xl border border-[#E8E8E8] bg-white/95 px-4 md:px-10 py-4 md:py-8 shadow-sm backdrop-blur">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-full bg-[#EAF7EC] p-2">
            <Leaf className="h-5 w-5 text-[#3FAE49]" />
          </div>

          <div className="leading-none">
            <h1 className="text-[24px] font-black tracking-tight text-[#3FAE49]">
              MAED
            </h1>
            <p className="-mt-1 text-[11px] font-bold tracking-[0.2em] text-[#111111]">
              NUTRITION
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-[#111111]">
          <Link href="#">Meal Plans</Link>
          <Link href="#">How It Works</Link>
          <Link href="#">Our Meals</Link>
          <Link href="#">About Us</Link>
          <Link href="#">FAQs</Link>
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
          <Button
            variant="outline"
            className="hidden sm:flex h-11 rounded-xl border-[#D9D9D9] px-6 text-[15px] font-semibold"
          >
            Log in
          </Button>

          <Button className="h-11 rounded-xl bg-[#3FAE49] px-4 sm:px-6 text-[15px] font-semibold hover:bg-[#36963f]">
            Sign up
          </Button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="absolute left-4 right-4 top-full z-40 mt-3 rounded-2xl border bg-white p-4 shadow-lg lg:hidden">
            <div className="flex flex-col gap-3 px-2 py-1 text-[15px] font-semibold">
              <Link href="#" onClick={() => setOpen(false)} className="py-2">Meal Plans</Link>
              <Link href="#" onClick={() => setOpen(false)} className="py-2">How It Works</Link>
              <Link href="#" onClick={() => setOpen(false)} className="py-2">Our Meals</Link>
              <Link href="#" onClick={() => setOpen(false)} className="py-2">About Us</Link>
              <Link href="#" onClick={() => setOpen(false)} className="py-2">FAQs</Link>

              <div className="mt-2 flex flex-col gap-2">
                <Button
                  variant="outline"
                  className="w-full rounded-xl border-[#D9D9D9] px-6 text-[15px] font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Log in
                </Button>

                <Button className="w-full rounded-xl bg-[#3FAE49] px-6 text-[15px] font-semibold hover:bg-[#36963f]" onClick={() => setOpen(false)}>
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}