"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MealCategory = () => (

  <section
    id="plans"
    className="bg-[#FAFAFA] py-24 overflow-hidden"
  >
    <div className="mx-auto max-w-362.5 px-4 md:px-6">

      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-175"
      >
        <span className="rounded-full bg-[#EAF7EC] px-4 py-2 text-sm font-semibold text-[#3FAE49]">
          Meal Categories
        </span>

        <h2 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-[#111111] md:text-6xl">
          Meals Designed
          <br />
          For Every Goal
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-[#6B7280]">
          Choose from chef-crafted meal plans tailored for
          weight loss, muscle gain, clean eating, and more.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "Weight Loss",
          "Muscle Gain",
          "Keto Friendly",
          "High Protein",
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group overflow-hidden rounded-4xl border border-[#ECECEC] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-60 rounded-3xl bg-[#F4F4F4]" />

            <h3 className="mt-6 text-2xl font-bold text-[#111111]">
              {item}
            </h3>

            <p className="mt-3 text-[#6B7280]">
              Personalized healthy meals crafted for your body goals.
            </p>

            <Link href="/ourMeals" className="mt-6 inline-block rounded-xl bg-[#3FAE49] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#36963f]">
              Explore Meals
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MealCategory;