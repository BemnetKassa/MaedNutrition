// components/assessment-card.tsx

"use client";

import React, { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Option {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  active?: boolean;
}

interface AssessmentCardProps {
  step: number;
  totalSteps: number;
  title: ReactNode;
  description: string;
  options?: Option[];
  buttonText: string;
  showBack?: boolean;
  onNext?: () => void;
  onBack?: () => void;
  onOptionSelect?: (index: number, option: Option) => void;
  children?: ReactNode;
  canProceed?: boolean;
}

export default function AssessmentCard({
  step,
  totalSteps,
  title,
  description,
  options,
  buttonText,
  showBack,
  onNext,
  onBack,
  onOptionSelect,
  children,
  canProceed,
}: AssessmentCardProps) {
  function handleSelect(index: number) {
    if (!options) return;
    onOptionSelect?.(index, options[index]);
  }

  return (
    <div className="relative flex min-h-[600px] w-full mx-auto max-w-2xl flex-col overflow-visible rounded-3xl md:rounded-4xl border border-[#ECECEC] bg-white p-6 md:p-10 shadow-lg">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black leading-none tracking-tight text-[#3FAE49]">
            MÁED
          </h1>
          <p className="text-[9px] font-bold tracking-[0.25em] text-[#111111]">
            NUTRITION
          </p>
        </div>

        <span className="text-sm md:text-base font-semibold text-[#3FAE49] bg-[#3FAE49]/10 px-3 py-1 rounded-full">
          Step {step} of {totalSteps}
        </span>
      </div>

      {/* Progress */}
      <div className="mt-8 flex gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: i < step ? 1 : 0.9 }}
            transition={{ duration: 0.25, delay: i * 0.03 }}
            style={{ transformOrigin: "left" }}
            className={clsx("h-1.5 flex-1 rounded-full", i < step ? "bg-[#3FAE49]" : "bg-[#E8E8E8]")}
          />
        ))}
      </div>

      {/* Title */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-[#111111]">
          {title}
        </h2>

        <p className="mt-4 md:mt-5 text-lg md:text-xl leading-relaxed text-[#6B7280]">
          {description}
        </p>
      </div>

      {/* Options / Custom content */}
      <div className="mt-8 md:mt-10 flex flex-1 flex-col gap-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            {children ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="w-full">
                {children}
              </motion.div>
            ) : (
              <div className="flex flex-col gap-4">
                {options?.map((option, index) => (
                  <motion.button
                    key={index}
                    type="button"
                    onClick={() => handleSelect(index)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={clsx(
                      "flex sm:items-center justify-between rounded-2xl border p-4 transition-all text-left gap-4",
                      option.active ? "border-[#3FAE49] bg-[#F5FFF6] shadow-sm" : "border-[#ECECEC] bg-white hover:border-gray-200 hover:bg-gray-50"
                    )}
                  >
                    <div className="flex sm:items-center gap-4 flex-col sm:flex-row">
                      {option.icon && (
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ECFAEE] text-[#3FAE49] flex-shrink-0">
                          {option.icon}
                        </div>
                      )}

                      <div>
                        <h3 className="text-lg md:text-xl font-bold leading-tight text-[#111111]">
                          {option.title}
                        </h3>

                        {option.subtitle && (
                          <p className="mt-1 whitespace-pre-line text-sm md:text-base text-[#6B7280]">
                            {option.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <div
                      className={clsx(
                        "flex h-6 w-6 items-center justify-center rounded-full border-2 flex-shrink-0 self-start sm:self-center",
                        option.active ? "border-[#3FAE49]" : "border-[#D8D8D8]"
                      )}
                    >
                      {option.active && <div className="h-2.5 w-2.5 rounded-full bg-[#3FAE49]" />}
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="mt-10 flex items-center gap-4">
        
        {showBack && (
          <motion.button
            type="button"
            onClick={() => onBack?.()}
            whileTap={{ scale: 0.95 }}
            className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-[#ECECEC] bg-white hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-6 w-6 text-[#111111]" />
          </motion.button>
        )}

        <motion.button
          type="button"
          onClick={() => onNext?.()}
          whileTap={{ scale: canProceed ? 0.98 : 1 }}
          disabled={! (canProceed ?? true)}
          className={clsx(
            "flex h-14 flex-1 items-center justify-center gap-2 rounded-xl text-lg font-semibold transition-colors",
            canProceed ? "bg-[#3FAE49] text-white hover:bg-[#36963f] shadow-md" : "bg-[#A7D6A7] text-white/80 pointer-events-none opacity-60"
          )}
        >
          {buttonText}
          <ArrowRight className="h-5 w-5" />
        </motion.button>
      </div>
    </div>
  );
}