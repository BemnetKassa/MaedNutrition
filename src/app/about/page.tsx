"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black overflow-hidden">
      <Navbar />

      {/* Subtle Background Accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-[#3FAE49]/10 blur-[120px]" />
        <div className="absolute bottom-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-yellow-300/20 blur-[140px]" />
      </div>

      <div className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">

        {/* HERO */}
        <div className="relative rounded-[40px] border border-gray-200 bg-white shadow-sm p-8 md:p-12 overflow-hidden">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center"
          >

            {/* LEFT */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-full bg-[#3FAE49] text-black font-extrabold text-sm">
                  Sofi Circle Diet
                </div>
                <span className="px-3 py-1 rounded-full bg-yellow-300 text-black text-xs font-bold">
                  Since 2023
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-black">
                A nutrition brand built for{" "}
                <span className="text-[#3FAE49]">real lives</span>
              </h1>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl">
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
                    className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:border-[#3FAE49]/50 transition"
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
                    className="rounded-2xl bg-gray-50 border border-gray-200 px-4 py-3 text-center text-sm font-semibold hover:border-yellow-300 transition"
                  >
                    {stat}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4 flex gap-4 flex-wrap">
                <Link
                  href="/assessment"
                  className="px-6 py-3 rounded-2xl bg-[#3FAE49] text-black font-bold hover:scale-105 transition shadow-sm"
                >
                  Start Assessment
                </Link>

                <div className="px-6 py-3 rounded-2xl border border-gray-300 text-gray-700 hover:border-[#3FAE49] transition">
                  Learn More
                </div>
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative grid grid-cols-2 gap-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="relative h-72 rounded-3xl overflow-hidden border border-gray-200 shadow-md"
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
                className="relative h-72 mt-10 rounded-3xl overflow-hidden border border-gray-200 shadow-md"
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
            <span className="inline-block px-4 py-1 rounded-full bg-[#3FAE49]/10 text-[#3FAE49] font-semibold text-sm">
              About Sofonias
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-black">
              Who is Sofonias?
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Hello everyone, my name is <span className="text-black font-semibold">Sofonias Nebiyu</span>. For the past <span className="text-black font-semibold">4–5 years</span>, I have been actively involved in bodybuilding and fat loss coaching, helping people build structure, confidence, and lasting results.
            </p>

            <ul className="space-y-3 text-gray-600 text-lg">
              {[
                "Participated in international physique competitions and earned 3rd place rankings.",
                "Studied evidence-based training and fat loss principles.",
                "Helped 500+ clients lose weight and transform.",
                "Instructor in Nutrition and Hypertrophy (120+ students).",
                "Graduate of Mechanical Engineering.",
              ].map((item) => (
                <li key={item} className="border-l-2 border-[#3FAE49] pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[500px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
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
            <div
              key={value.title}
              className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-3 text-black">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.copy}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </main>
  );
}