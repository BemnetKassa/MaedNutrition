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
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            
            {/* Heading */}
            <div className="max-w-full md:max-w-140">
              <h1 className="text-3xl sm:text-4xl md:text-[50px] lg:text-[48px] leading-tight font-extrabold tracking-tight text-[#111111]">
                A smarter way to eat,
                <br />
                a better you.
              </h1>

              <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#6B7280]">
                Start your journey toward a real transformation with a clear
                12-weeks plan .
              </p>
            </div>

            {/* Cards */}
            <div className="mt-7 grid gap-4 grid-cols-1 md:grid-cols-2 max-w-full md:max-w-160">
              {/* Card 1 */}
              <div className="rounded-3xl border border-[#D7EAD9] bg-gradient-to-br from-white via-[#F6FFF7] to-[#EAF7EC] p-6 shadow-[0_18px_40px_rgba(17,17,17,0.08)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <ClipboardList className="h-6 w-6 text-[#3FAE49]" />
                </div>

                <h3 className="mt-5 text-[18px] font-extrabold leading-tight text-[#111111]">
                  Start your transformation here
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280]">
                  Take the assessment and lock in a 90-day plan with clear
                  weekly milestones.
                </p>

                <Link href="/assessment" className="mt-5 flex h-11 w-full items-center justify-center rounded-xl bg-[#3FAE49] text-white shadow-md transition hover:bg-[#36963f] text-[14px] font-semibold">
                  Start My Assessment
                </Link>
              </div>

              {/* Card 2 */}
              <div className="rounded-3xl border border-[#E5E5E5] bg-white p-6 shadow-[0_16px_36px_rgba(17,17,17,0.08)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F5F5]">
                  <Zap className="h-6 w-6 text-[#111111]" />
                </div>

                <h3 className="mt-5 text-[18px] font-extrabold leading-tight text-[#111111]">
                  What you will look like after 12 weeks
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-[#6B7280]">
                  Upload a front photo and our AI shows you what you are going to look like after 12 weeks of using our meal-plan.
                  
                </p>

                <Link
                  href="/transformation"
                  className="mt-5 flex h-11 w-full items-center justify-center rounded-xl border border-[#DADADA] text-[#111111] transition hover:bg-[#F8F8F8] text-[14px] font-semibold"
                >
                  See Transformations
                </Link>
              </div>
            </div>

            {/* Bottom Features */}
            <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-6">
              
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF7EC]">
                  <Leaf className="h-5 w-5 text-[#3FAE49]" />
                </div>

                <div>
                  <h4 className="text-[14px] font-bold text-[#111111]">
                    90-Day Structure
                  </h4>

                  <p className="text-[12px] text-[#6B7280]">
                    Clear phases and milestones
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-[#E5E5E5]" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF7EC]">
                  <Target className="h-5 w-5 text-[#3FAE49]" />
                </div>

                <div>
                  <h4 className="text-[14px] font-bold text-[#111111]">
                    Goal-Based Targets
                  </h4>

                  <p className="text-[12px] text-[#6B7280]">
                    Personalized guidance
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-[#E5E5E5]" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF7EC]">
                  <CalendarDays className="h-5 w-5 text-[#3FAE49]" />
                </div>

                <div>
                  <h4 className="text-[14px] font-bold text-[#111111]">
                    Weekly Check-Ins
                  </h4>

                  <p className="text-[12px] text-[#6B7280]">
                    Stay on track every week
                  </p>
                </div>
              </div>
            </div>
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