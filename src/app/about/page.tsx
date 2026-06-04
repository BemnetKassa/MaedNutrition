"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import Link from "next/link";
import { Sparkles, Target, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fff8ee] text-[#14110d] overflow-hidden">
      <Navbar />

      {/* Background Accents - matching HTML */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-[#d89a2b]/20 blur-[120px]" />
        <div className="absolute bottom-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-[#16784a]/15 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#16784a]/5 blur-[100px]" />
      </div>

      <div className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">

        {/* HERO */}
        <div className="relative rounded-lg border border-[#e2d8ca] bg-white shadow-[0_22px_70px_rgba(26,19,10,0.08)] p-8 md:p-12 overflow-hidden">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center"
          >

            {/* LEFT */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14110d]/20 bg-white/60 backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#16784a]" />
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#0c4d32]">
                    Sofi Circle Diet
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#d89a2b]/10 text-[#d89a2b] text-xs font-black">
                  Since 2023
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#14110d]">
                A nutrition brand built for{" "}
                <span className="text-[#16784a]">real lives</span>
              </h1>

              <p className="text-[#6b6257] text-lg md:text-xl leading-relaxed max-w-2xl">
                Sofi Circle Diet, led by world class bodybuilder and certified nutritionist Sofonias Nebyiu, builds 90-day plans from a simple belief: structure creates results, and consistency changes everything.
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-3">
                {[
                  "90-day roadmap",
                  "Weekly check-ins",
                  "Plan-driven results",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-lg border border-[#e2d8ca] bg-white text-sm text-[#6b6257] font-semibold hover:border-[#16784a] hover:text-[#16784a] transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* stats */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {["90 days", "3 phases", "1 focused plan"].map((stat) => (
                  <div
                    key={stat}
                    className="rounded-lg bg-white border border-[#e2d8ca] px-4 py-3 text-center text-sm font-black text-[#14110d] shadow-[0_12px_38px_rgba(26,19,10,0.04)] hover:border-[#16784a] transition-all"
                  >
                    {stat}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4 flex gap-4 flex-wrap">
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#16784a] text-white font-black hover:bg-[#0c4d32] transition-all shadow-[0_14px_28px_rgba(22,120,74,0.25)]"
                >
                  Start Assessment
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="px-6 py-3 rounded-lg border border-[#e2d8ca] text-[#14110d] font-black hover:border-[#16784a] hover:text-[#16784a] transition-all cursor-pointer">
                  Learn More
                </div>
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative grid grid-cols-2 gap-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="relative h-72 rounded-lg overflow-hidden border border-[#e2d8ca] shadow-[0_12px_38px_rgba(26,19,10,0.06)]"
              >
                <Image
                  src="/pictures/DSC00730.webp"
                  alt="Founder preparing meals"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="relative h-72 mt-10 rounded-lg overflow-hidden border border-[#e2d8ca] shadow-[0_12px_38px_rgba(26,19,10,0.06)]"
              >
                <Image
                  src="/pictures/DSC00749.webp"
                  alt="Healthy lifestyle inspiration"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center mt-24">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14110d]/20 bg-white/60 backdrop-blur-sm">
              <Target className="w-3.5 h-3.5 text-[#16784a]" />
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0c4d32]">
                About Sofonias
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-black text-[#14110d]">
              Who is Sofonias?
            </h2>

            <p className="text-[#6b6257] text-lg leading-relaxed">
              Hello everyone, my name is <span className="text-[#14110d] font-black">Sofonias Nebiyu</span>. For the past <span className="text-[#14110d] font-black">4–5 years</span>, I have been actively involved in bodybuilding and fat loss coaching, helping people build structure, confidence, and lasting results.
            </p>

            <ul className="space-y-3 text-[#6b6257] text-lg">
              {[
                "Participated in international physique competitions and earned 3rd place rankings.",
                "Studied evidence-based training and fat loss principles.",
                "Helped 500+ clients lose weight and transform.",
                "Instructor in Nutrition and Hypertrophy (120+ students).",
                "Graduate of Mechanical Engineering.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#16784a] flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[500px] rounded-lg overflow-hidden border border-[#e2d8ca] shadow-[0_22px_70px_rgba(26,19,10,0.08)]"
          >
            <Image
              src="/pictures/sofi12.webp"
              alt="Sofonias coaching"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* VALUES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Target,
              title: "Precision planning",
              copy: "Every plan is built around real goals, real schedules, and real results.",
            },
            {
              icon: Sparkles,
              title: "Focused structure",
              copy: "A single 90-day roadmap that makes progress feel achievable.",
            },
            {
              icon: Users,
              title: "Community-driven",
              copy: "A local brand supporting local success stories.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="p-6 rounded-lg bg-white border border-[#e2d8ca] shadow-[0_12px_38px_rgba(26,19,10,0.04)] hover:shadow-[0_22px_70px_rgba(26,19,10,0.08)] transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-[#16784a]/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-[#16784a]" />
              </div>
              <h3 className="text-xl font-black text-[#14110d] mb-3">
                {value.title}
              </h3>
              <p className="text-[#6b6257] leading-relaxed">{value.copy}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </main>
  );
}