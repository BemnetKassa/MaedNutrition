"use client";

import { 
  ClipboardCheck, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  CalendarDays, 
  Target, 
  Leaf,
  CreditCard,
  Camera,
  TrendingUp,
  Shield,
  Clock,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function FeatureCards() {
  return (
    <section className="relative bg-gradient-to-b from-[#FAFAFA] to-white pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            <span className="text-xs font-semibold text-green-700 tracking-wide">TRANSFORMATION STARTS HERE</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111111] leading-tight">
            Your Journey to a
            <br />
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Better You Begins Now
            </span>
          </h2>
          <p className="text-[#6B7280] mt-4 text-lg max-w-2xl mx-auto">
            Choose your path, get personalized guidance, and transform your life in just 90 days
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 lg:gap-10 relative z-10">
          {/* Card 1 - Assessment & Meal Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
            whileHover={{ y: -10 }}
            className="group relative flex flex-col bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/0 via-green-500/15 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              {/* Icon with pulse animation */}
              <motion.div 
                className="relative inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="absolute inset-0 bg-green-400 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative h-16 w-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 shadow-lg">
                  <ClipboardCheck className="h-8 w-8 text-white" />
                </div>
              </motion.div>

              {/* Badges */}
              <div className="absolute top-0 right-0 flex gap-2">
                <div className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-[11px] font-bold text-white shadow-md">
                  MOST POPULAR
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-[#111111] mb-3">
                Get Your Personal Meal Plan
              </h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                Take our comprehensive assessment, and receive a fully personalized 90-day meal plan tailored to your goals, preferences, and lifestyle.
              </p>

              {/* Process steps */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-6">
                <p className="text-xs font-semibold text-green-700 mb-2 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  SIMPLE 3-STEP PROCESS
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">1</div>
                    <span className="text-[#111111] font-medium">Complete assessment (5-7 mins)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-[#111111] font-medium">Secure payment</span>
                    <CreditCard className="w-3 h-3 text-green-600" />
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">3</div>
                    <span className="text-[#111111] font-medium">Receive your custom plan via email</span>
                  </div>
                </div>
              </div>

              {/* Feature list */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-sm text-[#6B7280] group/item hover:text-green-600 transition-colors">
                  <Target className="w-4 h-4 text-green-500" />
                  <span>Personalized macros & calorie targets</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280] group/item hover:text-green-600 transition-colors">
                  <CalendarDays className="w-4 h-4 text-green-500" />
                  <span>Weekly meal rotations & grocery lists</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280] group/item hover:text-green-600 transition-colors">
                  <Leaf className="w-4 h-4 text-green-500" />
                  <span>Dietary preferences & restrictions included</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280] group/item hover:text-green-600 transition-colors">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>60-day money-back guarantee</span>
                </div>
              </div>

              {/* Price tag */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#111111]">$49</span>
                  <span className="text-[#6B7280] text-sm">one-time payment</span>
                  <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">-40% off</span>
                </div>
                <p className="text-xs text-[#6B7280] mt-1">Includes full 90-day plan + email support</p>
              </div>

              <Link href="/assessment">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative mt-auto flex h-[52px] items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-[16px] font-bold text-white shadow-lg hover:shadow-xl transition-all w-full group/btn overflow-hidden"
                >
                  <span className="relative z-10">Start Assessment - $49</span>
                  <ArrowRight className="absolute right-5 w-5 h-5 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Card 2 - AI Transformation Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="group relative flex flex-col bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              {/* Icon with pulse animation */}
              <motion.div 
                className="relative inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="absolute inset-0 bg-purple-400 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative h-16 w-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </motion.div>

              {/* AI Badge */}
              <div className="absolute top-0 right-0">
                <div className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-[11px] font-bold text-white shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  AI POWERED
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-[#111111] mb-3">
                See Your Future Self
              </h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                Take a front photo with good lighting, and our advanced AI shows you exactly how you'll look after 12 weeks on your personalized plan.
              </p>

              {/* AI Preview demo */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-6 border border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <Camera className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-900">How it works:</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full bg-purple-500 text-white flex items-center justify-center text-[10px] font-bold mt-0.5">1</div>
                    <span className="text-[#6B7280]">Upload a clear front-facing photo</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full bg-purple-500 text-white flex items-center justify-center text-[10px] font-bold mt-0.5">2</div>
                    <span className="text-[#6B7280]">AI analyzes your current physique</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full bg-purple-500 text-white flex items-center justify-center text-[10px] font-bold mt-0.5">3</div>
                    <span className="text-[#6B7280]">See your 12-week transformation preview</span>
                  </div>
                </div>
              </div>

              {/* Feature list */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-sm text-[#6B7280] group/item hover:text-purple-600 transition-colors">
                  <TrendingUp className="w-4 h-4 text-purple-500" />
                  <span>Realistic body transformation preview</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280] group/item hover:text-purple-600 transition-colors">
                  <Target className="w-4 h-4 text-purple-500" />
                  <span>Track progress week by week</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6B7280] group/item hover:text-purple-600 transition-colors">
                  <Award className="w-4 h-4 text-purple-500" />
                  <span>Compare before & after visuals</span>
                </div>
              </div>

              {/* Note about photo */}
              <div className="mb-6 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-xs text-yellow-800 flex items-start gap-2">
                  <span>💡</span>
                  <span>For best results: Use good lighting, neutral background, and wear fitted clothing</span>
                </p>
              </div>

              <Link href="/transformation">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative mt-auto flex h-[52px] items-center justify-center rounded-xl border-2 border-purple-500 bg-white text-[16px] font-bold text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all w-full group/btn overflow-hidden"
                >
                  <span className="relative z-10">Try AI Transformation Preview</span>
                  <Camera className="absolute right-5 w-5 h-5 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                </motion.div>
              </Link>

              <p className="text-xs text-center text-[#6B7280] mt-4">
                Free preview • No payment required
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-4 rounded-full bg-white shadow-lg border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-white shadow-sm"
                  />
                ))}
              </div>
              <div>
                <span className="text-sm font-bold text-[#111111]">2,500+</span>
                <span className="text-sm text-[#6B7280] ml-1">transformations completed</span>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#111111]">4.9</span>
              <span className="text-sm text-[#6B7280]">(1,200+ reviews)</span>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm text-[#6B7280]">60-day guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Star icon component
const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  </svg>
);