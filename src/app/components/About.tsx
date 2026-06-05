// components/about-section.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Target, Users, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

const valueIcons = [Target, Sparkles, Users];

export function AboutSection() {
  const { messages: m } = useLanguage();

  return (
    <section id="about" className="relative bg-[#fff8ee] py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-[#d89a2b]/20 blur-[120px]" />
        <div className="absolute bottom-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-[#16784a]/15 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1 /2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#16784a]/5 blur-[100px]" />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto">

        {/* Hero Card */}
        <div className="relative rounded-lg border border-[#e2d8ca] bg-white shadow-[0_22px_70px_rgba(26,19,10,0.08)] p-5 sm:p-8 md:p-12 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* LEFT CONTENT */}
            <div className="space-y-4 sm:space-y-6 w-full">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full border border-[#14110d]/20 bg-white/60 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#16784a]" />
                  <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-wider text-[#0c4d32]">
                    {m.about.badge}
                  </span>
                </div>
                <span className="px-2 sm:px-3 py-1 rounded-full bg-[#d89a2b]/10 text-[#d89a2b] text-[10px] sm:text-xs font-black">
                  {m.about.since}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-[#14110d]">
                {m.about.title}{" "}
                <span className="text-[#16784a] block sm:inline">{m.about.titleHighlight}</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#6b6257] leading-relaxed">
                {m.about.intro}
              </p>

              {/* Tags - wrap on mobile */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {m.about.tags.map((item) => (
                  <span
                    key={item}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-[#e2d8ca] bg-white text-xs sm:text-sm text-[#6b6257] font-semibold hover:border-[#16784a] hover:text-[#16784a] transition-all cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Stats - 3 columns always */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
                {m.about.stats.map((stat) => (
                  <div
                    key={stat}
                    className="rounded-lg bg-white border border-[#e2d8ca] px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-black text-[#14110d] shadow-[0_12px_38px_rgba(26,19,10,0.04)] hover:border-[#16784a] transition-all cursor-pointer"
                  >
                    {stat}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#16784a] text-white font-black hover:bg-[#0c4d32] transition-all shadow-[0_14px_28px_rgba(22,120,74,0.25)] text-sm sm:text-base"
                >
                  {m.about.startAssessment}
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>

                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-[#e2d8ca] text-[#14110d] font-black hover:border-[#16784a] hover:text-[#16784a] transition-all cursor-pointer text-sm sm:text-base"
                >
                  {m.about.learnMore}
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative grid grid-cols-2 gap-2 sm:gap-4 w-full">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden border border-[#e2d8ca] shadow-[0_12px_38px_rgba(26,19,10,0.06)]"
              >
                <Image
                  src="/pictures/DSC00730.webp"
                  alt={m.about.imgFounder}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="relative h-48 sm:h-56 md:h-64 lg:h-72 mt-4 sm:mt-6 md:mt-8 lg:mt-10 rounded-lg overflow-hidden border border-[#e2d8ca] shadow-[0_12px_38px_rgba(26,19,10,0.06)]"
              >
                <Image
                  src="/pictures/DSC00749.webp"
                  alt={m.about.imgLifestyle}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Founder Section - Dark Card */}
        <div className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 rounded-lg overflow-hidden">
          {/* Dark Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#14110d] via-[#1a1a1a] to-[#0c4d32] rounded-lg" />

          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(transparent, transparent 59px, rgba(255,255,255,0.05) 60px)`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Gradient orbs */}
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#16784a]/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#d89a2b]/15 blur-[100px]" />

          <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-14 xl:gap-20 items-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-5 md:space-y-6 w-full"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full border border-[#fff8ee]/20 bg-white/10 backdrop-blur-sm">
                <Target className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#d89a2b]" />
                <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-wider text-[#fff8ee]">
                  {m.about.founderBadge}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                {m.about.founderTitle}
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-[#e2d8ca] leading-relaxed">
                {m.about.founderIntro}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 sm:space-y-3">
                {m.about.founderBullets.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start gap-2 sm:gap-3 group"
                  >
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#16784a]/20 flex items-center justify-center mt-0.5 group-hover:bg-[#16784a]/30 transition-all">
                      <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#d89a2b]" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-[#e2d8ca] leading-relaxed group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Link */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="pt-2 sm:pt-3 md:pt-4"
              >
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-[#d89a2b] font-black hover:gap-2 sm:hover:gap-3 transition-all group text-sm sm:text-base"
                >
                  <span>{m.about.startTransformation}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Achievement badges - wrap on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-3 md:pt-4"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#d89a2b]" />
                  <span className="text-[10px] sm:text-xs font-black text-[#e2d8ca]">4-5 Years Exp</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#16784a]" />
                  <span className="text-[10px] sm:text-xs font-black text-[#e2d8ca]">500+ Clients</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#c95d43]" />
                  <span className="text-[10px] sm:text-xs font-black text-[#e2d8ca]">3rd Place</span>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full"
            >
              {/* Glow behind image */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#16784a]/30 to-[#d89a2b]/30 rounded-lg blur-xl sm:blur-2xl opacity-50" />

              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden border border-white/10 shadow-[0_22px_70px_rgba(0,0,0,0.4)]">
                <Image
                  src="/pictures/sofi12.webp"
                  alt={m.about.imgCoaching}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14110d]/20 via-transparent to-transparent" />
              </div>

              {/* Floating stat card - repositioned for mobile */}
              <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 bg-[#14110d]/90 backdrop-blur-sm rounded-lg px-2 sm:px-4 py-1.5 sm:py-2 border border-[#16784a]/30 shadow-lg">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#16784a] flex items-center justify-center">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-black text-[10px] sm:text-xs md:text-sm">90-Day Transformation</p>
                    <p className="text-[#e2d8ca] text-[8px] sm:text-[10px] md:text-xs">Proven system, real results</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Values Section - 3 cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {m.about.values.map((value, idx) => {
            const Icon = valueIcons[idx];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-4 sm:p-5 md:p-6 rounded-lg bg-white border border-[#e2d8ca] shadow-[0_12px_38px_rgba(26,19,10,0.04)] hover:shadow-[0_22px_70px_rgba(26,19,10,0.08)] transition-all hover:-translate-y-1"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#16784a]/10 flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#16784a]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-black text-[#14110d] mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6b6257] leading-relaxed">{value.copy}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}