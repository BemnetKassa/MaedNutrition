// hero.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Zap,
  Leaf,
  Target,
  CalendarDays,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Hero() {
  const { messages: m } = useLanguage();

  return (
    <section
      className="relative overflow-hidden pt-24 md:pt-0 pb-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/pictures/background.jpg')",
      }}
    >

      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/pictures/Group 9.png"
          alt={m.hero.heroBgAlt}
          fill
          priority
          sizes="(max-width: 757px) 100vw, 50vw"
          className="object-contain object-top opacity-90 mt-18"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-362.5 px-4 md:px-6 md:pr-0">

        <div className="grid items-center gap-6 grid-cols-1 md:grid-cols-2 pt-105 md:pt-20">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#d89a2b]/20 rounded-full blur-3xl -z-10" />

            <div className="max-w-full md:max-w-180 mt-3 md:mt-6">

              <h1 className="text-4xl sm:text-4xl md:text-[50px] lg:text-[58px] leading-[0.95] font-black tracking-tight text-[#f0f0f0]">
                {m.hero.titleLine1}
                <br />
                <span className="md:bg-[#00A619] bg-[#00A619] md:shadow-0 shadow-amber-700 bg-clip-text text-transparent">
                  {m.hero.titleLine2}
                </span>
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed md:text-[#c5c5c5] text-white max-w-lg">
                {m.hero.subtitle}
              </p>
            </div>

            <div className="mt-6 grid gap-5 grid-cols-1 md:grid-cols-2 max-w-full md:max-w-160">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group rounded-lg border border-[#e2d8ca] bg-white p-6 shadow-[0_22px_70px_rgba(26,19,10,0.14)] hover:shadow-[0_25px_50px_rgba(22,120,74,0.15)] transition-all duration-300"
              >
                <div className="flex md:h-12 h-4  md:w-12 w-4 items-center justify-center rounded-full bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <ClipboardList className="h-6 w-6 text-[#00A619]" />
                </div>

                <h3 className="mt-5 text-[18px] font-extrabold leading-tight text-[#14110d]">
                  {m.hero.card1Title}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-[#6b6257]">
                  {m.hero.card1Desc}
                </p>

                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/assessment"
                    className="mt-5 flex h-11 w-full items-center justify-center rounded-lg bg-[#00A619] text-white shadow-[0_14px_28px_rgba(22,120,74,0.25)] hover:bg-[#0c4d32] transition-all text-[14px] font-black relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10">{m.hero.card1Cta}</span>
                    <ArrowRight className="absolute right-4 w-4 h-4 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group rounded-lg border border-[#e2d8ca] bg-white p-6 shadow-[0_22px_70px_rgba(26,19,10,0.14)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                <div className="flex md:h-12 h-6 md:w-12 w-6 items-center justify-center rounded-full bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-[#00A619]" />
                </div>

                <h3 className="mt-5 text-[18px] font-extrabold leading-tight text-[#14110d]">
                  {m.hero.card2Title}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-[#6b6257]">
                  {m.hero.card2Desc}
                </p>

                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/transformation-Ai"
                    className="mt-5 flex h-11 w-full items-center justify-center rounded-lg border border-[#e2d8ca] bg-white text-[#14110d] hover:bg-[#f3eadc] transition-all text-[14px] font-black group/btn"
                  >
                    <span>{m.hero.card2Cta}</span>
                    <Sparkles className="ml-2 w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 transition-all" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-3 rounded-lg bg-white/70 backdrop-blur-sm border border-[#e2d8ca]"
            >
              <div className="flex items-center gap-3 group cursor-pointer">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm group-hover:shadow-md transition-all"
                >
                  <Leaf className="h-5 w-5 text-[#00A619]" />
                </motion.div>

                <div>
                  <h4 className="text-[14px] font-bold text-[#14110d]">
                    {m.hero.feature1Title}
                  </h4>
                  <p className="text-[12px] text-[#6b6257]">
                    {m.hero.feature1Desc}
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-[#e2d8ca]" />

              <div className="flex items-center gap-3 group cursor-pointer">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex md:h-12 h-6 md:w-12 w-6 items-center justify-center rounded-full bg-white shadow-sm group-hover:shadow-md transition-all"
                >
                  <Target className="h-5 w-5 text-[#00A619]" />
                </motion.div>

                <div>
                  <h4 className="text-[14px] font-bold text-[#14110d]">
                    {m.hero.feature2Title}
                  </h4>
                  <p className="text-[12px] text-[#6b6257]">
                    {m.hero.feature2Desc}
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-[#e2d8ca]" />

              <div className="flex gap-2 group cursor-pointer">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm group-hover:shadow-md transition-all"
                >
                  <CalendarDays className="h-5 w-5 text-[#00A619]" />
                </motion.div>

                <div>
                  <h4 className="text-[14px] font-bold text-[#14110d]">
                    {m.hero.feature3Title}
                  </h4>
                  <p className="text-[12px] text-[#6b6257]">
                    {m.hero.feature3Desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative hidden h-full md:block"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-80 w-full items-center justify-center md:h-120 lg:h-150 mt-5"
            >
              <Image
                src="/pictures/Group 9.png"
                alt={m.hero.heroAlt}
                fill
                priority
                sizes="(max-width: 757px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
