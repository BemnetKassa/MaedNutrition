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
    <section className="relative bg-white py-28 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-green-200/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-yellow-200/20 blur-[120px] rounded-full" />
      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20 px-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 mb-4">
          <Sparkles className="w-4 h-4 text-green-600" />
          <span className="text-xs font-bold text-green-700">
            OUR CORE SYSTEM
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
          Two Powerful Systems That{" "}
          <span className="text-green-600">Transform Your Body</span>
        </h2>

        <p className="text-gray-600 mt-4 text-lg">
          Everything we do is built around structure, personalization, and visible transformation.
        </p>
      </motion.div>

      {/* CORE VALUE BLOCKS */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">

        {/* CARD 1 - MEAL PLAN SYSTEM */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group relative bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-5 shadow-md">
            <ClipboardCheck className="text-white w-6 h-6" />
          </div>

          <h3 className="text-2xl font-black text-black mb-3">
            Personalized Meal Plan System
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We design a fully customized 90-day nutrition plan based on your body, goals, lifestyle, and habits — not generic diets.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Target className="w-4 h-4 text-green-600" />
              Calorie & macro precision based on your body
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <Shield className="w-4 h-4 text-green-600" />
              Sustainable fat loss or muscle gain structure
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <TrendingUp className="w-4 h-4 text-green-600" />
              Weekly structured progression system
            </div>
          </div>

          <Link href="/assessment">
            <div className="inline-flex items-center gap-2 text-green-600 font-bold group-hover:gap-3 transition-all">
              Get Your Meal Plan
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>

        {/* CARD 2 - TRANSFORMATION AI */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group relative bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-green-500 flex items-center justify-center mb-5 shadow-md">
            <Camera className="text-white w-6 h-6" />
          </div>

          <h3 className="text-2xl font-black text-black mb-3">
            AI Transformation Preview
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Visualize your future body before you even start — see what 12 weeks of consistency can realistically do for you.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              AI-powered physique prediction system
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <TrendingUp className="w-4 h-4 text-green-600" />
              Before & after transformation simulation
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <Shield className="w-4 h-4 text-green-600" />
              Motivation-driven progress visualization
            </div>
          </div>

          <Link href="/transformation-Ai">
            <div className="inline-flex items-center gap-2 text-green-600 font-bold group-hover:gap-3 transition-all">
              Try AI Preview
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* BOTTOM INSIGHT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-24 max-w-3xl mx-auto px-4"
      >
        <div className="p-6 rounded-3xl border border-gray-200 bg-gray-50">
          <p className="text-gray-700 text-lg leading-relaxed">
            This system works because it combines{" "}
            <span className="font-bold text-black">structured nutrition</span> with{" "}
            <span className="font-bold text-black">visual motivation</span>.
            You don’t just follow a plan — you see your transformation before it happens.
          </p>
        </div>
      </motion.div>

    </section>
  );
}