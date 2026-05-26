"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dumbbell, Timer, Activity } from "lucide-react";

const OnlineCoaching = () => (
  <section className="relative overflow-hidden bg-white py-24">
    <div className="mx-auto max-w-362.5 px-4 md:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF7EC] px-4 py-2 text-sm font-semibold text-[#3FAE49]">
            Online Coaching
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#111111]">
            Train with structure,
            <br />
            progress with purpose
          </h2>

          <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-[#6B7280]">
            A professional workout system built around your 90-day plan. Each
            week includes targets, recovery, and performance checks.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {
              [
                {
                  label: "Weekly splits",
                  icon: Dumbbell,
                },
                {
                  label: "Session timing",
                  icon: Timer,
                },
                {
                  label: "Progress tracking",
                  icon: Activity,
                },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#ECECEC] bg-[#FAFAFA] p-4">
                  <item.icon className="h-5 w-5 text-[#3FAE49]" />
                  <p className="mt-3 text-sm font-semibold text-[#111111]">{item.label}</p>
                </div>
              ))
            }
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/assessment" className="rounded-2xl bg-[#3FAE49] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#36963f]">
              Start Online Coaching
            </Link>

            <Link href="/how-it-works" className="rounded-2xl border border-[#DADADA] px-6 py-3 text-base font-semibold text-[#111111] transition hover:bg-[#F8F8F8]">
              See Weekly Structure
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative overflow-hidden rounded-[32px] border border-[#ECECEC] bg-white shadow-lg"
        >
          <div className="relative h-[420px]">
            <Image
              src="/pictures/DSC00834.webp"
              alt="Online coaching workout"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default OnlineCoaching;