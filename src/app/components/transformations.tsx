"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

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
  {
    name: "Transformation 07",
    result: "12-week progress",
    quote: "A clear plan turned effort into visible change.",
    before: "/pictures/transformation/before.jpg",
    after: "/pictures/transformation/after.jpg",
  },
];

const testimonials = [
  {
    name: "Abel",
    text: "የ የመን ማር ኪሎ የስቀንሳል ብለውኝ ሞከሬ አልተሳካልኘም ተስፋ ቆርጬ ነበር meal plan ረድቷኛል በጣም",
    initial: "A",
  },
  {
    name: "ሆርሜላ",
    text: "meal planun መጠቀም ከ ጀመርኩ ቡሃላ በ 23 ቀን ወስጥ 7ኪሎ ቀንሻለሁ አመሰግናለሁ",
    initial: "H",
  },
  {
    name: "ናርዶስ",
    text: "የምግብ እቅድ ኪሎ አና ጡንቻ እንድጀምር ረድቷኛል አመሰግናለሁ",
    initial: "N",
  },
  {
    name: "አዲስ",
    text: "ለ ባለቤቴ ነበር የ ወሰድኩት በጣም አሪፍ ነበር የእያንድ ምግብና አሰራር ልኬት ጥሩ ስለነበር ጨጓራውን ምያመው ነገር እራሱ ጠፍቷል።",
    initial: "A",
  },
  {
    name: "ነጃት",
    text: "መጠቀም ጀምሬያለሁ በ ሁለት ሳምት ውስጥ 4 ኪሎ ቀንሻለሁ",
    initial: "N",
  },
  {
    name: "ናትናኤል",
    text: "እየተጠቀምኩበት ነው በዚህ ሳምንት ነው የ ጀመርኩት 2ኪሎ ቀንሻለሁ ስፖርቱንም በደምብ እየሰራው ።",
    initial: "N",
  },
  {
    name: "ጳዉሎስ",
    text: "አዎ ተጠቅሜበት አሪፍ ነው በደንብ ለውጦኛል",
    initial: "P",
  },
  {
    name: "አዜብ",
    text: "ተጠቅሜበታለሁ ለውጥ አምጥቻለሁ thanks sofi",
    initial: "A",
  },
  {
    name: "ሰለሞን",
    text: "አሪፍ ነበር በ 2 ወር እስከ 9 ኪሎ ቀንሻለሁ የ ምግብ ፍላጓቴም አሪፍ ላይ ነው የ ምፈልገውን ምግብ እየተመገብኩ ኪሎ መቀነስ ችያለሁ",
    initial: "S",
  },
  {
    name: "ብሩሃኑ",
    text: "በጣም አሪፍ ነበር ተጠቅሜበታለሁ በ 15 ቀን 5 ኪሎ ቀንሻለሁ እስፖርቱንም ምግቡንም በደንብ እየተጠቀምኩበት ነው ስጀምር 92 ኪሎ ነበርኩ አሁን 86 ኪሎ ሆኛለሁ",
    initial: "B",
  },
];

const marqueeTestimonials = [...testimonials, ...testimonials];

const Transformations = () => (
  <section className="bg-[#FAFAFA] py-16 sm:py-24 overflow-hidden">
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

        <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#111111]">
          Your 12-Week
          <br />
          Breakthrough Starts Here
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-[#6B7280]">
          Real people, real change. Upload your photo to see the maximum
          possible result your body can achieve in 12 weeks.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {transformations.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group overflow-hidden rounded-4xl border border-[#ECECEC] bg-white p-4 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-44 sm:h-56 rounded-3xl bg-[#F4F4F4] overflow-hidden">
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

              <div className="relative h-44 sm:h-56 rounded-3xl bg-[#F4F4F4] overflow-hidden">
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

            <div className="mt-4 sm:mt-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#111111]">{item.name}</h3>
                <p className="text-xs sm:text-sm text-[#3FAE49] font-semibold">{item.result}</p>
              </div>
              <div className="rounded-full bg-[#EAF7EC] px-3 py-1 text-[10px] sm:text-xs font-semibold text-[#3FAE49]">
                12 weeks
              </div>
            </div>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#6B7280] leading-relaxed">“{item.quote}”</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mt-12 sm:mt-16">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3FAE49]">
              Client voices
            </p>
            <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl font-extrabold text-[#111111]">
              Hear it from the people who did it
            </h3>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-[#6B7280]">
            <span className="h-2 w-2 rounded-full bg-[#3FAE49]" />
            Verified client feedback
          </div>
        </div>

        <div className="relative mt-8 sm:mt-10 w-full overflow-hidden py-4 sm:py-5">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: "-50%" }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {marqueeTestimonials.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="bg-white p-4 sm:p-6 rounded-2xl border border-[#ECECEC] shadow-sm hover:shadow-md transition-shadow relative w-[260px] sm:w-[300px] md:w-[350px] shrink-0"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#EAF7EC] flex items-center justify-center text-[#3FAE49] font-bold shrink-0">
                    {client.initial}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-[#111111]">{client.name}</h4>
                    <div className="flex text-[#F6B634] mb-2">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                      “{client.text}”
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Transformations;