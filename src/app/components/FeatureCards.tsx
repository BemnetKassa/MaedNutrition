"use client";

import {
  ClipboardCheck,
  Zap,
  Camera,
  Sparkles,
  ArrowRight,
  Target,
  TrendingUp,
  Shield,
} from "lucide-react";

import { motion } from "framer-motion";
import Link from "next/link";

export function FeatureCards() {
  return (
    <section className="relative bg-white py-16 md:py-28 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] right-[-200px] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-green-200/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[-200px] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-yellow-200/20 blur-[120px] rounded-full" />
      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-12 md:mb-20 px-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-green-600" />
          <span className="text-[11px] md:text-xs font-bold text-green-700">
            OUR CORE SYSTEM
          </span>
        </div>

        <h2 className="text-2xl md:text-5xl font-black text-black leading-tight">
          Two Powerful Systems That{" "}
          <span className="text-green-600">Transform You</span>
        </h2>

        <p className="text-gray-600 mt-3 md:mt-4 text-sm md:text-lg">
          Structured nutrition + visual transformation = real results
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6 md:gap-10">

        {/* CARD 1 */}
        <motion.div
          whileHover={{ y: -6 }}
          className="group bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm hover:shadow-xl transition-all"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 md:mb-5">
            <ClipboardCheck className="text-white w-5 h-5 md:w-6 md:h-6" />
          </div>

          <h3 className="text-lg md:text-2xl font-black text-black mb-2 md:mb-3">
            Personalized Meal Plan
          </h3>

          <p className="text-gray-600 text-sm md:text-base mb-5">
            Fully customized 90-day nutrition plan based on your body and goals.
          </p>

          <div className="space-y-2 md:space-y-3 mb-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-green-600" />
              Macro & calorie precision
            </div>

            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              Sustainable fat loss system
            </div>

            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              Weekly progression structure
            </div>
          </div>

          <Link href="/assessment">
            <div className="inline-flex items-center gap-2 text-green-600 font-bold text-sm md:text-base group">
              Get Meal Plan

              {/* 🔥 always visible + animated arrow */}
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-green-600 transition-transform group-hover:translate-x-2" />
            </div>
          </Link>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          whileHover={{ y: -6 }}
          className="group bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm hover:shadow-xl transition-all"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-green-500 flex items-center justify-center mb-4 md:mb-5">
            <Camera className="text-white w-5 h-5 md:w-6 md:h-6" />
          </div>

          <h3 className="text-lg md:text-2xl font-black text-black mb-2 md:mb-3">
            AI Transformation Preview
          </h3>

          <p className="text-gray-600 text-sm md:text-base mb-5">
            See your future body after 12 weeks of consistency.
          </p>

          <div className="space-y-2 md:space-y-3 mb-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              AI physique prediction
            </div>

            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              Before & after simulation
            </div>

            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              Motivation tracking
            </div>
          </div>

          <Link href="/transformation-Ai">
            <div className="inline-flex items-center gap-2 text-green-600 font-bold text-sm md:text-base group">
              Try AI Preview

              {/* 🔥 stronger arrow visibility */}
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-green-600 animate-pulse group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* INSIGHT */}
      <div className="max-w-3xl mx-auto mt-14 md:mt-24 px-4">
        <div className="p-5 md:p-6 rounded-2xl border border-gray-200 bg-gray-50 text-center">
          <p className="text-sm md:text-lg text-gray-700">
            Structured nutrition + visual motivation ={" "}
            <span className="font-bold text-black">real transformation</span>
          </p>
        </div>
      </div>

    </section>
  );
}