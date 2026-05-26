"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const transformations = [
  {
    name: "Transformation 01",
    result: "12-week progress",
    quote: "Focused weekly targets created steady, visible change.",
    after: "/pictures/transformation/photo_9_2026-05-26_16-25-48.jpg",
    before: "/pictures/transformation/photo_10_2026-05-26_16-25-48.jpg",
  },
  {
    name: "Transformation 02",
    result: "12-week progress",
    quote: "Consistency and structure made the result feel achievable.",
    before: "/pictures/transformation/photo_11_2026-05-26_16-25-48.jpg",
    after: "/pictures/transformation/photo_12_2026-05-26_16-25-48.jpg",
  },
  {
    name: "Transformation 03",
    result: "12-week progress",
    quote: "Small weekly wins added up to a major shift.",
    before: "/pictures/transformation/photo_13_2026-05-26_16-25-48.jpg",
    after: "/pictures/transformation/photo_14_2026-05-26_16-25-48.jpg",
  },
  {
    name: "Transformation 04",
    result: "12-week progress",
    quote: "Clear milestones kept me locked in every week.",
    after: "/pictures/transformation/photo_15_2026-05-26_16-25-48.jpg",
    before: "/pictures/transformation/photo_16_2026-05-26_16-25-48.jpg",
  },
  {
    name: "Transformation 05",
    result: "12-week progress",
    quote: "The plan felt simple, and the results followed.",
    after: "/pictures/transformation/photo_17_2026-05-26_16-25-48.jpg",
    before: "/pictures/transformation/photo_18_2026-05-26_16-25-48.jpg",
  },
  {
    name: "Transformation 06",
    result: "12-week progress",
    quote: "Weekly check-ins kept the momentum steady.",
    after: "/pictures/transformation/photo_19_2026-05-26_16-25-48.jpg",
    before: "/pictures/transformation/photo_20_2026-05-26_16-25-48.jpg",
  },
];

const MealCategory = () => (
  <section className="bg-[#FAFAFA] py-24 overflow-hidden">
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
          Transformation
        </span>

        <h2 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-[#111111] md:text-6xl">
          12-Week Results
          <br />
          From Real People
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-[#6B7280]">
          These are real transformations and real feedback. Upload your photo
          to preview the maximum possible result from your 12-week journey.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {transformations.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group overflow-hidden rounded-4xl border border-[#ECECEC] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-56 rounded-3xl bg-[#F4F4F4] overflow-hidden">
                <Image
                  src={item.before}
                  alt={`${item.name} before`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#111111]">
                  Before
                </span>
              </div>

              <div className="relative h-56 rounded-3xl bg-[#F4F4F4] overflow-hidden">
                <Image
                  src={item.after}
                  alt={`${item.name} after`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#EAF7EC] px-3 py-1 text-xs font-semibold text-[#3FAE49]">
                  After
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-[#111111]">{item.name}</h3>
                <p className="text-sm text-[#3FAE49] font-semibold">{item.result}</p>
              </div>
              <div className="rounded-full bg-[#EAF7EC] px-3 py-1 text-xs font-semibold text-[#3FAE49]">
                12 weeks
              </div>
            </div>

            <p className="mt-4 text-[#6B7280] leading-relaxed">“{item.quote}”</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MealCategory;