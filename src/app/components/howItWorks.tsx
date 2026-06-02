"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];
const easeInOut: [number, number, number, number] = [0.42, 0, 0.58, 1];

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
] as const;

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const pointsVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

const pointVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};

export default function HowItWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-linear-to-b from-muted via-background to-background py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-40 -right-20 h-80 w-80 rounded-full bg-brand/10 blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : { y: [0, 10, 0], opacity: [0.3, 0.55, 0.3] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 11, repeat: Infinity, ease: easeInOut }
          }
        />
        <motion.div
          className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-amber-400/12 blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -8, 0], opacity: [0.25, 0.5, 0.25] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 12, repeat: Infinity, ease: easeInOut }
          }
        />
        <div className="absolute inset-x-0 top-24 h-px bg-linear-to-r from-transparent via-brand/20 to-transparent" />
        <div className="absolute inset-x-0 top-28 h-px bg-linear-to-r from-transparent via-amber-400/25 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-362.5 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            <span className="bg-linear-to-r from-brand via-brand to-amber-400 bg-clip-text text-transparent">
              How it works
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Follow these simple steps to submit your intake and preview your 12-week transformation.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <motion.header
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="text-center lg:col-span-5 lg:sticky lg:top-24 lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="inline-flex items-center rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-semibold tracking-[0.26em] text-brand shadow-sm backdrop-blur"
            >
              <span
                aria-hidden="true"
                className="mr-2 inline-flex h-2 w-2 rounded-full bg-amber-400 shadow-sm"
              />
              IN 5 STEPS
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl"
            >
              Your 12-Week
              <br />
              Transformation Starts Here
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
            >
              Complete a quick intake, submit your details, and receive a tailored
              12-week preview of your projected results before we begin.
            </motion.p>
          </motion.header>

          <motion.div
            className="lg:col-span-7"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.9, ease: easeOut }}
                className="absolute left-5.75 top-2 hidden h-[calc(100%-0.5rem)] w-px origin-top bg-linear-to-b from-brand/25 via-brand/15 to-transparent sm:block"
              />

              <ol className="space-y-10 sm:space-y-12">
                {steps.map((item, index) => (
                  <motion.li
                    key={item.step}
                    variants={stepVariants}
                    className="group relative before:absolute before:-inset-x-3 before:-inset-y-2 before:rounded-2xl before:bg-linear-to-r before:from-brand/8 before:via-brand/4 before:to-amber-400/10 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
                  >
                    <div className="relative flex gap-5 sm:gap-7">
                      <div className="relative flex w-12 flex-col items-center">
                        <motion.div
                          whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/80 text-sm font-bold text-brand shadow-sm backdrop-blur supports-backdrop-filter:bg-background/70"
                        >
                          {item.step}
                          <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-amber-400/20 transition-colors duration-300 group-hover:ring-brand/15" />
                        </motion.div>

                        {index !== steps.length - 1 ? (
                          <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true, margin: "-120px" }}
                            transition={{ duration: 0.7, ease: easeOut }}
                            className="mt-4 h-full w-px origin-top bg-linear-to-b from-brand/25 to-transparent sm:hidden"
                          />
                        ) : null}
                      </div>

                      <div className="pt-0.5">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                            Step {item.step}
                          </span>
                          <span className="hidden h-px flex-1 bg-linear-to-r from-border via-border/70 to-transparent sm:block" />
                        </div>

                        <h3 className="mt-2 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-brand sm:text-2xl md:text-3xl">
                          <span className="underline decoration-transparent decoration-2 underline-offset-8 transition-colors duration-300 group-hover:decoration-amber-400">
                            {item.title}
                          </span>
                        </h3>

                        <motion.ul
                          variants={pointsVariants}
                          className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base"
                        >
                          {item.points.map((point) => (
                            <motion.li
                              key={point}
                              variants={pointVariants}
                              className="flex items-start gap-2"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-1 text-amber-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-brand-dark"
                              >
                                →
                              </span>
                              <span>{point}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>

            <motion.div
              variants={stepVariants}
              className="mt-10 border-t border-border pt-6 text-center"
            >
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Upon submission you will get an overview of what your body will look
                like if you follow along with the plan for 12 weeks.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
