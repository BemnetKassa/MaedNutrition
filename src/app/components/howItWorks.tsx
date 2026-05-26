"use client";

import { motion } from "framer-motion";

export default function HowItWork() {
  return (
    <section id="how-it-works" className="relative bg-gradient-to-b from-[#d7ebff] via-white to-white py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-72 w-72 bg-green-200/20 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-72 w-72 bg-emerald-200/15 blur-3xl" />
        <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-green-200/60 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-362.5 px-4 md:px-6">

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-md bg-[#EAF7EC] px-4 py-2 text-sm font-semibold tracking-[0.2em] text-[#2F8F39]">
            How It Works
          </span>

          <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-[#111111] md:text-6xl">
            Your 90-Day
            <br />
            Nutrition Journey
          </h2>

          <p className="mx-auto mt-6 max-w-175 text-lg leading-relaxed text-[#5B6472]">
            We use your assessment to build a focused 90-day plan with clear
            targets, weekly check-ins, and milestone reviews.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Complete Assessment",
              desc: "Answer simple questions about your body, activity, and goals.",
            },
            {
              step: "02",
              title: "Get Your 90-Day Plan",
              desc: "Receive your structured roadmap with weekly targets.",
            },
            {
              step: "03",
              title: "Track and Review",
              desc: "Check in weekly and review progress at day 30, 60, and 90.",
            },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-xl border border-[#E6E6E6] bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#3FAE49] text-2xl font-bold text-white shadow-sm">
                  {item.step}
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9CA3AF]">
                  Step
                </span>
              </div>

              <h3 className="mt-8 text-3xl font-bold text-[#111111]">{item.title}</h3>

              <div className="mt-6 h-px w-10 bg-green-200/80 transition-all group-hover:w-16" />
              <p className="mt-4 text-base leading-relaxed text-[#5B6472]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}