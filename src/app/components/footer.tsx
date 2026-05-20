"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/pictures/Maed_profile.jpg"
                alt="MAED Nutrition"
                width={120}
                height={28}
                className="object-contain"
              />
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Meal plans designed for busy lives. Fresh, balanced, and delivered
              on your schedule.
            </p>
            <div className="flex items-center gap-2 text-white/70">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/30 text-[10px] font-semibold">IG</span>
              <span className="text-xs">@maednutrition</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/90">Explore</h3>
            <ul className="mt-3 space-y-2 text-xs text-white/70">
              <li><Link href="/mealPlan" className="hover:text-white">Meal Plans</Link></li>
              <li><Link href="/ourMeals" className="hover:text-white">Our Meals</Link></li>
              <li><Link href="/howItWorks" className="hover:text-white">How It Works</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/90">Support</h3>
            <ul className="mt-3 space-y-2 text-xs text-white/70">
              <li><Link href="/assessment" className="hover:text-white">Start Assessment</Link></li>
              <li><Link href="/mealPlan" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/login" className="hover:text-white">Log In</Link></li>
              <li><Link href="/faq" className="hover:text-white">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/90">Contact</h3>
            <ul className="mt-3 space-y-3 text-xs text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5" />
                <span>+251993818388</span>
              </li>
               <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5" />
                <span> +251940256334</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5" />
                <span>maednutrition@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-3 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} MAED Nutrition. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
