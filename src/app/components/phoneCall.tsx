"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  PhoneCall as PhoneCallIcon,
  Sparkles,
  Clock,
  Shield,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

export function PhoneConsultationSection() {
  const { messages: m } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#fff8ee] py-16 sm:py-20 md:py-24">
      {/* Background gradients matching HTML */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-[#d89a2b]/15 blur-[120px]" />
        <div className="absolute bottom-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-[#16784a]/10 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#16784a]/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14110d]/20 bg-white/60 backdrop-blur-sm">
              <PhoneCallIcon className="w-3.5 h-3.5 text-[#00A619]" />
              <span className="text-[11px] font-black uppercase tracking-wider text-[#00A619]">
                {m.phoneConsultation.badge}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-[#14110d]">
              {m.phoneConsultation.title}
              <br />
              <span className="text-[#00A619]">{m.phoneConsultation.titleHighlight}</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg leading-relaxed text-[#6b6257] max-w-lg">
              {m.phoneConsultation.subtitle}
            </p>

            {/* Phone Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:+251993818388"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#00A619] px-6 py-3 text-sm font-black text-white transition-all hover:bg-[#0c4d32] shadow-[0_14px_28px_rgba(22,120,74,0.25)]"
              >
                <PhoneCallIcon className="w-4 h-4" />
                +251 993 818 388
              </a>
              <a
                href="tel:+251940256334"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e2d8ca] px-6 py-3 text-sm font-black text-[#14110d] transition-all hover:border-[#16784a] hover:text-[#16784a]"
              >
                <PhoneCallIcon className="w-4 h-4" />
                +251 940 256 334
              </a>
            </div>

            {/* Highlights Grid */}
            <div className="grid gap-3 sm:grid-cols-3 pt-2">
              {m.phoneConsultation.highlights.map((item, idx) => {
                const icons = [
                  { icon: Clock, color: "#16784a" },
                  { icon: Shield, color: "#d89a2b" },
                  { icon: CheckCircle, color: "#c95d43" },
                ];
                const Icon = icons[idx]?.icon || CheckCircle;
                const iconColor = icons[idx]?.color || "#16784a";
                
                return (
                  <div
                    key={item}
                    className="group rounded-lg border border-[#e2d8ca] bg-white p-4 shadow-[0_12px_38px_rgba(26,19,10,0.04)] hover:shadow-[0_22px_70px_rgba(26,19,10,0.08)] transition-all hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${iconColor}10` }}>
                      <Icon className="w-5 h-5" style={{ color: iconColor }} />
                    </div>
                    <p className="text-sm font-black text-[#14110d]">{item}</p>
                  </div>
                );
              })}
            </div>

            {/* Additional Trust Text */}
            <div className="flex items-center gap-3 pt-2 text-sm text-[#6b6257]">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#16784a]" />
                <span>Free consultation</span>
              </div>
              <div className="w-px h-4 bg-[#e2d8ca]" />
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#d89a2b]" />
                <span>No commitment</span>
              </div>
              <div className="w-px h-4 bg-[#e2d8ca]" />
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#c95d43]" />
                <span>15-min call</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg border border-[#e2d8ca] bg-white shadow-[0_22px_70px_rgba(26,19,10,0.08)]">
              <div className="relative h-[300px] sm:h-[360px] md:h-[450px]">
                <Image
                  src="/pictures/sofi11.webp"
                  alt={m.phoneConsultation.imgAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg px-4 py-2 border border-[#e2d8ca] shadow-md">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#00A619]" />
                  <p className="text-xs font-black text-[#14110d]">Free 15-min consultation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PhoneConsultationSection;