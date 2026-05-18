"use client";

import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="bg-[#FAFAFA] py-24 overflow-hidden">
      <div className="mx-auto max-w-362.5 px-4 md:px-6">

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="rounded-full bg-[#EAF7EC] px-4 py-2 text-sm font-semibold text-[#3FAE49]">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
            Real Results From
            <br />
            Real People
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">

          {[1, 2, 3].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-[#EAEAEA]" />

                <div>
                  <h4 className="text-lg font-bold text-[#111111]">Sarah Johnson</h4>
                  <p className="text-sm text-[#6B7280]">Lost 12kg in 3 months</p>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-[#6B7280]">
                “The AI meal plans completely changed how I eat. Everything felt personalized and easy to follow.”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;