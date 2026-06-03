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

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fff8ee] pt-24 md:pt-0 pb-8">
      {/* Background gradients matching HTML */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: "radial-gradient(circle at 90% 10%, rgba(216, 154, 43, 0.18), transparent 34%), linear-gradient(135deg, #fff8ee 0%, #f3eadc 56%, #e8f0e5 100%)"
          }}
        />
      </div>

      {/* Mobile background image */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/pictures/sofiMain.png"
          alt="Sofi Circle Diet hero background"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-contain object-top opacity-40"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-362.5 px-4 md:px-6 md:pr-0">

        <div className="grid items-center gap-6 grid-cols-1 md:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Decorative gradient blob */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#d89a2b]/20 rounded-full blur-3xl -z-10" />

            {/* Heading */}
            <div className="max-w-full md:max-w-140">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14110d]/20 bg-white/60 backdrop-blur-sm mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#16784a]" />
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#0c4d32]">REAL TRANSFORMATIONS • 90-DAY STRUCTURE</span>
                </div>
              </motion.div>

              {/* Updated heading text to match HTML */}
              <h1 className="text-3xl sm:text-4xl md:text-[50px] lg:text-[48px] leading-[0.95] font-black tracking-tight text-[#14110d]">
                Eat smart. Train right.
                <br />
                <span className="bg-gradient-to-r from-[#16784a] to-[#0c4d32] bg-clip-text text-transparent">
                  Transform fast.
                </span>
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#6b6257] max-w-lg">
                Finally, a plan that tells you exactly what to eat, how to train, when to adjust, and how to stay consistent every single week.
              </p>
            </div>

            {/* Cards with updated colors */}
            <div className="mt-8 grid gap-5 grid-cols-1 md:grid-cols-2 max-w-full md:max-w-160">
              {/* Card 1 - Assessment */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group rounded-lg border border-[#e2d8ca] bg-white p-6 shadow-[0_22px_70px_rgba(26,19,10,0.14)] hover:shadow-[0_25px_50px_rgba(22,120,74,0.15)] transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <ClipboardList className="h-6 w-6 text-[#16784a]" />
                </div>

                <h3 className="mt-5 text-[18px] font-extrabold leading-tight text-[#14110d]">
                  Start your transformation here
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-[#6b6257]">
                  Take the assessment and lock in a 90-day plan with clear
                  weekly milestones.
                </p>

                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/assessment"
                    className="mt-5 flex h-11 w-full items-center justify-center rounded-lg bg-[#16784a] text-white shadow-[0_14px_28px_rgba(22,120,74,0.25)] hover:bg-[#0c4d32] transition-all text-[14px] font-black relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10">Start My Assessment</span>
                    <ArrowRight className="absolute right-4 w-4 h-4 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Card 2 - AI Transformation */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group rounded-lg border border-[#e2d8ca] bg-white p-6 shadow-[0_22px_70px_rgba(26,19,10,0.14)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-[#16784a]" />
                </div>

                <h3 className="mt-5 text-[18px] font-extrabold leading-tight text-[#14110d]">
                  What you'll look like after 12 weeks
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-[#6b6257]">
                  Upload a front photo and our AI shows your transformation after 12 weeks of using our meal-plan.
                </p>

                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/transformation-Ai"
                    className="mt-5 flex h-11 w-full items-center justify-center rounded-lg border border-[#e2d8ca] bg-white text-[#14110d] hover:bg-[#f3eadc] transition-all text-[14px] font-black group/btn"
                  >
                    <span>See Transformations</span>
                    <Sparkles className="ml-2 w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 transition-all" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Features - updated colors */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-lg bg-white/70 backdrop-blur-sm border border-[#e2d8ca]"
            >
              <div className="flex items-center gap-3 group cursor-pointer">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm group-hover:shadow-md transition-all"
                >
                  <Leaf className="h-5 w-5 text-[#16784a]" />
                </motion.div>

                <div>
                  <h4 className="text-[14px] font-bold text-[#14110d]">
                    90-Day Structure
                  </h4>
                  <p className="text-[12px] text-[#6b6257]">
                    Clear phases and milestones
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-[#e2d8ca]" />

              <div className="flex items-center gap-3 group cursor-pointer">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm group-hover:shadow-md transition-all"
                >
                  <Target className="h-5 w-5 text-[#16784a]" />
                </motion.div>

                <div>
                  <h4 className="text-[14px] font-bold text-[#14110d]">
                    Goal-Based Targets
                  </h4>
                  <p className="text-[12px] text-[#6b6257]">
                    Personalized guidance
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
                  <CalendarDays className="h-5 w-5 text-[#16784a]" />
                </motion.div>

                <div>
                  <h4 className="text-[14px] font-bold text-[#14110d]">
                    Weekly Check-Ins
                  </h4>
                  <p className="text-[12px] text-[#6b6257]">
                    Stay on track every week
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE IMAGE - unchanged */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden h-full md:block"
          >
            <div className="relative flex h-105 w-full items-center justify-center md:h-140 lg:h-190">
              <Image
                src="/pictures/sofiMain.png"
                alt="Sofi Circle Diet hero"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}