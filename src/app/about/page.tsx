"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "../components/Navbar";

export default function AboutPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-[40px] border border-[#F0F0F0] bg-gradient-to-br from-white via-[#FAFAFA] to-[#EEF9F0] p-8 md:p-12 mb-16 md:mb-24">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#3FAE49]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#111111]/5 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 items-center rounded-2xl border border-[#EAEAEA] bg-white px-4 text-sm font-extrabold text-[#111111]">
                  Sofi Circle Diet
                </div>
                <span className="inline-flex items-center rounded-full bg-[#3FAE49]/10 px-3 py-1 text-xs font-semibold text-[#3FAE49]">Since 2023</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight">
                A nutrition brand built for real lives
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Sofi Circle Diet, led by world class bodybuilder and certified nutritionist Sofonias Nebyiu, builds 90-day plans from a simple belief: structure creates results, and consistency changes everything.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "90-day roadmap",
                  "Weekly check-ins",
                  "Plan-driven results",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-[#E6E6E6] bg-white px-4 py-2 text-sm font-semibold text-[#111111]">
                    {item}
                  </span>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="grid grid-cols-3 gap-3 pt-2"
              >
                {["90 days", "3 phases", "1 focused plan"].map((stat) => (
                  <div key={stat} className="rounded-2xl border border-[#EAEAEA] bg-white px-4 py-3 text-center text-sm font-semibold text-[#111111] shadow-sm">
                    {stat}
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="relative grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                style={{ willChange: "transform" }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.1 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.1 },
                }}
                className="relative h-64 md:h-72 rounded-3xl overflow-hidden shadow-xl"
              >
                <Image src="/pictures/sofi9.webp" alt="Founder preparing meals" fill className="object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, 8, 0] }}
                style={{ willChange: "transform" }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.2 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
                }}
                className="relative h-64 md:h-72 rounded-3xl overflow-hidden shadow-xl mt-8"
              >
                <Image src="/pictures/sofi8.webp" alt="Healthy lifestyle inspiration" fill className="object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block bg-[#3FAE49]/10 py-1 px-3 rounded-full">
              <span className="text-[#3FAE49] font-semibold text-sm">Our Mission</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] tracking-tight">Fueling your daily performance</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We are on a mission to make focused nutrition planning accessible to everyone, with a clear 90-day structure that keeps you consistent and accountable.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Whether you're a busy professional, an athlete, or just someone looking to improve your diet, we're here to help you hit your goals with a plan you can follow every day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[500px] rounded-4xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/pictures/DSC00764 (1).webp" 
              alt="Healthy meal preparation" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Precision planning",
              copy: "Every plan is built around real goals, real schedules, and real results.",
            },
            {
              title: "Focused structure",
              copy: "A single 90-day roadmap that makes progress feel achievable.",
            },
            {
              title: "Community-driven",
              copy: "A local brand supporting local success stories.",
            },
          ].map((value) => (
            <div key={value.title} className="rounded-3xl border border-[#EFEFEF] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#111111] mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.copy}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
