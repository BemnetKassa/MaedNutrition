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
    <section className="relative overflow-hidden bg-[#FAFAFA] pt-24 md:pt-0 pb-8">
      {/* Mobile background image (behind content) */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/pictures/sofiMain.png"
          alt="Sofi Circle Diet hero background"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-contain object-top opacity-60"
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
            {/* Decorative gradient blob behind heading */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-200/30 rounded-full blur-3xl -z-10" />

            {/* Heading */}
            <div className="max-w-full md:max-w-140">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-xs font-semibold text-green-700 tracking-wide">AI-POWERED NUTRITION</span>
                </div>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-[50px] lg:text-[48px] leading-tight font-extrabold tracking-tight text-[#111111]">
                A smarter way to eat,
                <br />
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  a better you.
                </span>
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#6B7280] max-w-lg">
                Start your journey toward a real transformation with a clear
                12-weeks plan personalized just for you.
              </p>
            </div>

            {/* Cards */}
            <div className="mt-8 grid gap-5 grid-cols-1 md:grid-cols-2 max-w-full md:max-w-160">
              {/* Card 1 - Assessment */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group rounded-3xl border border-[#D7EAD9] bg-gradient-to-br from-white via-[#F6FFF7] to-[#EAF7EC] p-6 shadow-[0_18px_40px_rgba(17,17,17,0.08)] hover:shadow-[0_25px_50px_rgba(63,174,73,0.15)] transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <ClipboardList className="h-6 w-6 text-[#3FAE49]" />
                </div>

                <h3 className="mt-5 text-[18px] font-extrabold leading-tight text-[#111111]">
                  Start your transformation here
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280]">
                  Take the assessment and lock in a 90-day plan with clear
                  weekly milestones.
                </p>

                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/assessment"
                    className="mt-5 flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#3FAE49] to-[#36963f] text-white shadow-md hover:shadow-lg transition-all text-[14px] font-semibold relative overflow-hidden group/btn"
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
                className="group rounded-3xl border border-[#E5E5E5] bg-white p-6 shadow-[0_16px_36px_rgba(17,17,17,0.08)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-green-50 group-hover:to-emerald-50 transition-all duration-300">
                  <Zap className="h-6 w-6 text-[#111111] group-hover:text-[#3FAE49] transition-colors" />
                </div>

                <h3 className="mt-5 text-[18px] font-extrabold leading-tight text-[#111111]">
                  What you'll look like after 12 weeks
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280]">
                  Upload a front photo and our AI shows your transformation after 12 weeks of using our meal-plan.
                </p>

                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/transformation"
                    className="mt-5 flex h-11 w-full items-center justify-center rounded-xl border border-[#DADADA] text-[#111111] hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:border-green-200 transition-all text-[14px] font-semibold group/btn"
                  >
                    <span>See Transformations</span>
                    <Sparkles className="ml-2 w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 transition-all" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Features with animated icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-1 flex flex-col sm:flex-row  items-start sm:items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-50/50 to-white/50 backdrop-blur-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 group cursor-pointer">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-100 group-hover:shadow-md transition-all"
                >
                  <Leaf className="h-5 w-5 text-[#3FAE49]" />
                </motion.div>

                <div>
                  <h4 className="text-[14px] font-bold text-[#111111]">
                    90-Day Structure
                  </h4>
                  <p className="text-[12px] text-[#6B7280]">
                    Clear phases and milestones
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

              <div className="flex items-center gap-3 group cursor-pointer">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-100 group-hover:shadow-md transition-all"
                >
                  <Target className="h-5 w-5 text-[#3FAE49]" />
                </motion.div>

                <div>
                  <h4 className="text-[14px] font-bold text-[#111111]">
                    Goal-Based Targets
                  </h4>
                  <p className="text-[12px] text-[#6B7280]">
                    Personalized guidance
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

              <div className="flex  gap-2 group cursor-pointer">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-100 group-hover:shadow-md transition-all"
                >
                  <CalendarDays className="h-5 w-5 text-[#3FAE49]" />
                </motion.div>

                <div>
                  <h4 className="text-[14px] font-bold text-[#111111]">
                    Weekly Check-Ins
                  </h4>
                  <p className="text-[12px] text-[#6B7280]">
                    Stay on track every week
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
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