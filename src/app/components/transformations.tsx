"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

const transformations = [
  {
    name: "Transformation 01",
    result: "12-week visible change",
    quote: "Focused weekly targets created steady, visible change.",
    after: "/pictures/transformation/photo_9_2026-05-26_16-25-48.jpg",
    before: "/pictures/transformation/photo_10_2026-05-26_16-25-48.jpg",
  },
  {
    name: "Transformation 02",
    result: "12-week visible change",
    quote: "Consistency and structure made the result feel achievable.",
    before: "/pictures/transformation/photo_11_2026-05-26_16-25-48.jpg",
    after: "/pictures/transformation/photo_12_2026-05-26_16-25-48.jpg",
  },
  {
    name: "Transformation 03",
    result: "12-week visible change",
    quote: "Small weekly wins added up to a major shift.",
    before: "/pictures/transformation/photo_13_2026-05-26_16-25-48.jpg",
    after: "/pictures/transformation/photo_14_2026-05-26_16-25-48.jpg",
  },
  {
    name: "Transformation 04",
    result: "12-week visible change",
    quote: "Clear milestones kept me locked in every week.",
    after: "/pictures/transformation/photo_15_2026-05-26_16-25-48.jpg",
    before: "/pictures/transformation/photo_16_2026-05-26_16-25-48.jpg",
  },
  {
    name: "Transformation 05",
    result: "12-week visible change",
    quote: "The plan felt simple, and the results followed.",
    after: "/pictures/transformation/photo_17_2026-05-26_16-25-48.jpg",
    before: "/pictures/transformation/photo_18_2026-05-26_16-25-48.jpg",
  },
  {
    name: "Transformation 06",
    result: "12-week visible change",
    quote: "Weekly check-ins kept the momentum steady.",
    after: "/pictures/transformation/photo_19_2026-05-26_16-25-48.jpg",
    before: "/pictures/transformation/photo_20_2026-05-26_16-25-48.jpg",
  },
  {
    name: "Transformation 07",
    result: "12-week visible change",
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

const Transformations = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTransformations = showAll ? transformations : transformations.slice(0, 3);

  return (
    <section className="bg-[#fff8ee] py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-362.5 px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-280"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14110d]/20 bg-white/60 backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 text-[#16784a] fill-[#16784a]/20" />
            <span className="text-[11px] font-black uppercase tracking-wider text-[#0c4d32]">
              Real proof early
            </span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-[#14110d]">
            Before/after proof belongs near the top <span className="text-[#16784a]">because fitness is trust-heavy.</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-[#47413a]">
            Use transformation photos with context, consent, and realistic disclaimers. 
            The coach photo can build credibility later; it should not replace outcome proof in the hero.
          </p>
        </motion.div>

        {/* Cards - 3 columns always */}
        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTransformations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-lg border border-[#e2d8ca] bg-white p-3 sm:p-4 transition-all hover:-translate-y-1 shadow-[0_12px_38px_rgba(26,19,10,0.06)] hover:shadow-[0_22px_70px_rgba(26,19,10,0.14)]"
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="relative aspect-[3/4] rounded-md bg-[#f3eadc] overflow-hidden">
                  <Image
                    src={item.before}
                    alt={`${item.name} before`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-black text-[#14110d]">
                    Before
                  </span>
                </div>

                <div className="relative aspect-[3/4] rounded-md bg-[#f3eadc] overflow-hidden">
                  <Image
                    src={item.after}
                    alt={`${item.name} after`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-[#16784a]/90 px-2 py-0.5 text-[10px] font-black text-white">
                    After
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <h3 className="text-base sm:text-lg font-black text-[#14110d]">{item.name}</h3>
                <p className="text-[11px] sm:text-xs text-[#6b6257] font-semibold">{item.result}</p>
              </div>

              <p className="mt-2 text-xs sm:text-sm text-[#6b6257] leading-relaxed">“{item.quote}”</p>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        {!showAll && transformations.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-[#e2d8ca] text-[#14110d] font-black text-sm hover:bg-[#f3eadc] transition-all shadow-[0_12px_38px_rgba(26,19,10,0.06)] hover:shadow-[0_22px_70px_rgba(26,19,10,0.1)]"
            >
              See More Transformations
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Testimonials section */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14110d]/20 bg-white/60 backdrop-blur-sm mb-3">
                <Star className="w-3.5 h-3.5 text-[#16784a]" />
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0c4d32]">
                  Client voices
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#14110d]">
                Hear it from the people who did it
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs text-[#6b6257]">
              <span className="h-2 w-2 rounded-full bg-[#16784a]" />
              Verified client feedback
            </div>
          </div>

          <div className="relative mt-8 sm:mt-10 w-full overflow-hidden py-4 sm:py-5">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fff8ee] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fff8ee] to-transparent z-10" />

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
                  className="bg-black p-4 sm:p-5 rounded-lg border border-[#e2d8ca] shadow-[0_12px_38px_rgba(26,19,10,0.06)] hover:shadow-md transition-shadow relative w-[260px] sm:w-[300px] md:w-[350px] shrink-0"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f3eadc] flex items-center justify-center text-[#16784a] font-black shrink-0">
                      {client.initial}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-[#14110d] text-sm mb-1">{client.name}</h4>
                      <div className="flex text-[#d89a2b] mb-2">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-[#b1a08c] leading-relaxed line-clamp-3">
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
};

export default Transformations;