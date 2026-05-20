"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const cta = () => (
<section className="relative overflow-hidden bg-[#3FAE49] py-28">
  
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="mx-auto max-w-275 px-4 text-center"
  >
    
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
      Start Your Health
      <br />
      Transformation Today
    </h2>

    <p className="mx-auto mt-8 max-w-175 text-lg md:text-xl leading-relaxed text-white/80">
      Get personalized meal plans built by a nutritionist and guided
      by AI assessment analysis for your body and goals.
    </p>

    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      
      <Link href="/assessment" className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-[#3FAE49] transition hover:bg-stone-50">
        Get Started
      </Link>

      <Link href="/mealPlan" className="rounded-2xl border border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10">
        View Plans
      </Link>
    </div>
  </motion.div>
</section>
);

export default cta;