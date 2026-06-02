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
    <section
      id="how-it-works"
      className="relative overflow-hidden py-16 sm:py-10 md:py-15"
    >
      {/* Background Effects (lighter on mobile) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-green-500/20 blur-[120px] sm:blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-yellow-400/20 blur-[120px] sm:blur-[140px]" />

        {/* Floating blobs hidden on small screens */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="hidden sm:block absolute top-20 right-20 h-40 w-40 rounded-full bg-green-500/10 blur-3xl"
        />

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="hidden sm:block absolute bottom-20 left-20 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs sm:text-sm font-medium text-green-500">
            <Sparkles className="h-4 w-4" />
            SIMPLE 5 STEP PROCESS
          </div>

          <h2 className="mt-6 text-3xl sm:text-5xl md:text-7xl font-black leading-tight">
            Your Transformation
            <span className="block bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent">
              Starts Today
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-lg md:text-xl text-muted-foreground">
            Complete a quick intake form and discover what your body could look
            like after 12 weeks of following your personalized nutrition plan.
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl"
        >
          {[
            { label: "Weeks", value: "12", color: "green" },
            { label: "Steps", value: "5", color: "yellow" },
            { label: "Personalized", value: "100%", color: "green" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl sm:rounded-3xl border bg-background/50 p-4 sm:p-6 text-center backdrop-blur-xl"
            >
              <h3
                className={`text-2xl sm:text-4xl font-black ${
                  item.color === "green" ? "text-green-500" : "text-yellow-500"
                }`}
              >
                {item.value}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* TIMELINE */}
        <div className="relative mx-auto mt-16 sm:mt-24 max-w-5xl">
          {/* Center line */}
          <div className="absolute left-6 sm:left-8 top-0 hidden h-full w-1 bg-gradient-to-b from-green-500 via-yellow-400 to-green-500 lg:block" />

          <div className="space-y-6 sm:space-y-8">
            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex gap-4 sm:gap-6">
                    {/* ICON */}
                    <div className="hidden lg:flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-yellow-400 shadow-lg">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>

                    {/* CARD */}
                    <div className="relative flex-1 overflow-hidden rounded-2xl sm:rounded-[32px] border bg-background/60 p-5 sm:p-8 backdrop-blur-xl">
                      {/* glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-yellow-400/5" />

                      {/* step number (hidden on mobile) */}
                      <div className="hidden sm:block absolute -right-2 -top-2 text-6xl sm:text-8xl font-black text-green-500/5">
                        {item.step}
                      </div>

                      <div className="relative">
                        <span className="inline-flex text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                          STEP {item.step}
                        </span>

                        <h3 className="mt-3 sm:mt-4 text-lg sm:text-2xl font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                          {item.description}
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-green-500 text-sm">
                          Continue Journey
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 sm:mt-24 max-w-4xl text-center"
        >
          <div className="rounded-3xl bg-gradient-to-r from-green-500 to-yellow-400 p-[1px]">
            <div className="rounded-2xl bg-background p-6 sm:p-10">
              <Sparkles className="mx-auto h-10 w-10 text-green-500" />

              <h3 className="mt-4 text-2xl sm:text-4xl font-black">
                Your Future Body Starts Here
              </h3>

              <p className="mt-4 text-sm sm:text-lg text-muted-foreground">
                Submit your details and unlock your personalized 12-week transformation plan.
              </p>

              <button
                onClick={() => router.push("/assessment")}
                className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-900 to-green-700 px-6 sm:px-8 py-3 sm:py-4 font-bold text-white transition hover:scale-105"
              >
                Start My Transformation
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}