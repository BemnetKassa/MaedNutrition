"use client";

import { motion } from "framer-motion";

export default function HowItWork() {
  return (
    <section id="how-it-works" className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-362.5 px-4 md:px-6">

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="rounded-full bg-[#EAF7EC] px-4 py-2 text-sm font-semibold text-[#3FAE49]">
            How It Works
          </span>

          <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-[#111111] md:text-6xl">
            Your Personalized
            <br />
            Nutrition Journey
          </h2>

          <p className="mx-auto mt-6 max-w-175 text-lg leading-relaxed text-[#6B7280]">
            We use AI to analyze your assessment so our nutritionist can craft
            a plan tailored to your body and lifestyle.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Complete Assessment",
              desc: "Answer simple questions about your body, activity, and goals.",
            },
            {
              step: "02",
              title: "AI Analysis + Nutritionist Plan",
              desc: "AI analyzes your assessment and a nutritionist creates your plan.",
            },
            {
              step: "03",
              title: "Meals Delivered Fresh",
              desc: "Receive healthy chef-prepared meals directly to your door.",
            },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-4xl border border-[#ECECEC] bg-[#FAFAFA] p-8"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3FAE49] text-2xl font-bold text-white">
                {item.step}
              </div>

              <h3 className="mt-8 text-3xl font-bold text-[#111111]">{item.title}</h3>

              <p className="mt-4 text-lg leading-relaxed text-[#6B7280]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}