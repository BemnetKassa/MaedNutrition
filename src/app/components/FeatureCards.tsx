"use client";

import { ClipboardCheck, Zap } from "lucide-react";
import { Button } from "./Button";
import { motion } from "framer-motion";
import Link from "next/link";

export function FeatureCards() {
  return (
    <section className="relative bg-[#FAFAFA] pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2 lg:gap-8 -mt-8 relative z-10">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col bg-white rounded-3xl p-8 shadow-md border border-gray-100 transition-transform hover:-translate-y-2 hover:shadow-lg duration-300"
          >
            <div className="h-12 w-12 rounded-xl bg-[#EAF7EC] flex items-center justify-center mb-6">
              <ClipboardCheck className="h-6 w-6 text-[#3FAE49]" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#111111] mb-3">
              A Meal Plan That Works For You
            </h3>
            <p className="text-[#6B7280] mb-8 flex-1 leading-relaxed">
              Answer a few questions so our AI can analyze your assessment for a nutritionist who creates your plan.
            </p>
            <Link 
              href="/assessment" 
              className="mt-auto flex h-[44px] items-center justify-center rounded-xl bg-[#3FAE49] text-[15px] font-semibold text-white transition hover:bg-[#36963f] shadow-sm w-full"
            >
              Start My Assessment
            </Link>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col bg-white rounded-3xl p-8 shadow-md border border-gray-100 transition-transform hover:-translate-y-2 hover:shadow-lg duration-300"
          >
            <div className="h-12 w-12 rounded-xl bg-[#FAFAFA] border border-gray-200 flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-[#111111]" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#111111] mb-3">
              Quick Purchase
            </h3>
            <p className="text-[#6B7280] mb-8 flex-1 leading-relaxed">
              Choose your meals, select a plan, and place your order in minutes. Perfect for those who know what they want.
            </p>
            <Link 
              href="/ourMeals" 
              className="mt-auto flex h-[44px] items-center justify-center rounded-xl border border-[#3FAE49] text-[15px] font-semibold text-[#3FAE49] transition hover:bg-[#F3FBF4] w-full shadow-sm"
            >
              Browse Meals
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
