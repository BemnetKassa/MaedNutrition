"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Fill in Personal Details",
    points: ["Your name", "Phone number", "Email address for updates"],
  },
  {
    step: "02",
    title: "Add Physical Details",
    points: ["Current height", "Current weight"],
  },
  {
    step: "03",
    title: "Upload Your Photo",
    points: ["Clear, recent photo", "Shows current condition"],
  },
  {
    step: "04",
    title: "Submit Your Form",
    points: ["Review your entries", "Submit the intake"],
  },
  {
    step: "05",
    title: "Make Payment",
    points: ["Complete payment", "Upload payment screenshot"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function HowItWork() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-b from-brand-light/60 via-background to-background py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-32 right-0 h-72 w-72 bg-brand/10 blur-3xl"
          animate={{ y: [0, 14, 0], opacity: [0.6, 0.85, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 left-0 h-72 w-72 bg-brand/10 blur-3xl"
          animate={{ y: [0, -12, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-brand/25 to-transparent" />
        <div className="absolute inset-y-0 right-6 hidden w-px bg-gradient-to-b from-transparent via-brand/20 to-transparent md:block" />
      </div>

      <div className="relative mx-auto max-w-362.5 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-md bg-brand-light px-4 py-2 text-sm font-semibold tracking-[0.22em] text-brand"
          >
            How It Works
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Your 12-Week
            <br />
            Transformation Starts Here
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-175 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Complete a quick intake, submit your details, and receive a tailored
            12-week preview of your projected results before we begin.
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {steps.map((item) => (
            <motion.div
              key={item.step}
              variants={itemVariants}
              className="group relative flex gap-5 pb-10 sm:gap-7 sm:pb-12 last:pb-0"
            >
              <div className="relative flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/80 text-lg font-bold text-brand shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/70"
                >
                  {item.step}
                </motion.div>
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="mt-4 h-full w-px origin-top bg-gradient-to-b from-brand/30 to-transparent"
                />
              </div>

              <div className="pt-1">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Step</span>
                <h3 className="mt-2 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-brand sm:text-2xl md:text-3xl">
                  {item.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 text-brand transition-colors duration-300 group-hover:text-brand-dark">-&gt;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            className="mt-8 border-t border-border pt-6 text-center"
          >
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Upon submission, you’ll get an overview of what your body can look like
              by following the plan consistently for 12 weeks.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
