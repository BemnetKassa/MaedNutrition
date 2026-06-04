"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dumbbell, Timer, Activity, Sparkles, ArrowRight, Target, TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

const featureIcons = [Dumbbell, Timer, Activity];
const featureColors = ["#16784a", "#d89a2b", "#c95d43"];

const OnlineCoaching = () => {
  const { messages: m } = useLanguage();

  return (
  <section className="relative overflow-hidden bg-[#fff8ee] py-10 md:py-15">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-[#16784a]/10 blur-[120px]" />
      <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-[#d89a2b]/15 blur-[140px]" />
    </div>

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14110d]/20 bg-white/60 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#16784a]" />
            <span className="text-[11px] font-black uppercase tracking-wider text-[#0c4d32]">
              {m.coaching.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#14110d]">
            {m.coaching.title}
            <br />
            <span className="text-[#16784a]">{m.coaching.titleHighlight}</span>
          </h2>

          <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[#6b6257]">
            {m.coaching.description}
          </p>

          <div className="grid gap-4 sm:grid-cols-3 pt-2">
            {m.coaching.features.map((item, idx) => {
              const Icon = featureIcons[idx];
              const color = featureColors[idx];
              return (
              <div 
                key={item.label} 
                className="group rounded-lg border border-[#e2d8ca] bg-white p-4 shadow-[0_12px_38px_rgba(26,19,10,0.04)] hover:shadow-[0_22px_70px_rgba(26,19,10,0.08)] transition-all hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${color}10` }}>
                  <Icon className="h-5 w-5" style={{ color }} />
                </div>
                <p className="text-sm font-black text-[#14110d]">{item.label}</p>
                <p className="text-xs text-[#6b6257] mt-1">{item.description}</p>
              </div>
            );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 rounded-lg bg-[#16784a] px-6 py-3 text-sm font-black text-white transition-all hover:bg-[#0c4d32] shadow-[0_14px_28px_rgba(22,120,74,0.25)]"
            >
              {m.coaching.startCoaching}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#howItWorks"
              className="inline-flex items-center gap-2 rounded-lg border border-[#e2d8ca] px-6 py-3 text-sm font-black text-[#14110d] transition-all hover:border-[#16784a] hover:text-[#16784a]"
            >
              {m.coaching.seeStructure}
            </Link>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#16784a] to-[#0c4d32] border-2 border-white"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-[#d89a2b]" />
                <span className="text-sm font-black text-[#14110d]">500+</span>
                <span className="text-xs text-[#6b6257]">{m.coaching.activeClients}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-lg border border-[#e2d8ca] bg-white shadow-[0_22px_70px_rgba(26,19,10,0.08)]">
            <div className="relative h-[420px] md:h-[480px]">
              <Image
                src="/pictures/DSC00834.webp"
                alt={m.coaching.imgAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg px-4 py-2 border border-[#e2d8ca] shadow-md">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#16784a]" />
                <p className="text-xs font-black text-[#14110d]">{m.coaching.planBadge}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default OnlineCoaching;
