"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Navbar } from "../components/Navbar";

const faqs = [
  {
    question: "How does the Sofi Circle Diet subscription work?",
    answer: "You complete a short assessment, then we build a single 90-day plan with weekly targets and check-ins. You follow the plan and review progress at day 30, 60, and 90."
  },
  {
    question: "What is included in the 90-day plan?",
    answer: "A personalized roadmap, weekly targets, and progress reviews so you always know what to focus on next."
  },
  {
    question: "Can I start any time?",
    answer: "Yes. You can enroll whenever you are ready, and your 90-day timeline starts on your chosen start date."
  },
  {
    question: "Do I need to follow a strict menu?",
    answer: "No. The plan focuses on targets and structure rather than a fixed menu, so it can fit your lifestyle."
  },
  {
    question: "How do I track progress during the plan?",
    answer: "You will review your progress weekly and at key milestones on days 30, 60, and 90."
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
