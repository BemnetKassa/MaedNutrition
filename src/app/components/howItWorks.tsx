"use client";

import { motion } from "framer-motion";
import {
  User,
  Weight,
  Camera,
  ClipboardCheck,
  CreditCard,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

const steps = [
  {
    step: "01",
    icon: User,
    title: "Fill in Personal Details",
    description:
      "Provide your name, email, and contact information so we can personalize your transformation journey.",
  },
  {
    step: "02",
    icon: Weight,
    title: "Add Physical Details",
    description:
      "Enter your height, weight, and current body information for accurate planning.",
  },
  {
    step: "03",
    icon: Camera,
    title: "Upload Your Photo",
    description:
      "Upload a clear photo so we can create a realistic 12-week transformation preview.",
  },
  {
    step: "04",
    icon: ClipboardCheck,
    title: "Submit Your Form",
    description:
      "Review your information and submit your transformation request.",
  },
  {
    step: "05",
    icon: CreditCard,
    title: "Complete Payment",
    description:
      "Secure your personalized nutrition and transformation plan with payment.",
  },
];

export default function HowItWork() {
  const router = useRouter();

  return (
    <section className="relative bg-[#fff8ee] py-8 sm:py-14 md:py-18 overflow-hidden">
      {/* Simple background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff8ee] via-[#f3eadc] to-[#fff8ee] opacity-50" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14110d]/20 bg-white/60 backdrop-blur-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#16784a]" />
            <span className="text-[11px] font-black uppercase tracking-wider text-[#0c4d32]">
              How It Works
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#14110d]">
            Your Transformation Journey
            <span className="block text-[#16784a] mt-1">in 5 Simple Steps</span>
          </h2>

          <p className="mt-4 text-base text-[#6b6257]">
            From sign-up to transformation — here's your clear path forward
          </p>
        </motion.div>

        {/* Stats Bar - horizontal compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-2 sm:gap-4 mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded-full border border-[#e2d8ca]">
            <div className="text-center px-2 sm:px-4">
              <span className="text-xl sm:text-3xl font-black text-[#16784a]">12</span>
              <p className="text-[10px] sm:text-xs text-[#6b6257] font-semibold">Weeks</p>
            </div>
            <div className="w-px h-6 sm:h-8 bg-[#e2d8ca]" />
            <div className="text-center px-2 sm:px-4">
              <span className="text-xl sm:text-3xl font-black text-[#d89a2b]">5</span>
              <p className="text-[10px] sm:text-xs text-[#6b6257] font-semibold">Steps</p>
            </div>
            <div className="w-px h-6 sm:h-8 bg-[#e2d8ca]" />
            <div className="text-center px-2 sm:px-4">
              <span className="text-xl sm:text-3xl font-black text-[#16784a]">100%</span>
              <p className="text-[10px] sm:text-xs text-[#6b6257] font-semibold">Personalized</p>
            </div>
          </div>
        </motion.div>

        {/* Steps Grid - 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-lg border border-[#e2d8ca] p-5 sm:p-6 shadow-[0_12px_38px_rgba(26,19,10,0.04)] hover:shadow-[0_22px_70px_rgba(26,19,10,0.08)] transition-all duration-300 hover:-translate-y-1">
                  {/* Step number badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#16784a] flex items-center justify-center shadow-md">
                    <span className="text-white text-sm font-black">{item.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[#16784a]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#16784a]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-black text-[#14110d] mb-2 pr-8">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#6b6257] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Optional connector line between cards */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2">
                      <ArrowRight className="w-5 h-5 text-[#e2d8ca]" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#16784a] to-[#0c4d32] rounded-lg p-8 sm:p-10 text-white">
            <CheckCircle className="w-12 h-12 mx-auto mb-4 text-white/80" />
            
            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              Ready to Start Your Transformation?
            </h3>
            
            <p className="text-white/80 text-sm sm:text-base max-w-md mx-auto mb-6">
              Join hundreds of others who've transformed their bodies and lives with our proven system
            </p>
            
            <button
              onClick={() => router.push("/assessment")}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white text-[#16784a] font-black hover:bg-[#f3eadc] transition-all hover:scale-[1.02] shadow-lg"
            >
              Start My Transformation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}