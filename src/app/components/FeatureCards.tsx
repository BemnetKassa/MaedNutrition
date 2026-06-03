"use client";

import {
  ClipboardList,
  Camera,
  Sparkles,
  ArrowRight,
  Target,
  CalendarDays,
  Dumbbell,
  Utensils,
  TrendingUp,
  Eye,
  Smartphone,
} from "lucide-react";

import { motion } from "framer-motion";
import Link from "next/link";

export function FeatureCards() {
  const features = [
    {
      number: "01",
      title: "Personal assessment",
      description: "Goal, gender, height, current weight, food habits, training access, and readiness are captured before payment.",
      icon: ClipboardList,
      iconBg: "#16784a",
      points: [
        { text: "Capture your unique profile", icon: Target },
        { text: "Assess food & training readiness", icon: CalendarDays },
        { text: "Get personalized recommendations", icon: TrendingUp },
      ],
      linkText: "Start My Assessment",
      linkHref: "/assessment",
    },
    {
      number: "02",
      title: "Meal + training buildout",
      description: "The plan is built around familiar foods, available equipment, target body outcome, and a realistic weekly structure.",
      icon: Utensils,
      iconBg: "#16784a",
      points: [
        { text: "Familiar foods you enjoy", icon: Utensils },
        { text: "Equipment you have access to", icon: Dumbbell },
        { text: "Realistic weekly structure", icon: CalendarDays },
      ],
      linkText: "Build My Plan",
      linkHref: "/assessment",
    },
    {
      number: "03",
      title: "Weekly accountability",
      description: "Progress checks and adjustments keep the client from restarting, drifting, or changing diets every few days.",
      icon: Eye,
      iconBg: "#d89a2b",
      points: [
        { text: "Weekly progress checks", icon: TrendingUp },
        { text: "Smart plan adjustments", icon: Smartphone },
        { text: "Stay on track consistently", icon: Target },
      ],
      linkText: "Start Accountability",
      linkHref: "/assessment",
    },
  ];

  return (
    <section className="relative bg-[#fff8ee] py-16 md:py-24 overflow-hidden">
      {/* Background gradients matching HTML hero */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(circle at 10% 20%, rgba(216, 154, 43, 0.12), transparent 40%), linear-gradient(135deg, #fff8ee 0%, #f3eadc 100%)"
          }}
        />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#14110d]/20 bg-white/60 backdrop-blur-sm mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#16784a]" />
          <span className="text-[11px] font-black uppercase tracking-wider text-[#0c4d32]">
            THE 90-DAY TRANSFORMATION PLAN
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-[56px] font-black text-[#000000] leading-[1.1] tracking-tight">
          Not another diet.{" "}
          <span className="text-[#0e6f42]">A weekly system</span>
          <br />
          that removes guessing.
        </h2>

        <p className="text-[#201e1a] mt-4 md:mt-6 text-base md:text-lg max-w-2xl mx-auto">
          The best version of this funnel sells a clear mechanism: assess the person, 
          build the plan, keep them accountable, and adjust before they quit.
        </p>
      </motion.div>

      {/* Features Grid - 3 cards */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group bg-white border border-[#e2d8ca] rounded-lg p-6 md:p-7 shadow-[0_22px_70px_rgba(26,19,10,0.08)] hover:shadow-[0_22px_70px_rgba(26,19,10,0.14)] transition-all duration-300"
          >
            {/* Number and Icon Row */}
            <div className="flex items-start justify-between mb-5">
              <span className="text-5xl md:text-6xl font-black text-[#e2d8ca] leading-none group-hover:text-[#d89a2b]/30 transition-colors">
                {feature.number}
              </span>
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md"
                style={{ backgroundColor: feature.iconBg }}
              >
                <feature.icon className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-black text-[#14110d] mb-3 leading-tight">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-[#6b6257] text-sm md:text-base mb-6 leading-relaxed">
              {feature.description}
            </p>

            {/* Feature Points */}
            <div className="space-y-3 mb-8">
              {feature.points.map((point, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <point.icon className="w-4 h-4 text-[#16784a] flex-shrink-0" />
                  <span className="text-sm text-[#6b6257]">{point.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <Link href={feature.linkHref}>
              <div className="inline-flex items-center gap-2 text-[#16784a] font-black text-sm md:text-base group/link cursor-pointer hover:gap-3 transition-all">
                {feature.linkText}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom Insight - matching HTML style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mt-12 md:mt-16 px-4"
      >
        <div className="p-5 md:p-6 rounded-lg border border-[#e2d8ca] bg-white text-center shadow-[0_12px_38px_rgba(26,19,10,0.06)]">
          <p className="text-sm md:text-base text-[#6b6257]">
            <span className="font-black text-[#14110d]">Personal assessment</span> → 
            Meal + training buildout → 
            <span className="font-black text-[#14110d]"> Weekly accountability</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}