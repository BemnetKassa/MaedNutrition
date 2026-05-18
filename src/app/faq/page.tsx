"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Navbar } from "../components/Navbar";

const faqs = [
  {
    question: "How does the MAED Nutrition subscription work?",
    answer: "You choose your meal plan size (4, 6, 8, or 10 meals per week), select your meals from our weekly rotating menu, and we deliver them fresh to your door. You can pause, skip a week, or cancel anytime from your account settings."
  },
  {
    question: "Are the meals frozen?",
    answer: "No! All our meals are delivered fresh and chilled, never frozen. We prepare them just hours before delivery to ensure maximum flavor, texture, and nutritional value."
  },
  {
    question: "How long do the meals last in the fridge?",
    answer: "Our meals are designed to stay fresh for 5-7 days in the refrigerator. Each meal comes with a specific enjoy-by date clearly marked on its label."
  },
  {
    question: "Do you cater to specific dietary requirements?",
    answer: "Yes, we offer a variety of options including high-protein, low-carb, vegetarian, and dairy-free meals. You can easily filter the menu each week based on your unique nutritional preferences and goals."
  },
  {
    question: "How do I heat up the meals?",
    answer: "Our meals are microwave-ready. Simply crack the corner of the lid and heat for 2-3 minutes depending on your microwave wattage. You can also transfer the food to an oven-safe dish and heat at 350°F for 10-15 minutes."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-[#3FAE49]/10 py-1 px-3 rounded-full mb-4">
            <span className="text-[#3FAE49] font-semibold text-sm">FAQ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">Got questions? We've got answers to help you get started.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-[#111111] text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-[#3FAE49] transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
