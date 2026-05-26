"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export function Testimonials() {
  return (
    <section className="bg-[#FAFAFA] py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-362.5 px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF7EC] px-4 py-2 text-sm font-semibold text-[#3FAE49]">
              <PhoneCall className="h-4 w-4" />
              Phone Consultation
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
              Speak with a coach and
              <br />
              map your next 90 days
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#6B7280]">
              Book a direct call to review your goals, ask questions, and get a
              clear plan before you start.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+251993818388"
                className="flex items-center justify-center rounded-2xl bg-[#3FAE49] px-5 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-[#36963f]"
              >
                +251 993 818 388
              </a>
              <a
                href="tel:+251940256334"
                className="flex items-center justify-center rounded-2xl border border-[#DADADA] px-5 py-3 text-sm sm:text-base font-semibold text-[#111111] transition hover:bg-[#F8F8F8]"
              >
                +251 940 256 334
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Goal alignment",
                "Timeline planning",
                "Program guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#ECECEC] bg-white px-4 py-3 text-sm font-semibold text-[#111111]"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[32px] border border-[#ECECEC] bg-white shadow-lg"
          >
            <div className="relative h-[300px] sm:h-[360px] md:h-[420px]">
              <Image
                src="/pictures/sofi11.webp"
                alt="Phone consultation"
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
}

export default Testimonials;