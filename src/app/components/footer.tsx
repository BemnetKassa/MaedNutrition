"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Footer() {
  const { messages: m } = useLanguage();

  return (
    <footer className="bg-[#0B0B0B] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-lg font-extrabold tracking-tight">{m.common.brandName}</span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              {m.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-white/70">
              <span className="inline-flex h-5 w-5 items-center justify-center border border-white/30 text-[10px] font-semibold">IG</span>
              <span className="text-xs">@soficirclediet</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/90">{m.footer.explore}</h3>
            <ul className="mt-3 space-y-2 text-xs text-white/70">
              <li><Link href="/transformation" className="hover:text-white">{m.nav.transformation}</Link></li>
              <li><Link href="/howItWorks" className="hover:text-white">{m.nav.howItWorks}</Link></li>
              <li><Link href="/about" className="hover:text-white">{m.footer.aboutUs}</Link></li>
              <li><Link href="/faq" className="hover:text-white">{m.footer.faqs}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/90">{m.footer.support}</h3>
            <ul className="mt-3 space-y-2 text-xs text-white/70">
              <li><Link href="/assessment" className="hover:text-white">{m.footer.startAssessment}</Link></li>
              <li><Link href="/phone-consultation" className="hover:text-white">{m.footer.phoneConsultation}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/90">{m.footer.contact}</h3>
            <ul className="mt-3 space-y-3 text-xs text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>{m.footer.location}</span>
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
                <span>soficirclediet@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-3 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} {m.common.brandName}. {m.footer.rights}</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">{m.footer.privacy}</Link>
            <Link href="/terms" className="hover:text-white">{m.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
